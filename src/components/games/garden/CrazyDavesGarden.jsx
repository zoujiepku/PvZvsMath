import { useState, useEffect, useCallback } from 'react'
import GardenMode from './GardenMode'
import GardenTutorial from './GardenTutorial'
import { loadGarden, saveGarden } from './gardenState'
import './garden.css'

function CrazyDavesGarden({ setCurrentView, chapters }) {
  const [gardenState, setGardenState] = useState(() => loadGarden())
  const [showWelcomeBack, setShowWelcomeBack] = useState(
    () => (gardenState.passiveIncome || 0) > 0 || (gardenState.wiltedCount || 0) > 0
  )
  const [showTutorial, setShowTutorial] = useState(() => !gardenState.tutorialSeen)

  // Auto-save whenever gardenState changes
  useEffect(() => {
    saveGarden(gardenState)
  }, [gardenState])

  // Dismiss welcome-back after 3 seconds
  useEffect(() => {
    if (showWelcomeBack) {
      const t = setTimeout(() => setShowWelcomeBack(false), 3000)
      return () => clearTimeout(t)
    }
  }, [showWelcomeBack])

  // Single dispatch function — all state changes go through here
  const dispatch = useCallback((updater) => {
    setGardenState(prev => {
      const next = typeof updater === 'function' ? updater(prev) : updater
      return next || prev // if updater returns null, keep prev state
    })
  }, [])

  function handleTutorialDone() {
    setShowTutorial(false)
    dispatch(prev => ({ ...prev, tutorialSeen: true }))
  }

  if (showTutorial) {
    return <GardenTutorial onDone={handleTutorialDone} />
  }

  return (
    <>
      {showWelcomeBack && (
        <div className="garden-welcome-back">
          {gardenState.passiveIncome > 0 && (
            <div>Your sunflowers earned {gardenState.passiveIncome} coins while you were away! 🌻</div>
          )}
          {gardenState.wiltedCount > 0 && (
            <div>{gardenState.wiltedCount} plant{gardenState.wiltedCount > 1 ? 's' : ''} wilted and need watering! 💧</div>
          )}
        </div>
      )}
      <GardenMode
        gardenState={gardenState}
        dispatch={dispatch}
        chapters={chapters}
        onBack={() => setCurrentView('home')}
      />
    </>
  )
}

export default CrazyDavesGarden
