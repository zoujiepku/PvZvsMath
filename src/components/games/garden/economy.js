// Centralized economy system for Crazy Dave's Garden
// All coin rewards, costs, and streak logic in one place

import { PLANT_TYPES, MUTATIONS, PLOT_UNLOCK_COST } from './gardenData'
import { ITEMS } from './itemData'

// === Coin Rewards ===
export const MATH_REWARD = 5            // coins per correct answer
export const STREAK_THRESHOLDS = [
  { min: 10, bonus: 10, label: 'LEGENDARY' },
  { min: 5,  bonus: 5,  label: 'Bonus' },
  { min: 3,  bonus: 2,  label: 'Nice' },
]

export function getStreakBonus(streak) {
  for (const t of STREAK_THRESHOLDS) {
    if (streak >= t.min) return t.bonus
  }
  return 0
}

export function getMathReward(streak) {
  const bonus = getStreakBonus(streak)
  return { base: MATH_REWARD, bonus, total: MATH_REWARD + bonus }
}

// === Sell Values ===
export function getSellValue(plant) {
  const def = PLANT_TYPES[plant.type]
  if (!def) return 0
  let value = def.sellValue
  if (plant.mutation && MUTATIONS[plant.mutation]) {
    value = Math.floor(value * MUTATIONS[plant.mutation].sellMultiplier)
  }
  return value
}

// === Costs ===
export function getSeedCost(plantType) {
  return PLANT_TYPES[plantType]?.seedCost || 0
}

export function getPlotUnlockCost() {
  return PLOT_UNLOCK_COST
}

// === Passive Income ===
const SUNFLOWER_COINS_PER_MINUTE = 5
const MAX_OFFLINE_INCOME = 500

export function calculatePassiveIncome(plots, lastVisit) {
  if (!lastVisit) return 0
  const minutes = (Date.now() - lastVisit) / 60000

  let matureSunflowers = 0
  for (const plot of plots) {
    if (plot.plant && plot.plant.type === 'sunflower') {
      const def = PLANT_TYPES.sunflower
      if (plot.plant.growthTicks >= def.growthTicksNeeded) {
        matureSunflowers++
      }
    }
  }

  const income = Math.floor(matureSunflowers * SUNFLOWER_COINS_PER_MINUTE * minutes)
  return Math.min(income, MAX_OFFLINE_INCOME)
}

// === State Helpers ===
// All garden state mutations go through these functions
// They return new state objects (immutable)

export function buyAndPlant(state, plotIndex, plantType) {
  const cost = getSeedCost(plantType)
  if (state.coins < cost) return null

  const plot = state.plots[plotIndex]
  if (!plot || !plot.unlocked || plot.plant) return null

  const newPlots = [...state.plots]
  newPlots[plotIndex] = {
    ...plot,
    plant: {
      id: `plant-${Date.now()}-${plotIndex}`,
      type: plantType,
      growthTicks: 0,
      mutation: null,
      lastWatered: Date.now(),
    },
  }

  return { ...state, coins: state.coins - cost, plots: newPlots }
}

export function growPlantAndEarnCoins(state, plotIndex, updatedPlant, coinsEarned) {
  const newPlots = [...state.plots]
  newPlots[plotIndex] = {
    ...newPlots[plotIndex],
    plant: updatedPlant,
  }
  return { ...state, plots: newPlots, coins: state.coins + (coinsEarned || 0) }
}

export function harvestPlant(state, plotIndex) {
  const plot = state.plots[plotIndex]
  if (!plot || !plot.plant) return null

  const value = getSellValue(plot.plant)
  const newPlots = [...state.plots]
  newPlots[plotIndex] = { ...plot, plant: null }

  return { ...state, coins: state.coins + value, plots: newPlots, _harvestValue: value }
}

export function unlockPlot(state, plotIndex) {
  const cost = getPlotUnlockCost()
  if (state.coins < cost) return null

  const newPlots = [...state.plots]
  newPlots[plotIndex] = { ...newPlots[plotIndex], unlocked: true }

  return { ...state, coins: state.coins - cost, plots: newPlots }
}

export function earnCoins(state, amount) {
  return { ...state, coins: state.coins + amount }
}

// === Items (道具) ===

export function buyItem(state, itemKey) {
  const item = ITEMS[itemKey]
  if (!item || state.coins < item.cost) return null
  const inventory = { ...state.inventory }
  inventory[itemKey] = (inventory[itemKey] || 0) + 1
  return { ...state, coins: state.coins - item.cost, inventory }
}

export function useItem(state, itemKey) {
  const count = state.inventory?.[itemKey] || 0
  if (count <= 0) return null
  const inventory = { ...state.inventory }
  inventory[itemKey] = count - 1
  return { ...state, inventory }
}

export function addItemToInventory(state, itemKey, quantity = 1) {
  const inventory = { ...state.inventory }
  inventory[itemKey] = (inventory[itemKey] || 0) + quantity
  return { ...state, inventory }
}

export function applyBattleReward(state, coinsEarned, waveCompleted) {
  return {
    ...state,
    coins: state.coins + coinsEarned,
    highestWave: Math.max(state.highestWave, waveCompleted),
  }
}

export function removePlantsForBattle(state, plantPlotIndices) {
  const newPlots = [...state.plots]
  for (const idx of plantPlotIndices) {
    newPlots[idx] = { ...newPlots[idx], plant: null }
  }
  return { ...state, plots: newPlots }
}

// Return plants to garden after battle
// survivingPlants: [{ plotIndex, plant }] — returned at full health
// fallenPlants: [{ plotIndex, plant }] — returned wounded (reset to sprout stage)
export function returnPlantsAfterBattle(state, survivingPlants, fallenPlants) {
  const newPlots = [...state.plots]

  for (const { plotIndex, plant } of survivingPlants) {
    newPlots[plotIndex] = {
      ...newPlots[plotIndex],
      plant: { ...plant, growthTicks: PLANT_TYPES[plant.type]?.growthTicksNeeded || 5 },
    }
  }

  for (const { plotIndex, plant } of fallenPlants) {
    // Wounded: reset to 1 tick (sprout stage, needs re-watering)
    newPlots[plotIndex] = {
      ...newPlots[plotIndex],
      plant: { ...plant, growthTicks: 1 },
    }
  }

  return { ...state, plots: newPlots }
}
