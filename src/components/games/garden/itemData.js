// 道具 (items) — consumable power-ups for garden and battle

export const ITEMS = {
  // Garden items
  shovel: {
    name: 'Shovel',
    description: 'Remove a plant (get 25% value back)',
    cost: 0,
    type: 'garden',
    emoji: '🪏',
    requiredChapter: 'chapter1',
  },
  fertilizer: {
    name: 'Fertilizer',
    description: 'Next watering gives 2x growth',
    cost: 30,
    type: 'garden',
    emoji: '🧪',
    requiredChapter: 'chapter3',
  },
  plantfood: {
    name: 'Plant Food',
    description: 'Instantly mature a plant',
    cost: 80,
    type: 'garden',
    emoji: '🌟',
    requiredStars: 6,
  },

  // Battle items
  freeze: {
    name: 'Freeze',
    description: 'Freeze all zombies for 5 seconds',
    cost: 50,
    type: 'battle',
    emoji: '🧊',
    requiredChapter: 'chapter5',
  },
  cherrybomb_battle: {
    name: 'Cherry Bomb',
    description: 'Area damage: 40 to all nearby zombies',
    cost: 60,
    type: 'battle',
    emoji: '💣',
    requiredStars: 12,
  },
  plantfood_battle: {
    name: 'Plant Food+',
    description: 'Supercharge a plant for 10s (2x power)',
    cost: 80,
    type: 'battle',
    emoji: '⚡',
    requiredStars: 15,
  },

  // Math-themed battle consumables
  times2: {
    name: '×2',
    description: 'Double a plant\'s attack damage for the battle',
    cost: 45,
    type: 'battle',
    emoji: '×2',
    requiredStars: 3,
  },
  square: {
    name: 'Square!',
    description: 'Clone a plant into a 2×2 formation (4 plants!)',
    cost: 100,
    type: 'battle',
    emoji: 'x²',
    requiredChapter: 'chapter6',
  },
  times0: {
    name: '×0',
    description: 'Click a zombie to eliminate it — misclick a plant and it\'s gone!',
    cost: 70,
    type: 'battle',
    emoji: '×0',
    requiredStars: 9,
  },
  pizza: {
    name: '⅓ Pizza',
    description: 'Drop anywhere to attract all zombies for 6 seconds',
    cost: 35,
    type: 'battle',
    emoji: '🍕',
    requiredChapter: 'chapter2',
  },
}

export function getGardenItems() {
  return Object.entries(ITEMS).filter(([, v]) => v.type === 'garden')
}

export function getBattleItems() {
  return Object.entries(ITEMS).filter(([, v]) => v.type === 'battle')
}
