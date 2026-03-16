// Chapter 3: More Fractions
// Equivalent fractions, simplifying, improper/mixed numbers, multiplying, adding with different denominators

export const chapter3Lesson = [
  // --- Section A: Equivalent Fractions ---
  {
    type: 'teach',
    title: 'Same Amount, Different Slices!',
    story: 'Steve cuts a cake in half. Alex cuts the same size cake into 4 pieces and takes 2. They have the same amount!',
    fractionCompare: {
      left: { total: 2, filled: 1, label: '1/2' },
      right: { total: 4, filled: 2, label: '2/4' },
    },
    equation: 'frac{1}{2} = frac{2}{4}',
    highlight: 'These fractions are equal!',
  },
  {
    type: 'teach',
    title: 'Equivalent Fractions!',
    story: 'Fractions that look different but have the same value are called equivalent fractions. Look at all these!',
    equation: 'frac{1}{2} = frac{2}{4} = frac{3}{6} = frac{4}{8}',
    highlight: 'They all mean the same thing: one half!',
  },
  {
    type: 'teach',
    title: 'The Trick!',
    story: 'To make an equivalent fraction, multiply the top AND bottom by the same number. The value stays the same!',
    equation: 'frac{1}{2} x frac{2}{2} = frac{2}{4}',
    highlight: 'Multiply both parts by the same number!',
  },
  {
    type: 'interactive',
    title: 'Find the Match!',
    story: 'Which fraction is the same as frac{1}{3}?',
    fractionCompare: {
      left: { total: 3, filled: 1, label: '1/3' },
      right: { total: 6, filled: 2, label: '2/6' },
    },
    question: 'Which fraction equals frac{1}{3}?',
    choices: ['frac{2}{6}', 'frac{2}{5}', 'frac{1}{4}'],
    correctIndex: 0,
    explanation: 'frac{1}{3} x frac{2}{2} = frac{2}{6}. They are equivalent!',
  },
  {
    type: 'interactive',
    title: 'Simplify to Match!',
    story: 'Alex says frac{2}{4} is the same as another simpler fraction.',
    fractionCompare: {
      left: { total: 4, filled: 2, label: '2/4' },
      right: { total: 2, filled: 1, label: '1/2' },
    },
    question: 'Which fraction equals frac{2}{4}?',
    choices: ['frac{1}{2}', 'frac{1}{3}', 'frac{3}{4}'],
    correctIndex: 0,
    explanation: 'frac{2}{4} = frac{1}{2}. Same amount of cake!',
  },

  // --- Section B: Simplifying Fractions ---
  {
    type: 'teach',
    title: 'Make It Simpler!',
    story: 'Steve has frac{4}{8} of a cake. Can we write this in a simpler way? Both 4 and 8 can be divided by 4!',
    fractionCompare: {
      left: { total: 8, filled: 4, label: '4/8' },
      right: { total: 2, filled: 1, label: '1/2' },
    },
    equation: 'frac{4}{8} = frac{1}{2}',
    highlight: '4 divided by 4 = 1, 8 divided by 4 = 2. So frac{4}{8} = frac{1}{2}!',
  },
  {
    type: 'teach',
    title: 'How to Simplify',
    story: 'Simplifying means dividing the top and bottom by the same number. Find a number that goes into both!',
    equation: 'frac{6}{8}: both divide by 2 = frac{3}{4}',
    highlight: 'Divide top and bottom by the same number!',
  },
  {
    type: 'interactive',
    title: 'You Simplify!',
    story: 'Steve has frac{2}{4} of a pie. What is the simpler way to write this?',
    fractionCompare: {
      left: { total: 4, filled: 2, label: '2/4' },
      right: { total: 2, filled: 1, label: '?' },
    },
    question: 'Simplify frac{2}{4}',
    choices: ['frac{1}{2}', 'frac{1}{4}', 'frac{2}{2}'],
    correctIndex: 0,
    explanation: 'Divide both by 2: frac{2}{4} = frac{1}{2}!',
  },
  {
    type: 'interactive',
    title: 'One More!',
    story: 'Alex has frac{3}{6} of a cookie. Simplify it!',
    fractionCompare: {
      left: { total: 6, filled: 3, label: '3/6' },
      right: { total: 2, filled: 1, label: '?' },
    },
    question: 'Simplify frac{3}{6}',
    choices: ['frac{1}{2}', 'frac{1}{3}', 'frac{2}{3}'],
    correctIndex: 0,
    explanation: 'Divide both by 3: frac{3}{6} = frac{1}{2}!',
  },

  // --- Section C: Improper Fractions & Mixed Numbers ---
  {
    type: 'teach',
    title: 'More Than One Whole!',
    story: 'Steve is really hungry! He ate 3 slices of a cake that only has 2 slices. That is frac{3}{2}!',
    fractionBar: { total: 4, filled: 3, label: '3/2 = more than 1 whole!' },
    equation: 'frac{3}{2}',
    highlight: 'When the top is bigger than the bottom, it is an improper fraction!',
  },
  {
    type: 'teach',
    title: 'Mixed Numbers!',
    story: 'frac{3}{2} means 1 whole cake plus frac{1}{2} more. We can write this as 1 and frac{1}{2}. That is called a mixed number!',
    equation: 'frac{3}{2} = 1 and frac{1}{2}',
    highlight: 'A mixed number = a whole number + a fraction!',
  },
  {
    type: 'teach',
    title: 'How to Convert!',
    story: 'To turn an improper fraction into a mixed number: divide the top by the bottom!',
    equation: '3 / 2 = 1 remainder 1 = 1 and frac{1}{2}',
    highlight: 'Divide, and the remainder becomes the fraction!',
  },
  {
    type: 'interactive',
    title: 'You Try!',
    story: 'Steve has frac{5}{4} of a pie.',
    fractionBar: { total: 8, filled: 5, label: '5/4' },
    question: 'What is frac{5}{4} as a mixed number?',
    choices: ['1 and frac{1}{4}', '1 and frac{1}{2}', '2 and frac{1}{4}'],
    correctIndex: 0,
    explanation: '5 divided by 4 = 1 remainder 1. So frac{5}{4} = 1 and frac{1}{4}!',
  },
  {
    type: 'teach',
    title: 'Going the Other Way!',
    story: 'We can also turn a mixed number back into an improper fraction. Take 1 and frac{2}{3}.',
    equation: '1 x 3 + 2 = 5, so 1 and frac{2}{3} = frac{5}{3}',
    highlight: 'Multiply whole x bottom, then add the top!',
  },
  {
    type: 'interactive',
    title: 'Convert This!',
    story: 'Steve has 2 and frac{1}{2} pies.',
    question: 'What is 2 and frac{1}{2} as an improper fraction?',
    choices: ['frac{5}{2}', 'frac{3}{2}', 'frac{4}{2}'],
    correctIndex: 0,
    explanation: '2 x 2 + 1 = 5. So 2 and frac{1}{2} = frac{5}{2}!',
  },

  // --- Section D: Multiplying Fractions ---
  {
    type: 'teach',
    title: 'Half of a Half!',
    story: 'Steve has frac{1}{2} of a cake. He eats frac{1}{2} of that piece. How much of the whole cake did he eat?',
    fractionBar: { total: 4, filled: 1, label: '1/2 of 1/2 = 1/4' },
    equation: 'frac{1}{2} x frac{1}{2} = frac{1}{4}',
    highlight: 'Half of a half is a quarter!',
  },
  {
    type: 'teach',
    title: 'The Multiply Rule!',
    story: 'To multiply fractions: multiply the tops together, then multiply the bottoms together!',
    equation: 'frac{1}{2} x frac{1}{2} = frac{1x1}{2x2} = frac{1}{4}',
    highlight: 'Top x top, bottom x bottom!',
  },
  {
    type: 'interactive',
    title: 'Multiply These!',
    story: 'Steve takes frac{1}{2} of frac{1}{3} of a cake.',
    question: 'frac{1}{2} x frac{1}{3} = ?',
    choices: ['frac{1}{6}', 'frac{1}{5}', 'frac{2}{3}'],
    correctIndex: 0,
    explanation: '1x1 = 1 on top, 2x3 = 6 on bottom. Answer: frac{1}{6}!',
  },
  {
    type: 'interactive',
    title: 'One More Multiply!',
    story: 'Alex eats frac{2}{3} of frac{1}{2} of a pie.',
    question: 'frac{2}{3} x frac{1}{2} = ?',
    choices: ['frac{2}{6}', 'frac{2}{5}', 'frac{3}{6}'],
    correctIndex: 0,
    explanation: '2x1 = 2 on top, 3x2 = 6 on bottom. frac{2}{6} which simplifies to frac{1}{3}!',
  },

  // --- Section E: Adding Fractions with Different Denominators ---
  {
    type: 'teach',
    title: 'Different Size Pieces!',
    story: 'Steve ate frac{1}{2} of a cake and Alex ate frac{1}{3}. How much total? We cannot just add frac{1}{2} + frac{1}{3} because the pieces are different sizes!',
    fractionCompare: {
      left: { total: 2, filled: 1, label: '1/2' },
      right: { total: 3, filled: 1, label: '1/3' },
    },
    highlight: 'We need to make the pieces the same size first!',
  },
  {
    type: 'teach',
    title: 'Find a Common Bottom!',
    story: 'Both 2 and 3 fit into 6. So we change both fractions: frac{1}{2} = frac{3}{6} and frac{1}{3} = frac{2}{6}. Now we can add!',
    fractionBar: { total: 6, filled: 5, label: '3/6 + 2/6 = 5/6' },
    equation: 'frac{1}{2} + frac{1}{3} = frac{3}{6} + frac{2}{6} = frac{5}{6}',
    highlight: 'Make the bottoms match, then add the tops!',
  },
  {
    type: 'interactive',
    title: 'Add These!',
    story: 'Steve ate frac{1}{2} of a pie and frac{1}{4} more. Hint: frac{1}{2} = frac{2}{4}.',
    fractionBar: { total: 4, filled: 3, label: '2/4 + 1/4 = ?' },
    question: 'frac{1}{2} + frac{1}{4} = ?',
    choices: ['frac{3}{4}', 'frac{2}{6}', 'frac{1}{3}'],
    correctIndex: 0,
    explanation: 'frac{1}{2} = frac{2}{4}. Then frac{2}{4} + frac{1}{4} = frac{3}{4}!',
  },
]

export const chapter3Quiz = [
  {
    prompt: 'Which fraction is the same as frac{1}{2}?',
    emoji: '🍰',
    choices: ['frac{3}{6}', 'frac{2}{3}', 'frac{1}{4}'],
    correctIndex: 0,
    explanation: 'frac{1}{2} x frac{3}{3} = frac{3}{6}. They are equivalent!',
    law: 'Equivalent Fractions',
  },
  {
    prompt: 'Simplify frac{4}{8}',
    emoji: '🍰',
    choices: ['frac{1}{4}', 'frac{1}{2}', 'frac{2}{4}'],
    correctIndex: 1,
    explanation: 'Divide top and bottom by 4: frac{4}{8} = frac{1}{2}!',
    law: 'Simplifying Fractions',
  },
  {
    prompt: 'What is frac{7}{4} as a mixed number?',
    emoji: '🍰',
    choices: ['1 and frac{1}{2}', '1 and frac{3}{4}', '2 and frac{1}{4}'],
    correctIndex: 1,
    explanation: '7 divided by 4 = 1 remainder 3. So frac{7}{4} = 1 and frac{3}{4}!',
    law: 'Mixed Numbers',
  },
  {
    prompt: 'frac{1}{3} x frac{1}{2} = ?',
    emoji: '🍰',
    choices: ['frac{1}{6}', 'frac{2}{3}', 'frac{1}{5}'],
    correctIndex: 0,
    explanation: '1x1 = 1 on top, 3x2 = 6 on bottom. Answer: frac{1}{6}!',
    law: 'Multiplying Fractions',
  },
  {
    prompt: 'frac{1}{2} + frac{1}{3} = ?',
    emoji: '🍰',
    choices: ['frac{2}{5}', 'frac{5}{6}', 'frac{1}{6}'],
    correctIndex: 1,
    explanation: 'frac{1}{2} = frac{3}{6} and frac{1}{3} = frac{2}{6}. So frac{3}{6} + frac{2}{6} = frac{5}{6}!',
    law: 'Adding Different Denominators',
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

function gcd(a, b) {
  while (b) { const t = b; b = a % b; a = t }
  return a
}

function lcm(a, b) {
  return (a * b) / gcd(a, b)
}

const problemGenerators = [
  {
    id: 'equivalent',
    weight: 3,
    generate() {
      const denoms = [2, 3, 4, 5]
      const d = denoms[randomInt(0, denoms.length - 1)]
      const n = randomInt(1, d - 1)
      const multiplier = randomInt(2, 3)
      const equivN = n * multiplier
      const equivD = d * multiplier
      const answer = `frac{${equivN}}{${equivD}}`
      // generate wrong choices
      const wrong1 = `frac{${equivN}}{${equivD + 1}}`
      const wrong2 = `frac{${n}}{${d + 1}}`
      const choices = shuffleArray([
        { text: answer, correct: true },
        { text: wrong1, correct: false },
        { text: wrong2, correct: false },
      ])
      return {
        prompt: `Which fraction equals frac{${n}}{${d}}?`,
        emoji: '🍰',
        choices: choices.map(c => c.text),
        correctIndex: choices.findIndex(c => c.correct),
        explanation: `frac{${n}}{${d}} x frac{${multiplier}}{${multiplier}} = frac{${equivN}}{${equivD}}!`,
      }
    },
  },
  {
    id: 'simplify',
    weight: 2,
    generate() {
      const simpleFractions = [
        { n: 2, d: 4, sn: 1, sd: 2 },
        { n: 3, d: 6, sn: 1, sd: 2 },
        { n: 4, d: 8, sn: 1, sd: 2 },
        { n: 2, d: 6, sn: 1, sd: 3 },
        { n: 3, d: 9, sn: 1, sd: 3 },
        { n: 2, d: 8, sn: 1, sd: 4 },
        { n: 4, d: 6, sn: 2, sd: 3 },
        { n: 6, d: 8, sn: 3, sd: 4 },
        { n: 6, d: 9, sn: 2, sd: 3 },
      ]
      const f = simpleFractions[randomInt(0, simpleFractions.length - 1)]
      const answer = `frac{${f.sn}}{${f.sd}}`
      const wrong1 = `frac{${f.sn}}{${f.sd + 1}}`
      const wrong2 = `frac{${f.n}}{${f.d + 2}}`
      const choices = shuffleArray([
        { text: answer, correct: true },
        { text: wrong1, correct: false },
        { text: wrong2, correct: false },
      ])
      const divisor = f.n / f.sn
      return {
        prompt: `Simplify frac{${f.n}}{${f.d}}`,
        emoji: '🍰',
        choices: choices.map(c => c.text),
        correctIndex: choices.findIndex(c => c.correct),
        explanation: `Divide both by ${divisor}: frac{${f.n}}{${f.d}} = ${answer}!`,
      }
    },
  },
  {
    id: 'improper-to-mixed',
    weight: 2,
    generate() {
      const d = [2, 3, 4][randomInt(0, 2)]
      const whole = randomInt(1, 3)
      const remainder = randomInt(1, d - 1)
      const numerator = whole * d + remainder
      const answer = `${whole} and frac{${remainder}}{${d}}`
      const wrong1 = `${whole + 1} and frac{${remainder}}{${d}}`
      const wrong2 = `${whole} and frac{${(remainder % d) + 1}}{${d}}`
      const choices = shuffleArray([
        { text: answer, correct: true },
        { text: wrong1, correct: false },
        { text: wrong2 !== answer ? wrong2 : `${whole - 1 || 1} and frac{${remainder}}{${d}}`, correct: false },
      ])
      return {
        prompt: `What is frac{${numerator}}{${d}} as a mixed number?`,
        emoji: '🍰',
        choices: choices.map(c => c.text),
        correctIndex: choices.findIndex(c => c.correct),
        explanation: `${numerator} / ${d} = ${whole} remainder ${remainder}. So frac{${numerator}}{${d}} = ${answer}!`,
      }
    },
  },
  {
    id: 'multiply',
    weight: 2,
    generate() {
      const fracs = [
        { n: 1, d: 2 }, { n: 1, d: 3 }, { n: 1, d: 4 },
        { n: 2, d: 3 }, { n: 3, d: 4 }, { n: 1, d: 5 },
      ]
      const a = fracs[randomInt(0, fracs.length - 1)]
      const b = fracs[randomInt(0, fracs.length - 1)]
      const rn = a.n * b.n
      const rd = a.d * b.d
      const answer = `frac{${rn}}{${rd}}`
      const wrong1 = `frac{${rn + 1}}{${rd}}`
      const wrong2 = `frac{${rn}}{${rd - 1 || rd + 1}}`
      const choices = shuffleArray([
        { text: answer, correct: true },
        { text: wrong1, correct: false },
        { text: wrong2, correct: false },
      ])
      return {
        prompt: `frac{${a.n}}{${a.d}} x frac{${b.n}}{${b.d}} = ?`,
        emoji: '🍰',
        choices: choices.map(c => c.text),
        correctIndex: choices.findIndex(c => c.correct),
        explanation: `${a.n}x${b.n} = ${rn} on top, ${a.d}x${b.d} = ${rd} on bottom. Answer: ${answer}!`,
      }
    },
  },
  {
    id: 'add-diff-denom',
    weight: 2,
    generate() {
      // Use pairs where LCD is manageable
      const pairs = [
        { a: { n: 1, d: 2 }, b: { n: 1, d: 3 }, lcd: 6 },
        { a: { n: 1, d: 2 }, b: { n: 1, d: 4 }, lcd: 4 },
        { a: { n: 1, d: 3 }, b: { n: 1, d: 6 }, lcd: 6 },
        { a: { n: 1, d: 4 }, b: { n: 1, d: 2 }, lcd: 4 },
        { a: { n: 2, d: 3 }, b: { n: 1, d: 6 }, lcd: 6 },
        { a: { n: 1, d: 2 }, b: { n: 1, d: 6 }, lcd: 6 },
        { a: { n: 1, d: 3 }, b: { n: 1, d: 4 }, lcd: 12 },
      ]
      const p = pairs[randomInt(0, pairs.length - 1)]
      const aN = p.a.n * (p.lcd / p.a.d)
      const bN = p.b.n * (p.lcd / p.b.d)
      const sumN = aN + bN
      const g = gcd(sumN, p.lcd)
      const simpN = sumN / g
      const simpD = p.lcd / g
      const answer = g > 1 ? `frac{${simpN}}{${simpD}}` : `frac{${sumN}}{${p.lcd}}`
      const wrong1 = `frac{${p.a.n + p.b.n}}{${p.a.d + p.b.d}}`
      const wrong2 = `frac{${sumN + 1}}{${p.lcd}}`
      const choices = shuffleArray([
        { text: answer, correct: true },
        { text: wrong1, correct: false },
        { text: wrong2, correct: false },
      ])
      return {
        prompt: `frac{${p.a.n}}{${p.a.d}} + frac{${p.b.n}}{${p.b.d}} = ?`,
        emoji: '🍰',
        choices: choices.map(c => c.text),
        correctIndex: choices.findIndex(c => c.correct),
        explanation: `Convert to ${p.lcd}ths: frac{${aN}}{${p.lcd}} + frac{${bN}}{${p.lcd}} = frac{${sumN}}{${p.lcd}}${g > 1 ? ` = ${answer}` : ''}!`,
      }
    },
  },
]

export const chapter3PracticeConfig = { problemGenerators }

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
