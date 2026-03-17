// Chapter 6: Exponents & Powers
// Basics, multiply/divide same base, zero exponent, negative exponents, square root teaser
// Uses ^{n} syntax for superscripts and sqrt{n} for square roots

export const chapter6Lesson = [
  // --- Section A: What Are Exponents? ---
  {
    type: 'teach',
    title: 'Cherry Bomb Chain Reaction!',
    story: 'BOOM! A Cherry Bomb explodes and the blast DOUBLES every second! What if the damage kept doubling?',
    equation: '2 x 2 x 2 = 2^{3} = 8 blocks of damage!',
    highlight: 'Instead of writing 2 x 2 x 2, we write 2 to the power of 3!',
  },
  {
    type: 'teach',
    title: 'What Do the Numbers Mean?',
    story: 'In 2^{3}, the big number (2) is called the BASE. The tiny number up top (3) is called the EXPONENT. The exponent tells you how many times to multiply the base by itself!',
    equation: 'base^{exponent}',
    highlight: 'The exponent is the tiny number in the upper right corner!',
  },
  {
    type: 'teach',
    title: 'Dave\'s Sunflower Garden!',
    story: 'Dave has 3 Sunflowers. Each Sunflower produces 3 more Sunflowers. Now he has 3 x 3 = 9 Sunflowers! We say "3 squared" or "3 to the power of 2."',
    grid: { emoji: '🌻', rows: 3, cols: 3 },
    equation: '3^{2} = 3 x 3 = 9',
    highlight: 'Squared means multiplied by itself!',
  },
  {
    type: 'teach',
    title: 'Cubed!',
    story: 'Those 9 Sunflowers each produce 3 more! 3 x 3 x 3 = 27 Sunflowers! That is 3^{3} = 27. We say "3 cubed" — like a 3x3x3 cube of sun!',
    equation: '3^{3} = 3 x 3 x 3 = 27',
    highlight: 'Dave\'s garden is out of control!',
  },
  {
    type: 'interactive',
    title: 'Cherry Bomb Power!',
    story: 'Dave lights a chain of Cherry Bombs! Each one doubles the explosion: 2 x 2 x 2 x 2...',
    question: 'What is 2^{4}?',
    choices: ['16', '8', '12'],
    correctIndex: 0,
    explanation: '2^{4} = 2 x 2 x 2 x 2 = 16! BOOM BOOM BOOM BOOM!',
  },
  {
    type: 'interactive',
    title: 'Sunflower Math!',
    story: 'Dave has 5 Sunflowers and each one grows 5 more...',
    question: 'What is 5^{2}?',
    choices: ['25', '10', '52'],
    correctIndex: 0,
    explanation: '5^{2} = 5 x 5 = 25! Not 5 x 2 — that would only be 10!',
  },

  // --- Section B: Multiplying Powers (Same Base) ---
  {
    type: 'teach',
    title: 'Combining Seed Packs!',
    story: 'Dave has two seed packs of Peashooters. Let us see what happens when we MULTIPLY two powers with the same base!',
    equation: '2^{3} x 2^{2} = (2x2x2) x (2x2) = 2^{5} = 32',
    highlight: 'Count the 2s: three 2s times two 2s = five 2s!',
  },
  {
    type: 'teach',
    title: 'The Multiply Rule!',
    story: 'When you multiply powers with the SAME BASE, just ADD the exponents! The base stays the same. It works because you are combining all the multiplications together!',
    equation: 'a^{m} x a^{n} = a^{m+n}',
    highlight: 'Same base? MULTIPLY means ADD the exponents!',
  },
  {
    type: 'interactive',
    title: 'Zombie Army!',
    story: 'A graveyard spawns 3^{2} zombies on Monday and 3^{3} on Tuesday. They all team up!',
    question: '3^{2} x 3^{3} = ?',
    choices: ['3^{5} = 243', '3^{6} = 729', '9^{5}'],
    correctIndex: 0,
    explanation: 'Same base 3! Add exponents: 2+3=5. So 3^{5} = 243 zombies!',
  },
  {
    type: 'interactive',
    title: 'Power Combo!',
    story: 'Dave powers up his Peashooter with two plant food boosts!',
    question: '5^{3} x 5^{2} = 5^{?}',
    choices: ['5^{5}', '5^{6}', '5^{1}'],
    correctIndex: 0,
    explanation: 'Add exponents: 3+2 = 5. Answer: 5^{5}!',
  },

  // --- Section C: Dividing Powers (Same Base) ---
  {
    type: 'teach',
    title: 'Distributing Plant Food!',
    story: 'Dave has 2^{5} = 32 plant food. He divides them into groups of 2^{2} = 4. How many groups? The 2s cancel out!',
    equation: '2^{5} / 2^{2} = 2^{5-2} = 2^{3} = 8',
    highlight: 'Two of the 2s cancel! Five 2s minus two 2s = three 2s!',
  },
  {
    type: 'teach',
    title: 'The Divide Rule!',
    story: 'When you divide powers with the SAME BASE, SUBTRACT the exponents! Dividing cancels out some of the multiplications.',
    equation: 'a^{m} / a^{n} = a^{m-n}',
    highlight: 'Same base? DIVIDE means SUBTRACT the exponents!',
  },
  {
    type: 'interactive',
    title: 'Dividing Sun!',
    story: 'Dave has a huge pile of sun and shares some with Penny.',
    question: '4^{5} / 4^{3} = 4^{?}',
    choices: ['4^{2}', '4^{8}', '4^{15}'],
    correctIndex: 0,
    explanation: 'Subtract exponents: 5-3 = 2. Answer: 4^{2} = 16!',
  },
  {
    type: 'interactive',
    title: 'Zombie Slayer!',
    story: 'Dave defeated 10^{4} zombies over 10^{2} days. How many per day?',
    question: '10^{4} / 10^{2} = ?',
    choices: ['10^{2} = 100', '10^{6} = 1000000', '10^{8}'],
    correctIndex: 0,
    explanation: 'Subtract: 4-2 = 2. So 10^{2} = 100 zombies per day!',
  },

  // --- Section D: The Power of Zero ---
  {
    type: 'teach',
    title: 'The Mysterious Zero!',
    story: 'What is 2^{0}? Let us use our rule! 2^{3} / 2^{3} = 2^{3-3} = 2^{0}. But also, 8 / 8 = 1. So 2^{0} must equal 1!',
    equation: '2^{0} = 1    (because 2^{3} / 2^{3} = 8/8 = 1)',
    highlight: 'ANYTHING to the power of 0 equals 1!',
  },
  {
    type: 'teach',
    title: 'Even a Gargantuar!',
    story: '5^{0} = 1. 100^{0} = 1. 999^{0} = 1. A MILLION to the power of zero? Still 1! Zero power is the ultimate equalizer — even the mightiest Gargantuar bows to it!',
    equation: 'n^{0} = 1    (for any n)',
    highlight: 'The zero exponent: turning giants into ones since forever!',
  },
  {
    type: 'interactive',
    title: 'Zero Power Challenge!',
    story: 'Dave found the Answer to the Ultimate Question of Life, the Universe, and Everything...',
    question: 'What is 42^{0}?',
    choices: ['1', '42', '0'],
    correctIndex: 0,
    explanation: 'Any number to the power of 0 = 1! Even the meaning of life!',
  },

  // --- Section E: Negative Exponents ---
  {
    type: 'teach',
    title: 'Going Negative!',
    story: 'What is 2^{-1}? Use the divide rule! 2^{0} / 2^{1} = 2^{0-1} = 2^{-1}. But 2^{0} / 2^{1} = 1/2. So 2^{-1} = 1/2!',
    equation: '2^{-1} = 1 / 2^{1} = 1/2',
    highlight: 'A negative exponent flips the number under 1!',
  },
  {
    type: 'teach',
    title: 'Shrinking Zombie!',
    story: 'A zombie got hit by a Shrink Violet! Each negative power makes it tinier! 2^{-1} = 1/2 its size. 2^{-2} = 1/4 its size. 2^{-3} = 1/8 its size!',
    equation: '2^{-2} = 1 / 2^{2} = 1/4',
    highlight: 'Negative exponent = 1 OVER the positive power!',
  },
  {
    type: 'interactive',
    title: 'Shrink Violet Power!',
    story: 'Dave uses a Shrink Violet on a zombie...',
    question: 'What is 3^{-1}?',
    choices: ['1/3', '-3', '3'],
    correctIndex: 0,
    explanation: '3^{-1} = 1/3. Flip it under 1!',
  },
  {
    type: 'interactive',
    title: 'Tiny Zombie!',
    story: 'Dave uses an EXTRA STRONG Shrink Violet!',
    question: 'What is 5^{-2}?',
    choices: ['1/25', '-10', '25'],
    correctIndex: 0,
    explanation: '5^{-2} = 1 / 5^{2} = 1/25. That zombie is TINY!',
  },

  // --- Section F: Square Root Teaser ---
  {
    type: 'teach',
    title: 'The Mystical Plant!',
    story: 'Dave found a mysterious Mystical Plant! It asks: what number times itself equals 9? Well, 3 x 3 = 9! So the answer is 3. This is called the SQUARE ROOT!',
    equation: 'sqrt{9} = 3    because 3^{2} = 9',
    highlight: 'Square root = the REVERSE of squaring!',
  },
  {
    type: 'teach',
    title: 'The Half Power!',
    story: 'Here is the ULTIMATE plant math secret: the square root is the same as raising to the power of 1/2! The Mystical Plant glows...',
    equation: 'sqrt{9} = 9^{1/2} = 3',
    highlight: 'Half exponent = square root! Mind = blown!',
  },
  {
    type: 'interactive',
    title: 'Root Challenge!',
    story: 'The Mystical Plant asks Dave one more question...',
    question: 'What is sqrt{16}?',
    choices: ['4', '8', '2'],
    correctIndex: 0,
    explanation: '4 x 4 = 16, so sqrt{16} = 4! Dave unlocked the Mystical Plant!',
  },
]

export const chapter6Quiz = [
  {
    prompt: 'What is 3^{3}?',
    emoji: '🌻',
    choices: ['27', '9', '33'],
    correctIndex: 0,
    explanation: '3^{3} = 3 x 3 x 3 = 27!',
    law: 'Basic Exponents',
  },
  {
    prompt: '2^{3} x 2^{2} = ?',
    emoji: '☀️',
    choices: ['2^{5} = 32', '2^{6} = 64', '4^{5}'],
    correctIndex: 0,
    explanation: 'Same base! Add exponents: 3+2=5. 2^{5} = 32!',
    law: 'Multiplying Powers',
  },
  {
    prompt: '5^{4} / 5^{2} = ?',
    emoji: '💥',
    choices: ['5^{2} = 25', '5^{6}', '5^{8}'],
    correctIndex: 0,
    explanation: 'Same base! Subtract exponents: 4-2=2. 5^{2} = 25!',
    law: 'Dividing Powers',
  },
  {
    prompt: '7^{0} = ?',
    emoji: '💥',
    choices: ['1', '7', '0'],
    correctIndex: 0,
    explanation: 'Any number to the power of 0 = 1!',
    law: 'Zero Exponent',
  },
  {
    prompt: 'What is sqrt{16}?',
    emoji: '✨',
    choices: ['4', '8', '256'],
    correctIndex: 0,
    explanation: '4 x 4 = 16, so sqrt{16} = 4!',
    law: 'Square Root',
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
    id: 'basic-power',
    weight: 3,
    generate() {
      const base = randomInt(2, 5)
      const exp = randomInt(2, 4)
      const answer = Math.pow(base, exp)
      const wrong1 = base * exp
      const wrong2 = answer + randomInt(1, 5)
      const choices = shuffleArray([
        { text: String(answer), correct: true },
        { text: String(wrong1), correct: false },
        { text: String(wrong2), correct: false },
      ])
      return {
        prompt: `What is ${base}^{${exp}}?`,
        emoji: '💥',
        choices: choices.map(c => c.text),
        correctIndex: choices.findIndex(c => c.correct),
        explanation: `${base}^{${exp}} = ${Array(exp).fill(base).join(' x ')} = ${answer}!`,
      }
    },
  },
  {
    id: 'multiply-same-base',
    weight: 2,
    generate() {
      const base = randomInt(2, 5)
      const m = randomInt(1, 4)
      const n = randomInt(1, 4)
      const sum = m + n
      const choices = shuffleArray([
        { text: `${base}^{${sum}}`, correct: true },
        { text: `${base}^{${m * n}}`, correct: false },
        { text: `${base * base}^{${sum}}`, correct: false },
      ])
      return {
        prompt: `${base}^{${m}} x ${base}^{${n}} = ${base}^{?}`,
        emoji: '💥',
        choices: choices.map(c => c.text),
        correctIndex: choices.findIndex(c => c.correct),
        explanation: `Same base ${base}! Add exponents: ${m}+${n}=${sum}. Answer: ${base}^{${sum}}!`,
      }
    },
  },
  {
    id: 'divide-same-base',
    weight: 2,
    generate() {
      const base = randomInt(2, 5)
      const m = randomInt(3, 6)
      const n = randomInt(1, m - 1)
      const diff = m - n
      const choices = shuffleArray([
        { text: `${base}^{${diff}}`, correct: true },
        { text: `${base}^{${m + n}}`, correct: false },
        { text: `${base}^{${m * n}}`, correct: false },
      ])
      return {
        prompt: `${base}^{${m}} / ${base}^{${n}} = ${base}^{?}`,
        emoji: '☀️',
        choices: choices.map(c => c.text),
        correctIndex: choices.findIndex(c => c.correct),
        explanation: `Same base ${base}! Subtract exponents: ${m}-${n}=${diff}. Answer: ${base}^{${diff}}!`,
      }
    },
  },
  {
    id: 'zero-power',
    weight: 1,
    generate() {
      const base = randomInt(2, 100)
      const choices = shuffleArray([
        { text: '1', correct: true },
        { text: String(base), correct: false },
        { text: '0', correct: false },
      ])
      return {
        prompt: `What is ${base}^{0}?`,
        emoji: '💥',
        choices: choices.map(c => c.text),
        correctIndex: choices.findIndex(c => c.correct),
        explanation: `Any number to the power of 0 = 1! So ${base}^{0} = 1!`,
      }
    },
  },
  {
    id: 'negative-exp',
    weight: 1,
    generate() {
      const base = randomInt(2, 5)
      const exp = randomInt(1, 2)
      const denom = Math.pow(base, exp)
      const answer = `1/${denom}`
      const choices = shuffleArray([
        { text: answer, correct: true },
        { text: `-${base * exp}`, correct: false },
        { text: String(denom), correct: false },
      ])
      return {
        prompt: `What is ${base}^{-${exp}}?`,
        emoji: '🌿',
        choices: choices.map(c => c.text),
        correctIndex: choices.findIndex(c => c.correct),
        explanation: `${base}^{-${exp}} = 1 / ${base}^{${exp}} = 1/${denom}!`,
      }
    },
  },
  {
    id: 'square-root',
    weight: 1,
    generate() {
      const root = randomInt(2, 9)
      const square = root * root
      const wrong1 = square / 2
      const wrong2 = root + root
      const choices = shuffleArray([
        { text: String(root), correct: true },
        { text: String(wrong1), correct: false },
        { text: String(wrong2), correct: false },
      ])
      return {
        prompt: `What is sqrt{${square}}?`,
        emoji: '✨',
        choices: choices.map(c => c.text),
        correctIndex: choices.findIndex(c => c.correct),
        explanation: `${root} x ${root} = ${square}, so sqrt{${square}} = ${root}!`,
      }
    },
  },
]

export const chapter6PracticeConfig = { problemGenerators }

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
