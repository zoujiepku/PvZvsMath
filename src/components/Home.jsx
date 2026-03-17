function Home({ setCurrentView }) {
  return (
    <div className="home">
      <div className="content-box">
        <h2>Welcome, Plant Commander!</h2>
        <p>Get ready to defend the lawn with math!</p>
        <p>Pick a chapter to power up your plants:</p>
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
        <button className="minecraft-button" onClick={() => setCurrentView('chapter6')}>
          Chapter 6: Exponents & Powers
        </button>
      </div>
    </div>
  )
}

export default Home
