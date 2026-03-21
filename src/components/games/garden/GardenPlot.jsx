import PlantDisplay from './PlantDisplay'
import { PLANT_TYPES, getGrowthStage, PLOT_UNLOCK_COST } from './gardenData'
import { getSellValue } from './economy'

function GardenPlot({ plot, position, onWater, onHarvest, onPlant, onUnlock, coins }) {
  const { unlocked, plant } = plot

  if (!unlocked) {
    const canAfford = coins >= PLOT_UNLOCK_COST
    return (
      <div
        className="garden-plot garden-plot-locked"
        style={{ left: `${position.x}%`, top: `${position.y}%` }}
        onClick={canAfford ? onUnlock : undefined}
        title={canAfford ? `Unlock for ${PLOT_UNLOCK_COST} coins` : `Need ${PLOT_UNLOCK_COST} coins`}
      >
        <span className="plot-lock">🔒</span>
        <span className="plot-cost">{PLOT_UNLOCK_COST}</span>
      </div>
    )
  }

  if (!plant) {
    return (
      <div
        className="garden-plot garden-plot-empty"
        style={{ left: `${position.x}%`, top: `${position.y}%` }}
        onClick={onPlant}
        title="Plant a seed"
      >
        <span className="plot-empty-icon">+</span>
      </div>
    )
  }

  const stage = getGrowthStage(plant)
  const def = PLANT_TYPES[plant.type]
  const isMature = stage === 'mature'
  const sellValue = getSellValue(plant)
  const progress = Math.min(plant.growthTicks / def.growthTicksNeeded, 1)

  return (
    <div
      className={`garden-plot garden-plot-planted ${isMature ? 'garden-plot-ready' : ''}`}
      style={{ left: `${position.x}%`, top: `${position.y}%` }}
    >
      <PlantDisplay plant={plant} size={36} />

      {!isMature && (
        <div className="plot-progress-bar">
          <div className="plot-progress-fill" style={{ width: `${progress * 100}%` }} />
        </div>
      )}

      <div className="plot-actions">
        {!isMature && (
          <button className="plot-btn plot-btn-water" onClick={onWater} title="Water (solve math)">
            💧
          </button>
        )}
        {isMature && (
          <button className="plot-btn plot-btn-harvest" onClick={onHarvest} title={`Sell for ${sellValue} coins`}>
            💰{sellValue}
          </button>
        )}
      </div>
    </div>
  )
}

export default GardenPlot
