import { useState, useMemo } from 'react'
import GardenPlot from './GardenPlot'
import SeedShop from './SeedShop'
import WateringSession from './WateringSession'
import MathForCoins from './MathForCoins'
import DefendMode from './DefendMode'
import { CrazyDave, Zombie } from '../../characters'
import { PLANT_TYPES, getPlotPosition, getGrowthStage, GRID_CENTER } from './gardenData'
import {
  buyAndPlant, growPlantAndEarnCoins, harvestPlant,
  unlockPlot, earnCoins, getSellValue,
  buyItem, useItem, addItemToInventory,
} from './economy'
import { loadProgress, getUnlockedPlants, getUnlockedItems, getTotalStars } from '../../../data/progressState'
import { ITEMS } from './itemData'

function GardenMode({ gardenState, dispatch, chapters, onBack }) {
  const [shopOpen, setShopOpen] = useState(false)
  const [wateringPlotIndex, setWateringPlotIndex] = useState(null)
  const [plantingPlotIndex, setPlantingPlotIndex] = useState(null)
  const [message, setMessage] = useState(null)
  const [battleMode, setBattleMode] = useState(false)
  const [mathForCoins, setMathForCoins] = useState(false)
  const [activeItem, setActiveItem] = useState(null) // item being used on a plot
  const [dugUpPlant, setDugUpPlant] = useState(null) // { plant, fromIndex } — plant dug up by shovel
  const [shovelChoice, setShovelChoice] = useState(false) // show throw/transfer/store popup
  const [nurseryOpen, setNurseryOpen] = useState(false)

  // Load chapter progress to determine unlocks
  const progress = useMemo(() => loadProgress(), [shopOpen, battleMode])
  const unlockedPlants = useMemo(() => getUnlockedPlants(progress), [progress])
  const unlockedItems = useMemo(() => getUnlockedItems(progress), [progress])
  const totalStars = useMemo(() => getTotalStars(progress), [progress])

  const hasMaturePlants = gardenState.plots.some(
    p => p.plant && getGrowthStage(p.plant) === 'mature'
  )

  function showMessage(text) {
    setMessage(text)
    setTimeout(() => setMessage(null), 2500)
  }

  function handleBuySeed(plantType) {
    if (plantingPlotIndex === null) return
    dispatch(prev => {
      const next = buyAndPlant(prev, plantingPlotIndex, plantType)
      return next
    })
    const def = PLANT_TYPES[plantType]
    setShopOpen(false)
    setPlantingPlotIndex(null)
    showMessage(`Planted a ${def.name} seed! (-${def.seedCost} coins)`)
  }

  function handleHarvest(plotIndex) {
    const plot = gardenState.plots[plotIndex]
    if (!plot?.plant) return
    const value = getSellValue(plot.plant)
    dispatch(prev => harvestPlant(prev, plotIndex))
    showMessage(`Sold for ${value} coins! 🪙`)
  }

  function handleUnlock(plotIndex) {
    const plot = gardenState.plots[plotIndex]
    // Only allow unlocking plots adjacent to an already-unlocked plot
    const hasAdjacentUnlocked = gardenState.plots.some(p =>
      p.unlocked &&
      Math.abs(p.row - plot.row) + Math.abs(p.col - plot.col) === 1
    )
    if (!hasAdjacentUnlocked) {
      showMessage('Must unlock next to an existing plot!')
      return
    }
    dispatch(prev => unlockPlot(prev, plotIndex))
    showMessage('Plot unlocked!')
  }

  function handleGrowAndEarn(updatedPlant, coinsEarned) {
    if (wateringPlotIndex === null) return
    dispatch(prev => growPlantAndEarnCoins(prev, wateringPlotIndex, updatedPlant, coinsEarned))
  }

  function handleMathCoinsEarned(amount) {
    dispatch(prev => earnCoins(prev, amount))
  }

  function handleBuyItem(itemKey) {
    dispatch(prev => buyItem(prev, itemKey))
    const item = ITEMS[itemKey]
    showMessage(`Bought ${item?.name}! (-${item?.cost} 🪙)`)
  }

  function handleUseGardenItem(itemKey, plotIndex) {
    const plot = gardenState.plots[plotIndex]
    if (itemKey === 'shovel') {
      // If transferring: place the dug-up plant
      if (dugUpPlant && !shovelChoice) {
        if (!plot.unlocked) {
          showMessage('That plot is locked!')
          return
        }
        if (plot.plant) {
          showMessage('That plot already has a plant!')
          return
        }
        dispatch(prev => {
          const newPlots = [...prev.plots]
          newPlots[plotIndex] = { ...newPlots[plotIndex], plant: dugUpPlant.plant }
          return { ...prev, plots: newPlots }
        })
        setDugUpPlant(null)
        showMessage('Plant moved!')
        return
      }
      // Dig up a plant and show choice menu
      if (!plot?.plant) return
      const plantToMove = plot.plant
      const fromIdx = plotIndex
      dispatch(prev => {
        const newPlots = [...prev.plots]
        newPlots[plotIndex] = { ...newPlots[plotIndex], plant: null }
        return { ...prev, plots: newPlots }
      })
      setDugUpPlant({ plant: plantToMove, fromIndex: fromIdx })
      setShovelChoice(true)
    } else if (itemKey === 'fertilizer') {
      if (!plot?.plant) return
      dispatch(prev => {
        let next = useItem(prev, 'fertilizer')
        if (!next) return prev
        const newPlots = [...next.plots]
        const plant = newPlots[plotIndex].plant
        if (plant) {
          newPlots[plotIndex] = { ...newPlots[plotIndex], plant: { ...plant, fertilized: true } }
        }
        return { ...next, plots: newPlots }
      })
      showMessage('Fertilized! Next watering gives 2x growth!')
    } else if (itemKey === 'plantfood') {
      if (!plot?.plant) return
      const def = PLANT_TYPES[plot.plant.type]
      if (!def) return
      dispatch(prev => {
        let next = useItem(prev, 'plantfood')
        if (!next) return prev
        const newPlots = [...next.plots]
        const plant = newPlots[plotIndex].plant
        if (plant) {
          newPlots[plotIndex] = { ...newPlots[plotIndex], plant: { ...plant, growthTicks: def.growthTicksNeeded } }
        }
        return { ...next, plots: newPlots }
      })
      showMessage('Plant Food! Instantly matured!')
    }
    setActiveItem(null)
  }

  const hasFlowerPot = (gardenState.inventory?.flowerpot || 0) > 0

  const wateringPlant = wateringPlotIndex !== null
    ? gardenState.plots[wateringPlotIndex]?.plant
    : null

  // Math for coins mode
  if (mathForCoins) {
    return (
      <MathForCoins
        chapters={chapters}
        onEarnCoins={handleMathCoinsEarned}
        onClose={() => setMathForCoins(false)}
        coins={gardenState.coins}
      />
    )
  }

  // Battle mode
  if (battleMode) {
    return (
      <DefendMode
        gardenState={gardenState}
        dispatch={dispatch}
        onBack={() => setBattleMode(false)}
      />
    )
  }

  return (
    <div className="garden-mode">
      {/* HUD */}
      <div className="garden-hud">
        <span className="garden-coins">🪙 {gardenState.coins}</span>
        <button className="minecraft-button" onClick={() => setMathForCoins(true)} style={{ background: '#1565C0' }}>
          📝 Earn Coins
        </button>
        <button className="minecraft-button" onClick={() => { setPlantingPlotIndex(null); setShopOpen(true) }}>
          🛒 Shop
        </button>
        <button
          className="minecraft-button"
          onClick={() => setBattleMode(true)}
          disabled={!hasMaturePlants}
          title={hasMaturePlants ? 'Defend the Seed Vault!' : 'Grow mature plants first!'}
          style={{ background: hasMaturePlants ? '#c62828' : undefined }}
        >
          <span className="btn-with-icon">
            <Zombie size={18} /> Defend!
          </span>
        </button>
        {(gardenState.nursery?.length > 0 || hasFlowerPot) && (
          <button className="minecraft-button" onClick={() => setNurseryOpen(true)} style={{ background: '#2E7D32' }}>
            🪴 Nursery{gardenState.nursery?.length > 0 ? ` (${gardenState.nursery.length})` : ''}
          </button>
        )}
        <button className="minecraft-button secondary" onClick={onBack}>
          ← Home
        </button>
      </div>

      {/* Shovel choice popup */}
      {dugUpPlant && shovelChoice && (
        <div className="garden-shop-overlay" onClick={() => {
          // Cancel: put plant back
          dispatch(prev => {
            const newPlots = [...prev.plots]
            newPlots[dugUpPlant.fromIndex] = { ...newPlots[dugUpPlant.fromIndex], plant: dugUpPlant.plant }
            return { ...prev, plots: newPlots }
          })
          setDugUpPlant(null)
          setShovelChoice(false)
        }}>
          <div className="shovel-choice-popup" onClick={e => e.stopPropagation()}>
            <h3>🪏 {PLANT_TYPES[dugUpPlant.plant.type]?.name}</h3>
            <p style={{ fontSize: '0.8rem', margin: '0.3rem 0' }}>What do you want to do?</p>
            <div className="shovel-choice-buttons">
              <button className="minecraft-button" style={{ background: '#c62828' }} onClick={() => {
                setShovelChoice(false)
                setDugUpPlant(null)
                setActiveItem(null)
                showMessage('Plant thrown away!')
              }}>
                🗑️ Throw Away
              </button>
              <button className="minecraft-button" style={{ background: '#1565C0' }} onClick={() => {
                setShovelChoice(false)
                showMessage('Tap an empty plot to place it')
              }}>
                🔄 Transfer
              </button>
              <button
                className={`minecraft-button ${hasFlowerPot ? '' : 'secondary'}`}
                style={hasFlowerPot ? { background: '#2E7D32' } : {}}
                disabled={!hasFlowerPot}
                onClick={() => {
                  dispatch(prev => ({
                    ...prev,
                    nursery: [...(prev.nursery || []), dugUpPlant.plant],
                  }))
                  setShovelChoice(false)
                  setDugUpPlant(null)
                  setActiveItem(null)
                  showMessage('Stored in nursery!')
                }}
              >
                🪴 Store in Pot
                {!hasFlowerPot && <span style={{ display: 'block', fontSize: '0.6rem' }}>Need Flower Pot</span>}
              </button>
            </div>
            <button className="minecraft-button secondary" style={{ marginTop: '0.5rem' }} onClick={() => {
              dispatch(prev => {
                const newPlots = [...prev.plots]
                newPlots[dugUpPlant.fromIndex] = { ...newPlots[dugUpPlant.fromIndex], plant: dugUpPlant.plant }
                return { ...prev, plots: newPlots }
              })
              setDugUpPlant(null)
              setShovelChoice(false)
            }}>
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Transfer mode — waiting for plot click */}
      {dugUpPlant && !shovelChoice && (
        <div className="garden-active-item">
          🔄 Placing {PLANT_TYPES[dugUpPlant.plant.type]?.name} — tap an empty plot, or
          <button className="minecraft-button secondary" style={{ marginLeft: '0.5rem', padding: '0.2rem 0.5rem' }} onClick={() => {
            if (dugUpPlant.fromIndex >= 0) {
              // Return to original plot
              dispatch(prev => {
                const newPlots = [...prev.plots]
                newPlots[dugUpPlant.fromIndex] = { ...newPlots[dugUpPlant.fromIndex], plant: dugUpPlant.plant }
                return { ...prev, plots: newPlots }
              })
            } else {
              // From nursery — put back in nursery
              dispatch(prev => ({
                ...prev,
                nursery: [...(prev.nursery || []), dugUpPlant.plant],
              }))
            }
            setDugUpPlant(null)
            setActiveItem(null)
            showMessage('Put the plant back')
          }}>
            Cancel
          </button>
        </div>
      )}

      {message && <div className="garden-message">{message}</div>}

      {/* Active item indicator */}
      {activeItem && (
        <div className="garden-active-item">
          Using: {ITEMS[activeItem]?.emoji} {ITEMS[activeItem]?.name} — tap a plant to use, or
          <button className="minecraft-button secondary" style={{ marginLeft: '0.5rem', padding: '0.2rem 0.5rem' }} onClick={() => setActiveItem(null)}>
            Cancel
          </button>
        </div>
      )}

      {/* Garden items quick bar */}
      {(() => {
        const gardenItemKeys = ['shovel', 'fertilizer', 'plantfood']
        const ownedItems = gardenItemKeys.filter(k => (gardenState.inventory?.[k] || 0) > 0 && unlockedItems.includes(k))
        if (ownedItems.length === 0) return null
        return (
          <div className="garden-items-bar">
            {ownedItems.map(k => (
              <button
                key={k}
                className={`garden-item-btn ${activeItem === k ? 'garden-item-active' : ''}`}
                onClick={() => setActiveItem(activeItem === k ? null : k)}
                title={ITEMS[k]?.description}
              >
                {ITEMS[k]?.emoji} ×{gardenState.inventory[k]}
              </button>
            ))}
          </div>
        )
      })()}

      {/* Garden field */}
      <div className="garden-field">
        {(() => {
          const vaultPos = getPlotPosition(GRID_CENTER.row, GRID_CENTER.col)
          return (
            <div className="garden-center" style={{ left: `${vaultPos.x}%`, top: `${vaultPos.y}%` }}>
              <CrazyDave size={48} animate />
              <span className="garden-center-label">Seed Vault</span>
            </div>
          )
        })()}

        {gardenState.plots.map((plot, i) => {
          const position = getPlotPosition(plot.row, plot.col)
          // Only render unlocked plots and locked plots adjacent to unlocked ones
          const isAdjacentToUnlocked = !plot.unlocked && gardenState.plots.some(p =>
            p.unlocked &&
            Math.abs(p.row - plot.row) + Math.abs(p.col - plot.col) === 1
          )
          if (!plot.unlocked && !isAdjacentToUnlocked) return null
          return (
            <GardenPlot
              key={i}
              plot={plot}
              position={position}
              coins={gardenState.coins}
              onPlant={() => {
                if (dugUpPlant) { handleUseGardenItem('shovel', i); return }
                if (activeItem) return // don't plant while using an item
                setPlantingPlotIndex(i); setShopOpen(true)
              }}
              onWater={() => {
                if (activeItem) {
                  handleUseGardenItem(activeItem, i)
                  return
                }
                setWateringPlotIndex(i)
              }}
              onHarvest={() => {
                if (activeItem) {
                  handleUseGardenItem(activeItem, i)
                  return
                }
                handleHarvest(i)
              }}
              onUnlock={() => handleUnlock(i)}
            />
          )
        })}
      </div>

      {/* Shop overlay */}
      {shopOpen && (
        <SeedShop
          coins={gardenState.coins}
          onBuy={plantingPlotIndex !== null ? handleBuySeed : () => {}}
          onBuyItem={handleBuyItem}
          onClose={() => { setShopOpen(false); setPlantingPlotIndex(null) }}
          browseOnly={plantingPlotIndex === null}
          unlockedPlants={unlockedPlants}
          unlockedItems={unlockedItems}
          inventory={gardenState.inventory}
          highestWave={gardenState.highestWave}
          plots={gardenState.plots}
        />
      )}

      {/* Nursery overlay */}
      {nurseryOpen && (
        <div className="garden-shop-overlay" onClick={() => setNurseryOpen(false)}>
          <div className="garden-shop" onClick={e => e.stopPropagation()}>
            <h2>🪴 Nursery</h2>
            <p className="shop-coins">Stored plants: {gardenState.nursery?.length || 0}</p>
            {(!gardenState.nursery || gardenState.nursery.length === 0) ? (
              <p style={{ padding: '1rem', color: '#8D6E63' }}>No plants stored. Use the shovel to dig up a plant, then choose "Store in Pot".</p>
            ) : (
              <div className="shop-items">
                {gardenState.nursery.map((plant, i) => {
                  const def = PLANT_TYPES[plant.type]
                  if (!def) return null
                  const stage = getGrowthStage(plant)
                  return (
                    <div key={i} className="shop-item nursery-item">
                      <div className="shop-item-icon">
                        <span style={{ fontSize: 28 }}>{def.emoji}</span>
                      </div>
                      <div className="shop-item-info">
                        <span className="shop-item-name">{def.name}</span>
                        <span className="shop-item-desc">Stage: {stage}{plant.mutation ? ` | ${plant.mutation}` : ''}</span>
                      </div>
                      <button
                        className="minecraft-button"
                        style={{ padding: '0.2rem 0.5rem', fontSize: '0.7rem' }}
                        onClick={() => {
                          // Put plant back: need to click an empty plot
                          setDugUpPlant({ plant, fromIndex: -1 })
                          setShovelChoice(false)
                          setActiveItem('shovel')
                          dispatch(prev => ({
                            ...prev,
                            nursery: prev.nursery.filter((_, j) => j !== i),
                          }))
                          setNurseryOpen(false)
                          showMessage('Tap an empty plot to place it')
                        }}
                      >
                        Plant
                      </button>
                    </div>
                  )
                })}
              </div>
            )}
            <button className="minecraft-button secondary" onClick={() => setNurseryOpen(false)}>Close</button>
          </div>
        </div>
      )}

      {/* Watering session overlay */}
      {wateringPlant && (
        <WateringSession
          plant={wateringPlant}
          chapters={chapters}
          onGrowAndEarn={handleGrowAndEarn}
          onClose={() => setWateringPlotIndex(null)}
        />
      )}
    </div>
  )
}

export default GardenMode
