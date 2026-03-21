// Battle system: zombie types, wave configs, plant battle stats

export const ZOMBIE_TYPES = {
  basic: { name: 'Zombie', hp: 10, speed: 10, damage: 1 },
  cone:  { name: 'Cone Zombie', hp: 20, speed: 10, damage: 1 },
  bucket: { name: 'Bucket Zombie', hp: 35, speed: 8, damage: 2 },
  flag:  { name: 'Flag Zombie', hp: 8, speed: 18, damage: 1 },
}

export const PLANT_BATTLE_STATS = {
  peashooter: { ability: 'shoot', damage: 2, range: 50, fireRate: 1.5, hp: 5 },
  sunflower:  { ability: 'produce', coinsPerTick: 5, range: 0, fireRate: 0, hp: 3 },
  wallnut:    { ability: 'block', damage: 0, range: 0, fireRate: 0, hp: 40 },
  chomper:    { ability: 'devour', damage: 999, range: 15, fireRate: 0, hp: 8, cooldown: 8 },
  snowpea:    { ability: 'shoot', damage: 1, range: 50, fireRate: 1.5, hp: 5, slowEffect: { factor: 0.6, duration: 3 } },
  repeater:   { ability: 'shoot', damage: 2, range: 50, fireRate: 1.5, hp: 5, shotsPerVolley: 2 },
  cherrybomb: { ability: 'explode', damage: 40, range: 20, fireRate: 0, hp: 1 },
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
      // Sub-wave 1: warm-up
      { type: 'basic', delay: 0 },
      { type: 'basic', delay: 2 },
      { type: 'basic', delay: 4 },
      { type: 'cone', delay: 6 },
      { type: 'basic', delay: 8 },
      // Sub-wave 2: pressure
      { type: 'basic', delay: 12 },
      { type: 'cone', delay: 13 },
      { type: 'basic', delay: 14 },
      { type: 'flag', delay: 15 },
      { type: 'basic', delay: 16 },
    ],
    reward: 100,
  },
  {
    wave: 2,
    spawns: [
      // Sub-wave 1: mixed assault
      { type: 'cone', delay: 0 },
      { type: 'basic', delay: 1.5 },
      { type: 'basic', delay: 3 },
      { type: 'flag', delay: 4 },
      { type: 'cone', delay: 5 },
      // Sub-wave 2: heavy push
      { type: 'bucket', delay: 10 },
      { type: 'cone', delay: 11 },
      { type: 'flag', delay: 12 },
      { type: 'basic', delay: 13 },
      { type: 'cone', delay: 14 },
      { type: 'bucket', delay: 16 },
    ],
    reward: 200,
  },
  {
    wave: 3,
    spawns: [
      // Sub-wave 1: fast rush
      { type: 'flag', delay: 0 },
      { type: 'flag', delay: 1 },
      { type: 'cone', delay: 2 },
      { type: 'bucket', delay: 3 },
      // Sub-wave 2: the horde
      { type: 'bucket', delay: 8 },
      { type: 'cone', delay: 9 },
      { type: 'cone', delay: 10 },
      { type: 'flag', delay: 11 },
      { type: 'bucket', delay: 12 },
      { type: 'bucket', delay: 14 },
      { type: 'cone', delay: 15 },
      { type: 'flag', delay: 16 },
    ],
    reward: 300,
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
