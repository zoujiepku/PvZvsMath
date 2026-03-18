// Chapter 4: Decimals
// Place value, reading/writing, comparing, converting to fractions, rounding

export const chapter4Lesson = [
  // --- Section A: What Are Decimals? ---
  {
    type: 'teach',
    title: 'Parts Smaller Than One!',
    story: 'Crazy Dave visits the Seed Shop. A Peashooter costs 2 coins and half a coin more. We write that as 2.50 coins. The dot is called a decimal point!',
    equation: '2.50 coins',
    highlight: 'The decimal point separates the whole number from the parts!',
  },
  {
    type: 'teach',
    title: 'Decimals Are Fractions!',
    story: 'Decimals are just another way to write fractions! 0.1 means 1/10. 0.5 means 5/10 which is 1/2.',
    equation: '0.1 = 1/10    0.5 = 5/10 = 1/2',
    highlight: 'Decimals and fractions are friends!',
  },
  {
    type: 'teach',
    title: 'Coins Use Decimals!',
    story: 'In PvZ, zombies drop different coins! A gold coin is worth 1.00, a silver coin is worth 0.10, and a diamond is worth 5.00. You need decimals to count your treasure!',
    equation: '1 gold + 3 silver = 1.00 + 0.30 = 1.30 coins',
    highlight: '10 silver coins = 1 gold coin, so silvers are tenths!',
  },

  // --- Section B: Place Value ---
  {
    type: 'teach',
    title: 'Tenths Place!',
    story: 'The first spot after the decimal point is the tenths place. In 0.3, the 3 is in the tenths place. It means 3 out of 10 parts.',
    equation: '0.3 = 3 tenths = 3/10',
    highlight: 'First spot after the dot = tenths!',
  },
  {
    type: 'teach',
    title: 'Hundredths Place!',
    story: 'The second spot after the decimal point is the hundredths place. In 0.25, the 5 is in the hundredths place.',
    equation: '0.25 = 25 hundredths = 25/100',
    highlight: 'Second spot after the dot = hundredths!',
  },
  {
    type: 'interactive',
    title: 'What Place?',
    story: 'Look at the number 0.7',
    question: 'What does the 7 mean in 0.7?',
    choices: ['7 tenths', '7 hundredths', '7 ones'],
    correctIndex: 0,
    explanation: 'The 7 is in the first spot after the decimal, so it means 7 tenths!',
  },
  {
    type: 'interactive',
    title: 'Hundredths!',
    story: 'Look at the number 0.42',
    question: 'What does the 2 mean in 0.42?',
    choices: ['2 tenths', '2 hundredths', '2 ones'],
    correctIndex: 1,
    explanation: 'The 2 is in the second spot after the decimal, so it means 2 hundredths!',
  },

  // --- Section C: Comparing Decimals ---
  {
    type: 'teach',
    title: 'Which Is Bigger?',
    story: 'To compare decimals, look at each place from left to right. Compare 0.3 and 0.5: both have 0 ones, but 5 tenths is more than 3 tenths!',
    equation: '0.5 > 0.3',
    highlight: 'Compare place by place, starting from the left!',
  },
  {
    type: 'teach',
    title: 'Tricky Comparison!',
    story: '0.3 and 0.25 — which is bigger? 0.3 = 0.30. Now compare: 30 hundredths vs 25 hundredths. 0.30 is bigger!',
    equation: '0.3 = 0.30 > 0.25',
    highlight: 'Add a zero to make them the same length, then compare!',
  },
  {
    type: 'interactive',
    title: 'Compare These!',
    story: 'Dave has 0.6 of a coin stash. Penny has 0.4 of a coin stash.',
    question: 'Who has more?',
    choices: ['Dave (0.6)', 'Penny (0.4)', 'They are equal'],
    correctIndex: 0,
    explanation: '6 tenths is more than 4 tenths. Dave has more!',
  },
  {
    type: 'interactive',
    title: 'Tricky One!',
    story: 'Dave has 0.5 coins. Penny has 0.50 coins.',
    question: 'Who has more?',
    choices: ['Dave (0.5)', 'Penny (0.50)', 'They are equal!'],
    correctIndex: 2,
    explanation: '0.5 and 0.50 are the same! Adding a zero at the end does not change the value!',
  },

  // --- Section D: Decimals to Fractions ---
  {
    type: 'teach',
    title: 'Decimal to Fraction!',
    story: 'To change a decimal to a fraction: the digits after the dot become the top number. The place value becomes the bottom number!',
    equation: '0.7 = 7/10    0.25 = 25/100',
    highlight: 'Tenths get 10 on bottom. Hundredths get 100!',
  },
  {
    type: 'teach',
    title: 'Simplify Too!',
    story: '0.5 = 5/10. But we can simplify! 5/10 = 1/2. And 0.25 = 25/100 = 1/4.',
    equation: '0.5 = 5/10 = 1/2',
    highlight: 'Always check if you can simplify!',
  },
  {
    type: 'interactive',
    title: 'Convert This!',
    story: 'Write 0.3 as a fraction.',
    question: '0.3 = ?',
    choices: ['3/10', '3/100', '1/3'],
    correctIndex: 0,
    explanation: '0.3 has one decimal place, so it is 3/10!',
  },
  {
    type: 'interactive',
    title: 'And This One!',
    story: 'Write 0.50 as a simplified fraction.',
    question: '0.50 = ?',
    choices: ['1/2', '50/10', '5/100'],
    correctIndex: 0,
    explanation: '0.50 = 50/100 = 1/2!',
  },

  // --- Section E: Rounding Decimals ---
  {
    type: 'teach',
    title: 'Rounding Decimals!',
    story: 'Sometimes we round decimals to make them simpler. To round to the nearest tenth, look at the hundredths digit.',
    equation: '3.47 rounds to 3.5 (7 >= 5, round up)',
    highlight: 'If the next digit is 5 or more, round up!',
  },
  {
    type: 'teach',
    title: 'Round Down!',
    story: 'If the next digit is less than 5, keep the number the same.',
    equation: '3.42 rounds to 3.4 (2 < 5, round down)',
    highlight: 'Less than 5? Keep it the same!',
  },
  {
    type: 'interactive',
    title: 'Round This!',
    story: 'Dave has 2.38 coins.',
    question: 'Round 2.38 to the nearest tenth.',
    choices: ['2.4', '2.3', '2.5'],
    correctIndex: 0,
    explanation: 'Look at the 8 in hundredths. 8 >= 5, so round up! 2.38 rounds to 2.4!',
  },
  {
    type: 'interactive',
    title: 'One More Round!',
    story: 'A Snow Pea costs 1.62 coins.',
    question: 'Round 1.62 to the nearest tenth.',
    choices: ['1.7', '1.6', '1.5'],
    correctIndex: 1,
    explanation: 'Look at the 2 in hundredths. 2 < 5, so keep it! 1.62 rounds to 1.6!',
  },
]

export const chapter4Quiz = [
  {
    prompt: 'What does the 4 mean in 0.4?',
    emoji: '🪙',
    choices: ['4 tenths', '4 hundredths', '4 ones'],
    correctIndex: 0,
    explanation: 'The first spot after the decimal is tenths. 0.4 = 4 tenths!',
    law: 'Place Value',
  },
  {
    prompt: 'Which is bigger: 0.7 or 0.35?',
    emoji: '🪙',
    choices: ['0.7', '0.35', 'They are equal'],
    correctIndex: 0,
    explanation: '0.7 = 0.70. 70 hundredths > 35 hundredths!',
    law: 'Comparing Decimals',
  },
  {
    prompt: 'Write 0.25 as a fraction.',
    emoji: '🪙',
    choices: ['25/100', '25/10', '2/5'],
    correctIndex: 0,
    explanation: '0.25 has two decimal places, so it is 25/100 (which equals 1/4)!',
    law: 'Decimal to Fraction',
  },
  {
    prompt: '0.5 = which fraction?',
    emoji: '🪙',
    choices: ['1/2', '1/5', '5/100'],
    correctIndex: 0,
    explanation: '0.5 = 5/10 = 1/2!',
    law: 'Decimal to Fraction',
  },
  {
    prompt: 'Round 3.67 to the nearest tenth.',
    emoji: '🪙',
    choices: ['3.6', '3.7', '4.0'],
    correctIndex: 1,
    explanation: 'The 7 in hundredths is >= 5, so round up! 3.67 rounds to 3.7!',
    law: 'Rounding',
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
    id: 'place-value',
    weight: 2,
    generate() {
      const digit = randomInt(1, 9)
      const isTenths = Math.random() < 0.5
      const decimal = isTenths ? `0.${digit}` : `0.${randomInt(1, 9)}${digit}`
      const place = isTenths ? 'tenths' : 'hundredths'
      const wrongPlace = isTenths ? 'hundredths' : 'tenths'
      const choices = shuffleArray([
        { text: `${digit} ${place}`, correct: true },
        { text: `${digit} ${wrongPlace}`, correct: false },
        { text: `${digit} ones`, correct: false },
      ])
      return {
        prompt: `What does the ${digit} mean in ${decimal}?`,
        emoji: '🪙',
        choices: choices.map(c => c.text),
        correctIndex: choices.findIndex(c => c.correct),
        explanation: `The ${digit} is in the ${place} place!`,
      }
    },
  },
  {
    id: 'compare-decimals',
    weight: 3,
    generate() {
      const a = randomInt(1, 9) / 10
      let b
      do { b = randomInt(1, 9) / 10 } while (b === a)
      const aStr = a.toFixed(1)
      const bStr = b.toFixed(1)
      const bigger = a > b ? aStr : bStr
      const choices = shuffleArray([
        { text: aStr, correct: a > b },
        { text: bStr, correct: b > a },
        { text: 'They are equal', correct: false },
      ])
      return {
        prompt: `Which is bigger: ${aStr} or ${bStr}?`,
        emoji: '🪙',
        choices: choices.map(c => c.text),
        correctIndex: choices.findIndex(c => c.correct),
        explanation: `${bigger} is bigger!`,
      }
    },
  },
  {
    id: 'decimal-to-fraction',
    weight: 3,
    generate() {
      const conversions = [
        { dec: '0.1', frac: '1/10' },
        { dec: '0.2', frac: '2/10' },
        { dec: '0.3', frac: '3/10' },
        { dec: '0.4', frac: '4/10' },
        { dec: '0.5', frac: '1/2' },
        { dec: '0.7', frac: '7/10' },
        { dec: '0.8', frac: '8/10' },
        { dec: '0.9', frac: '9/10' },
        { dec: '0.25', frac: '1/4' },
        { dec: '0.75', frac: '3/4' },
      ]
      const c = conversions[randomInt(0, conversions.length - 1)]
      const wrong1 = c.dec.length === 3 ? `${c.dec[2]}/100` : `${c.dec.slice(2)}/10`
      const wrong2 = `1/${c.dec[2]}`
      const choices = shuffleArray([
        { text: c.frac, correct: true },
        { text: wrong1, correct: false },
        { text: wrong2, correct: false },
      ])
      return {
        prompt: `${c.dec} = which fraction?`,
        emoji: '🪙',
        choices: choices.map(ch => ch.text),
        correctIndex: choices.findIndex(ch => ch.correct),
        explanation: `${c.dec} = ${c.frac}!`,
      }
    },
  },
  {
    id: 'rounding',
    weight: 3,
    generate() {
      const whole = randomInt(1, 9)
      const tenths = randomInt(1, 8)
      const hundredths = randomInt(1, 9)
      const num = `${whole}.${tenths}${hundredths}`
      const rounded = hundredths >= 5 ? `${whole}.${tenths + 1}` : `${whole}.${tenths}`
      // handle tenths + 1 = 10 edge case
      let roundedStr = rounded
      if (tenths + 1 === 10 && hundredths >= 5) {
        roundedStr = `${whole + 1}.0`
      }
      const wrongUp = `${whole}.${Math.min(tenths + 2, 9)}`
      const wrongDown = `${whole}.${Math.max(tenths - 1, 0)}`
      const choices = shuffleArray([
        { text: roundedStr, correct: true },
        { text: wrongUp, correct: false },
        { text: wrongDown, correct: false },
      ])
      return {
        prompt: `Round ${num} to the nearest tenth.`,
        emoji: '🪙',
        choices: choices.map(c => c.text),
        correctIndex: choices.findIndex(c => c.correct),
        explanation: `${hundredths >= 5 ? `${hundredths} >= 5, round up!` : `${hundredths} < 5, keep it!`} ${num} rounds to ${roundedStr}!`,
      }
    },
  },
]

export const chapter4PracticeConfig = { problemGenerators }

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
