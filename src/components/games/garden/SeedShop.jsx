import { useState } from 'react'
import { PLANT_TYPES } from './gardenData'
import { ITEMS, getGardenItems, getBattleItems } from './itemData'
import { Peashooter, Sunflower, WallNut, Chomper, SnowPea, Repeater, CherryBomb, CabbagePult, KernelPult } from '../../characters'

const PLANT_ICONS = {
  sunflower: Sunflower,
  peashooter: Peashooter,
  wallnut: WallNut,
  chomper: Chomper,
  snowpea: SnowPea,
  repeater: Repeater,
  cherrybomb: CherryBomb,
  cabbagepult: CabbagePult,
  kernelpult: KernelPult,
}

const CHAPTER_NAMES = {
  chapter1: 'Ch1 Quiz',
  chapter2: 'Ch2 Quiz',
  chapter3: 'Ch3 Quiz',
  chapter4: 'Ch4 Quiz',
  chapter5: 'Ch5 Quiz',
  chapter6: 'Ch6 Quiz',
}

function SeedShop({ coins, onBuy, onBuyItem, onClose, browseOnly, unlockedPlants, unlockedItems, inventory, highestWave, plots }) {
  const [tab, setTab] = useState('plants')
  const plantTypes = Object.entries(PLANT_TYPES)
  const allItems = [...getGardenItems(), ...getBattleItems()]

  return (
    <div className="garden-shop-overlay" onClick={onClose}>
      <div className="garden-shop" onClick={e => e.stopPropagation()}>
        <h2>Shop</h2>
        <p className="shop-coins">Your coins: {coins} 🪙</p>

        <div className="shop-tabs">
          <button
            className={`plot-btn ${tab === 'plants' ? 'plot-btn-active' : ''}`}
            onClick={() => setTab('plants')}
          >
            🌱 Seeds
          </button>
          <button
            className={`plot-btn ${tab === 'items' ? 'plot-btn-active' : ''}`}
            onClick={() => setTab('items')}
          >
            🎒 Items
          </button>
        </div>

        {tab === 'plants' && (
          <>
            {browseOnly && <p className="shop-hint">Tap an empty plot first, then buy a seed!</p>}
            <div className="shop-items">
              {plantTypes.map(([key, def]) => {
                const isLocked = def.requiredChapter && !unlockedPlants?.includes(key)
                const canAfford = coins >= def.seedCost && !isLocked
                const Icon = PLANT_ICONS[key]
                return (
                  <button
                    key={key}
                    className={`shop-item ${isLocked ? 'shop-item-locked' : canAfford ? '' : 'shop-item-disabled'}`}
                    onClick={() => !isLocked && canAfford && onBuy(key)}
                    disabled={isLocked || !canAfford}
                  >
                    <div className="shop-item-icon">
                      {Icon ? <Icon size={36} /> : <span style={{ fontSize: 28 }}>{def.emoji}</span>}
                    </div>
                    <div className="shop-item-info">
                      <span className="shop-item-name">{def.name}</span>
                      {isLocked ? (
                        <span className="shop-item-locked-text">
                          🔒 Complete {CHAPTER_NAMES[def.requiredChapter]} to unlock
                        </span>
                      ) : (
                        <>
                          <span className="shop-item-desc">{def.description}</span>
                          <span className="shop-item-stats">
                            Cost: {def.seedCost} 🪙 | Sells: {def.sellValue} 🪙 | Grows in {def.growthTicksNeeded} waters
                          </span>
                        </>
                      )}
                    </div>
                  </button>
                )
              })}
            </div>
          </>
        )}

        {tab === 'items' && (
          <div className="shop-items">
            {allItems.map(([key, item]) => {
              const needsItem = item.requiresItem && !(inventory?.[item.requiresItem] > 0)
              const needsWave = item.requiredWave && (highestWave || 0) < item.requiredWave
              const needsPlant = item.requiresPlant && !(plots || []).some(p => p.plant?.type === item.requiresPlant)
              const isLocked = needsItem || needsWave || needsPlant || (!item.requiredWave && !item.requiresItem && !item.requiresPlant && !unlockedItems?.includes(key))
              const canAfford = coins >= item.cost && !isLocked
              const owned = inventory?.[key] || 0
              const lockReason = needsPlant
                ? `Grow a ${PLANT_TYPES[item.requiresPlant]?.name || item.requiresPlant} first`
                : needsWave
                  ? `Beat Wave ${item.requiredWave} to unlock`
                  : needsItem
                    ? `Buy a ${ITEMS[item.requiresItem]?.name} first`
                    : item.requiredChapter
                      ? `Complete ${CHAPTER_NAMES[item.requiredChapter]} to unlock`
                      : item.requiredStars
                        ? `Need ${item.requiredStars}★ total mastery`
                        : ''
              return (
                <button
                  key={key}
                  className={`shop-item ${isLocked ? 'shop-item-locked' : canAfford ? '' : 'shop-item-disabled'}`}
                  onClick={() => !isLocked && canAfford && onBuyItem(key)}
                  disabled={isLocked || !canAfford}
                >
                  <div className="shop-item-icon">
                    <span style={{ fontSize: 28 }}>{item.emoji}</span>
                  </div>
                  <div className="shop-item-info">
                    <span className="shop-item-name">
                      {item.name}
                      {owned > 0 && <span className="shop-item-owned"> ×{owned}</span>}
                      <span className="shop-item-type-badge">{item.type === 'battle' ? '⚔️' : '🌱'}</span>
                    </span>
                    {isLocked ? (
                      <span className="shop-item-locked-text">🔒 {lockReason}</span>
                    ) : (
                      <>
                        <span className="shop-item-desc">{item.description}</span>
                        <span className="shop-item-stats">
                          {item.cost > 0 ? `Cost: ${item.cost} 🪙` : 'Free to use'}
                        </span>
                      </>
                    )}
                  </div>
                </button>
              )
            })}
          </div>
        )}

        <button className="minecraft-button secondary" onClick={onClose}>Close</button>
      </div>
    </div>
  )
}

export default SeedShop
