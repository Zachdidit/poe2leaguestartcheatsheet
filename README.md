# PoE 2 League Start Cheatsheet

A second-monitor Path of Exile 2 league-start reference — a 5-slide deck (Acts 1–4 +
Interludes) with keyboard navigation (← → / PgUp PgDn / Space / Home End / number keys;
press **R** to reset) and a tag filter bar.

## View it live

Published with GitHub Pages — no download required:

**https://zachdidit.github.io/poe2leaguestartcheatsheet/**

It also runs by just **double-clicking `index.html`** locally (no server needed).

## Everything is data — how to edit

There is **no build step and no framework**. The page is rendered at load time from plain
data objects, so a non-coder can change what's on screen by editing two kinds of file:

### 1. Content → `data/act*.js`  (one file per act)

Each file pushes one act onto `window.POE_ACTS`. To change a zone or reward, find it and edit
the text. A reward looks like:

```js
{ type: 'mechanic', tags: ['currency'], name: "Greater Jeweller's Orb",
  how: 'reported Abyss drop (unconfirmed)', abyss: true }
```

- **`type`** — role / where it drops: `permanent` · `mechanic` · `secret` · `boss`.
  `permanent` always gets the gold star and marks the zone "must-visit".
- **`tags`** — what the item *is*; the first tag sets its icon + color. Valid tags are listed
  in `theme.js` (e.g. `currency`, `socketable`, `skill-gem`, `gear`, `jewel`, …). The special
  `unique` tag **bold-highlights** a notable drop and marks the zone must-visit.
- **`how`** — the muted "how to get it" text. `chip`, `rarity` (`magic`/`rare`), and
  `abyss: true` are optional.

Each act file has a comment header documenting the full shape.

### 2. Design language → `theme.js`  (colors, icons, labels — defined ONCE)

This is the single source of truth for how things look. Change a value here and **every**
matching element updates. For example, changing `rewardTypes.permanent.color` recolors every
permanent-upgrade star, chip, and its legend entry at once — you never edit them individually.
It also defines the per-tag colors/icons, rarity colors, zone badges, and shared UI neutrals.
The legend and filter bar are generated from this file, so they always match the data.

Icons referenced by `theme.js` live in `icons.js` (inline SVGs).

## Repository layout

```
index.html        thin loader (links CSS, loads the scripts below in order)
styles.css        layout/structure only — no per-category colors
theme.js          the design language (colors / icons / labels)  ← edit to restyle
icons.js          the SVG icon set
data/act*.js      the content, one file per act                  ← edit to change content
render.js         builds the page from theme + data (no edits needed)
deck-stage.js     slide navigation web component (vendored, no edits needed)
.nojekyll         lets GitHub Pages serve the data/ subdir as-is
```

## Editing workflow

Edit a `data/act*.js` or `theme.js` file, double-click `index.html` to preview locally, then
push to `main`. GitHub Pages redeploys automatically.
