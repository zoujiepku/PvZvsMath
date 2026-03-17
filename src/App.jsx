import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import ChapterOne from './components/ChapterOne'
import ChapterTwo from './components/ChapterTwo'
import ChapterThree from './components/ChapterThree'
import ChapterFour from './components/ChapterFour'
import ChapterFive from './components/ChapterFive'
import ChapterSix from './components/ChapterSix'
import Lesson from './components/Lesson'
import Quiz from './components/Quiz'
import Practice from './components/Practice'
import { chapter1Lesson, chapter1Quiz, chapter1PracticeConfig, generatePracticeProblem as generateCh1 } from './data/chapter1'
import { chapter2Lesson, chapter2Quiz, chapter2PracticeConfig, generatePracticeProblem as generateCh2 } from './data/chapter2'
import { chapter3Lesson, chapter3Quiz, chapter3PracticeConfig, generatePracticeProblem as generateCh3 } from './data/chapter3'
import { chapter4Lesson, chapter4Quiz, chapter4PracticeConfig, generatePracticeProblem as generateCh4 } from './data/chapter4'
import { chapter5Lesson, chapter5Quiz, chapter5PracticeConfig, generatePracticeProblem as generateCh5 } from './data/chapter5'
import { chapter6Lesson, chapter6Quiz, chapter6PracticeConfig, generatePracticeProblem as generateCh6 } from './data/chapter6'

const chapters = [
  { id: 'chapter1', Hub: ChapterOne, lesson: chapter1Lesson, quiz: chapter1Quiz, practice: chapter1PracticeConfig, generate: generateCh1 },
  { id: 'chapter2', Hub: ChapterTwo, lesson: chapter2Lesson, quiz: chapter2Quiz, practice: chapter2PracticeConfig, generate: generateCh2 },
  { id: 'chapter3', Hub: ChapterThree, lesson: chapter3Lesson, quiz: chapter3Quiz, practice: chapter3PracticeConfig, generate: generateCh3 },
  { id: 'chapter4', Hub: ChapterFour, lesson: chapter4Lesson, quiz: chapter4Quiz, practice: chapter4PracticeConfig, generate: generateCh4 },
  { id: 'chapter5', Hub: ChapterFive, lesson: chapter5Lesson, quiz: chapter5Quiz, practice: chapter5PracticeConfig, generate: generateCh5 },
  { id: 'chapter6', Hub: ChapterSix, lesson: chapter6Lesson, quiz: chapter6Quiz, practice: chapter6PracticeConfig, generate: generateCh6 },
]

function App() {
  const [currentView, setCurrentView] = useState('home')

  return (
    <div className="app">
      <header className="app-header" onClick={() => setCurrentView('home')} style={{ cursor: 'pointer' }}>
        <h1>PvZ vs Math</h1>
        <p className="subtitle">Defend the Lawn with Math!</p>
      </header>

      {currentView === 'home' && <Home setCurrentView={setCurrentView} />}

      {chapters.map(ch => (
        <span key={ch.id}>
          {currentView === ch.id && <ch.Hub setCurrentView={setCurrentView} />}
          {currentView === `${ch.id}-lesson` && (
            <Lesson lessonData={ch.lesson} setCurrentView={setCurrentView} returnView={ch.id} />
          )}
          {currentView === `${ch.id}-quiz` && (
            <Quiz quizData={ch.quiz} setCurrentView={setCurrentView} returnView={ch.id} />
          )}
          {currentView === `${ch.id}-practice` && (
            <Practice
              practiceConfig={ch.practice}
              generateFn={ch.generate}
              setCurrentView={setCurrentView}
              returnView={ch.id}
            />
          )}
        </span>
      ))}
    </div>
  )
}

export default App
