/* =============================================================================
 *  Act 3 — Vaal Jungle
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
  id: "act3",
  title: "Act 3 — Vaal Jungle",
  subtitle: "16 zones · chronological · permanent upgrades highlighted",
  accent: "#3F6B47", accentSoft: "#DCE7DE",
  damageFocus: { label: "Poison charm", color: "#3F6B47", tint: "#DCE7DE" },
  exp: { startLevel: 29, endLevel: 41, note: "farm Azak Bog to 31.5–32+" },
  totals: [
    { value: "+4", label: "Passive points" },
    { value: "+10%", label: "Fire resistance" },
    { value: "+30", label: "Spirit" },
    { value: "1", label: "Permanent draught choice" },
  ],
  zones: [
    { n: 32, name: "Sandswept Marsh", recLevel: 29, rewards: [
      { type: "mechanic", name: "Uncut Support Gem (Level 3)", how: "league mechanic", tags: ["uncut-support-gem"] },
      { type: "secret", name: "Lesser Jeweller's Orb", how: "Orok Campfire", tags: ["currency"] },
      { type: "secret", name: "Uncut Skill Gem (L9)", how: "Rootdredge", tags: ["uncut-skill-gem"] },
      { type: "secret", name: "Random Ring", how: "Hanging Tree", tags: ["gear"] },
    ] },
    { n: 33, name: "Jungle Ruins", rewards: [
      { type: "permanent", name: "+2 Passive points", how: "kill Mighty Silverfist", tags: [] },
      { type: "mechanic", name: "Orb of Alchemy", how: "league mechanic", tags: ["currency"] },
      { type: "secret", name: "Choice of Rare Belts", how: "Jungle Grave", tags: ["loot"] },
      { type: "secret", name: "Better Armour + Rare Gloves", how: "Gwendolyn Albright (vendor)", tags: ["gear"] },
    ] },
    { n: 34, name: "The Venom Crypts", rewards: [
      { type: "permanent", name: "Venom Vial → Servi (not swappable)", how: "25% Stun Threshold OR 30% Ailment Threshold OR 25% Mana Regen", tags: [] },
      { type: "mechanic", name: "Magic Ring", how: "league mechanic", tags: ["gear"], abyss: true },
      { type: "secret", name: "Artificer's Orb", how: "Venom Vial reward", tags: ["currency"] },
    ] },
    { n: 35, name: "Infested Barrens", rewards: [
      { type: "mechanic", name: "Exalted Orb", how: "league mechanic", tags: ["currency"] },
      { type: "secret", name: "Better Weapons + Rare Boots", how: "Sebastian Carroway (vendor)", tags: ["gear"] },
      { type: "secret", name: "Random loot", how: "Larva Hollow (Brood Queen)", tags: ["loot"] },
    ] },
    { n: 36, name: "The Azak Bog", recLevel: 31.5, farmZone: true, rewards: [
      { type: "permanent", name: "+30 Spirit", how: "kill Ignagduk, The Bog Witch", tags: [] },
      { type: "mechanic", name: "Rune", how: "league mechanic", tags: ["socketable"] },
    ] },
    { n: 37, name: "Chimeral Wetlands", rewards: [
      { type: "mechanic", name: "Uncut Skill Gem (Level 9)", how: "league mechanic", tags: ["uncut-skill-gem"] },
      { type: "secret", name: "Chimeral Ultimatum (Trial of Chaos access)", how: "Xyclucian, the Chimera", tags: ["access"] },
      { type: "secret", name: "Rare + Magic Chests", how: "Ravaged Camp", tags: ["loot"] },
      { type: "secret", name: "Guaranteed Magic Amulet", how: "Toxic Bloom", tags: ["gear"] },
    ] },
    { n: 38, name: "Jiquani's Machinarium", rewards: [
      { type: "permanent", name: "+10% Fire resistance", how: "kill Blackjaw, The Remnant (deliver Small Soul Core to Stone Altar)", tags: [] },
      { type: "mechanic", name: "Artificer's Orb", how: "league mechanic", tags: ["currency"] },
      { type: "secret", name: "Gold + Rare Chests", how: "Unmarked Treasure Vaults", tags: ["loot"] },
    ] },
    { n: 39, name: "Jiquani's Sanctum", rewards: [
      { type: "mechanic", name: "Exalted Orb", how: "league mechanic", tags: ["currency"] },
      { type: "secret", name: "Corrupt an item (Vaal Orb effect)", how: "The Corruption Altar", tags: [] },
    ] },
    { n: 40, name: "The Matlan Waterways", rewards: [
      { type: "mechanic", name: "Uncut Spirit Gem (Level 10)", how: "league mechanic", tags: ["uncut-spirit-gem"] },
      { type: "secret", name: "Random Rare weapon", how: "Narag's Hut", tags: ["gear"] },
    ] },
    { n: 41, name: "The Drowned City", rewards: [
      { type: "mechanic", name: "Uncut Support Gem (Level 3)", how: "league mechanic", tags: ["uncut-support-gem"] },
      { type: "secret", name: "Monster fight + random loot", how: "Crawler Ambush", tags: ["loot"] },
      { type: "secret", name: "Gold, Chests, Rare/Magic monsters", how: "Foul Quarters (multiple)", tags: ["loot"] },
    ] },
    { n: 42, name: "The Molten Vault", rewards: [
      { type: "permanent", name: "Reforging Bench unlock", how: "kill Mektul, Forgemaster + talk to Oswald", tags: [] },
      { type: "mechanic", name: "Unique Item", how: "league mechanic", tags: ["gear", "unique"] },
      { type: "secret", name: "Artificer's Orb", how: "Mektul, the Forgemaster", tags: ["currency"] },
    ] },
    { n: 43, name: "Apex of Filth", rewards: [
      { type: "mechanic", name: "Vaal Orb", how: "league mechanic", tags: ["currency"] },
      { type: "secret", name: "Higher-quality jewellery + Spellcaster gear", how: "The Gentle Crone (vendor)", tags: ["gear"] },
      { type: "secret", name: "Quality Life + Mana Flasks", how: "The Crone's Cauldron (3 fungi)", tags: ["loot"] },
    ] },
    { n: 44, name: "Temple of Kopec", rewards: [
      { type: "mechanic", name: "Uncut Spirit Gem (Level 11)", how: "league mechanic", tags: ["uncut-spirit-gem"] },
    ] },
    { n: 45, name: "Utzaal (Past)", rewards: [
      { type: "permanent", name: "Sacrificial Heart can drop", how: "used at Aggorat altar", tags: [] },
      { type: "mechanic", name: "Random Jewel or Time-Lost Jewel", how: "league mechanic", tags: ["jewel"], rarity: "magic" },
      { type: "secret", name: "Golden Idols + gold + Magic/Rare Chests", how: "Napautzi's / Uromoti's / Azcapa's Quarters", tags: ["loot"] },
    ] },
    { n: 46, name: "Aggorat (Past)", rewards: [
      { type: "permanent", name: "+2 Passive points", how: "Sacrificial Heart → altar (heart drops in Aggorat or Utzaal)", tags: [] },
      { type: "mechanic", name: "Uncut Skill Gem (Level 11)", how: "league mechanic", tags: ["uncut-skill-gem"] },
      { type: "secret", name: "Golden Idols", how: "Peculiar Fortunes", tags: ["loot"] },
    ] },
    { n: 47, name: "The Black Chambers (Past)", rewards: [
      { type: "mechanic", name: "Vaal Orb", how: "league mechanic", tags: ["currency"] },
    ] },
  ],
});
