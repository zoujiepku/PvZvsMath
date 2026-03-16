// Chapter 1: Math Laws
// Commutative, Associative, and Distributive laws with Minecraft scenarios

export const chapter1Lesson = [
  // --- Section A: Commutative Law of Addition ---
  {
    type: 'teach',
    title: 'Swapping Diamonds!',
    story: 'Steve found diamonds in a cave! He put 3 in his left pocket and 2 in his right pocket.',
    visual: { left: { emoji: '💎', count: 3 }, right: { emoji: '💎', count: 2 } },
    equation: '3 + 2 = 5',
    highlight: 'Steve has 5 diamonds total!',
  },
  {
    type: 'teach',
    title: 'Now Swap!',
    story: 'Steve switches pockets! Now 2 diamonds are in the left and 3 are in the right.',
    visual: { left: { emoji: '💎', count: 2 }, right: { emoji: '💎', count: 3 } },
    equation: '2 + 3 = 5',
    highlight: 'Still 5 diamonds! The same!',
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
    story: 'Steve has some pigs on his farm.',
    visual: { left: { emoji: '🐷', count: 4 }, right: { emoji: '🐷', count: 1 } },
    question: 'Is 4 + 1 the same as 1 + 4?',
    choices: ['Yes, same!', 'No, different!'],
    correctIndex: 0,
    explanation: '4 + 1 = 5 and 1 + 4 = 5. Same thing!',
  },
  {
    type: 'interactive',
    title: 'Dirt Blocks!',
    story: 'Steve has 6 dirt blocks and Alex has 3 dirt blocks.',
    visual: { left: { emoji: '🟫', count: 6 }, right: { emoji: '🟫', count: 3 } },
    question: 'Is 6 + 3 the same as 3 + 6?',
    choices: ['Yes!', 'No!'],
    correctIndex: 0,
    explanation: '6 + 3 = 9 and 3 + 6 = 9. Alex agrees!',
  },

  // --- Section B: Commutative Law of Multiplication ---
  {
    type: 'teach',
    title: 'Building a Wall!',
    story: 'Steve is building a brick wall. He makes 2 rows with 4 bricks in each row.',
    grid: { emoji: '🧱', rows: 2, cols: 4 },
    equation: '2 x 4 = 8',
    highlight: '8 bricks total!',
  },
  {
    type: 'teach',
    title: 'Turn the Wall!',
    story: 'Now Steve turns the wall sideways! 4 rows with 2 bricks in each row.',
    grid: { emoji: '🧱', rows: 4, cols: 2 },
    equation: '4 x 2 = 8',
    highlight: 'Still 8 bricks! The same!',
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
    title: 'Obsidian Wall!',
    story: 'Steve builds with obsidian blocks.',
    grid: { emoji: '⬛', rows: 3, cols: 2 },
    question: 'Is 3 rows of 2 the same as 2 rows of 3?',
    choices: ['Yes, same total!', 'No, different!'],
    correctIndex: 0,
    explanation: '3 x 2 = 6 and 2 x 3 = 6. Same!',
  },

  // --- Section C: Associative Law of Addition ---
  {
    type: 'teach',
    title: 'Three Caves!',
    story: 'Steve explored 3 caves! He found 2 diamonds in Cave 1, 3 diamonds in Cave 2, and 4 diamonds in Cave 3.',
    groups: [
      { emoji: '💎', count: 2, label: 'Cave 1' },
      { emoji: '💎', count: 3, label: 'Cave 2' },
      { emoji: '💎', count: 4, label: 'Cave 3' },
    ],
    highlight: 'How should he add them up?',
  },
  {
    type: 'teach',
    title: 'Add Caves 1 + 2 First',
    story: 'Steve adds Cave 1 and Cave 2 first:',
    equation: '(2 + 3) + 4 = 5 + 4 = 9',
    highlight: '9 diamonds!',
  },
  {
    type: 'teach',
    title: 'Add Caves 2 + 3 First',
    story: 'Alex adds Cave 2 and Cave 3 first:',
    equation: '2 + (3 + 4) = 2 + 7 = 9',
    highlight: 'Also 9 diamonds! Same answer!',
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
    story: 'Steve found emeralds in 3 villages.',
    question: '(1 + 2) + 3 = ? and 1 + (2 + 3) = ?',
    choices: ['Both equal 6!', 'First is bigger', 'Second is bigger'],
    correctIndex: 0,
    explanation: '(1+2)+3 = 3+3 = 6 and 1+(2+3) = 1+5 = 6. Same!',
  },

  // --- Section D: Associative Law of Multiplication ---
  {
    type: 'teach',
    title: 'Chests of Pickaxes!',
    story: 'Steve has 2 rooms. Each room has 3 chests. Each chest has 2 pickaxes.',
    equation: '(2 x 3) x 2 = 6 x 2 = 12',
    highlight: '12 pickaxes!',
  },
  {
    type: 'teach',
    title: 'Group Differently!',
    story: 'What if we group the chests and pickaxes first?',
    equation: '2 x (3 x 2) = 2 x 6 = 12',
    highlight: 'Still 12 pickaxes!',
  },
  {
    type: 'interactive',
    title: 'Your Turn!',
    story: 'Steve is sorting his items.',
    question: 'Is (2 x 1) x 3 the same as 2 x (1 x 3)?',
    choices: ['Yes, both are 6!', 'No, they are different!'],
    correctIndex: 0,
    explanation: '(2x1)x3 = 2x3 = 6 and 2x(1x3) = 2x3 = 6. Same!',
  },

  // --- Section E: Distributive Law Intro ---
  {
    type: 'teach',
    title: 'Bonus Law!',
    story: 'Steve has 2 bags. Each bag has 3 diamonds and 1 pickaxe. That is 4 items per bag.',
    groups: [
      { emoji: '💎', count: 3, label: 'Diamonds' },
      { emoji: '⛏️', count: 1, label: 'Pickaxe' },
    ],
    equation: '2 x (3 + 1) = 2 x 4 = 8',
    highlight: '8 items total!',
  },
  {
    type: 'teach',
    title: 'Count Separately!',
    story: 'Or count each type: 2 bags x 3 diamonds = 6 diamonds. 2 bags x 1 pickaxe = 2 pickaxes.',
    equation: '(2 x 3) + (2 x 1) = 6 + 2 = 8',
    highlight: 'Same answer! This is the Distributive Law!',
  },
  {
    type: 'interactive',
    title: 'Distributive Challenge!',
    story: 'Steve has 2 bags. Each bag has 1 emerald and 4 gold bars.',
    question: '2 x (1 + 4) = ?',
    choices: ['10', '8', '6'],
    correctIndex: 0,
    explanation: '2x1=2 and 2x4=8. Then 2+8=10! Or: 2x5=10!',
  },
]

export const chapter1Quiz = [
  {
    prompt: '3 + 5 is the same as...',
    emoji: '💎',
    choices: ['5 + 3', '5 + 5', '3 + 3'],
    correctIndex: 0,
    explanation: 'Commutative Law! 3+5 = 5+3. Swapping is okay!',
    law: 'Commutative Addition',
  },
  {
    prompt: '2 x 4 is the same as...',
    emoji: '🧱',
    choices: ['4 x 4', '4 x 2', '2 x 2'],
    correctIndex: 1,
    explanation: 'Commutative Law! 2x4 = 4x2. The order does not matter!',
    law: 'Commutative Multiplication',
  },
  {
    prompt: '(2 + 3) + 1 = ?',
    emoji: '⛏️',
    choices: ['5', '6', '7'],
    correctIndex: 1,
    explanation: '(2+3)+1 = 5+1 = 6!',
    law: 'Associative Addition',
  },
  {
    prompt: 'Is (1 + 4) + 2 the same as 1 + (4 + 2)?',
    emoji: '💎',
    choices: ['Yes!', 'No!'],
    correctIndex: 0,
    explanation: 'Associative Law! (1+4)+2 = 5+2 = 7 and 1+(4+2) = 1+6 = 7. Same!',
    law: 'Associative Addition',
  },
  {
    prompt: '2 x (3 + 1) = ?',
    emoji: '🧱',
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
      const emojis = ['💎', '⛏️', '🐷', '🟫', '🧱']
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
        emoji: '🧱',
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
        emoji: '💎',
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
        emoji: '⛏️',
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
        emoji: '🧱',
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
