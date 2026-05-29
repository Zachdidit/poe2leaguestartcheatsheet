/* =============================================================================
 *  Interludes — Return to Wraeclast
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
  id: "interludes",
  title: "Interludes — Return to Wraeclast",
  subtitle: "19 zones · three segments · permanent upgrades highlighted",
  accent: "#5C5C66", accentSoft: "#E5E5E8",
  damageFocus: { label: "All resist", color: "#5C5C66", tint: "#E5E5E8" },
  exp: { startLevel: 48, endLevel: 63, note: "EXP guide ends at Act 4 — campaign ends at L63; later levels are formula-derived" },
  totals: [
    { value: "+8", label: "Weapon Set Skill Points (total)" },
    { value: "+5%", label: "Max life" },
    { value: "+40", label: "Spirit · campaign hits 100" },
    { value: "1", label: "Free unique from Madox" },
  ],
  segments: [
    { title: "Interlude 1 — The Curse of Holten", zoneRange: "63–66" },
    { title: "Interlude 2 — The Stolen Barya", zoneRange: "67–75" },
    { title: "Interlude 3 — Doryani’s Contingency", zoneRange: "76–81" },
  ],
  zones: [
    { segmentStart: 0 },
    { n: 63, name: "Scorched Farmlands", rewards: [
      { type: "mechanic", name: "Uncut Support Gem (Level 4)", how: "league mechanic", tags: ["uncut-support-gem"] },
    ] },
    { n: 64, name: "Stones of Serle", rewards: [
      { type: "mechanic", name: "Exalted Orb", how: "league mechanic", tags: ["currency"], abyss: true },
    ] },
    { n: 65, name: "The Blackwood", rewards: [
      { type: "mechanic", name: "Greater Orb of Transmutation", how: "league mechanic", tags: ["currency"] },
    ] },
    { n: 66, name: "Holten", rewards: [
      { type: "mechanic", name: "Greater Rune", how: "league mechanic", tags: ["socketable"] },
      { type: "secret", name: "Soul of the Ferryman", how: "vendor — sells Greater Runes", tags: ["socketable"] },
    ] },
    { segmentStart: 1 },
    { n: 67, name: "Wolvenhold", rewards: [
      { type: "permanent", name: "+2 Weapon Set Skill Points", how: "kill Oswin, The Dread Warden (boss found after Holten)", tags: [] },
      { type: "mechanic", name: "Greater Orb of Augmentation", how: "league mechanic", tags: ["currency"] },
    ] },
    { n: 68, name: "Holten Estate", rewards: [
      { type: "mechanic", name: "Artificer's Orb", how: "league mechanic", tags: ["currency"] },
    ] },
    { n: 69, name: "The Khari Crossing", rewards: [
      { type: "permanent", name: "+5% Max life", how: "Molten One's Gift — Skullmaw Stairway → Molten Shrine (may need to find seal(s) and reset instance, currently buggy)", tags: [] },
      { type: "permanent", name: "+2 Weapon Set Skill Points", how: "Slay the Worm and Scorpion → Risu rewards", tags: [] },
      { type: "secret", name: "Discounted Rare Caster Weapons", how: "Torbek (merchant)", tags: ["gear"] },
      { type: "mechanic", name: "Gemcutter's Prism", how: "league mechanic", tags: ["currency", "unique"] },
    ] },
    { n: 70, name: "Pools of Khatal", rewards: [
      { type: "mechanic", name: "Orb of Alchemy", how: "league mechanic", tags: ["currency"] },
    ] },
    { n: 71, name: "Sel Khari Sanctuary", rewards: [
      { type: "secret", name: "Choice of 2: Rare Ring / Amulet / Jewel", how: "Place Baryas of Rageen and Yoon on pedestals — they grant a jewellery wish", tags: ["jewel"] },
      { type: "mechanic", name: "Orb of Chance", how: "league mechanic", tags: ["currency"] },
    ] },
    { n: 72, name: "The Galai Gates", rewards: [
      { type: "mechanic", name: "Greater Orb of Augmentation", how: "league mechanic", tags: ["currency"], abyss: true },
    ] },
    { n: 73, name: "Qimah", rewards: [
      { type: "permanent", name: "Choice of 7 Boons (swappable)", how: "+5 All Attributes / +5 All Ele Res / 12% CDR / 3% MS / 20% Presence AoE / 15% Global Defences / 5% XP — return to swap", tags: [] },
      { type: "mechanic", name: "Exalted Orb", how: "league mechanic", tags: ["currency"] },
    ] },
    { n: 74, name: "Qimah Reservoir", rewards: [
      { type: "secret", name: "Currency from each well (Exalt / Alchemy reported)", how: "Restore the Wells", tags: ["currency"] },
      { type: "mechanic", name: "Greater Orb of Transmutation", how: "league mechanic", tags: ["currency"] },
    ] },
    { n: 75, name: "Ashen Forest", rewards: [
      { type: "secret", name: "Uncut Skill Gem (Level 14)", how: "Ancient Monument", tags: ["uncut-skill-gem"] },
      { type: "mechanic", name: "Rare Belt", how: "league mechanic", tags: ["gear"] },
    ] },
    { segmentStart: 2 },
    { n: 76, name: "Kriar Village", rewards: [
      { type: "permanent", name: "+40 Spirit", how: "kill Lythara, The Wayward Spear (campaign reaches 100)", tags: [] },
      { type: "mechanic", name: "Greater Rune", how: "league mechanic", tags: ["socketable"], abyss: true },
    ] },
    { n: 77, name: "Glacial Tarn", rewards: [
      { type: "mechanic", name: "Greater Orb of Augmentation", how: "league mechanic", tags: ["currency"] },
    ] },
    { n: 78, name: "Howling Caves", rewards: [
      { type: "permanent", name: "+2 Weapon Set Skill Points", how: "kill The Abominable Yeti", tags: [] },
      { type: "mechanic", name: "Chaos Orb", how: "league mechanic", tags: ["currency"] },
    ] },
    { n: 79, name: "Kriar Peaks", rewards: [
      { type: "secret", name: "Free Unique Item", how: "Elder Madox — only one choice", tags: ["gear", "unique"] },
      { type: "mechanic", name: "Greater Orb of Transmutation", how: "league mechanic", tags: ["currency"] },
    ] },
    { n: 80, name: "Etched Ravine", rewards: [
      { type: "mechanic", name: "Exalted Orb", how: "league mechanic", tags: ["currency"] },
    ] },
    { n: 81, name: "The Cuachic Vault", rewards: [
      { type: "permanent", name: "+2 Weapon Set Skill Points", how: "Complete the Interlude", tags: [] },
      { type: "mechanic", name: "Vaal Orb", how: "league mechanic", tags: ["currency"] },
    ] },
  ],
});
