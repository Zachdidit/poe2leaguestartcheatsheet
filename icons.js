/* =============================================================================
 *  icons.js  —  the SVG icon set.  window.POE_ICONS
 * =============================================================================
 *
 *  Each entry is an inline SVG string, 20×20, outline style, using
 *  `currentColor` so render.js can color it via the theme. To add an icon,
 *  add a key here and reference it from theme.js (icon: 'yourKey').
 * ========================================================================== */

window.POE_ICONS = {
  // Permanent upgrade — 5-point star
  star:
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' +
    '<path d="M12 17.75 5.83 21l1.18-6.88L2 9.24l6.91-1L12 2l3.09 6.24 6.91 1-5.01 4.88L18.18 21z"/></svg>',

  // Cut skill gem — kite/diamond facet
  skillGem:
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' +
    '<path d="M12 3L19 10L12 21L5 10Z"/><path d="M5 10h14M9.5 10L12 21M14.5 10L12 21"/></svg>',

  // Cut spirit gem — round pearl
  spiritGem:
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' +
    '<circle cx="12" cy="12" r="8"/><path d="M9 9c-1 1-1.5 2-1.5 3"/></svg>',

  // Cut support gem — hexagon
  supportGem:
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' +
    '<path d="M12 3L20 7.5V16.5L12 21L4 16.5V7.5Z"/><path d="M12 3L12 21M4 7.5L20 16.5M20 7.5L4 16.5"/></svg>',

  // Uncut gem — rough/unfaceted diamond (dashed inner to read as "raw")
  uncutGem:
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' +
    '<path d="M12 3L18.5 9L12 21L5.5 9Z"/><path d="M5.5 9h13" stroke-dasharray="2 2"/></svg>',

  // Currency orb — circle with inner diamond glyph
  orb:
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' +
    '<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5L16 12L12 16.5L8 12Z"/></svg>',

  // Socketable (rune / soul core) — rune tablet with notch
  rune:
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' +
    '<rect x="6" y="3" width="12" height="18" rx="2"/><path d="M9 7l6 5-6 5"/></svg>',

  // Gear — body armour / breastplate
  gear:
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' +
    '<path d="M12 3L19 6V13C19 17 16 20 12 21C8 20 5 17 5 13V6Z"/><path d="M9 8h6M9 12h6"/></svg>',

  // Jewel — faceted gem (4-point, wider than a skill gem)
  jewel:
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' +
    '<path d="M6 4h12l3 5-9 11L3 9Z"/><path d="M3 9h18M9 4l-3 5 6 11 6-11-3-5"/></svg>',

  // Flask / charm — flask silhouette
  flask:
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' +
    '<path d="M9 3h6M10 3v5l-4.5 9a2 2 0 0 0 1.8 3h9.4a2 2 0 0 0 1.8-3L14 8V3"/><path d="M7 15h10"/></svg>',

  // Access (trial / ultimatum key) — keyhole arch
  access:
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' +
    '<path d="M5 21V9a7 7 0 0 1 14 0v12"/><circle cx="12" cy="11" r="2"/><path d="M12 13v4"/></svg>',

  // Quest (key / relic item) — key
  quest:
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' +
    '<circle cx="8" cy="8" r="4"/><path d="M11 11l8 8M16 16l2-2M14 18l2-2"/></svg>',

  // Unlock (bench / passage) — open padlock
  unlock:
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' +
    '<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V7a4 4 0 0 1 7.5-2"/></svg>',

  // Boss — skull
  boss:
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' +
    '<path d="M12 3a7 7 0 0 0-7 7v6l2 2 1.5-1.5L10 18l2-1.5 2 1.5 1.5-1.5L17 17l2-2v-6a7 7 0 0 0-7-7z"/>' +
    '<circle cx="9" cy="11" r="1.5" fill="currentColor" stroke="none"/><circle cx="15" cy="11" r="1.5" fill="currentColor" stroke="none"/></svg>',

  // Spark — generic league mechanic
  spark:
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">' +
    '<path d="M13 2L4.5 13H11l-1 9 8.5-11H12z"/></svg>',

  // Chest — secret / hidden loot
  chest:
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' +
    '<path d="M4 9h16v9H4z"/><path d="M4 9l2-4h12l2 4M12 9v9M9 12h6"/></svg>',

  // Shield — resist focus (header)
  shield:
    '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' +
    '<path d="M12 3L19 6V11C19 16 15.5 19.5 12 21C8.5 19.5 5 16 5 11V6Z"/></svg>',

  // Bolt — XP / farm badge
  bolt:
    '<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="none">' +
    '<path d="M13 2L4.5 13H11l-1 9 8.5-11H12z"/></svg>',

  // Abyss — diamond/rhombus outline
  abyss:
    '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
    '<path d="M12 2L22 12L12 22L2 12Z"/></svg>',
};
