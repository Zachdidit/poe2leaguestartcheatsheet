/* =============================================================================
 *  Act 2 — Vastiri / Maraketh
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
  id: "act2",
  title: "Act 2 — Vastiri / Maraketh",
  subtitle: "17 zones · chronological · permanent upgrades highlighted",
  accent: "#B07A2C", accentSoft: "#F2E7D2",
  damageFocus: { label: "Lightning", color: "#9A7016", tint: "#F5ECCC" },
  exp: { startLevel: 13, endLevel: 28.5, note: "guard your level in the second half" },
  totals: [
    { value: "+4", label: "Passive points" },
    { value: "+10%", label: "Lightning resistance" },
    { value: "+1", label: "Charm slot · swappable bonus" },
  ],
  zones: [
    { n: 15, name: "Vastiri Outskirts", recLevel: 13, rewards: [
      { type: "mechanic", name: "Exalted Orb", how: "league mechanic", tags: ["currency"] },
      { type: "secret", name: "Uncut Support Gem", how: "Rare Chest", tags: ["uncut-support-gem"] },
    ] },
    { n: 16, name: "Mawdun Quarry", recLevel: 14, rewards: [
      { type: "mechanic", name: "Uncut Spirit Gem (Level 5)", how: "league mechanic", tags: ["uncut-spirit-gem"] },
      { type: "secret", name: "Smithing Tools (backup)", how: "if Act 1 Renley delivery skipped", tags: ["quest"] },
    ] },
    { n: 17, name: "Mawdun Mine", recLevel: 15.5, rewards: [
      { type: "mechanic", name: "Uncut Support Gem (Level 2)", how: "league mechanic", tags: ["uncut-support-gem"] },
    ] },
    { n: 18, name: "Traitor's Passage", recLevel: 16.5, rewards: [
      { type: "mechanic", name: "Artificer's Orb", how: "league mechanic", tags: ["currency"] },
      { type: "secret", name: "Trial of the Sekhemas access", how: "boss in The Ancient Passage", tags: ["access"] },
      { type: "secret", name: "Rare Chest", how: "gold trail", tags: ["loot"] },
    ] },
    { n: 19, name: "Halani Gates", recLevel: 17.5, rewards: [
      { type: "mechanic", name: "Exalted Orb", how: "league mechanic", tags: ["currency"] },
      { type: "secret", name: "T3 Weapons", how: "weapon camp", tags: ["gear"], rarity: "rare" },
    ] },
    { n: 20, name: "Keth", recLevel: 18.5, rewards: [
      { type: "permanent", name: "+2 Passive points · Kabala Clan Relic", how: "kill Kabala, Constrictor Queen", tags: [] },
      { type: "mechanic", name: "Gemcutter's Prism", how: "league mechanic", tags: ["currency", "unique"] },
      { type: "secret", name: "Gold + Rare Chest (guaranteed Magic Amulet)", how: "Abandoned Shrine", tags: ["gear"] },
    ] },
    { n: 21, name: "Lost City", recLevel: 19, rewards: [
      { type: "mechanic", name: "Orb of Alchemy", how: "league mechanic", tags: ["currency"] },
      { type: "secret", name: "Uncut Spirit Gem", how: "Golden Chest", tags: ["uncut-spirit-gem"] },
      { type: "secret", name: "Random Jewel", how: "Gilded Beetle — zone-wide guaranteed Magic+Rare spawns", tags: ["jewel"] },
    ] },
    { n: 22, name: "Buried Shrines", recLevel: 20, farmZone: true, rewards: [
      { type: "mechanic", name: "Lesser Jeweller's Orb", how: "league mechanic", tags: ["currency"] },
      { type: "secret", name: "Choice of resistance Ring", how: "The Elemental Offering", tags: ["gear"], rarity: "magic" },
      { type: "secret", name: "Uncut Support Gem", how: "The Guarded Sarcophagus", tags: ["uncut-support-gem"] },
    ] },
    { n: 23, name: "Mastodon Badlands", recLevel: 21, rewards: [
      { type: "permanent", name: "Lightless Passage unlock", how: "abyss crafting access", tags: [] },
      { type: "mechanic", name: "Regal Orb", how: "league mechanic", tags: ["currency"], abyss: true },
      { type: "secret", name: "Uncut Support Gem", how: "Shrine of Bones", tags: ["uncut-support-gem"] },
    ] },
    { n: 24, name: "The Bone Pits", recLevel: 21.5, rewards: [
      { type: "permanent", name: "Sun Clan Relic", how: "for Valley of the Titans altar", tags: [] },
      { type: "mechanic", name: "Exalted Orb", how: "league mechanic", tags: ["currency"] },
    ] },
    { n: 25, name: "Valley of the Titans", recLevel: 22.5, rewards: [
      { type: "permanent", name: "Swappable Charm bonus", how: "deliver both Clan Relics · 30% Charges + 1 slot OR 30% Duration + 1 slot", tags: [] },
      { type: "mechanic", name: "Unique Item", how: "league mechanic", tags: ["gear", "unique"], abyss: true },
    ] },
    { n: 26, name: "Titan Grotto", recLevel: 23.5, rewards: [
      { type: "mechanic", name: "Chance Shard", how: "league mechanic", tags: ["currency"] },
      { type: "secret", name: "Random Rune", how: "Titan's Sword", tags: ["socketable"] },
    ] },
    { n: 27, name: "Deshar", recLevel: 24, farmZone: true, rewards: [
      { type: "permanent", name: "+2 Passive points", how: "find Final Letter, deliver to Shambrin", tags: [] },
      { type: "mechanic", name: "Lesser Rune", how: "league mechanic", tags: ["socketable"] },
      { type: "secret", name: "Djinn Barya (Trial of the Sekhemas key)", how: "The Watchful Twins", tags: ["access"] },
      { type: "secret", name: "Artificer's Orb", how: "The Unremembered", tags: ["currency"] },
    ] },
    { n: 28, name: "Path of Mourning", recLevel: 25, rewards: [
      { type: "secret", name: "Uncut Support Gem", how: "Shifting Vases", tags: ["uncut-support-gem"] },
    ] },
    { n: 29, name: "Spires of Deshar", recLevel: 25, farmZone: true, rewards: [
      { type: "permanent", name: "+10% Lightning resistance", how: "Sisters of Garukhan Shrine", tags: [] },
      { type: "mechanic", name: "Gemcutter's Prism", how: "league mechanic", tags: ["currency", "unique"] },
    ] },
    { n: 30, name: "Dreadnought", recLevel: 26, farmZone: true, rewards: [
      { type: "mechanic", name: "No mechanic", how: "transitional zone", tags: ["loot"] },
    ] },
    { n: 31, name: "Dreadnought Vanguard", recLevel: 27, farmZone: true, rewards: [
      { type: "mechanic", name: "No mechanic", how: "transitional zone", tags: ["loot"] },
    ] },
  ],
});
