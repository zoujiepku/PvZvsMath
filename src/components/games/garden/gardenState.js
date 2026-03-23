// localStorage save/load for garden state
import { calculatePassiveIncome } from './economy'
import { PLANT_TYPES, getGrowthStage, WILT_HOURS } from './gardenData'

import { GRID_SIZE, GRID_CENTER } from './gardenData'

const SAVE_KEY = 'cdg-save'

function generateGridPlots() {
  const plots = []
  for (let row = 0; row < GRID_SIZE.rows; row++) {
    for (let col = 0; col < GRID_SIZE.cols; col++) {
      // Skip center cell — that's the Seed Vault
      if (row === GRID_CENTER.row && col === GRID_CENTER.col) continue
      // Unlock plots within 2 steps (Chebyshev distance) of center
      const dist = Math.max(Math.abs(row - GRID_CENTER.row), Math.abs(col - GRID_CENTER.col))
      const unlocked = dist <= 2
      plots.push({ row, col, unlocked, plant: null })
    }
  }
  return plots
}

const STARTER_BATTLE_ITEMS = {
  times2: 2,
  pizza: 2,
  freeze: 1,
}

const DEFAULT_STATE = {
  version: 5,
  coins: 1000,
  plots: generateGridPlots(),
  highestWave: 0,
  lastVisit: Date.now(),
  tutorialSeen: false,
  inventory: { ...STARTER_BATTLE_ITEMS },
  nursery: [],
}

export function loadGarden() {
  try {
    const raw = localStorage.getItem(SAVE_KEY)
    if (!raw) return { ...DEFAULT_STATE, lastVisit: Date.now() }
    const saved = JSON.parse(raw)
    if (!saved) return { ...DEFAULT_STATE, lastVisit: Date.now() }

    // Migrate v1 → v2: bonus 1000 coins for testing
    if (saved.version === 1) {
      saved.version = 2
      saved.coins = (saved.coins || 0) + 1000
    }

    // Migrate v2/v3 → v4: ring/10x10 layout → 11x11 grid with center vault
    if (saved.version === 2 || saved.version === 3) {
      const existingPlantCount = (saved.plots || []).filter(p => p.plant).length
      saved.version = 4
      saved.plots = generateGridPlots()
      saved.coins = (saved.coins || 0) + existingPlantCount * 50
    }

    // Migrate v4 → v5: add starter battle items
    if (saved.version === 4) {
      saved.version = 5
      const inv = saved.inventory || {}
      for (const [key, count] of Object.entries(STARTER_BATTLE_ITEMS)) {
        if (!inv[key]) inv[key] = count
      }
      saved.inventory = inv
    }

    if (saved.version !== 5) return { ...DEFAULT_STATE, lastVisit: Date.now() }

    // Backward compatibility: add inventory and nursery if missing
    if (!saved.inventory) saved.inventory = {}
    if (!saved.nursery) saved.nursery = []

    // Wilt check: mature plants revert to "growing" if not watered in time
    const wiltMs = WILT_HOURS * 60 * 60 * 1000
    let wiltedCount = 0
    saved.plots = saved.plots.map(plot => {
      if (!plot.plant) return plot
      const def = PLANT_TYPES[plot.plant.type]
      if (!def) return plot
      if (getGrowthStage(plot.plant) !== 'mature') return plot
      const lastWatered = plot.plant.lastWatered || saved.lastVisit || 0
      if (Date.now() - lastWatered > wiltMs) {
        wiltedCount++
        return {
          ...plot,
          plant: { ...plot.plant, growthTicks: def.growthTicksNeeded - 1 },
        }
      }
      return plot
    })
    saved.wiltedCount = wiltedCount

    const passiveIncome = calculatePassiveIncome(saved.plots, saved.lastVisit)
    saved.coins += passiveIncome
    saved.passiveIncome = passiveIncome
    saved.lastVisit = Date.now()
    return saved
  } catch {
    return { ...DEFAULT_STATE, lastVisit: Date.now() }
  }
}

export function saveGarden(state) {
  try {
    const { passiveIncome, wiltedCount, _harvestValue, ...saveData } = state
    localStorage.setItem(SAVE_KEY, JSON.stringify({ ...saveData, lastVisit: Date.now() }))
  } catch {
    // storage full or unavailable
  }
}

export function resetGarden() {
  localStorage.removeItem(SAVE_KEY)
  return { ...DEFAULT_STATE, lastVisit: Date.now() }
}
