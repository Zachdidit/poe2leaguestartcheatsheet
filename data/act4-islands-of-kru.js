/* =============================================================================
 *  Act 4 — Islands of Kru
 * =============================================================================
 *  EDIT THIS FILE to change this act's content. It pushes one act object onto
 *  window.POE_ACTS. Shape:
 *
 *    { id, title, subtitle, accent, accentSoft,
 *      damageFocus: { label, color, tint },
 *      exp: { startLevel, endLevel, note? },
 *      totals: [ { value, label } ],
 *      segments?: [ { title, zoneRange } ],     // interludes only
 *      zones: [
 *        { n, name, recLevel?, farmZone?, rewards: [
 *          { type, tags: [...], name, how, chip?, rarity?, abyss? }
 *        ]},
 *        { segmentStart: 0 },                   // segment divider (interludes)
 *      ] }
 *
 *  type: 'permanent' | 'mechanic' | 'secret' | 'boss'   (role / where it drops)
 *  tags: see theme.js -> POE_THEME.tags  (currency, socketable, skill-gem, …)
 *        the first tag drives the icon + color; 'unique' bolds + highlights.
 *  Colors/icons/labels are defined ONCE in theme.js — never hard-code them here.
 * ========================================================================== */

(window.POE_ACTS ||= []).push({
  id: "act4",
  title: "Act 4 — Islands of Kru",
  subtitle: "15 zones · chronological · permanent upgrades highlighted",
  accent: "#2E7A85", accentSoft: "#D6E8EC",
  damageFocus: { label: "Bleed charm", color: "#2E7A85", tint: "#D6E8EC" },
  exp: { startLevel: 41, endLevel: 48 },
  totals: [
    { value: "+4", label: "Weapon Set Skill Points" },
    { value: "+5%", label: "Max mana" },
    { value: "3", label: "Trial of Ngkanu choices" },
    { value: "1", label: "Swappable flask choice" },
  ],
  zones: [
    { n: 48, name: "Isle of Kin", farmZone: true, rewards: [
      { type: "mechanic", name: "Gemcutter's Prism", how: "league mechanic", tags: ["currency", "unique"] },
      { type: "secret", name: "Uncut Skill Gem (L11/12) + Uncut Support Gem (Level 4)", how: "Beast Pen — skill gem level scales with Act 4 zone order", tags: ["uncut-support-gem"] },
    ] },
    { n: 49, name: "Kedge Bay", recLevel: 41, rewards: [
      { type: "mechanic", name: "Exalted Orb", how: "league mechanic", tags: ["currency"] },
    ] },
    { n: 50, name: "Whakapanu Island", recLevel: 42, rewards: [
      { type: "secret", name: "Choice of Uncut Skill / Spirit / Support Gem", how: "Shark Fin (Great White One) → Kaimana", tags: ["uncut-support-gem"] },
      { type: "secret", name: "Uncut Support Gem (Level 4)", how: "Crab Cave", tags: ["uncut-support-gem"] },
      { type: "mechanic", name: "Artificer's Orb", how: "league mechanic", tags: ["currency"] },
    ] },
    { n: 51, name: "Singing Cavern", recLevel: 42, rewards: [
      { type: "secret", name: "Rare Pearlescent Amulet (implicit % All Ele Res)", how: "Beckoning Clam → return Pearl to Rog in Kingsmarch", tags: ["gear"] },
      { type: "mechanic", name: "Magic Charm", how: "league mechanic", tags: ["flask-charm"] },
    ] },
    { n: 52, name: "Abandoned Prison", recLevel: 42, rewards: [
      { type: "permanent", name: "Goddess of Justice (swappable)", how: "+30% Mana Flask Recovery OR +30% Life Flask Recovery", tags: [] },
      { type: "mechanic", name: "Exalted Orb", how: "league mechanic", tags: ["currency"] },
    ] },
    { n: 53, name: "Solitary Confinement", recLevel: 42, rewards: [
      { type: "mechanic", name: "Rune", how: "league mechanic", tags: ["socketable"] },
    ] },
    { n: 54, name: "Shrike Island", recLevel: 43, rewards: [
      { type: "mechanic", name: "Uncut Support Gem (Level 4)", how: "league mechanic", tags: ["uncut-support-gem"] },
    ] },
    { n: 55, name: "Volcanic Warrens", recLevel: 43, rewards: [
      { type: "mechanic", name: "Uncut Support Gem (Level 4)", how: "league mechanic", tags: ["uncut-support-gem"] },
      { type: "secret", name: "Possible Rare Ring", how: "Volcanic Nest (two bosses)", tags: ["gear"] },
    ] },
    { n: 56, name: "Eye of Hinekora", recLevel: 44, rewards: [
      { type: "mechanic", name: "Chaos Orb", how: "league mechanic", tags: ["currency"] },
    ] },
    { n: 57, name: "Halls of the Dead", recLevel: 44, rewards: [
      { type: "permanent", name: "Trial of Ngkanu (3 choices, not swappable)", how: "+5% Fire Res OR +5 Str · +5% Cold Res OR +5 Dex · +5% Lightning Res OR +5 Int", tags: [] },
      { type: "permanent", name: "+5% Maximum Mana", how: "Halls of the Dead reward", tags: [] },
      { type: "permanent", name: "+2 Weapon Set Skill Points", how: "Trial of the Ancestors (complete trial, speak to Hinekora)", tags: [] },
      { type: "mechanic", name: "Random Items", how: "league mechanic", tags: ["loot"] },
    ] },
    { n: 58, name: "Arastas", recLevel: 46, rewards: [
      { type: "mechanic", name: "Uncut Skill Gem (Level 12)", how: "league mechanic", tags: ["uncut-skill-gem"] },
      { type: "secret", name: "3 Regal Orbs · 3 Exalted Orbs", how: "Morning Bell (Regals) · Evening Bell (Exalts)", tags: ["currency"] },
    ] },
    { n: 59, name: "The Excavation", recLevel: 46, farmZone: true, rewards: [
      { type: "mechanic", name: "Rare Amulet", how: "league mechanic", tags: ["gear"] },
    ] },
    { n: 60, name: "Ngakanu", recLevel: 47, rewards: [
      { type: "mechanic", name: "Greater Jeweller's Orb", how: "reported Abyss drop in this area (unconfirmed)", tags: ["currency", "unique"], abyss: true },
    ] },
    { n: 61, name: "Heart of the Tribe", recLevel: 47, rewards: [
      { type: "mechanic", name: "Uncut Spirit Gem (Level 12)", how: "league mechanic", tags: ["uncut-spirit-gem"] },
    ] },
    { n: 62, name: "Journey's End", rewards: [
      { type: "permanent", name: "+2 Weapon Set Skill Points", how: "Dark Mists quest — defeat Omniphobia, Fear Manifest (NEW IN 0.4)", tags: [] },
      { type: "mechanic", name: "Orb of Alchemy", how: "league mechanic", tags: ["currency"] },
    ] },
  ],
});
