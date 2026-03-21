import { useState, useEffect } from 'react'

function CoinDisplay() {
  const [coins, setCoins] = useState(() => {
    try {
      const raw = localStorage.getItem('cdg-save')
      if (!raw) return null
      return JSON.parse(raw).coins
    } catch {
      return null
    }
  })

  // Poll localStorage every 2 seconds to stay in sync with garden
  useEffect(() => {
    const interval = setInterval(() => {
      try {
        const raw = localStorage.getItem('cdg-save')
        if (raw) setCoins(JSON.parse(raw).coins)
      } catch { /* ignore */ }
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  if (coins === null) return null

  return (
    <span className="header-coins">🪙 {coins}</span>
  )
}

export default CoinDisplay
