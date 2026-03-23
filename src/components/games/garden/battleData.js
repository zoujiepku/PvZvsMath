// Battle system: zombie types, wave configs, plant battle stats

export const ZOMBIE_TYPES = {
  basic: { name: 'Zombie', hp: 10, speed: 10, damage: 1 },
  cone:  { name: 'Cone Zombie', hp: 20, speed: 10, damage: 1 },
  bucket: { name: 'Bucket Zombie', hp: 35, speed: 8, damage: 2 },
  flag:  { name: 'Flag Zombie', hp: 8, speed: 18, damage: 1 },
  polevaulter: { name: 'Pole Vaulter', hp: 15, speed: 14, damage: 1, canVault: true },
  newspaper: { name: 'Newspaper Zombie', hp: 20, speed: 6, damage: 1, newspaperHp: 10 },
}

export const PLANT_BATTLE_STATS = {
  peashooter: { ability: 'shoot', damage: 2, range: 50, fireRate: 1.5, hp: 5 },
  sunflower:  { ability: 'produce', coinsPerTick: 5, range: 0, fireRate: 0, hp: 3 },
  wallnut:    { ability: 'block', damage: 0, range: 0, fireRate: 0, hp: 40 },
  chomper:    { ability: 'devour', damage: 999, range: 15, fireRate: 0, hp: 8, cooldown: 8 },
  snowpea:    { ability: 'shoot', damage: 1, range: 50, fireRate: 1.5, hp: 5, slowEffect: { factor: 0.6, duration: 3 } },
  repeater:   { ability: 'shoot', damage: 2, range: 50, fireRate: 1.5, hp: 5, shotsPerVolley: 2 },
  cherrybomb: { ability: 'explode', damage: 40, range: 20, fireRate: 0, hp: 1 },
  cabbagepult: { ability: 'shoot', damage: 2, range: 50, fireRate: 1, hp: 5 },
  kernelpult: { ability: 'shoot', damage: 1, range: 50, fireRate: 1, hp: 5, butterChance: 0.2, butterFreeze: 5 },
}

// Spawn positions: random point along edges of the field (0-100 coordinate space)
export function randomSpawnPosition() {
  const side = Math.floor(Math.random() * 4)
  switch (side) {
    case 0: return { x: Math.random() * 100, y: -2 }        // top
    case 1: return { x: 102, y: Math.random() * 100 }       // right
    case 2: return { x: Math.random() * 100, y: 102 }       // bottom
    case 3: return { x: -2, y: Math.random() * 100 }        // left
    default: return { x: 102, y: 50 }
  }
}

export const WAVES = [
  {
    wave: 1,
    spawns: [
      // 5 basic zombies
      { type: 'basic', delay: 0 },
      { type: 'basic', delay: 3 },
      { type: 'basic', delay: 6 },
      { type: 'basic', delay: 9 },
      { type: 'basic', delay: 12 },
    ],
    reward: 25,
  },
  {
    wave: 2,
    spawns: [
      // 10 zombies: basic + conehead
      { type: 'basic', delay: 0 },
      { type: 'basic', delay: 2 },
      { type: 'cone', delay: 4 },
      { type: 'basic', delay: 6 },
      { type: 'basic', delay: 8 },
      { type: 'cone', delay: 10 },
      { type: 'basic', delay: 12 },
      { type: 'cone', delay: 14 },
      { type: 'basic', delay: 16 },
      { type: 'basic', delay: 18 },
    ],
    reward: 50,
  },
  {
    wave: 3,
    spawns: [
      // 25 zombies: basic + conehead + buckethead
      { type: 'basic', delay: 0 },
      { type: 'basic', delay: 1.5 },
      { type: 'cone', delay: 3 },
      { type: 'basic', delay: 4 },
      { type: 'basic', delay: 5 },
      { type: 'cone', delay: 6 },
      { type: 'bucket', delay: 7 },
      { type: 'basic', delay: 8 },
      { type: 'basic', delay: 9 },
      { type: 'cone', delay: 10 },
      { type: 'basic', delay: 11 },
      { type: 'bucket', delay: 12 },
      { type: 'basic', delay: 13 },
      { type: 'cone', delay: 13.5 },
      { type: 'basic', delay: 14 },
      { type: 'basic', delay: 15 },
      { type: 'cone', delay: 15.5 },
      { type: 'bucket', delay: 16 },
      { type: 'basic', delay: 17 },
      { type: 'basic', delay: 17.5 },
      { type: 'cone', delay: 18 },
      { type: 'basic', delay: 19 },
      { type: 'bucket', delay: 20 },
      { type: 'cone', delay: 21 },
      { type: 'basic', delay: 22 },
    ],
    reward: 100,
  },
  {
    wave: 4,
    spawns: [
      // 50 zombies: basic + conehead + buckethead + pole vaulter
      // Sub-wave 1: opening rush
      { type: 'basic', delay: 0 },
      { type: 'basic', delay: 1 },
      { type: 'cone', delay: 2 },
      { type: 'basic', delay: 2.5 },
      { type: 'polevaulter', delay: 3 },
      { type: 'basic', delay: 4 },
      { type: 'cone', delay: 4.5 },
      { type: 'basic', delay: 5 },
      { type: 'bucket', delay: 6 },
      { type: 'basic', delay: 6.5 },
      // Sub-wave 2: pressure builds
      { type: 'cone', delay: 8 },
      { type: 'basic', delay: 8.5 },
      { type: 'polevaulter', delay: 9 },
      { type: 'basic', delay: 9.5 },
      { type: 'cone', delay: 10 },
      { type: 'bucket', delay: 10.5 },
      { type: 'basic', delay: 11 },
      { type: 'basic', delay: 11.5 },
      { type: 'cone', delay: 12 },
      { type: 'polevaulter', delay: 12.5 },
      // Sub-wave 3: heavy assault
      { type: 'bucket', delay: 14 },
      { type: 'basic', delay: 14.5 },
      { type: 'cone', delay: 15 },
      { type: 'basic', delay: 15.5 },
      { type: 'basic', delay: 16 },
      { type: 'polevaulter', delay: 16.5 },
      { type: 'cone', delay: 17 },
      { type: 'bucket', delay: 17.5 },
      { type: 'basic', delay: 18 },
      { type: 'cone', delay: 18.5 },
      // Sub-wave 4: relentless
      { type: 'basic', delay: 20 },
      { type: 'polevaulter', delay: 20.5 },
      { type: 'bucket', delay: 21 },
      { type: 'cone', delay: 21.5 },
      { type: 'basic', delay: 22 },
      { type: 'basic', delay: 22.5 },
      { type: 'cone', delay: 23 },
      { type: 'bucket', delay: 23.5 },
      { type: 'polevaulter', delay: 24 },
      { type: 'basic', delay: 24.5 },
      // Sub-wave 5: final push
      { type: 'cone', delay: 26 },
      { type: 'bucket', delay: 26.5 },
      { type: 'basic', delay: 27 },
      { type: 'polevaulter', delay: 27.5 },
      { type: 'basic', delay: 28 },
      { type: 'cone', delay: 28.5 },
      { type: 'bucket', delay: 29 },
      { type: 'basic', delay: 29.5 },
      { type: 'polevaulter', delay: 30 },
      { type: 'bucket', delay: 30.5 },
    ],
    reward: 250,
  },
]

// Distance between two points in percentage space
export function dist(a, b) {
  return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2)
}

// Center of the field
export const CENTER = { x: 50, y: 50 }

// Vault radius — if zombie reaches within this, game over
export const VAULT_RADIUS = 6
