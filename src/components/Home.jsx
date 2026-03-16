function Home({ setCurrentView }) {
  return (
    <div className="home">
      <div className="content-box">
        <h2>Welcome, Miner!</h2>
        <p>Get ready to learn math with Steve and Alex!</p>
        <p>Pick a chapter to start your adventure:</p>
      </div>

      <div className="chapter-list">
        <button className="minecraft-button" onClick={() => setCurrentView('chapter1')}>
          Chapter 1: Math Laws
        </button>
        <button className="minecraft-button" onClick={() => setCurrentView('chapter2')}>
          Chapter 2: Fractions
        </button>
        <button className="minecraft-button" onClick={() => setCurrentView('chapter3')}>
          Chapter 3: More Fractions
        </button>
        <button className="minecraft-button" onClick={() => setCurrentView('chapter4')}>
          Chapter 4: Decimals
        </button>
        <button className="minecraft-button" onClick={() => setCurrentView('chapter5')}>
          Chapter 5: Decimal Operations
        </button>
      </div>
    </div>
  )
}

export default Home
