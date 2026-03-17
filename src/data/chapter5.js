// Chapter 5: Decimal Operations
// Adding, subtracting, multiplying decimals, money applications

export const chapter5Lesson = [
  // --- Section A: Adding Decimals ---
  {
    type: 'teach',
    title: 'Adding Decimals!',
    story: 'Crazy Dave buys a Snow Pea for 2.50 sun and a Wall-nut for 1.25 sun. How much total? Line up the decimal points and add!',
    equation: '2.50 + 1.25 = 3.75',
    highlight: 'Line up the decimal points, then add like normal!',
  },
  {
    type: 'teach',
    title: 'The Key Rule!',
    story: 'Always line up the decimal points! Add zeros if one number has fewer decimal places.',
    equation: '3.5 + 1.25 = 3.50 + 1.25 = 4.75',
    highlight: 'Add a zero: 3.5 becomes 3.50. Then add!',
  },
  {
    type: 'interactive',
    title: 'Add These!',
    story: 'Dave finds 1.30 sun on the lawn and 2.50 more behind a zombie.',
    question: '1.30 + 2.50 = ?',
    choices: ['3.80', '3.53', '2.80'],
    correctIndex: 0,
    explanation: 'Line up the decimals: 1.30 + 2.50 = 3.80!',
  },
  {
    type: 'interactive',
    title: 'Different Lengths!',
    story: 'A Cherry Bomb costs 1.5 sun. A Sunflower costs 0.75 sun.',
    question: '1.5 + 0.75 = ?',
    choices: ['2.25', '1.75', '2.00'],
    correctIndex: 0,
    explanation: '1.50 + 0.75 = 2.25!',
  },

  // --- Section B: Subtracting Decimals ---
  {
    type: 'teach',
    title: 'Subtracting Decimals!',
    story: 'Dave has 5.00 sun. He spends 2.35 on Peashooters. How much is left? Same rule: line up the decimal points!',
    equation: '5.00 - 2.35 = 2.65',
    highlight: 'Line up the dots, subtract like normal!',
  },
  {
    type: 'teach',
    title: 'Add Zeros First!',
    story: 'Dave has 3.5 sun. He spends 1.25. Pad with a zero first: 3.50 - 1.25.',
    equation: '3.50 - 1.25 = 2.25',
    highlight: 'Always match the number of decimal places!',
  },
  {
    type: 'interactive',
    title: 'Subtract These!',
    story: 'Dave has 4.50 sun and spends 1.20 on seeds.',
    question: '4.50 - 1.20 = ?',
    choices: ['3.30', '3.70', '2.30'],
    correctIndex: 0,
    explanation: '4.50 - 1.20 = 3.30!',
  },
  {
    type: 'interactive',
    title: 'Tricky Subtract!',
    story: 'Penny has 2.00 sun. She buys a Lily Pad for 0.75.',
    question: '2.00 - 0.75 = ?',
    choices: ['1.25', '1.75', '1.35'],
    correctIndex: 0,
    explanation: '2.00 - 0.75 = 1.25!',
  },

  // --- Section C: Multiplying Decimals ---
  {
    type: 'teach',
    title: 'Multiplying Decimals!',
    story: 'Each seed packet costs 0.25 sun. Dave buys 3 packets. How much total? Multiply then count decimal places!',
    equation: '0.25 x 3 = 0.75',
    highlight: 'Multiply the numbers, then put back the decimal point!',
  },
  {
    type: 'teach',
    title: 'Count the Decimal Places!',
    story: 'Count how many digits are after the decimal in ALL the numbers you are multiplying. The answer needs the same total!',
    equation: '0.2 x 0.3: 2x3=6, two decimal places = 0.06',
    highlight: '1 decimal place + 1 decimal place = 2 decimal places in the answer!',
  },
  {
    type: 'interactive',
    title: 'Multiply!',
    story: 'Each pea bullet does 0.50 damage. A Repeater shoots 4 peas.',
    question: '0.50 x 4 = ?',
    choices: ['2.00', '2.50', '0.54'],
    correctIndex: 0,
    explanation: '50 x 4 = 200. Two decimal places = 2.00!',
  },
  {
    type: 'interactive',
    title: 'Small Times Small!',
    story: 'Dave needs 0.5 of 0.4 of a lawn section.',
    question: '0.5 x 0.4 = ?',
    choices: ['0.20', '0.9', '2.0'],
    correctIndex: 0,
    explanation: '5 x 4 = 20. Two decimal places total = 0.20!',
  },

  // --- Section D: Money Problems ---
  {
    type: 'teach',
    title: 'Money Math!',
    story: 'Dave goes to the garden shop. A Cherry Bomb costs $3.50 and plant food costs $1.75. Decimals are perfect for money!',
    equation: '$3.50 + $1.75 = $5.25',
    highlight: 'Money always uses two decimal places for cents!',
  },
  {
    type: 'interactive',
    title: 'Shopping Trip!',
    story: 'Dave buys a Peashooter for $4.25 and a Torchwood for $0.50.',
    question: 'How much does Dave spend?',
    choices: ['$4.75', '$4.50', '$5.25'],
    correctIndex: 0,
    explanation: '$4.25 + $0.50 = $4.75!',
  },
  {
    type: 'interactive',
    title: 'Making Change!',
    story: 'Dave pays $5.00 for something that costs $3.25.',
    question: 'How much change does Dave get?',
    choices: ['$1.75', '$2.25', '$1.25'],
    correctIndex: 0,
    explanation: '$5.00 - $3.25 = $1.75 change!',
  },
  {
    type: 'interactive',
    title: 'Buying Multiple!',
    story: 'Each Sunflower costs $0.75. Dave buys 2 Sunflowers.',
    question: 'How much does Dave pay?',
    choices: ['$1.50', '$1.75', '$0.77'],
    correctIndex: 0,
    explanation: '$0.75 x 2 = $1.50!',
  },

  // --- Section E: Decimals and Fractions Together ---
  {
    type: 'teach',
    title: 'Decimals Meet Fractions!',
    story: 'Some fractions have easy decimal forms. 1/2 = 0.5, 1/4 = 0.25, 3/4 = 0.75, 1/10 = 0.1.',
    equation: '1/2 = 0.5   1/4 = 0.25   3/4 = 0.75',
    highlight: 'Learn these common ones by heart!',
  },
  {
    type: 'teach',
    title: 'Fraction to Decimal!',
    story: 'To change a fraction to a decimal, divide the top by the bottom. 1/4: 1 divided by 4 = 0.25.',
    equation: '1/4 = 1 / 4 = 0.25',
    highlight: 'Divide the numerator by the denominator!',
  },
  {
    type: 'interactive',
    title: 'Match Them!',
    story: 'Dave knows that 1/2 = 0.5.',
    question: 'What is 3/4 as a decimal?',
    choices: ['0.75', '0.34', '0.50'],
    correctIndex: 0,
    explanation: '3/4 = 3 divided by 4 = 0.75!',
  },
  {
    type: 'interactive',
    title: 'Decimal to Fraction!',
    story: 'Penny sees the number 0.25.',
    question: 'What fraction is 0.25?',
    choices: ['1/4', '1/2', '2/5'],
    correctIndex: 0,
    explanation: '0.25 = 25/100 = 1/4!',
  },
]

export const chapter5Quiz = [
  {
    prompt: '1.25 + 2.50 = ?',
    emoji: '☀️',
    choices: ['3.75', '3.25', '2.75'],
    correctIndex: 0,
    explanation: 'Line up the decimals: 1.25 + 2.50 = 3.75!',
    law: 'Adding Decimals',
  },
  {
    prompt: '5.00 - 1.75 = ?',
    emoji: '☀️',
    choices: ['3.25', '3.75', '4.25'],
    correctIndex: 0,
    explanation: '5.00 - 1.75 = 3.25!',
    law: 'Subtracting Decimals',
  },
  {
    prompt: '0.25 x 4 = ?',
    emoji: '☀️',
    choices: ['1.00', '0.29', '0.100'],
    correctIndex: 0,
    explanation: '25 x 4 = 100. Two decimal places = 1.00!',
    law: 'Multiplying Decimals',
  },
  {
    prompt: 'Dave buys 3 seed packets at $0.50 each. How much?',
    emoji: '☀️',
    choices: ['$1.50', '$1.00', '$3.50'],
    correctIndex: 0,
    explanation: '$0.50 x 3 = $1.50!',
    law: 'Money',
  },
  {
    prompt: 'What is 1/4 as a decimal?',
    emoji: '☀️',
    choices: ['0.25', '0.50', '0.14'],
    correctIndex: 0,
    explanation: '1/4 = 1 divided by 4 = 0.25!',
    law: 'Fractions and Decimals',
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
    id: 'add-decimals',
    weight: 3,
    generate() {
      const a = (randomInt(10, 95) / 10)
      const b = (randomInt(10, 95) / 10)
      const sum = (a + b).toFixed(1)
      const wrong1 = (a + b + 0.1).toFixed(1)
      const wrong2 = (a + b - 0.1).toFixed(1)
      const choices = shuffleArray([
        { text: sum, correct: true },
        { text: wrong1, correct: false },
        { text: wrong2, correct: false },
      ])
      return {
        prompt: `${a.toFixed(1)} + ${b.toFixed(1)} = ?`,
        emoji: '☀️',
        choices: choices.map(c => c.text),
        correctIndex: choices.findIndex(c => c.correct),
        explanation: `${a.toFixed(1)} + ${b.toFixed(1)} = ${sum}!`,
      }
    },
  },
  {
    id: 'subtract-decimals',
    weight: 3,
    generate() {
      let a = randomInt(20, 95) / 10
      let b = randomInt(10, 50) / 10
      if (b > a) [a, b] = [b, a]
      const diff = (a - b).toFixed(1)
      const wrong1 = (a - b + 0.1).toFixed(1)
      const wrong2 = (a - b - 0.1).toFixed(1)
      const choices = shuffleArray([
        { text: diff, correct: true },
        { text: wrong1, correct: false },
        { text: wrong2, correct: false },
      ])
      return {
        prompt: `${a.toFixed(1)} - ${b.toFixed(1)} = ?`,
        emoji: '☀️',
        choices: choices.map(c => c.text),
        correctIndex: choices.findIndex(c => c.correct),
        explanation: `${a.toFixed(1)} - ${b.toFixed(1)} = ${diff}!`,
      }
    },
  },
  {
    id: 'multiply-decimal-whole',
    weight: 2,
    generate() {
      const dec = [0.25, 0.5, 0.75, 0.1, 0.2, 0.3][randomInt(0, 5)]
      const whole = randomInt(2, 5)
      const product = (dec * whole).toFixed(2).replace(/0$/, '').replace(/\.$/, '')
      const wrong1 = (dec * whole + 0.25).toFixed(2).replace(/0$/, '').replace(/\.$/, '')
      const wrong2 = (dec * whole - 0.25).toFixed(2).replace(/0$/, '').replace(/\.$/, '')
      const choices = shuffleArray([
        { text: product, correct: true },
        { text: wrong1, correct: false },
        { text: wrong2, correct: false },
      ])
      return {
        prompt: `${dec} x ${whole} = ?`,
        emoji: '☀️',
        choices: choices.map(c => c.text),
        correctIndex: choices.findIndex(c => c.correct),
        explanation: `${dec} x ${whole} = ${product}!`,
      }
    },
  },
  {
    id: 'money-problem',
    weight: 3,
    generate() {
      const isAdd = Math.random() < 0.5
      if (isAdd) {
        const a = randomInt(1, 9) + randomInt(0, 3) * 0.25
        const b = randomInt(1, 5) + randomInt(0, 3) * 0.25
        const total = (a + b).toFixed(2)
        const wrong1 = (a + b + 0.25).toFixed(2)
        const wrong2 = (a + b - 0.25).toFixed(2)
        const choices = shuffleArray([
          { text: `$${total}`, correct: true },
          { text: `$${wrong1}`, correct: false },
          { text: `$${wrong2}`, correct: false },
        ])
        return {
          prompt: `Dave buys plants for $${a.toFixed(2)} and $${b.toFixed(2)}. How much total?`,
          emoji: '☀️',
          choices: choices.map(c => c.text),
          correctIndex: choices.findIndex(c => c.correct),
          explanation: `$${a.toFixed(2)} + $${b.toFixed(2)} = $${total}!`,
        }
      } else {
        const total = randomInt(5, 10)
        const cost = randomInt(1, total - 1) + randomInt(0, 3) * 0.25
        const change = (total - cost).toFixed(2)
        const wrong1 = (total - cost + 0.25).toFixed(2)
        const wrong2 = (total - cost - 0.25).toFixed(2)
        const choices = shuffleArray([
          { text: `$${change}`, correct: true },
          { text: `$${wrong1}`, correct: false },
          { text: `$${wrong2}`, correct: false },
        ])
        return {
          prompt: `Dave pays $${total}.00 for something that costs $${cost.toFixed(2)}. How much change?`,
          emoji: '☀️',
          choices: choices.map(c => c.text),
          correctIndex: choices.findIndex(c => c.correct),
          explanation: `$${total}.00 - $${cost.toFixed(2)} = $${change}!`,
        }
      }
    },
  },
  {
    id: 'fraction-decimal',
    weight: 2,
    generate() {
      const pairs = [
        { frac: '1/2', dec: '0.5' },
        { frac: '1/4', dec: '0.25' },
        { frac: '3/4', dec: '0.75' },
        { frac: '1/10', dec: '0.1' },
        { frac: '1/5', dec: '0.2' },
        { frac: '2/5', dec: '0.4' },
        { frac: '3/10', dec: '0.3' },
      ]
      const p = pairs[randomInt(0, pairs.length - 1)]
      const toDecimal = Math.random() < 0.5
      if (toDecimal) {
        const wrong1 = `0.${randomInt(1, 9)}`
        let wrong2
        do { wrong2 = `0.${randomInt(1, 9)}` } while (wrong2 === wrong1 || wrong2 === p.dec)
        const choices = shuffleArray([
          { text: p.dec, correct: true },
          { text: wrong1 === p.dec ? '0.99' : wrong1, correct: false },
          { text: wrong2, correct: false },
        ])
        return {
          prompt: `What is ${p.frac} as a decimal?`,
          emoji: '☀️',
          choices: choices.map(c => c.text),
          correctIndex: choices.findIndex(c => c.correct),
          explanation: `${p.frac} = ${p.dec}!`,
        }
      } else {
        const allFracs = pairs.map(pp => pp.frac)
        const wrongs = allFracs.filter(f => f !== p.frac)
        const w1 = wrongs[randomInt(0, wrongs.length - 1)]
        let w2
        do { w2 = wrongs[randomInt(0, wrongs.length - 1)] } while (w2 === w1)
        const choices = shuffleArray([
          { text: p.frac, correct: true },
          { text: w1, correct: false },
          { text: w2, correct: false },
        ])
        return {
          prompt: `What fraction is ${p.dec}?`,
          emoji: '☀️',
          choices: choices.map(c => c.text),
          correctIndex: choices.findIndex(c => c.correct),
          explanation: `${p.dec} = ${p.frac}!`,
        }
      }
    },
  },
]

export const chapter5PracticeConfig = { problemGenerators }

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
