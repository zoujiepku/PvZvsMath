import { useState } from 'react'
import { CrazyDave, Sunflower, Peashooter, WallNut, Zombie } from '../../characters'

const STEPS = [
  {
    text: "Welcome to my garden! I'm Crazy Dave, and I need YOUR help growing plants to defend against zombies!",
    Character: CrazyDave,
  },
  {
    text: "First, buy seeds from the Shop. Sunflowers are cheap and earn coins. Peashooters are great fighters!",
    Character: Sunflower,
  },
  {
    text: "Plant seeds in the empty plots around my Seed Vault. Then tap the water drop to grow them!",
    Character: Peashooter,
  },
  {
    text: "To water a plant, you solve math problems. Each correct answer makes your plant grow. Get a streak for bonus growth and rare mutations!",
    Character: WallNut,
  },
  {
    text: "When plants are fully grown, harvest them for coins — or save them to defend against zombie waves! Let's grow!",
    Character: Zombie,
  },
]

function GardenTutorial({ onDone }) {
  const [step, setStep] = useState(0)
  const current = STEPS[step]

  return (
    <div className="garden-tutorial">
      <div className="content-box">
        <div className="dave-speech">
          <current.Character size={56} animate />
          <div className="speech-bubble">
            <p>{current.text}</p>
          </div>
        </div>
        <div className="tutorial-nav">
          {step > 0 && (
            <button className="minecraft-button secondary" onClick={() => setStep(step - 1)}>
              ← Back
            </button>
          )}
          {step < STEPS.length - 1 ? (
            <button className="minecraft-button" onClick={() => setStep(step + 1)}>
              Next →
            </button>
          ) : (
            <button className="minecraft-button" onClick={onDone}>
              Let's Grow! 🌱
            </button>
          )}
          <button className="minecraft-button secondary" onClick={onDone} style={{ fontSize: '0.8rem' }}>
            Skip
          </button>
        </div>
      </div>
    </div>
  )
}

export default GardenTutorial
