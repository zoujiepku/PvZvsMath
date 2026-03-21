import { Peashooter, Sunflower, WallNut, Chomper, SnowPea, Repeater, CherryBomb } from '../../characters'
import { PLANT_TYPES, MUTATIONS, getGrowthStage } from './gardenData'

const PLANT_COMPONENTS = {
  peashooter: Peashooter,
  sunflower: Sunflower,
  wallnut: WallNut,
  chomper: Chomper,
  snowpea: SnowPea,
  repeater: Repeater,
  cherrybomb: CherryBomb,
}

function PlantDisplay({ plant, size = 40 }) {
  if (!plant) return null

  const stage = getGrowthStage(plant)
  const Component = PLANT_COMPONENTS[plant.type]
  const def = PLANT_TYPES[plant.type]

  // Scale and opacity by growth stage
  const stageStyles = {
    seed:    { scale: 0.3, opacity: 0.5 },
    sprout:  { scale: 0.55, opacity: 0.7 },
    growing: { scale: 0.8, opacity: 0.9 },
    mature:  { scale: 1, opacity: 1 },
  }

  const { scale, opacity } = stageStyles[stage] || stageStyles.mature

  // Mutation glow
  const mutation = plant.mutation && MUTATIONS[plant.mutation]
  const glowStyle = mutation ? {
    filter: `drop-shadow(0 0 6px ${mutation.color}) drop-shadow(0 0 12px ${mutation.color})`,
  } : {}

  const stageClass = stage === 'mature' ? 'garden-plant-mature' : ''

  return (
    <div
      className={`garden-plant ${stageClass}`}
      style={{
        transform: `scale(${scale})`,
        opacity,
        ...glowStyle,
        transition: 'transform 0.5s, opacity 0.5s',
      }}
    >
      {stage === 'seed' ? (
        <div className="garden-seed" title={def.name + ' seed'}>🌰</div>
      ) : Component ? (
        <Component size={size} animate={stage === 'mature'} />
      ) : (
        <span style={{ fontSize: size * 0.6 }}>{def.emoji}</span>
      )}
      {mutation && (
        <span className="garden-mutation-badge" style={{ background: mutation.color }}>
          {mutation.label}
        </span>
      )}
    </div>
  )
}

export default PlantDisplay
