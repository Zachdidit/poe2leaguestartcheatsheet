/* =============================================================================
 *  render.js  —  builds the page from the data + theme. (No editing needed here
 *  for content/colors — change data/act*.js and theme.js instead.)
 * =============================================================================
 *
 *  Reads window.POE_ACTS, window.POE_THEME, window.POE_ICONS and renders one
 *  <section> per act inside <deck-stage>. Also builds the legend and the tag
 *  filter bar from the theme, so they always match the data.
 * ========================================================================== */
(function () {
  'use strict';

  var ACTS = window.POE_ACTS || [];
  var T = window.POE_THEME;
  var ICONS = window.POE_ICONS;

  // ---- helpers ----------------------------------------------------------
  function el(tag, attrs, html) {
    var e = document.createElement(tag);
    if (attrs) for (var k in attrs) {
      if (k === 'style') e.setAttribute('style', attrs[k]);
      else if (k === 'class') e.className = attrs[k];
      else if (k.slice(0, 5) === 'data-' || k === 'title') e.setAttribute(k, attrs[k]);
      else e[k] = attrs[k];
    }
    if (html != null) e.innerHTML = html;
    return e;
  }
  function icon(name) { return (ICONS[name] || '') ; }
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  function formatLv(lv) { return String(lv).replace('.5', '½'); }

  // ---- reward presentation resolution (the one documented rule) ----------
  // 1) first tag in tags[] that exists in theme.tags (and is not a modifier)
  //    decides icon+color; else fall back to rewardTypes[type].
  // 2) boss & permanent types always use their own type icon/color.
  // 3) 'unique' (modifier tag) bolds + recolors the name, marks must-visit.
  // 4) rarity recolors the name.
  function resolveReward(r) {
    var type = T.rewardTypes[r.type] || T.rewardTypes.mechanic;
    var tags = r.tags || [];
    var shapeTag = null, isUnique = false, primaryCategory = null;

    for (var i = 0; i < tags.length; i++) {
      var def = T.tags[tags[i]];
      if (!def) continue;
      if (def.modifier) { if (tags[i] === 'unique') isUnique = true; continue; }
      if (!shapeTag) { shapeTag = def; primaryCategory = tags[i]; }
    }

    var useType = (r.type === 'boss' || r.type === 'permanent');
    var iconKey = useType ? type.icon : (shapeTag ? shapeTag.icon : type.icon);
    var color   = useType ? type.color : (shapeTag ? shapeTag.color : type.color);

    // name color: rarity > unique > default ink
    var nameColor = T.ui.ink;
    var bold = false;
    if (isUnique) { nameColor = T.tags.unique.color; bold = true; }
    if (r.rarity && T.rarity[r.rarity]) nameColor = T.rarity[r.rarity];

    return { iconKey: iconKey, color: color, nameColor: nameColor, bold: bold,
             isUnique: isUnique, type: r.type, category: primaryCategory };
  }

  function rewardCategories(r) {
    // for filtering: type + every known tag (so 'permanent' & 'currency' etc. filter)
    var cats = [r.type];
    (r.tags || []).forEach(function (t) { if (T.tags[t]) cats.push(t); });
    return cats;
  }

  // ---- pieces -----------------------------------------------------------
  function header(act) {
    var f = act.damageFocus;
    return '' +
      '<div class="poster-header" style="border-top:4px solid ' + act.accent + '">' +
        '<h1 class="poster-title">' + esc(act.title) + '</h1>' +
        '<div class="damage-focus" style="background:' + f.tint + ';color:' + f.color + '">' +
          '<span class="df-icon">' + icon('shield') + '</span>' +
          '<div><div class="df-kicker">Resist focus</div>' +
          '<div class="df-label">' + esc(f.label) + '</div></div>' +
        '</div>' +
      '</div>';
  }

  function totals(act) {
    var cells = act.totals.map(function (t) {
      return '<div class="total"><div class="total-value">' + esc(t.value) + '</div>' +
             '<div class="total-label">' + esc(t.label) + '</div></div>';
    }).join('');
    return '<div class="totals" style="grid-template-columns:repeat(' + act.totals.length + ',1fr)">' + cells + '</div>';
  }

  // EXP threshold math — ported verbatim from the original (pure).
  function thresholdSegments(startLv, endLv) {
    var startInt = Math.floor(startLv), endInt = Math.ceil(endLv);
    var breakpoints = [16, 32, 48, 64, 80, 96];
    var segs = [], lo = startInt;
    while (lo <= endInt) {
      var t = 3 + Math.floor(lo / 16);
      var nextBp = breakpoints.find(function (bp) { return bp > lo; });
      var hi = (nextBp && nextBp - 1 < endInt) ? nextBp - 1 : endInt;
      segs.push({ below: t, lo: lo, hi: hi });
      if (!nextBp || nextBp > endInt) break;
      lo = nextBp;
    }
    return segs;
  }

  function expBanner(act) {
    if (!act.exp) return '';
    var s = act.exp, segs = thresholdSegments(s.startLevel, s.endLevel), end = Math.ceil(s.endLevel);
    var chips = segs.map(function (seg, i) {
      var last = i === segs.length - 1;
      var range = seg.lo === seg.hi ? ('Lv ' + formatLv(seg.lo))
        : (last && seg.hi === end ? ('Lv ' + formatLv(seg.lo) + '+')
        : ('Lv ' + formatLv(seg.lo) + '–' + formatLv(seg.hi)));
      var chip = '<div class="exp-chip">' +
        '<span class="exp-range">' + range + '</span>' +
        '<span class="exp-within">stay within</span>' +
        '<span class="exp-below-n">' + seg.below + '</span>' +
        '<span class="exp-below">below</span></div>';
      if (!last) chip += '<span class="exp-arrow" title="threshold bumps up here">↗</span>';
      return chip;
    }).join('');
    var note = s.note ? '<div class="exp-note"><span>ⓘ</span><span>' + esc(s.note) + '</span></div>' : '';
    return '<div class="exp-banner">' +
      '<div class="exp-head"><span class="exp-head-icon">' + icon('bolt') + '</span>' +
      '<span class="exp-head-label">EXP threshold</span></div>' +
      '<div class="exp-chips">' + chips + '</div>' + note + '</div>';
  }

  function rewardRow(r) {
    var v = resolveReward(r);
    var isPermanent = r.type === 'permanent';
    var isBoss = r.type === 'boss';
    var chipText = isPermanent ? r.name : (isBoss && r.chip ? r.chip : null);
    var cats = rewardCategories(r).map(function (c) { return c; }).join(' ');

    var html = '<span class="rr-icon" style="color:' + v.color + '">' + icon(v.iconKey) + '</span>';
    html += '<div class="rr-body">';
    if (chipText) html += '<span class="rr-chip">' + esc(chipText) + '</span>';
    if (!isPermanent) {
      var st = 'color:' + v.nameColor + (v.bold ? ';font-weight:700' : '');
      html += '<span class="rr-name" style="' + st + '">' + esc(r.name) + '</span>';
    }
    html += '<span class="rr-how"> — ' + esc(r.how) + '</span>';
    html += '</div>';
    return '<div class="reward-row" data-cats="' + cats + '">' + html + '</div>';
  }

  function zone(z) {
    var order = { permanent: 0, mechanic: 1, secret: 2, boss: 3 };
    var rewards = (z.rewards || []).slice().sort(function (a, b) {
      return (order[a.type] || 9) - (order[b.type] || 9);
    });
    var hasAbyss = (z.rewards || []).some(function (r) { return r.abyss; });
    var mustVisit = (z.rewards || []).some(function (r) {
      if (r.type === 'permanent') return true;
      if (r.type === 'boss' && r.chip) return true;
      return (r.tags || []).some(function (t) {
        return T.tags[t] && T.tags[t].marksMustVisit;
      });
    });

    var b = T.badges;
    var badges = '';
    if (z.recLevel !== undefined) {
      badges += '<span class="z-badge z-lv" title="Recommended character level on entry">' +
        '<span class="z-lv-k">Lv</span><span>' + formatLv(z.recLevel) + '</span></span>';
    }
    if (z.farmZone) {
      badges += '<span class="z-badge z-pill" title="' + esc(b.farm.tip) + '" ' +
        'style="background:' + b.farm.bg + ';color:' + b.farm.fg + '">' +
        '<span class="z-pill-i">' + icon(b.farm.icon) + '</span>' + esc(b.farm.label) + '</span>';
    }
    if (mustVisit) {
      badges += '<span class="z-badge z-square" title="' + esc(b.mustVisit.tip) + '" ' +
        'style="background:' + b.mustVisit.bg + ';color:' + b.mustVisit.fg + '">' + icon(b.mustVisit.icon) + '</span>';
    }
    if (hasAbyss) {
      badges += '<span class="z-badge z-square" title="' + esc(b.abyss.label) + '" ' +
        'style="background:' + b.abyss.bg + ';color:' + b.abyss.fg + '">' + icon(b.abyss.icon) + '</span>';
    }

    var nColor = mustVisit ? T.tags.unique.color : '#C9C9CE';
    var rows = rewards.map(rewardRow).join('');
    return '<div class="zone">' +
      '<div class="zone-n" style="color:' + nColor + '">' + z.n + '</div>' +
      '<div class="zone-body">' +
        '<div class="zone-head"><span class="zone-name">' + esc(z.name) + '</span>' + badges + '</div>' +
        '<div class="zone-rewards">' + rows + '</div>' +
      '</div></div>';
  }

  function segmentHeader(seg) {
    return '<div class="segment"><span class="segment-title">' + esc(seg.title) + '</span>' +
      (seg.zoneRange ? '<span class="segment-range">' + esc(seg.zoneRange) + '</span>' : '') + '</div>';
  }

  // Key for the zone badges (Farm / must-visit / abyss) — reuses the exact
  // badge markup from zone() so it matches what's shown in the grid.
  function badgeKey() {
    var b = T.badges;
    function item(badge, text) {
      return '<span class="bk-item">' + badge +
        '<span class="bk-text">' + esc(text) + '</span></span>';
    }
    var farm = '<span class="z-badge z-pill" style="background:' + b.farm.bg + ';color:' + b.farm.fg + '">' +
      '<span class="z-pill-i">' + icon(b.farm.icon) + '</span>' + esc(b.farm.label) + '</span>';
    var must = '<span class="z-badge z-square" style="background:' + b.mustVisit.bg + ';color:' + b.mustVisit.fg + '">' +
      icon(b.mustVisit.icon) + '</span>';
    var abyss = '<span class="z-badge z-square" style="background:' + b.abyss.bg + ';color:' + b.abyss.fg + '">' +
      icon(b.abyss.icon) + '</span>';
    return '<div class="badge-key">' +
      '<span class="bk-label">Symbols</span>' +
      item(farm, b.farm.tip) +
      item(must, b.mustVisit.tip) +
      item(abyss, b.abyss.tip) +
    '</div>';
  }

  // sequential weighted 3-column split (ported), segment-aware
  function splitSequential(items, n) {
    var weights = items.map(function (z) {
      if (z.segmentStart !== undefined) return 1.2;
      return 1.4 + (z.rewards ? z.rewards.length : 0);
    });
    var total = weights.reduce(function (a, b) { return a + b; }, 0);
    var target = total / n;
    var cols = []; for (var k = 0; k < n; k++) cols.push([]);
    var ci = 0, acc = 0;
    for (var i = 0; i < items.length; i++) {
      cols[ci].push(items[i]);
      acc += weights[i];
      if (acc >= target * (ci + 1) && ci < n - 1) ci++;
    }
    return cols;
  }

  function actSection(act, idx, total) {
    // interleave segment dividers (interludes) with zones in document order
    var items = act.zones;
    var segs = act.segments || [];
    var cols = splitSequential(items, 3);
    var colHtml = cols.map(function (col) {
      return '<div class="col">' + col.map(function (z) {
        if (z.segmentStart !== undefined) {
          var s = segs[z.segmentStart];
          return s ? segmentHeader(s) : '';
        }
        return zone(z);
      }).join('') + '</div>';
    }).join('');

    return '<div class="poster" style="--accent:' + act.accent + '">' +
      header(act) + badgeKey() + expBanner(act) +
      '<div class="poster-grid">' + colHtml + '</div>' +
      footer(act, idx, total) +
    '</div>';
  }

  function footer(act, idx, total) {
    return '<div class="poster-footer">' +
      '<span>POE2 league start · zone-by-zone reference</span>' +
      '<span>Act ' + (idx + 1) + ' of ' + total + ' · ' + esc(act.title) + '</span></div>';
  }

  // ---- legend + filter bar (generated from theme) -----------------------
  function legendAndFilter() {
    // collect entries: reward types + filterable tags, in a sensible order
    var entries = [];
    ['permanent', 'mechanic', 'secret', 'boss'].forEach(function (k) {
      var d = T.rewardTypes[k];
      entries.push({ key: 'type:' + k, color: d.color, iconKey: d.icon, label: d.label, cat: k });
    });
    Object.keys(T.tags).forEach(function (k) {
      var d = T.tags[k];
      if (!d.filter) return;
      entries.push({ key: 'tag:' + k, color: d.color, iconKey: d.icon || 'chest',
                     label: d.label, cat: k, modifier: d.modifier });
    });

    var chips = entries.map(function (e) {
      return '<button class="filter-chip" data-cat="' + e.cat + '">' +
        '<span class="fc-icon" style="color:' + e.color + '">' + icon(e.iconKey) + '</span>' +
        '<span>' + esc(e.label) + '</span></button>';
    }).join('');

    return '<div class="legendbar">' +
      '<span class="legendbar-label">Hide</span>' +
      chips + '</div>';
  }

  function wireFilter(root) {
    var bar = root.querySelector('.legendbar');
    if (!bar) return;
    // Inverse "hide bar": each chip is an independent toggle. A category whose
    // chip is active is HIDDEN (display:none). Nothing hidden by default.
    function apply() {
      var hidden = {};
      bar.querySelectorAll('.filter-chip.is-active').forEach(function (b) {
        hidden[b.getAttribute('data-cat')] = true;
      });
      document.querySelectorAll('.reward-row').forEach(function (r) {
        var cats = (r.getAttribute('data-cats') || '').split(' ');
        var hide = cats.some(function (c) { return hidden[c]; });
        r.classList.toggle('hide', hide);
      });
    }
    bar.addEventListener('click', function (ev) {
      var btn = ev.target.closest ? ev.target.closest('.filter-chip') : null;
      if (!btn) return;
      btn.classList.toggle('is-active');
      apply();
    });
  }

  // ---- act list (right sidebar nav) -------------------------------------
  function navList() {
    var items = ACTS.map(function (act, i) {
      return '<button class="nav-item" type="button" data-goto="' + i + '">' +
        '<span class="nav-n">' + (i + 1) + '</span>' +
        '<span class="nav-label">' + esc(act.title) + '</span></button>';
    }).join('');
    return '<nav class="deck-nav"><div class="deck-nav-head">Acts</div>' + items + '</nav>';
  }

  // ---- scroll-snap navigation -------------------------------------------
  // Each act is a full-viewport panel. The wheel / arrows / nav clicks step
  // one panel at a time with a smooth snap (the popular one-page-site feel);
  // CSS scroll-snap keeps touch + scrollbar drags aligned too.
  // Poster *design* width. Smaller than the viewport ⇒ the whole poster scales
  // up to fill the width, so every step renders bigger. Lower to enlarge more.
  var DESIGN_W = 1440;
  // Tallest natural content across the acts (measured at DESIGN_W) — the poster
  // must stay at least this tall or the densest act would clip. Small buffer.
  var MIN_CONTENT_H = 1010;

  function initScroll(deck, slides, navItems) {
    var current = 0, locked = false, lockTimer = null;

    function fit() {
      // Fill the deck area edge-to-edge — no letterboxing. Scale to the
      // available WIDTH (against DESIGN_W, so content is large), then set the
      // poster's *design* height to availH/scale so its scaled box is exactly
      // the deck box: zero black on any normal screen. The step grid is flex:1,
      // so surplus height becomes white space inside the card, not black bars.
      var availW = deck.clientWidth, availH = deck.clientHeight;
      var scale = availW / DESIGN_W;
      var posterH = availH / scale;
      // Only when the area is so wide/short that filling would clip the content
      // (posterH < what the densest act needs) do we fit-to-height instead,
      // which letterboxes the sides — content integrity wins there.
      if (posterH < MIN_CONTENT_H) {
        posterH = MIN_CONTENT_H;
        scale = availH / posterH;
      }
      deck.style.setProperty('--deck-scale', scale);
      deck.style.setProperty('--poster-w', DESIGN_W + 'px');
      deck.style.setProperty('--poster-h', posterH + 'px');
    }

    function setActive(i) {
      navItems.forEach(function (b, j) { b.classList.toggle('is-current', j === i); });
    }

    function go(i) {
      i = Math.max(0, Math.min(slides.length - 1, i));
      if (i === current) return;
      current = i;
      locked = true;
      slides[i].scrollIntoView({ behavior: 'smooth' });
      setActive(i);
      clearTimeout(lockTimer);
      lockTimer = setTimeout(function () { locked = false; }, 700);
    }

    // Discrete one-panel-per-gesture wheel handling (fullPage-style).
    deck.addEventListener('wheel', function (e) {
      e.preventDefault();
      if (locked || Math.abs(e.deltaY) < 4) return;
      go(current + (e.deltaY > 0 ? 1 : -1));
    }, { passive: false });

    // Keyboard nav — ignore while typing in a field.
    window.addEventListener('keydown', function (e) {
      var t = e.target;
      if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      var k = e.key, handled = true;
      if (k === 'ArrowDown' || k === 'PageDown' || k === ' ' || k === 'Spacebar') go(current + 1);
      else if (k === 'ArrowUp' || k === 'PageUp') go(current - 1);
      else if (k === 'Home') go(0);
      else if (k === 'End') go(slides.length - 1);
      else handled = false;
      if (handled) e.preventDefault();
    });

    // Nav clicks.
    navItems.forEach(function (b, i) {
      b.addEventListener('click', function () { go(i); });
    });

    // Keep `current` + highlight in sync with any scroll source (touch,
    // scrollbar drag, programmatic) — not just the wheel path above.
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting && en.intersectionRatio >= 0.5) {
            current = slides.indexOf(en.target);
            setActive(current);
          }
        });
      }, { root: deck, threshold: [0.5, 0.75] });
      slides.forEach(function (s) { io.observe(s); });
    }

    window.addEventListener('resize', fit);
    fit();
    setActive(0);
  }

  // ---- mount ------------------------------------------------------------
  function mount() {
    var root = document.getElementById('root');
    if (!root) return;

    var deck = el('div', { id: 'deck' });
    var slides = ACTS.map(function (act, i) {
      var slide = el('div', { class: 'slide', 'data-label': act.title });
      slide.innerHTML = actSection(act, i, ACTS.length);
      deck.appendChild(slide);
      return slide;
    });
    root.appendChild(deck);

    // Act list (right rail) + hide legend (left rail).
    var sidebar = el('aside', { id: 'sidebar' }, navList());
    document.body.appendChild(sidebar);
    var legendRail = el('aside', { id: 'legend-rail' }, legendAndFilter());
    document.body.appendChild(legendRail);

    wireFilter(document);
    var navItems = Array.prototype.slice.call(sidebar.querySelectorAll('.nav-item'));
    initScroll(deck, slides, navItems);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();
