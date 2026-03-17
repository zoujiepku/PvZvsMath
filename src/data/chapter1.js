// Chapter 1: Math Laws
// Commutative, Associative, and Distributive laws with Plants vs Zombies scenarios

export const chapter1Lesson = [
  // --- Section A: Commutative Law of Addition ---
  {
    type: 'teach',
    title: 'Collecting Sun!',
    story: 'Crazy Dave collected sun on the lawn! He stored 3 sun on the left side and 2 sun on the right side.',
    visual: { left: { emoji: '☀️', count: 3 }, right: { emoji: '☀️', count: 2 } },
    equation: '3 + 2 = 5',
    highlight: 'Dave has 5 sun total!',
  },
  {
    type: 'teach',
    title: 'Now Swap!',
    story: 'Dave swaps the sides! Now 2 sun are on the left and 3 are on the right.',
    visual: { left: { emoji: '☀️', count: 2 }, right: { emoji: '☀️', count: 3 } },
    equation: '2 + 3 = 5',
    highlight: 'Still 5 sun! The same!',
  },
  {
    type: 'teach',
    title: 'The Commutative Law!',
    story: 'This is called the Commutative Law of Addition. You can swap the numbers and the answer stays the same!',
    equation: 'a + b = b + a',
    highlight: 'The order does not matter when you add!',
  },
  {
    type: 'interactive',
    title: 'Your Turn!',
    story: 'Dave has some Sunflowers on his lawn.',
    visual: { left: { emoji: '🌻', count: 4 }, right: { emoji: '🌻', count: 1 } },
    question: 'Is 4 + 1 the same as 1 + 4?',
    choices: ['Yes, same!', 'No, different!'],
    correctIndex: 0,
    explanation: '4 + 1 = 5 and 1 + 4 = 5. Same thing!',
  },
  {
    type: 'interactive',
    title: 'Lawn Tiles!',
    story: 'Dave has 6 lawn tiles and Penny has 3 lawn tiles.',
    visual: { left: { emoji: '🟩', count: 6 }, right: { emoji: '🟩', count: 3 } },
    question: 'Is 6 + 3 the same as 3 + 6?',
    choices: ['Yes!', 'No!'],
    correctIndex: 0,
    explanation: '6 + 3 = 9 and 3 + 6 = 9. Penny agrees!',
  },

  // --- Section B: Commutative Law of Multiplication ---
  {
    type: 'teach',
    title: 'Planting Peashooters!',
    story: 'Dave is planting Peashooters on the lawn. He makes 2 rows with 4 Peashooters in each row.',
    grid: { emoji: '🫛', rows: 2, cols: 4 },
    equation: '2 x 4 = 8',
    highlight: '8 Peashooters total!',
  },
  {
    type: 'teach',
    title: 'Rotate the Garden!',
    story: 'Now Dave rotates the garden! 4 rows with 2 Peashooters in each row.',
    grid: { emoji: '🫛', rows: 4, cols: 2 },
    equation: '4 x 2 = 8',
    highlight: 'Still 8 Peashooters! The same!',
  },
  {
    type: 'teach',
    title: 'Commutative Multiplication!',
    story: 'The Commutative Law works for multiplication too! Flipping rows and columns gives the same total.',
    equation: 'a x b = b x a',
    highlight: 'The order does not matter when you multiply!',
  },
  {
    type: 'interactive',
    title: 'Wall-nut Defense!',
    story: 'Dave builds a Wall-nut defense grid.',
    grid: { emoji: '🛡️', rows: 3, cols: 2 },
    question: 'Is 3 rows of 2 the same as 2 rows of 3?',
    choices: ['Yes, same total!', 'No, different!'],
    correctIndex: 0,
    explanation: '3 x 2 = 6 and 2 x 3 = 6. Same!',
  },

  // --- Section C: Associative Law of Addition ---
  {
    type: 'teach',
    title: 'Three Lanes!',
    story: 'Dave defended 3 lawn lanes! He collected 2 sun from Lane 1, 3 sun from Lane 2, and 4 sun from Lane 3.',
    groups: [
      { emoji: '☀️', count: 2, label: 'Lane 1' },
      { emoji: '☀️', count: 3, label: 'Lane 2' },
      { emoji: '☀️', count: 4, label: 'Lane 3' },
    ],
    highlight: 'How should he add them up?',
  },
  {
    type: 'teach',
    title: 'Add Lanes 1 + 2 First',
    story: 'Dave adds Lane 1 and Lane 2 first:',
    equation: '(2 + 3) + 4 = 5 + 4 = 9',
    highlight: '9 sun!',
  },
  {
    type: 'teach',
    title: 'Add Lanes 2 + 3 First',
    story: 'Penny adds Lane 2 and Lane 3 first:',
    equation: '2 + (3 + 4) = 2 + 7 = 9',
    highlight: 'Also 9 sun! Same answer!',
  },
  {
    type: 'teach',
    title: 'The Associative Law!',
    story: 'This is the Associative Law of Addition. It does not matter how you group the numbers!',
    equation: '(a + b) + c = a + (b + c)',
    highlight: 'Grouping does not change the answer!',
  },
  {
    type: 'interactive',
    title: 'Try Grouping!',
    story: 'Dave found sun in 3 gardens.',
    question: '(1 + 2) + 3 = ? and 1 + (2 + 3) = ?',
    choices: ['Both equal 6!', 'First is bigger', 'Second is bigger'],
    correctIndex: 0,
    explanation: '(1+2)+3 = 3+3 = 6 and 1+(2+3) = 1+5 = 6. Same!',
  },

  // --- Section D: Associative Law of Multiplication ---
  {
    type: 'teach',
    title: 'Seed Packets!',
    story: 'Dave has 2 gardens. Each garden has 3 rows. Each row has 2 plants.',
    equation: '(2 x 3) x 2 = 6 x 2 = 12',
    highlight: '12 plants!',
  },
  {
    type: 'teach',
    title: 'Group Differently!',
    story: 'What if we group the rows and plants first?',
    equation: '2 x (3 x 2) = 2 x 6 = 12',
    highlight: 'Still 12 plants!',
  },
  {
    type: 'interactive',
    title: 'Your Turn!',
    story: 'Dave is sorting his seed packets.',
    question: 'Is (2 x 1) x 3 the same as 2 x (1 x 3)?',
    choices: ['Yes, both are 6!', 'No, they are different!'],
    correctIndex: 0,
    explanation: '(2x1)x3 = 2x3 = 6 and 2x(1x3) = 2x3 = 6. Same!',
  },

  // --- Section E: Distributive Law Intro ---
  {
    type: 'teach',
    title: 'Bonus Law!',
    story: 'Dave has 2 lanes. Each lane has 3 Sunflowers and 1 Peashooter. That is 4 plants per lane.',
    groups: [
      { emoji: '🌻', count: 3, label: 'Sunflowers' },
      { emoji: '🫛', count: 1, label: 'Peashooter' },
    ],
    equation: '2 x (3 + 1) = 2 x 4 = 8',
    highlight: '8 plants total!',
  },
  {
    type: 'teach',
    title: 'Count Separately!',
    story: 'Or count each type: 2 lanes x 3 Sunflowers = 6 Sunflowers. 2 lanes x 1 Peashooter = 2 Peashooters.',
    equation: '(2 x 3) + (2 x 1) = 6 + 2 = 8',
    highlight: 'Same answer! This is the Distributive Law!',
  },
  {
    type: 'interactive',
    title: 'Distributive Challenge!',
    story: 'Dave has 2 lanes. Each lane has 1 Snow Pea and 4 Sunflowers.',
    question: '2 x (1 + 4) = ?',
    choices: ['10', '8', '6'],
    correctIndex: 0,
    explanation: '2x1=2 and 2x4=8. Then 2+8=10! Or: 2x5=10!',
  },
]

export const chapter1Quiz = [
  {
    prompt: '3 + 5 is the same as...',
    emoji: '☀️',
    choices: ['5 + 3', '5 + 5', '3 + 3'],
    correctIndex: 0,
    explanation: 'Commutative Law! 3+5 = 5+3. Swapping is okay!',
    law: 'Commutative Addition',
  },
  {
    prompt: '2 x 4 is the same as...',
    emoji: '🫛',
    choices: ['4 x 4', '4 x 2', '2 x 2'],
    correctIndex: 1,
    explanation: 'Commutative Law! 2x4 = 4x2. The order does not matter!',
    law: 'Commutative Multiplication',
  },
  {
    prompt: '(2 + 3) + 1 = ?',
    emoji: '🌱',
    choices: ['5', '6', '7'],
    correctIndex: 1,
    explanation: '(2+3)+1 = 5+1 = 6!',
    law: 'Associative Addition',
  },
  {
    prompt: 'Is (1 + 4) + 2 the same as 1 + (4 + 2)?',
    emoji: '☀️',
    choices: ['Yes!', 'No!'],
    correctIndex: 0,
    explanation: 'Associative Law! (1+4)+2 = 5+2 = 7 and 1+(4+2) = 1+6 = 7. Same!',
    law: 'Associative Addition',
  },
  {
    prompt: '2 x (3 + 1) = ?',
    emoji: '🫛',
    choices: ['6', '7', '8'],
    correctIndex: 2,
    explanation: 'Distributive Law! 2x(3+1) = 2x4 = 8. Or: 2x3+2x1 = 6+2 = 8!',
    law: 'Distributive',
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

function makeChoices(correct, wrong1, wrong2) {
  const choices = [
    { text: String(correct), isCorrect: true },
    { text: String(wrong1), isCorrect: false },
    { text: String(wrong2), isCorrect: false },
  ]
  const shuffled = shuffleArray(choices)
  return {
    choices: shuffled.map((c) => c.text),
    correctIndex: shuffled.findIndex((c) => c.isCorrect),
  }
}

const problemGenerators = [
  {
    id: 'commutative-add',
    weight: 3,
    generate() {
      const a = randomInt(1, 9)
      const b = randomInt(1, 9)
      const emojis = ['☀️', '🌱', '🌻', '🟩', '🫛']
      const emoji = emojis[randomInt(0, emojis.length - 1)]
      return {
        prompt: `Is ${a} + ${b} the same as ${b} + ${a}?`,
        emoji,
        choices: ['Yes!', 'No!'],
        correctIndex: 0,
        explanation: `${a}+${b} = ${a + b} and ${b}+${a} = ${a + b}. Same!`,
      }
    },
  },
  {
    id: 'commutative-mult',
    weight: 2,
    generate() {
      const a = randomInt(1, 5)
      const b = randomInt(1, 5)
      return {
        prompt: `Is ${a} x ${b} the same as ${b} x ${a}?`,
        emoji: '🫛',
        choices: ['Yes!', 'No!'],
        correctIndex: 0,
        explanation: `${a}x${b} = ${a * b} and ${b}x${a} = ${a * b}. Same!`,
      }
    },
  },
  {
    id: 'associative-add',
    weight: 3,
    generate() {
      const a = randomInt(1, 5)
      const b = randomInt(1, 5)
      const c = randomInt(1, 5)
      const total = a + b + c
      const { choices, correctIndex } = makeChoices(total, total + 1, total - 1)
      return {
        prompt: `(${a} + ${b}) + ${c} = ?`,
        emoji: '☀️',
        choices,
        correctIndex,
        explanation: `(${a}+${b}) = ${a + b}, then ${a + b}+${c} = ${total}!`,
      }
    },
  },
  {
    id: 'associative-mult',
    weight: 2,
    generate() {
      const a = randomInt(1, 3)
      const b = randomInt(1, 3)
      const c = randomInt(1, 3)
      const total = a * b * c
      const wrong1 = total + randomInt(1, 3)
      const wrong2 = Math.max(1, total - randomInt(1, 3))
      const { choices, correctIndex } = makeChoices(total, wrong1, wrong2)
      return {
        prompt: `(${a} x ${b}) x ${c} = ?`,
        emoji: '🌱',
        choices,
        correctIndex,
        explanation: `(${a}x${b}) = ${a * b}, then ${a * b}x${c} = ${total}!`,
      }
    },
  },
  {
    id: 'distributive',
    weight: 2,
    generate() {
      const a = randomInt(2, 4)
      const b = randomInt(1, 4)
      const c = randomInt(1, 4)
      const total = a * (b + c)
      const wrong1 = a * b + c
      const wrong2 = a + b * c
      const { choices, correctIndex } = makeChoices(total, wrong1, wrong2)
      return {
        prompt: `${a} x (${b} + ${c}) = ?`,
        emoji: '🫛',
        choices,
        correctIndex,
        explanation: `${a}x${b}=${a * b} and ${a}x${c}=${a * c}. Then ${a * b}+${a * c}=${total}!`,
      }
    },
  },
]

export const chapter1PracticeConfig = { problemGenerators }

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
