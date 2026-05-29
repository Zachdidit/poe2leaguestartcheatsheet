/* =============================================================================
 *  theme.js  —  THE DESIGN LANGUAGE.  window.POE_THEME
 * =============================================================================
 *
 *  This is the single source of truth for how things LOOK. Every color, icon,
 *  and label a reward/badge can show is defined here ONCE. Change a value here
 *  and every matching element on the page updates — e.g. change
 *  rewardTypes.permanent.color and every permanent-upgrade star + chip recolors.
 *
 *  The legend and the filter bar are GENERATED from this object, so they always
 *  match what's on screen.
 *
 *  Icon names (e.g. icon: 'orb') refer to keys in icons.js (window.POE_ICONS).
 *
 *  How a reward's icon + color are chosen (see render.js):
 *    1. the reward's FIRST tag in `tags[]` that exists in `tags` below, OR
 *    2. fall back to `rewardTypes[reward.type]`.
 *    - `boss` and `permanent` types always use their own type icon/color.
 *    - `rarity` (magic/rare) recolors the reward NAME.
 *    - the `unique` tag is a MODIFIER: bold + recolor + marks the zone must-visit.
 * ========================================================================== */

window.POE_THEME = {

  // --- Reward TYPE: role / where it drops. Fallback icon+color, + legend. ---
  rewardTypes: {
    permanent: { color: '#BA7517', icon: 'star',  label: 'Permanent upgrade',
                 isChip: true, marksMustVisit: true },
    mechanic:  { color: '#7A7A82', icon: 'spark', label: 'League mechanic' },
    secret:    { color: '#1D9E75', icon: 'chest', label: 'Secret / optional' },
    boss:      { color: '#D85A30', icon: 'boss',  label: 'Boss' },
  },

  // --- Reward TAGS: what the item IS. First matching tag wins for icon+color. ---
  // `filter: true` => this tag gets a button in the filter bar.
  tags: {
    currency:           { color: '#9C661B', icon: 'orb',        label: 'Currency',        filter: true },
    socketable:         { color: '#8A6FB0', icon: 'rune',       label: 'Socketable',      filter: true,
                          tip: 'Runes & soul cores' },
    'skill-gem':        { color: '#229467', icon: 'skillGem',   label: 'Skill gem',       filter: true },
    'spirit-gem':       { color: '#D88753', icon: 'spiritGem',  label: 'Spirit gem',      filter: true },
    'support-gem':      { color: '#5379BD', icon: 'supportGem', label: 'Support gem',     filter: true },
    'uncut-skill-gem':  { color: '#229467', icon: 'uncutGem',   label: 'Uncut skill gem' },
    'uncut-spirit-gem': { color: '#D88753', icon: 'uncutGem',   label: 'Uncut spirit gem' },
    'uncut-support-gem':{ color: '#5379BD', icon: 'uncutGem',   label: 'Uncut support gem' },
    gear:               { color: '#6B6B73', icon: 'gear',       label: 'Gear',            filter: true,
                          tip: 'Armour, weapons & jewellery' },
    jewel:              { color: '#8A6FB0', icon: 'jewel',      label: 'Jewel',           filter: true },
    'flask-charm':      { color: '#2E7A85', icon: 'flask',      label: 'Flask / charm',   filter: true },
    access:             { color: '#B0884A', icon: 'access',     label: 'Trial access',    filter: true },
    quest:              { color: '#A06A3C', icon: 'quest',      label: 'Quest item',      filter: true },
    unlock:             { color: '#6E8B6E', icon: 'unlock',     label: 'Unlock' },
    loot:               { color: '#6B6B73', icon: 'chest',      label: 'Random loot' },
    // Modifier tag — does not set the icon; bolds + recolors the name and marks must-visit.
    unique:             { color: '#C05A0F', label: 'Notable drop', modifier: true,
                          bold: true, marksMustVisit: true, filter: true },
  },

  // --- Rarity: recolors the reward NAME when set on gear-type rewards. ---
  rarity: { magic: '#2754A8', rare: '#C9A815' },

  // --- Zone badges. ---
  badges: {
    farm:      { bg: '#A8460C', fg: '#fff', icon: 'bolt', label: 'Farm',
                 tip: 'High-EXP zone — worth farming' },
    mustVisit: { bg: '#C05A0F', fg: '#fff', icon: 'star',
                 tip: 'Must-visit · permanent upgrade or notable drop' },
    abyss:     { bg: '#1A1A1F', fg: '#fff', icon: 'abyss', label: 'Abyss spawn',
                 tip: 'Abyss can spawn here' },
  },

  // --- Shared UI neutrals (per-act accents live on each act in the data). ---
  ui: {
    ink: '#1A1A1F', muted: '#6B6B73', faint: '#9A9AA0', hairline: '#ECECEC',
    pageBg: '#0F0F12', cardBg: '#fff', panelBg: '#F5F4F0',
    chipBg: '#FAEEDA', chipInk: '#633806',
    expBannerBg: '#FFFAF0', expBannerBorder: '#F0E6D0',
    farmTint: '#FFF1D6',
  },
};
