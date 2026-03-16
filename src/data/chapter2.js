// Chapter 2: Fractions
// Halves, thirds, quarters, comparing, adding (same denominator)

export const chapter2Lesson = [
  // --- Section A: What is a Fraction? ---
  {
    type: 'teach',
    title: 'Steve Bakes a Cake!',
    story: 'Steve baked a cake! He cuts it into 2 equal pieces. Each piece is one half of the cake.',
    fractionBar: { total: 2, filled: 1, label: '1/2' },
    equation: 'frac{1}{2}',
    highlight: 'One half means 1 piece out of 2!',
  },
  {
    type: 'teach',
    title: 'More Slices!',
    story: 'Now Steve cuts a cake into 4 equal pieces. Each piece is one quarter of the cake.',
    fractionBar: { total: 4, filled: 1, label: '1/4' },
    equation: 'frac{1}{4}',
    highlight: 'One quarter means 1 piece out of 4!',
  },
  {
    type: 'teach',
    title: 'Parts of a Fraction',
    story: 'A fraction has two numbers. The top number is how many pieces you have. The bottom number is how many total pieces.',
    equation: 'frac{numerator}{denominator}',
    highlight: 'Top = what you have. Bottom = total pieces!',
  },
  {
    type: 'interactive',
    title: 'Name That Fraction!',
    story: 'Steve cuts a cake into 3 equal pieces. He eats 1 piece.',
    fractionBar: { total: 3, filled: 1, label: '?' },
    question: 'What fraction did Steve eat?',
    choices: ['frac{1}{3}', 'frac{1}{2}', 'frac{2}{3}'],
    correctIndex: 0,
    explanation: '1 piece out of 3 = frac{1}{3}!',
  },

  // --- Section B: Halves, Thirds, Quarters ---
  {
    type: 'teach',
    title: 'Sharing Diamonds!',
    story: 'Steve has 8 diamonds. He gives half to Alex. Half of 8 is 4!',
    fractionBar: { total: 8, filled: 4, label: '4/8 = 1/2' },
    visual: { left: { emoji: '💎', count: 4 }, right: { emoji: '💎', count: 4 } },
    highlight: 'Alex gets 4 diamonds!',
  },
  {
    type: 'teach',
    title: 'Splitting Iron!',
    story: 'Steve splits 6 iron bars into 3 equal groups. Each group is frac{1}{3} of the total.',
    groups: [
      { emoji: '🪨', count: 2, label: 'Group 1' },
      { emoji: '🪨', count: 2, label: 'Group 2' },
      { emoji: '🪨', count: 2, label: 'Group 3' },
    ],
    equation: 'frac{1}{3} of 6 = 2',
    highlight: '2 iron bars in each group!',
  },
  {
    type: 'interactive',
    title: 'Gold Piles!',
    story: 'Steve has 12 gold bars. He splits them into 4 equal piles.',
    fractionBar: { total: 4, filled: 1, label: '1/4 of 12 = ?' },
    question: 'How many gold bars in each pile?',
    choices: ['2', '3', '4'],
    correctIndex: 1,
    explanation: '12 split into 4 piles = 3 in each pile!',
  },
  {
    type: 'interactive',
    title: 'Cookie Time!',
    story: 'Steve baked 10 cookies.',
    fractionBar: { total: 10, filled: 5, label: '1/2 of 10 = ?' },
    question: 'What is frac{1}{2} of 10 cookies?',
    choices: ['4', '5', '6'],
    correctIndex: 1,
    explanation: 'Half of 10 = 5 cookies!',
  },

  // --- Section C: Comparing Fractions ---
  {
    type: 'teach',
    title: 'Who Has More Cake?',
    story: 'Steve has frac{1}{2} of a cake. Alex has frac{1}{4} of a cake. Who has more?',
    fractionCompare: {
      left: { total: 2, filled: 1, label: '1/2' },
      right: { total: 4, filled: 1, label: '1/4' },
    },
    highlight: 'frac{1}{2} is bigger than frac{1}{4}! Steve has more!',
  },
  {
    type: 'teach',
    title: 'The Comparing Rule!',
    story: 'When the top number is the same, the smaller bottom number means a bigger piece!',
    equation: 'frac{1}{2} > frac{1}{3} > frac{1}{4}',
    highlight: 'Fewer slices = bigger pieces!',
  },
  {
    type: 'interactive',
    title: 'Compare These!',
    story: 'Look at these two fractions.',
    fractionCompare: {
      left: { total: 3, filled: 1, label: '1/3' },
      right: { total: 4, filled: 1, label: '1/4' },
    },
    question: 'Which is bigger: frac{1}{3} or frac{1}{4}?',
    choices: ['frac{1}{3}', 'frac{1}{4}', 'They are the same'],
    correctIndex: 0,
    explanation: 'frac{1}{3} is bigger! 3 slices makes bigger pieces than 4 slices.',
  },
  {
    type: 'interactive',
    title: 'Same Bottom Number!',
    story: 'Now both fractions have the same bottom number.',
    fractionCompare: {
      left: { total: 4, filled: 2, label: '2/4' },
      right: { total: 4, filled: 3, label: '3/4' },
    },
    question: 'Which is bigger: frac{2}{4} or frac{3}{4}?',
    choices: ['frac{2}{4}', 'frac{3}{4}', 'They are the same'],
    correctIndex: 1,
    explanation: 'frac{3}{4} is bigger! More pieces = more cake!',
  },

  // --- Section D: Adding Fractions (same denominator) ---
  {
    type: 'teach',
    title: 'Adding Cake Slices!',
    story: 'Steve ate frac{1}{4} of the cake for breakfast and frac{2}{4} for lunch.',
    fractionBar: { total: 4, filled: 3, label: '1/4 + 2/4 = 3/4' },
    equation: 'frac{1}{4} + frac{2}{4} = frac{3}{4}',
    highlight: 'Just add the top numbers! 1 + 2 = 3!',
  },
  {
    type: 'teach',
    title: 'The Adding Rule!',
    story: 'When the bottom numbers are the same, just add the top numbers! The bottom number stays the same.',
    equation: 'frac{a}{n} + frac{b}{n} = frac{a+b}{n}',
    highlight: 'Same bottom? Add the tops!',
  },
  {
    type: 'interactive',
    title: 'Add These Fractions!',
    story: 'Steve ate frac{1}{3} of the pie. Alex ate frac{1}{3} of the pie.',
    fractionBar: { total: 3, filled: 2, label: '1/3 + 1/3 = ?' },
    question: 'frac{1}{3} + frac{1}{3} = ?',
    choices: ['frac{2}{3}', 'frac{1}{3}', 'frac{2}{6}'],
    correctIndex: 0,
    explanation: '1 + 1 = 2 on top, bottom stays 3. Answer: frac{2}{3}!',
  },
  {
    type: 'interactive',
    title: 'One More!',
    story: 'Steve found frac{2}{5} of the treasure. Alex found frac{1}{5} more.',
    fractionBar: { total: 5, filled: 3, label: '2/5 + 1/5 = ?' },
    question: 'frac{2}{5} + frac{1}{5} = ?',
    choices: ['frac{3}{5}', 'frac{3}{10}', 'frac{2}{5}'],
    correctIndex: 0,
    explanation: '2 + 1 = 3 on top, bottom stays 5. Answer: frac{3}{5}!',
  },

  // --- Section E: Fractions Equal to 1 Whole ---
  {
    type: 'teach',
    title: 'The Whole Cake!',
    story: 'If Steve eats all 4 slices of a 4-slice cake, he ate the whole thing!',
    fractionBar: { total: 4, filled: 4, label: '4/4 = 1 whole!' },
    equation: 'frac{4}{4} = 1',
    highlight: 'When top and bottom are the same, it equals 1 whole!',
  },
  {
    type: 'interactive',
    title: 'Make it Whole!',
    story: 'Steve has frac{2}{3} of a pie. He finds frac{1}{3} more.',
    fractionBar: { total: 3, filled: 3, label: '2/3 + 1/3 = ?' },
    question: 'frac{2}{3} + frac{1}{3} = ?',
    choices: ['frac{3}{3} = 1 whole!', 'frac{2}{3}', 'frac{1}{3}'],
    correctIndex: 0,
    explanation: '2 + 1 = 3 on top. frac{3}{3} = 1 whole pie!',
  },
]

export const chapter2Quiz = [
  {
    prompt: 'A cake is cut into 4 pieces. Steve eats 1. What fraction did he eat?',
    emoji: '🍰',
    choices: ['frac{1}{4}', 'frac{1}{2}', 'frac{1}{3}'],
    correctIndex: 0,
    explanation: '1 piece out of 4 total = frac{1}{4}!',
    law: 'Identify Fractions',
  },
  {
    prompt: 'What is frac{1}{2} of 8 diamonds?',
    emoji: '💎',
    choices: ['3', '4', '5'],
    correctIndex: 1,
    explanation: 'Half of 8 = 4 diamonds!',
    law: 'Fraction of a Group',
  },
  {
    prompt: 'Which is bigger: frac{1}{2} or frac{1}{3}?',
    emoji: '🍰',
    choices: ['frac{1}{2}', 'frac{1}{3}', 'They are the same'],
    correctIndex: 0,
    explanation: 'frac{1}{2} is bigger! Fewer slices = bigger pieces!',
    law: 'Comparing Fractions',
  },
  {
    prompt: 'frac{1}{4} + frac{2}{4} = ?',
    emoji: '🍰',
    choices: ['frac{2}{4}', 'frac{3}{4}', 'frac{3}{8}'],
    correctIndex: 1,
    explanation: 'Add the tops: 1+2=3. Bottom stays 4. Answer: frac{3}{4}!',
    law: 'Adding Fractions',
  },
  {
    prompt: 'frac{3}{3} = ?',
    emoji: '🍰',
    choices: ['frac{1}{3}', '1 whole', '3'],
    correctIndex: 1,
    explanation: 'When top and bottom are the same, it equals 1 whole!',
    law: 'Whole Fractions',
  },
]

// --- Practice problem generators ---

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function shuffleArray(arr) {
  const shuffled = [...arr]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

const problemGenerators = [
  {
    id: 'fraction-of-group',
    weight: 3,
    generate() {
      const denominator = [2, 3, 4][randomInt(0, 2)]
      const multiplier = randomInt(1, 4)
      const total = denominator * multiplier
      const answer = total / denominator
      const wrong1 = answer + 1
      const wrong2 = Math.max(1, answer - 1)
      const choices = shuffleArray([
        { text: String(answer), correct: true },
        { text: String(wrong1), correct: false },
        { text: String(wrong2), correct: false },
      ])
      return {
        prompt: `What is frac{1}{${denominator}} of ${total}?`,
        emoji: '💎',
        choices: choices.map((c) => c.text),
        correctIndex: choices.findIndex((c) => c.correct),
        explanation: `${total} split into ${denominator} groups = ${answer} each!`,
      }
    },
  },
  {
    id: 'compare-fractions',
    weight: 2,
    generate() {
      const denoms = [2, 3, 4, 5, 6]
      let a = denoms[randomInt(0, denoms.length - 1)]
      let b
      do {
        b = denoms[randomInt(0, denoms.length - 1)]
      } while (b === a)
      const bigger = a < b ? `frac{1}{${a}}` : `frac{1}{${b}}`
      const choices = shuffleArray([
        { text: `frac{1}{${a}}`, correct: a < b },
        { text: `frac{1}{${b}}`, correct: b < a },
        { text: 'They are the same', correct: false },
      ])
      return {
        prompt: `Which is bigger: frac{1}{${a}} or frac{1}{${b}}?`,
        emoji: '🍰',
        choices: choices.map((c) => c.text),
        correctIndex: choices.findIndex((c) => c.correct),
        explanation: `${bigger} is bigger! Smaller bottom = bigger piece!`,
      }
    },
  },
  {
    id: 'add-same-denom',
    weight: 3,
    generate() {
      const denom = [2, 3, 4, 5][randomInt(0, 3)]
      const a = randomInt(1, denom - 1)
      const b = randomInt(1, denom - a)
      const sum = a + b
      const answerText = sum === denom ? `frac{${sum}}{${denom}} = 1 whole` : `frac{${sum}}{${denom}}`
      const wrong1 = `frac{${sum}}{${denom * 2}}`
      const wrong2 = `frac{${a}}{${denom}}`
      const choices = shuffleArray([
        { text: answerText, correct: true },
        { text: wrong1, correct: false },
        { text: wrong2, correct: false },
      ])
      return {
        prompt: `frac{${a}}{${denom}} + frac{${b}}{${denom}} = ?`,
        emoji: '🍰',
        choices: choices.map((c) => c.text),
        correctIndex: choices.findIndex((c) => c.correct),
        explanation: `${a}+${b}=${sum} on top, bottom stays ${denom}. Answer: ${answerText}!`,
      }
    },
  },
  {
    id: 'identify-fraction',
    weight: 2,
    generate() {
      const denom = [2, 3, 4, 5][randomInt(0, 3)]
      const numer = randomInt(1, denom - 1)
      const items = ['cake slices', 'pie pieces', 'cookie chunks']
      const item = items[randomInt(0, items.length - 1)]
      const answer = `frac{${numer}}{${denom}}`
      const wrong1 = `frac{${numer}}{${denom + 1}}`
      const wrong2 = `frac{${denom}}{${numer}}`
      const choices = shuffleArray([
        { text: answer, correct: true },
        { text: wrong1, correct: false },
        { text: wrong2, correct: false },
      ])
      return {
        prompt: `Steve ate ${numer} of ${denom} ${item}. What fraction is that?`,
        emoji: '🍰',
        choices: choices.map((c) => c.text),
        correctIndex: choices.findIndex((c) => c.correct),
        explanation: `${numer} out of ${denom} = ${answer}!`,
      }
    },
  },
]

export const chapter2PracticeConfig = { problemGenerators }

export function generatePracticeProblem(config) {
  const { problemGenerators: generators } = config
  const totalWeight = generators.reduce((sum, g) => sum + g.weight, 0)
  let roll = Math.random() * totalWeight
  for (const gen of generators) {
    roll -= gen.weight
    if (roll <= 0) return gen.generate()
  }
  return generators[generators.length - 1].generate()
}
