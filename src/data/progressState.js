// Chapter progress tracking: quiz completion, stars, unlocks
// Separate from garden state — this is app-wide learning progress

const SAVE_KEY = 'pvz-progress'

const CHAPTER_IDS = ['chapter1', 'chapter2', 'chapter3', 'chapter4', 'chapter5', 'chapter6']

const DEFAULT_PROGRESS = {
  version: 1,
  chapters: Object.fromEntries(
    CHAPTER_IDS.map(id => [id, { quizCompleted: false, bestStars: 0, lessonCompleted: false }])
  ),
}

// --- Stars ---

export function calculateStars(score, total) {
  if (total <= 0) return 0
  const pct = score / total
  if (pct >= 1) return 3
  if (pct >= 0.8) return 2
  if (pct >= 0.6) return 1
  return 0
}

export function getTotalStars(progress) {
  return Object.values(progress.chapters).reduce((sum, ch) => sum + ch.bestStars, 0)
}

// --- Unlocks ---

// Quiz completion unlocks (one per chapter)
const QUIZ_UNLOCKS = {
  chapter1: { type: 'item', key: 'shovel' },
  chapter2: { type: 'plant', key: 'snowpea' },
  chapter3: { type: 'item', key: 'fertilizer' },
  chapter4: { type: 'plant', key: 'repeater' },
  chapter5: { type: 'item', key: 'freeze' },
  chapter6: { type: 'plant', key: 'cherrybomb' },
}

// Star milestone unlocks
const STAR_MILESTONES = [
  { stars: 3, type: 'item', key: 'times2' },
  { stars: 6, type: 'item', key: 'plantfood' },
  { stars: 9, type: 'item', key: 'times0' },
  { stars: 12, type: 'item', key: 'cherrybomb_battle' },
  { stars: 15, type: 'item', key: 'plantfood_battle' },
]

// Additional chapter-gated unlocks (chapters can unlock multiple items)
const ADDITIONAL_CHAPTER_UNLOCKS = [
  { chapter: 'chapter2', type: 'item', key: 'pizza' },
  { chapter: 'chapter6', type: 'item', key: 'square' },
]

export function getUnlockedPlants(progress) {
  const plants = []
  for (const [chId, unlock] of Object.entries(QUIZ_UNLOCKS)) {
    if (unlock.type === 'plant' && progress.chapters[chId]?.quizCompleted) {
      plants.push(unlock.key)
    }
  }
  return plants
}

export function getUnlockedItems(progress) {
  const items = []
  // From quiz completion
  for (const [chId, unlock] of Object.entries(QUIZ_UNLOCKS)) {
    if (unlock.type === 'item' && progress.chapters[chId]?.quizCompleted) {
      items.push(unlock.key)
    }
  }
  // From additional chapter unlocks
  for (const unlock of ADDITIONAL_CHAPTER_UNLOCKS) {
    if (unlock.type === 'item' && progress.chapters[unlock.chapter]?.quizCompleted) {
      items.push(unlock.key)
    }
  }
  // From star milestones
  const totalStars = getTotalStars(progress)
  for (const milestone of STAR_MILESTONES) {
    if (totalStars >= milestone.stars) {
      items.push(milestone.key)
    }
  }
  return items
}

export function getQuizUnlockInfo(chapterId) {
  return QUIZ_UNLOCKS[chapterId] || null
}

export function getStarMilestones() {
  return STAR_MILESTONES
}

// --- Coin Rewards ---

export function getQuizCoinReward(progress, chapterId, stars) {
  const ch = progress.chapters[chapterId]
  const isFirstTime = !ch?.quizCompleted
  const base = isFirstTime ? 50 : 15
  const accuracyBonus = stars * 10
  return base + accuracyBonus
}

export function getLessonCoinReward(progress, chapterId) {
  const ch = progress.chapters[chapterId]
  return ch?.lessonCompleted ? 5 : 25
}

// --- State Mutations ---

export function recordQuizCompletion(progress, chapterId, score, total) {
  const stars = calculateStars(score, total)
  const ch = progress.chapters[chapterId] || { quizCompleted: false, bestStars: 0, lessonCompleted: false }
  return {
    ...progress,
    chapters: {
      ...progress.chapters,
      [chapterId]: {
        ...ch,
        quizCompleted: true,
        bestStars: Math.max(ch.bestStars, stars),
      },
    },
  }
}

export function recordLessonCompletion(progress, chapterId) {
  const ch = progress.chapters[chapterId] || { quizCompleted: false, bestStars: 0, lessonCompleted: false }
  return {
    ...progress,
    chapters: {
      ...progress.chapters,
      [chapterId]: { ...ch, lessonCompleted: true },
    },
  }
}

// --- Persistence ---

export function loadProgress() {
  try {
    const raw = localStorage.getItem(SAVE_KEY)
    if (!raw) return { ...DEFAULT_PROGRESS }
    const saved = JSON.parse(raw)
    if (!saved || saved.version !== 1) return { ...DEFAULT_PROGRESS }
    // Ensure all chapters exist (forward compatibility)
    for (const id of CHAPTER_IDS) {
      if (!saved.chapters[id]) {
        saved.chapters[id] = { quizCompleted: false, bestStars: 0, lessonCompleted: false }
      }
    }
    return saved
  } catch {
    return { ...DEFAULT_PROGRESS }
  }
}

export function saveProgress(progress) {
  try {
    localStorage.setItem(SAVE_KEY, JSON.stringify(progress))
  } catch {
    // storage full or unavailable
  }
}

// --- Helper: award coins to garden state directly ---

export function awardCoinsToGarden(amount) {
  try {
    const raw = localStorage.getItem('cdg-save')
    if (!raw) return
    const garden = JSON.parse(raw)
    garden.coins = (garden.coins || 0) + amount
    localStorage.setItem('cdg-save', JSON.stringify(garden))
  } catch {
    // ignore
  }
}

export { QUIZ_UNLOCKS, CHAPTER_IDS }
