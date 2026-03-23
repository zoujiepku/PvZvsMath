// Card factory helpers
function add(v, label) { return { op: '+', value: v, label: label || `+${v}` } }
function sub(v, label) { return { op: '-', value: v, label: label || `−${v}` } }
function mul(v, label) { return { op: '×', value: v, label: label || `×${v}` } }
function div(v, label) { return { op: '÷', value: v, label: label || `÷${v}` } }
function sq() { return { op: 'sq', label: 'n²' } }
function cube() { return { op: 'cube', label: 'n³' } }
function sqrtCard() { return { op: 'sqrt', label: '√n' } }

export const worlds = [
  // ── World 1: Addition ──
  {
    name: 'Backyard',
    description: 'Addition',
    levels: [
      {
        name: 'First Shot',
        zombies: [5],
        cards: [add(2), add(3)],
        start: 0, lineMin: 0, lineMax: 8, step: 1, par: 1,
        hint: 'Add both cards together!',
      },
      {
        name: 'Choose Wisely',
        zombies: [7],
        cards: [add(1), add(2), add(3), add(4)],
        start: 0, lineMin: 0, lineMax: 10, step: 1, par: 1,
        hint: 'Which two cards add up to 7?',
      },
      {
        name: 'Double Trouble',
        zombies: [12, 19],
        cards: [add(5), add(7), add(8), add(11)],
        start: 0, lineMin: 0, lineMax: 25, step: 1, par: 2,
        hint: 'Split the cards: two for each zombie!',
      },
      {
        name: 'Big Stack',
        zombies: [33],
        cards: [add(10), add(8), add(7), add(5), add(3)],
        start: 0, lineMin: 0, lineMax: 40, step: 5, par: 1,
        hint: 'Pick the right cards that add to 33.',
      },
      {
        name: 'Triple Target',
        zombies: [15, 28, 42],
        cards: [add(6), add(9), add(12), add(13), add(15), add(16)],
        start: 0, lineMin: 0, lineMax: 50, step: 5, par: 3,
        hint: 'Split six cards into three groups to hit all three!',
      },
    ],
  },

  // ── World 2: Subtraction ──
  {
    name: 'Pool',
    description: 'Subtraction',
    levels: [
      {
        name: 'Backtrack',
        zombies: [3],
        cards: [add(5), sub(2)],
        start: 0, lineMin: 0, lineMax: 8, step: 1, par: 1,
        hint: 'Go forward 5, then back 2!',
      },
      {
        name: 'Over and Back',
        zombies: [18],
        cards: [add(25), sub(7)],
        start: 0, lineMin: 0, lineMax: 30, step: 5, par: 1,
        hint: '25 − 7 = 18',
      },
      {
        name: 'Precision Strike',
        zombies: [31],
        cards: [add(20), add(15), sub(4)],
        start: 0, lineMin: 0, lineMax: 40, step: 5, par: 1,
        hint: '20 + 15 = 35, then subtract 4!',
      },
      {
        name: 'Zero Hero',
        zombies: [0, 24],
        cards: [add(12), add(12), sub(12), sub(12)],
        start: 0, lineMin: 0, lineMax: 30, step: 5, par: 2,
        hint: 'Adding and subtracting the same number gives zero!',
      },
      {
        name: 'Three Targets',
        zombies: [7, 23, 38],
        cards: [add(15), add(20), add(10), add(18), sub(8), sub(12)],
        start: 0, lineMin: 0, lineMax: 45, step: 5, par: 3,
        hint: 'Mix + and − cards to reach each target.',
      },
    ],
  },

  // ── World 3: Multiplication ──
  {
    name: 'Fog',
    description: 'Multiplication',
    levels: [
      {
        name: 'Times Two',
        zombies: [14],
        cards: [add(7), mul(2)],
        start: 0, lineMin: 0, lineMax: 20, step: 1, par: 1,
        hint: 'First add 7, then multiply by 2!',
      },
      {
        name: 'Many Paths',
        zombies: [24],
        cards: [add(4), add(6), add(8), mul(3), mul(4)],
        start: 0, lineMin: 0, lineMax: 30, step: 5, par: 1,
        hint: '+8 ×3 = 24. Can you find another way?',
      },
      {
        name: 'Order Matters!',
        zombies: [30],
        cards: [add(3), add(7), mul(3)],
        start: 0, lineMin: 0, lineMax: 35, step: 5, par: 1,
        hint: 'Add BOTH numbers first, then multiply! (3+7) × 3 = 30',
      },
      {
        name: 'Split Squad',
        zombies: [20, 36],
        cards: [add(4), add(5), add(9), mul(4), mul(5)],
        start: 0, lineMin: 0, lineMax: 40, step: 5, par: 2,
        hint: 'Each zombie needs one + card and one × card.',
      },
      {
        name: 'Big Times',
        zombies: [42],
        cards: [add(6), add(7), add(3), mul(6), mul(7)],
        start: 0, lineMin: 0, lineMax: 50, step: 5, par: 1,
        hint: '+7 ×6 = 42 or +6 ×7 = 42. Commutative!',
      },
    ],
  },

  // ── World 4: Division ──
  {
    name: 'Graveyard',
    description: 'Division',
    levels: [
      {
        name: 'Split in Half',
        zombies: [15],
        cards: [add(30), div(2)],
        start: 0, lineMin: 0, lineMax: 35, step: 5, par: 1,
        hint: '30 ÷ 2 = 15. Division splits things into equal groups!',
      },
      {
        name: 'Three Ways',
        zombies: [12],
        cards: [add(36), div(3)],
        start: 0, lineMin: 0, lineMax: 40, step: 5, par: 1,
        hint: '36 ÷ 3 = 12. Thirty-six split into 3 equal groups!',
      },
      {
        name: 'Undo the Times',
        zombies: [8],
        cards: [add(8), mul(5), div(5)],
        start: 0, lineMin: 0, lineMax: 45, step: 5, par: 1,
        hint: 'Multiplying then dividing by the same number gets you back! 8 × 5 ÷ 5 = 8',
      },
      {
        name: 'Pick Your Path',
        zombies: [9],
        cards: [add(6), add(12), mul(3), div(2), div(4)],
        start: 0, lineMin: 0, lineMax: 20, step: 1, par: 1,
        hint: 'Try: +6 ×3 ÷2 = 9. Or find another way!',
      },
      {
        name: 'Divide and Conquer',
        zombies: [7, 10],
        cards: [add(14), add(42), add(50), div(2), div(5), div(6)],
        start: 0, lineMin: 0, lineMax: 50, step: 5, par: 2,
        hint: 'Match each big number with the right ÷ card to hit both targets.',
      },
    ],
  },

  // ── World 5: Fractions ──
  {
    name: 'Roof',
    description: 'Fractions',
    levels: [
      {
        name: 'Half Step',
        zombies: [1.5],
        cards: [add(1), add(0.5, '+½')],
        start: 0, lineMin: 0, lineMax: 3, step: 0.5, par: 1,
        hint: '1 + ½ = 1½',
      },
      {
        name: 'Four Halves',
        zombies: [2],
        cards: [add(0.5, '+½'), add(0.5, '+½'), add(0.5, '+½'), add(0.5, '+½')],
        start: 0, lineMin: 0, lineMax: 3, step: 0.5, par: 1,
        hint: 'How many halves make 2? Add them all up!',
      },
      {
        name: 'Quarter Master',
        zombies: [0.75],
        cards: [add(0.25, '+¼'), add(0.25, '+¼'), add(0.25, '+¼'), add(0.5, '+½')],
        start: 0, lineMin: 0, lineMax: 2, step: 0.25, par: 1,
        hint: '¼ + ½ = ¾. Or try three quarters!',
      },
      {
        name: 'Thirds',
        zombies: [1],
        cards: [add(1/3, '+⅓'), add(1/3, '+⅓'), add(1/3, '+⅓'), add(0.5, '+½')],
        start: 0, lineMin: 0, lineMax: 2, step: 0.5, par: 1,
        hint: 'Three thirds make one whole: ⅓ + ⅓ + ⅓ = 1',
      },
      {
        name: 'Mixed Zone',
        zombies: [0.5, 1.75],
        cards: [add(0.5, '+½'), add(0.25, '+¼'), add(0.5, '+½'), add(0.75, '+¾'), add(0.25, '+¼')],
        start: 0, lineMin: 0, lineMax: 2.5, step: 0.25, par: 2,
        hint: 'Hit the first zombie with one or two small cards, save the rest.',
      },
    ],
  },

  // ── World 6: Decimals ──
  {
    name: 'Night',
    description: 'Decimals',
    levels: [
      {
        name: 'Point Five',
        zombies: [12.5],
        cards: [add(5), mul(2.5, '×2.5')],
        start: 0, lineMin: 0, lineMax: 15, step: 1, par: 1,
        hint: '5 × 2.5 = 12.5',
      },
      {
        name: 'Two Roads',
        zombies: [22.5],
        cards: [add(9), add(15), mul(1.5, '×1.5'), mul(2.5, '×2.5')],
        start: 0, lineMin: 0, lineMax: 30, step: 5, par: 1,
        hint: '9 × 2.5 = 22.5 or 15 × 1.5 = 22.5',
      },
      {
        name: 'Decimal Subtract',
        zombies: [17.5],
        cards: [add(20), sub(2.5, '−2.5')],
        start: 0, lineMin: 0, lineMax: 25, step: 1, par: 1,
        hint: '20 − 2.5 = 17.5',
      },
      {
        name: 'Decimal Times',
        zombies: [37.5],
        cards: [add(15), mul(2.5, '×2.5'), add(5), sub(2.5, '−2.5')],
        start: 0, lineMin: 0, lineMax: 45, step: 5, par: 1,
        hint: '15 × 2.5 = 37.5',
      },
      {
        name: 'Decimal Duo',
        zombies: [12.5, 35],
        cards: [add(5), add(7), add(10), mul(2.5, '×2.5'), mul(5)],
        start: 0, lineMin: 0, lineMax: 40, step: 5, par: 2,
        hint: 'One combo for each target. Try ×2.5 and ×5.',
      },
    ],
  },

  // ── World 7: Exponents ──
  {
    name: 'Final Stand',
    description: 'Exponents',
    levels: [
      {
        name: 'Squared!',
        zombies: [25],
        cards: [add(5), sq()],
        start: 0, lineMin: 0, lineMax: 30, step: 5, par: 1,
        hint: '5² means 5 × 5 = 25',
      },
      {
        name: 'Two Roads to 49',
        zombies: [49],
        cards: [add(7), sq(), mul(7)],
        start: 0, lineMin: 0, lineMax: 50, step: 5, par: 1,
        hint: '7² = 49. But also 7 × 7 = 49. They\'re the same thing!',
      },
      {
        name: 'Cubed!',
        zombies: [27],
        cards: [add(3), cube()],
        start: 0, lineMin: 0, lineMax: 30, step: 5, par: 1,
        hint: '3³ means 3 × 3 × 3 = 27',
      },
      {
        name: 'Power Stack',
        zombies: [16],
        cards: [add(2), sq(), sq(), mul(4)],
        start: 0, lineMin: 0, lineMax: 20, step: 1, par: 1,
        hint: 'Try squaring twice: 2² = 4, then 4² = 16!',
      },
      {
        name: 'The Final Battle',
        zombies: [25, 27, 49],
        cards: [add(3), add(5), add(7), sq(), cube(), sq()],
        start: 0, lineMin: 0, lineMax: 50, step: 5, par: 3,
        hint: 'Match each + card with the right power card!',
      },
    ],
  },

  // ── World 8: Mixed Operations ──
  {
    name: 'Dr. Zomboss',
    description: 'Mixed Operations',
    levels: [
      {
        name: 'Add & Subtract',
        zombies: [17],
        cards: [add(25), sub(8), add(6), sub(3)],
        start: 0, lineMin: 0, lineMax: 30, step: 5, par: 1,
        hint: '25 − 8 = 17. Or try a longer path!',
      },
      {
        name: 'Multiply & Divide',
        zombies: [15],
        cards: [add(6), mul(5), div(2), mul(3)],
        start: 0, lineMin: 0, lineMax: 35, step: 5, par: 1,
        hint: '+6 ×5 ÷2 = 15',
      },
      {
        name: 'Four Operations',
        zombies: [19],
        cards: [add(8), mul(3), sub(5), div(1)],
        start: 0, lineMin: 0, lineMax: 30, step: 5, par: 1,
        hint: '(8 × 3) − 5 = 19. Order matters!',
      },
      {
        name: 'Two Paths',
        zombies: [12, 36],
        cards: [add(4), add(6), add(9), mul(3), mul(4), div(2)],
        start: 0, lineMin: 0, lineMax: 40, step: 5, par: 2,
        hint: 'Use × and ÷ wisely. +9 ×4 = 36 and +4 ×3 = 12.',
      },
      {
        name: 'Power Mix',
        zombies: [18, 25],
        cards: [add(5), add(6), mul(3), sq(), sub(7)],
        start: 0, lineMin: 0, lineMax: 30, step: 5, par: 2,
        hint: '5² = 25. And +6 ×3 = 18.',
      },
      {
        name: 'Everything Bagel',
        zombies: [10, 24, 45],
        cards: [add(5), add(8), add(9), mul(3), mul(5), div(2), sub(3), sq()],
        start: 0, lineMin: 0, lineMax: 50, step: 5, par: 3,
        hint: 'Three zombies, all four operations, and a square. Think carefully!',
      },
      {
        name: 'Zomboss Showdown',
        zombies: [7, 25, 48],
        cards: [add(5), add(10), add(12), mul(4), div(2), sq(), sub(3), sub(2)],
        start: 0, lineMin: 0, lineMax: 50, step: 5, par: 3,
        hint: 'The ultimate challenge. +5 sq = 25. +12 ×4 = 48. Use what\'s left for 7.',
      },
    ],
  },
]
