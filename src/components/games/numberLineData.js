// Card factory helpers
function add(v, label) { return { op: '+', value: v, label: label || `+${v}` } }
function sub(v, label) { return { op: '-', value: v, label: label || `−${v}` } }
function mul(v, label) { return { op: '×', value: v, label: label || `×${v}` } }
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
        zombies: [3, 7],
        cards: [add(1), add(2), add(3), add(4)],
        start: 0, lineMin: 0, lineMax: 10, step: 1, par: 2,
        hint: 'Use some cards for one zombie, save the rest for the other!',
      },
      {
        name: 'Triple Threat',
        zombies: [9],
        cards: [add(3), add(3), add(3)],
        start: 0, lineMin: 0, lineMax: 10, step: 1, par: 1,
        hint: '3 + 3 + 3 = ? That\'s like 3 × 3!',
      },
      {
        name: 'Five Alive',
        zombies: [6, 9],
        cards: [add(1), add(2), add(3), add(4), add(5)],
        start: 0, lineMin: 0, lineMax: 12, step: 1, par: 2,
        hint: 'Split your cards into two groups that hit both targets.',
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
        name: 'Aim Low',
        zombies: [1],
        cards: [add(4), add(3), sub(6)],
        start: 0, lineMin: 0, lineMax: 8, step: 1, par: 1,
        hint: 'Add up, then subtract down!',
      },
      {
        name: 'Over and Back',
        zombies: [8],
        cards: [add(5), add(5), sub(2)],
        start: 0, lineMin: 0, lineMax: 12, step: 1, par: 1,
        hint: '5 + 5 = 10, then subtract to reach 8.',
      },
      {
        name: 'Zero Hero',
        zombies: [0, 6],
        cards: [add(3), add(3), sub(3), sub(3)],
        start: 0, lineMin: 0, lineMax: 8, step: 1, par: 2,
        hint: 'Adding and subtracting the same number gives zero!',
      },
      {
        name: 'Sharp Shooter',
        zombies: [1, 8],
        cards: [add(3), add(4), add(5), sub(2), sub(1)],
        start: 0, lineMin: 0, lineMax: 10, step: 1, par: 2,
        hint: 'Use subtraction to reach the small target, addition for the big one.',
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
        zombies: [6],
        cards: [add(3), mul(2)],
        start: 0, lineMin: 0, lineMax: 8, step: 1, par: 1,
        hint: 'First add 3, then multiply by 2!',
      },
      {
        name: 'Many Paths',
        zombies: [12],
        cards: [add(2), add(3), mul(2), mul(3)],
        start: 0, lineMin: 0, lineMax: 15, step: 1, par: 1,
        hint: 'There are multiple ways to reach 12. Can you find them all?',
      },
      {
        name: 'Order Matters!',
        zombies: [10],
        cards: [add(2), add(3), mul(2)],
        start: 0, lineMin: 0, lineMax: 12, step: 1, par: 1,
        hint: 'Try adding BOTH numbers first, then multiplying!',
      },
      {
        name: 'Split Squad',
        zombies: [8, 9],
        cards: [add(2), add(3), mul(3), mul(4)],
        start: 0, lineMin: 0, lineMax: 12, step: 1, par: 2,
        hint: 'Each zombie needs one + card and one × card.',
      },
      {
        name: 'Commutative!',
        zombies: [15],
        cards: [add(3), add(5), mul(3), mul(5)],
        start: 0, lineMin: 0, lineMax: 18, step: 1, par: 1,
        hint: 'Try +3 then ×5... then try +5 then ×3. Notice anything?',
      },
    ],
  },

  // ── World 4: Fractions ──
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

  // ── World 5: Decimals ──
  {
    name: 'Night',
    description: 'Decimals',
    levels: [
      {
        name: 'Point Five',
        zombies: [3],
        cards: [add(1.5, '+1.5'), mul(2)],
        start: 0, lineMin: 0, lineMax: 5, step: 0.5, par: 1,
        hint: '1.5 × 2 = 3',
      },
      {
        name: 'Two Roads',
        zombies: [7.5],
        cards: [add(5), add(2.5, '+2.5'), mul(1.5, '×1.5')],
        start: 0, lineMin: 0, lineMax: 10, step: 0.5, par: 1,
        hint: 'Two different paths reach 7.5. Can you find both?',
      },
      {
        name: 'Small Steps',
        zombies: [0.75],
        cards: [add(0.25, '+0.25'), add(0.5, '+0.50'), add(0.25, '+0.25')],
        start: 0, lineMin: 0, lineMax: 2, step: 0.25, par: 1,
        hint: '0.25 + 0.50 = 0.75',
      },
      {
        name: 'Decimal Times',
        zombies: [10],
        cards: [add(4), mul(2.5, '×2.5'), add(0.5, '+0.5'), sub(0.5, '−0.5')],
        start: 0, lineMin: 0, lineMax: 12, step: 1, par: 1,
        hint: '4 × 2.5 = 10',
      },
      {
        name: 'Decimal Duo',
        zombies: [2.5, 6],
        cards: [add(2.5, '+2.5'), add(1), add(3), mul(2), add(0.5, '+0.5')],
        start: 0, lineMin: 0, lineMax: 8, step: 0.5, par: 2,
        hint: 'One card hits the first zombie. Two cards hit the second.',
      },
    ],
  },

  // ── World 6: Exponents ──
  {
    name: 'Final Stand',
    description: 'Exponents',
    levels: [
      {
        name: 'Squared!',
        zombies: [4],
        cards: [add(2), sq()],
        start: 0, lineMin: 0, lineMax: 6, step: 1, par: 1,
        hint: '2² means 2 × 2 = 4',
      },
      {
        name: 'Two Roads to Nine',
        zombies: [9],
        cards: [add(3), sq(), mul(3)],
        start: 0, lineMin: 0, lineMax: 12, step: 1, par: 1,
        hint: '3² = 9. But also 3 × 3 = 9. They\'re the same thing!',
      },
      {
        name: 'Cubed!',
        zombies: [27],
        cards: [add(3), cube()],
        start: 0, lineMin: 0, lineMax: 30, step: 1, par: 1,
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
        zombies: [4, 8, 27],
        cards: [add(2), add(3), add(4), sq(), cube(), mul(2)],
        start: 0, lineMin: 0, lineMax: 30, step: 1, par: 3,
        hint: 'Match each + card with the right power card!',
      },
    ],
  },
]
