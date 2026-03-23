// Plant type definitions, growth stages, ring layout

// Mature plants wilt back to "growing" if not watered within this many hours
export const WILT_HOURS = 24

export const PLANT_TYPES = {
  sunflower: {
    name: 'Sunflower',
    seedCost: 25,
    growthTicksNeeded: 3,
    sellValue: 50,
    emoji: '🌻',
    description: 'Cheap & fast. Produces passive coins when mature.',
  },
  peashooter: {
    name: 'Peashooter',
    seedCost: 50,
    growthTicksNeeded: 5,
    sellValue: 100,
    emoji: '🫛',
    description: 'Balanced fighter. Shoots peas in battle.',
  },
  wallnut: {
    name: 'Wall-nut',
    seedCost: 75,
    growthTicksNeeded: 8,
    sellValue: 120,
    emoji: '🛡️',
    description: 'Tough blocker. Absorbs zombie hits.',
  },
  chomper: {
    name: 'Chomper',
    seedCost: 150,
    growthTicksNeeded: 12,
    sellValue: 300,
    emoji: '🪴',
    description: 'Expensive but powerful. Eats zombies whole!',
  },
  snowpea: {
    name: 'Snow Pea',
    seedCost: 75,
    growthTicksNeeded: 6,
    sellValue: 130,
    emoji: '❄️',
    description: 'Shoots ice peas that slow zombies.',
    requiredChapter: 'chapter2',
  },
  repeater: {
    name: 'Repeater',
    seedCost: 100,
    growthTicksNeeded: 8,
    sellValue: 180,
    emoji: '🫛',
    description: 'Double-barreled! Shoots 2 peas per volley.',
    requiredChapter: 'chapter4',
  },
  cherrybomb: {
    name: 'Cherry Bomb',
    seedCost: 125,
    growthTicksNeeded: 4,
    sellValue: 50,
    emoji: '🍒',
    description: 'Single-use explosion! Massive area damage.',
    requiredChapter: 'chapter6',
  },
  cabbagepult: {
    name: 'Cabbage-pult',
    seedCost: 75,
    growthTicksNeeded: 6,
    sellValue: 130,
    emoji: '🥬',
    description: 'Lobs cabbages over obstacles. Steady damage dealer.',
  },
  kernelpult: {
    name: 'Kernel-pult',
    seedCost: 100,
    growthTicksNeeded: 10,
    sellValue: 160,
    emoji: '🌽',
    description: '20% chance to lob butter that freezes zombies for 5s!',
  },
}

export const MUTATIONS = {
  golden: { label: 'Golden', color: '#FFD700', sellMultiplier: 2 },
  frozen: { label: 'Frozen', color: '#81D4FA', sellMultiplier: 1.5 },
  fire:   { label: 'Fire',   color: '#FF5722', sellMultiplier: 1.5 },
}

export function getGrowthStage(plant) {
  if (!plant) return null
  const def = PLANT_TYPES[plant.type]
  if (!def) return null
  const ratio = plant.growthTicks / def.growthTicksNeeded
  if (ratio <= 0) return 'seed'
  if (ratio < 0.5) return 'sprout'
  if (ratio < 1) return 'growing'
  return 'mature'
}

export function rollMutation(streak) {
  if (streak >= 10 && Math.random() < 0.3) {
    const types = Object.keys(MUTATIONS)
    return types[Math.floor(Math.random() * types.length)]
  }
  if (streak >= 5 && Math.random() < 0.15) {
    const types = Object.keys(MUTATIONS)
    return types[Math.floor(Math.random() * types.length)]
  }
  return null
}

// 11x11 grid layout — center cell (5,5) is the Seed Vault
export const GRID_SIZE = { rows: 11, cols: 11 }
export const GRID_CENTER = { row: 5, col: 5 }

export const PLOT_UNLOCK_COST = 200  // cost per additional plot

export function getPlotPosition(row, col) {
  return {
    x: (col + 0.5) / GRID_SIZE.cols * 100,
    y: (row + 0.5) / GRID_SIZE.rows * 100,
  }
}
