/* =============================================================================
 *  Act 1 — Ogham Region
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
  id: "act1",
  title: "Act 1 — Ogham Region",
  subtitle: "14 zones · chronological · permanent upgrades highlighted",
  accent: "#3D5A80", accentSoft: "#E3E8F0",
  damageFocus: { label: "Cold", color: "#3D5A80", tint: "#E3E8F0" },
  exp: { startLevel: 1, endLevel: 13, note: "or 14 for L5 skill gems" },
  totals: [
    { value: "+4", label: "Passive points" },
    { value: "+10%", label: "Cold resistance" },
    { value: "+30", label: "Spirit" },
    { value: "+20", label: "Max life" },
  ],
  zones: [
    { n: 1, name: "Clearfell", rewards: [
      { type: "mechanic", name: "Orb of Transmutation", how: "league mechanic", tags: ["currency"] },
      { type: "secret", name: "Uncut Skill Gem", how: "Abandoned Stash (Mysterious Campsite)", tags: ["uncut-skill-gem"] },
      { type: "boss", name: "Beira of the Rotten Pack", how: "central ritual site", tags: ["loot"], chip: "+10% Cold resistance" },
    ] },
    { n: 2, name: "Mud Burrow", rewards: [
      { type: "mechanic", name: "Orb of Augmentation", how: "league mechanic", tags: ["currency"] },
      { type: "secret", name: "Random gear", how: "The Hatchery (destroy eggs)", tags: ["gear"] },
    ] },
    { n: 3, name: "The Grelwood", recLevel: 2, rewards: [
      { type: "mechanic", name: "Orb of Transmutation", how: "league mechanic", tags: ["currency"] },
      { type: "secret", name: "Uncut Support Gem + Life and Mana Flask", how: "Areagne / Witch Hut", tags: ["uncut-support-gem"] },
      { type: "boss", name: "Brambleghast", how: "drops Uncut Skill Gem, seals arena", tags: ["loot"] },
    ] },
    { n: 4, name: "The Red Vale", recLevel: 2, farmZone: true, rewards: [
      { type: "mechanic", name: "Uncut Skill Gem (Level 2)", how: "league mechanic", tags: ["uncut-skill-gem"] },
      { type: "secret", name: "T2 Weapons", how: "Rusted Arms", tags: ["gear"], rarity: "rare" },
    ] },
    { n: 5, name: "The Grim Tangle", recLevel: 4, rewards: [
      { type: "mechanic", name: "Uncut Skill Gem (Level 3)", how: "league mechanic", tags: ["uncut-skill-gem"] },
      { type: "boss", name: "The Rotten Druid", how: "drops Uncut Support Gem", tags: ["loot"] },
    ] },
    { n: 6, name: "Cemetery of the Eternals", recLevel: 5, farmZone: true, rewards: [
      { type: "mechanic", name: "Regal Orb", how: "league mechanic", tags: ["currency"] },
      { type: "secret", name: "Random Ring", how: "Ancient Ruins Grave Site (sarcophagus)", tags: ["gear"], rarity: "magic" },
    ] },
    { n: 7, name: "Tomb of the Consort", recLevel: 6, farmZone: true, rewards: [
      { type: "mechanic", name: "Normal Amulet", how: "league mechanic", tags: ["gear"] },
      { type: "secret", name: "Uncut Support Gem", how: "Embattled Trove (ambush, narrow corridors)", tags: ["uncut-support-gem"] },
    ] },
    { n: 8, name: "Mausoleum of the Praetor", recLevel: 7, rewards: [
      { type: "mechanic", name: "Lesser Rune", how: "league mechanic", tags: ["socketable"] },
      { type: "secret", name: "Gold + random loot", how: "Forgotten Riches (hidden switch on pillar, farmable)", tags: ["loot"] },
    ] },
    { n: 9, name: "Hunting Grounds", recLevel: 7, farmZone: true, rewards: [
      { type: "permanent", name: "+2 Passive points", how: "kill Crowbell (pit arena, swing gate)", tags: [] },
      { type: "mechanic", name: "Exalted Orb", how: "league mechanic", tags: ["currency"] },
      { type: "secret", name: "Uncut Spirit Gem + random loot", how: "Ritual Site (Finn questline → Freythorn)", tags: ["uncut-spirit-gem"] },
      { type: "secret", name: "Uncut Support Gem", how: "Dryadic Ritual", tags: ["uncut-support-gem"] },
    ] },
    { n: 10, name: "Ogham Farmlands", recLevel: 9, rewards: [
      { type: "permanent", name: "+2 Passive points", how: "find Una's Lute, deliver to Una", tags: [] },
      { type: "mechanic", name: "Uncut Skill Gem (Level 4)", how: "league mechanic", tags: ["uncut-skill-gem"] },
      { type: "secret", name: "Uncut Skill Gem", how: "Crop Circle (Rare Feral Mutt ambush)", tags: ["uncut-skill-gem"] },
    ] },
    { n: 11, name: "Freythorn", recLevel: 8, rewards: [
      { type: "mechanic", name: "Uncut Support Gem (Level 1)", how: "league mechanic", tags: ["uncut-support-gem"] },
      { type: "boss", name: "King in the Mists", how: "complete Ritual encounters · very tough Act 1 boss", tags: ["loot"], chip: "+30 Spirit" },
    ] },
    { n: 12, name: "Ogham Village", recLevel: 10, rewards: [
      { type: "permanent", name: "Salvaging Bench unlock", how: "find Smithing Tools, deliver to Renly", tags: [] },
      { type: "mechanic", name: "Artificer's Orb", how: "league mechanic", tags: ["currency"] },
      { type: "secret", name: "Rune quest reward", how: "Renley's Workshop chest", tags: ["socketable"] },
    ] },
    { n: 13, name: "Manor Ramparts", recLevel: 11, farmZone: true, rewards: [
      { type: "mechanic", name: "Uncut Skill Gem (Level 5)", how: "league mechanic", tags: ["uncut-skill-gem"] },
      { type: "secret", name: "Uncut Support Gem", how: "The Gallows (cut down Hanged Man)", tags: ["uncut-support-gem"] },
    ] },
    { n: 14, name: "Ogham Manor", recLevel: 12, rewards: [
      { type: "permanent", name: "+20 Max life", how: "kill Candlemass (read Psalm of Madness, 1st floor)", tags: [] },
      { type: "mechanic", name: "Orb of Alchemy", how: "league mechanic", tags: ["currency"] },
    ] },
  ],
});
