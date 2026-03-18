# PvZ vs Math - Game Design Draft v0

## Overview

Four PvZ-inspired mini-games that reinforce the math topics taught across all 6 chapters.
Each game uses a core PvZ mechanic (lane defense, wall building, shopping, plant growth) as the
vehicle for math practice, turning problem-solving into gameplay.

All games are browser-based, built in React, turn-based or semi-real-time (timer-based turns),
and use the existing SVG character components (Peashooter, Sunflower, Zombie, Wall-Nut, Sun, Crazy Dave).

---

## Game 1: Zombie Lane Defense

### Concept
The flagship game. A simplified PvZ lane defense where solving math problems correctly lets you
fire peas at advancing zombies. Wrong answers (or running out of time) let zombies advance closer
to your house.

### Math Coverage
- **Adaptive difficulty** pulling from all 6 chapters
- Player selects which chapters to include before starting
- Problems get harder as waves progress

### Gameplay Loop

```
[Start Wave] -> [Zombie appears in a lane] -> [Math problem appears]
     -> [Correct] -> Peashooter fires, zombie takes damage
     -> [Wrong]   -> Miss! Zombie advances one step
     -> [Timeout] -> Miss! Zombie advances one step
-> [Repeat until wave cleared or zombie reaches house]
```

### Screen Layout

```
+------------------------------------------+
|  Wave: 3    Score: 150    Lives: 3        |
+------------------------------------------+
|  Lane 1:  [PEA]  . . . . . [ZOMBIE]      |
|  Lane 2:  [PEA]  . . . . . . . .         |
|  Lane 3:  [PEA]  . . . [ZOMBIE] . .      |
+------------------------------------------+
|                                           |
|  Problem:  3 x (4 + 2) = ?               |
|                                           |
|  [12]  [18]  [14]  [10]                   |
|                                           |
+------------------------------------------+
|  Timer: ████████░░  8s remaining          |
+------------------------------------------+
```

### Core Mechanics

**Lanes & Grid:**
- 3 lanes (mobile-friendly), each with 8 grid positions
- Each lane has a Peashooter at position 0 (leftmost)
- Zombies spawn at position 7 (rightmost) and advance left
- If a zombie reaches position 0, you lose a life
- 3 lives total

**Turns & Timing:**
- Semi-real-time: each problem has a 10-second timer
- Zombies advance 1 step every time you answer wrong OR time runs out
- Correct answer = your pea hits the zombie in the most advanced lane
- Regular zombies take 1 hit, Cone zombies take 2, Bucket zombies take 3

**Waves:**
- Wave 1: 3 zombies, Chapter 1 problems (math laws)
- Wave 2: 5 zombies, Chapter 1-2 problems
- Wave 3: 7 zombies, Chapter 2-3 problems (fractions)
- Wave 4: 9 zombies, Chapter 4-5 problems (decimals)
- Wave 5 (Boss): 12 zombies + 1 Flag Zombie (5 HP), Chapter 6 problems (exponents)
- Endless mode after wave 5

**Scoring:**
- +10 points per correct answer
- +5 bonus for answering within 3 seconds
- +50 bonus per wave cleared
- Streak multiplier: consecutive correct answers increase score multiplier (x1, x1.5, x2, x3)

**Sun Collection (Bonus):**
- Every 4th problem, a Sun drops onto a random lane
- Quick tap/click to collect before it fades (3 seconds)
- 25 sun per collection
- At 100 sun, you can "plant" an extra Peashooter in an empty lane (doubles damage in that lane)

### Problem Generation
- Reuse existing `generatePracticeProblem()` functions from each chapter's data file
- Filter by selected chapters
- Track recently shown problems to avoid repetition within a session
- Increase difficulty parameters as waves progress

### React Component Structure

```
src/components/games/
  ZombieLaneDefense.jsx       -- Main game component & state machine
  components/
    GameLane.jsx              -- Single lane with plant + zombie positions
    GameGrid.jsx              -- 3-lane grid layout
    GameProblem.jsx           -- Problem display + answer buttons + timer
    GameHUD.jsx               -- Score, wave, lives, sun display
    GameOver.jsx              -- Final score screen with stats
    WaveIntro.jsx             -- "Wave 3 incoming!" interstitial
```

### State Management

```js
{
  wave: 3,
  lives: 3,
  score: 150,
  streak: 4,
  sun: 75,
  lanes: [
    { plantHP: 1, zombies: [{ pos: 5, hp: 1, type: 'regular' }] },
    { plantHP: 1, zombies: [] },
    { plantHP: 1, zombies: [{ pos: 3, hp: 2, type: 'cone' }] },
  ],
  currentProblem: { ... },
  timeRemaining: 8,
  phase: 'solving' | 'result' | 'wave-intro' | 'game-over',
  selectedChapters: [1, 2, 3, 4, 5, 6],
}
```

---

## Game 2: Fraction Fence

### Concept
Build Wall-Nut barriers by combining fraction pieces to fill a wall before zombies break through.
A puzzle game where each level requires assembling fractions to equal exactly 1 whole (or more for
later levels).

### Math Coverage
- Chapter 2: Basic fractions, comparing fractions, adding fractions with same denominator
- Chapter 3: Equivalent fractions, simplifying, improper fractions, mixed numbers, adding with different denominators

### Gameplay Loop

```
[Level Start] -> [Wall shown with empty fraction slots]
  -> [Fraction piece offered] -> [Player decides: PLACE or SKIP]
     -> [PLACE] -> Piece fills part of the wall
        -> If pieces add to exactly 1: Wall complete! Zombie blocked!
        -> If pieces exceed 1: Overfill! Wall cracks, lose a heart
     -> [SKIP] -> New piece offered (limited skips per level)
  -> [Zombie advances each turn regardless]
  -> [Wall complete before zombie arrives = WIN]
  -> [Zombie reaches wall before complete = LOSE]
```

### Screen Layout

```
+------------------------------------------+
|  Level: 4     Hearts: ♥♥♥    Skips: 2    |
+------------------------------------------+
|                                           |
|  [WALL-NUT] ████████░░░░░░░░ [ZOMBIE]    |
|              ^^^^ filled ^^^^ empty       |
|              Total: 3/8                   |
|                                           |
+------------------------------------------+
|                                           |
|  Your piece:  [ 2/8 ]                    |
|                                           |
|  This is equivalent to: ?                 |
|  [1/2]  [1/3]  [1/4]  [1/8]             |
|                                           |
|  [PLACE]            [SKIP]                |
|                                           |
+------------------------------------------+
```

### Core Mechanics

**The Wall:**
- Displayed as a horizontal bar divided into equal segments
- Denominator determines the number of segments (e.g., denominator 8 = 8 slots)
- Filled segments are colored (Wall-Nut brown), empty ones are gray
- Must fill exactly to 1 whole (all segments filled)

**Fraction Pieces:**
- Each turn, a fraction piece is offered (e.g., "1/4", "2/6", "3/8")
- Player must decide whether to place it or skip
- Before placing, a math challenge may appear:
  - "What is 2/6 simplified?" (must answer correctly to place)
  - "Is 2/4 equivalent to 1/2?" (true/false)
  - "What is 1/4 + 2/4?" (addition check)

**Challenge Types by Level:**

| Levels | Denominator | Challenges |
|--------|-------------|------------|
| 1-3    | Same denominator (all /4 or all /6) | Add fractions, basic comparison |
| 4-6    | Mixed denominators (/4 and /8) | Equivalent fractions, simplifying |
| 7-9    | Different denominators (/3 and /4) | Finding common denominator, adding |
| 10+    | Improper fractions, walls > 1 | Mixed numbers, improper conversion |

**Zombie Timer:**
- Zombie starts 8 steps away
- Advances 1 step per turn (regardless of correct/wrong)
- Player must fill the wall within 8 turns
- Later levels: zombie starts closer (6 steps, then 5)

**Skips:**
- 3 skips per level
- Skipping gives a new piece but zombie still advances
- Strategic: sometimes you should skip a piece that doesn't fit

### Level Progression

```
Level 1:  Fill 4/4 using halves and quarters. Zombie at 8 steps.
Level 2:  Fill 6/6 using thirds and sixths. Zombie at 8 steps.
Level 3:  Fill 8/8 using various eighths. Zombie at 7 steps.
Level 4:  Fill 1 whole using mixed denominators (1/2 and 1/4). Zombie at 7 steps.
Level 5:  Fill 1 whole using /3 and /6 pieces. Zombie at 6 steps.
Level 6:  Fill 1 whole using /4 and /6 (need LCD of 12). Zombie at 6 steps.
Level 7:  Fill 3/2 (1.5 walls) using improper fractions. Zombie at 8 steps.
Level 8:  Fill 2 whole walls (mixed number target). Zombie at 7 steps.
Level 9:  "Boss" - fill 5/3 walls, pieces include negatives to dodge. Zombie at 6 steps.
Level 10: Endless - random denominators, increasing speed.
```

### React Component Structure

```
src/components/games/
  FractionFence.jsx
  components/
    FenceWall.jsx             -- Visual wall bar with filled/empty segments
    FractionPiece.jsx         -- The offered piece with size visualization
    FenceChallenge.jsx        -- Math question before placement
    ZombieApproach.jsx        -- Zombie position indicator
    FenceLevelIntro.jsx       -- Level start screen
```

---

## Game 3: Sun Market

### Concept
Crazy Dave runs a plant shop! Buy the right combination of plants within your sun budget to
survive the upcoming zombie wave. Every transaction requires decimal math — adding prices,
calculating change, applying discounts, and converting between fractions and decimals.

### Math Coverage
- Chapter 4: Decimal place value, comparing decimals, decimal-fraction conversion, rounding
- Chapter 5: Adding/subtracting decimals, multiplying decimals, money problems

### Gameplay Loop

```
[Wave Preview] -> "5 zombies incoming! You need at least 3 plants"
  -> [Shopping Phase] -> Browse Crazy Dave's shop
     -> Select a plant -> Solve a decimal math problem to buy it
        -> [Correct] -> Plant purchased, sun deducted
        -> [Wrong]   -> "Crazy Dave is confused!" No purchase, lose time
  -> [Budget Check] -> Can you afford more? Keep shopping or deploy
  -> [Battle Phase] -> Auto-battle: your plants vs zombies
     -> More/better plants = easier win
  -> [Results] -> Score based on remaining sun + zombies defeated
```

### Screen Layout

```
+------------------------------------------+
|  CRAZY DAVE'S PLANT SHOP                 |
|  Budget: ☀ 12.50     Wave 3 coming!      |
+------------------------------------------+
|                                           |
|  [DAVE] "Welcome! What'll it be?"        |
|                                           |
|  +--------+  +--------+  +--------+      |
|  |Pea     |  |Sun-    |  |Wall-   |      |
|  |shooter |  |flower  |  |Nut     |      |
|  |☀ 1.75  |  |☀ 2.50  |  |☀ 3.25  |      |
|  |Dmg: 1  |  |Sun: +2 |  |HP: 5   |      |
|  +--------+  +--------+  +--------+      |
|                                           |
|  +--------+  +--------+                   |
|  |Chomper |  |Cherry  |                   |
|  |        |  |Bomb    |                   |
|  |☀ 4.50  |  |☀ 7.75  |                   |
|  |Dmg: 5  |  |Dmg: 10 |                   |
|  +--------+  +--------+                   |
|                                           |
+------------------------------------------+
|  Cart: Peashooter, Sunflower              |
|  Total: ☀ 4.25    Remaining: ☀ 8.25      |
|                                           |
|  [CHECKOUT & FIGHT]                       |
+------------------------------------------+
```

### Core Mechanics

**Shopping:**
- 5 plants available each wave, with decimal prices
- Select a plant to buy -> a math problem appears before purchase confirms
- Problems are contextual to the purchase:
  - "Peashooter costs 1.75 sun. You're buying 3. What's the total?" (multiply decimals)
  - "You have 8.25 sun. Wall-Nut costs 3.25. What's your remaining budget?" (subtract)
  - "Sunflower is 20% off! Normal price: 2.50. What's the sale price?" (fraction of decimal)
  - "Which costs more per damage point: Peashooter (1.75, dmg 1) or Chomper (4.50, dmg 5)?" (divide/compare)

**Plant Catalog:**

| Plant | Base Price | Stat | Special |
|-------|-----------|------|---------|
| Peashooter | 1.75 | 1 damage | Basic attacker |
| Sunflower | 2.50 | +2 sun/round | Economy plant |
| Wall-Nut | 3.25 | 5 HP shield | Blocks 5 hits |
| Snow Pea | 3.00 | 1 damage | Slows zombie by 1 step |
| Chomper | 4.50 | 5 damage | One-hit kill (1 use) |
| Cherry Bomb | 7.75 | 10 damage | Hits all zombies in lane |
| Repeater | 5.25 | 2 damage | Double shot |

**Special Events:**
- **Flash Sale:** Random plant goes on sale (fraction/percent discount)
  - "Cherry Bomb is 1/4 off! What's the new price?" (7.75 * 3/4 = 5.8125, round to 5.81)
- **Price Tag Puzzle:** A price is partially hidden
  - "The Chomper costs _.50. The missing digit makes it more than 4.00 but less than 5.00. What digit?"
- **Bundle Deal:** "Buy 2 Peashooters and 1 Wall-Nut for 6.50 instead of 6.75. How much do you save?"
- **Making Change:** "You pay with 10.00 sun. Your total is 6.35. What change does Dave give you?"

**Battle Phase (Auto-resolve):**
- After shopping, plants automatically fight the wave
- Simple auto-battle: plants deal damage, zombies advance
- Show a quick animation of the outcome
- Score = zombies defeated + remaining sun + speed bonus

**Budget Progression:**

| Wave | Starting Sun | Zombie Count | Min Plants Needed |
|------|-------------|-------------|-------------------|
| 1    | 8.00        | 3           | 2                 |
| 2    | 10.50       | 5           | 3                 |
| 3    | 12.75       | 7           | 4                 |
| 4    | 15.00       | 10          | 5                 |
| 5    | 20.00       | 15 + boss   | 6                 |

### React Component Structure

```
src/components/games/
  SunMarket.jsx
  components/
    PlantShop.jsx             -- Plant catalog grid
    PlantCard.jsx             -- Individual plant with price/stats
    ShoppingCart.jsx           -- Current selections + running total
    MarketProblem.jsx         -- Contextual math problem
    BattleScene.jsx           -- Auto-battle result animation
    DaveDialogue.jsx          -- Crazy Dave speech bubbles
```

---

## Game 4: Power Garden

### Concept
Grow plants whose power levels increase exponentially each round. Predict growth, combine plants
using exponent rules, and defend against zombie debuffs that use zero and negative exponents.

### Math Coverage
- Chapter 6: Basic exponents, squares, cubes, same-base multiplication (add exponents),
  same-base division (subtract exponents), zero exponent, negative exponents, square roots

### Gameplay Loop

```
[Plant a Seed] -> Choose a base (2, 3, 4, or 5)
  -> [Growth Phase] -> Plant's power = base^round
     -> "Round 3: Your base-2 plant has power 2^3. What is that?" -> [8]
  -> [Combine Phase] -> Merge two plants for bonus power
     -> "2^3 x 2^4 = 2^?. What's the exponent?" -> [7]
  -> [Zombie Attack] -> Zombies cast debuffs
     -> "Zero Power curse! What is 5^0?" -> [1]
     -> "Negative blast! What is 3^(-2)?" -> [1/9]
  -> [Harvest/Defend] -> Use accumulated power to defeat zombies
```

### Screen Layout

```
+------------------------------------------+
|  POWER GARDEN         Round: 4            |
|  Total Power: 145     Zombies: 3 incoming |
+------------------------------------------+
|                                           |
|  Garden Plots:                            |
|  +--------+  +--------+  +--------+      |
|  | Base 2 |  | Base 3 |  | (empty)|      |
|  | Round 4 |  | Round 2 |  |        |      |
|  | 2^4    |  | 3^2    |  | [PLANT] |      |
|  | = 16   |  | = 9    |  |        |      |
|  +--------+  +--------+  +--------+      |
|                                           |
+------------------------------------------+
|                                           |
|  Challenge: Your base-2 plant grew!       |
|  What is 2^4?                             |
|                                           |
|  [8]  [16]  [12]  [32]                    |
|                                           |
+------------------------------------------+
|  [COMBINE PLANTS]  [HARVEST & ATTACK]     |
+------------------------------------------+
```

### Core Mechanics

**Planting:**
- 4 garden plots available
- Choose a base number (2, 3, 4, or 5) for each plot
- Plant starts at round 0 (power = base^0 = 1)

**Growth Phase (every round):**
- Each plant's exponent increases by 1
- Player must calculate the new power to "water" the plant
- "Your base-3 plant is at round 3. What is 3^3?" -> must answer 27
- Correct answer: plant grows successfully
- Wrong answer: plant wilts (loses 1 round of growth)

**Combine Phase (optional, strategic):**
- Merge two plants with the same base
- Uses the multiplication rule: a^m x a^n = a^(m+n)
- "Combine 2^3 and 2^4. What's the combined exponent?" -> 7
- Result: one powerful plant (2^7 = 128) instead of two weaker ones (8 + 16 = 24)
- Combined power is exponentially greater than sum of parts -- teaches why exponents are powerful

**Division Challenges:**
- Split a plant into smaller ones
- Uses the division rule: a^m / a^n = a^(m-n)
- "Split your 5^6 plant by 5^2. What power remains?" -> 5^4 = 625

**Zombie Debuffs:**
- **Zero Curse:** Zombie casts "zero power" on a plant
  - "What is 4^0?" Must answer 1
  - Plant temporarily drops to power 1
  - Teaches that anything^0 = 1

- **Negative Blast:** Zombie hits plant with negative exponent
  - "Your plant is hit! What is 2^(-3)?" Must answer 1/8
  - Plant's power becomes a fraction (very weak)
  - Teaches negative exponent = 1/base^n

- **Root Attack:** Zombie takes the square root of your plant
  - "Square root attack! What is sqrt(64)?" Must answer 8
  - Plant's power is square-rooted
  - Teaches square roots as inverse of squaring

**Harvest & Defend:**
- Total power across all plants determines attack strength
- Zombies have HP values that increase each round
- Need sufficient total power to defeat all zombies
- Leftover power becomes bonus score

**Round Progression:**

| Round | Zombie HP Total | New Mechanic Introduced |
|-------|----------------|------------------------|
| 1     | 10             | Basic exponents (2^1, 3^1) |
| 2     | 25             | Squares (n^2) |
| 3     | 60             | Cubes (n^3) |
| 4     | 100            | Combining plants (add exponents) |
| 5     | 200            | Splitting plants (subtract exponents) |
| 6     | 350            | Zero curse (n^0 = 1) |
| 7     | 500            | Negative blast (n^-m) |
| 8     | 750            | Square root attack |
| 9     | 1000           | All mechanics combined |
| 10    | BOSS           | Multi-step exponent chains |

### React Component Structure

```
src/components/games/
  PowerGarden.jsx
  components/
    GardenPlot.jsx            -- Single plant plot with base/exponent/power display
    GardenGrid.jsx            -- All plots laid out
    GrowthChallenge.jsx       -- "What is base^exp?" problem
    CombineUI.jsx             -- Select two plants to merge + exponent addition
    ZombieDebuff.jsx          -- Debuff problem (zero, negative, root)
    PowerMeter.jsx            -- Total power vs zombie HP comparison bar
```

---

## Shared Systems

### Problem Engine
All games reuse the existing `generatePracticeProblem()` functions from each chapter's data file.
A shared wrapper provides:

```
src/components/games/shared/
  problemEngine.js            -- Pulls problems from chapter data, tracks seen problems
  gameScoring.js              -- Shared scoring/streak logic
  GameTimer.jsx               -- Countdown timer component
  GameOverScreen.jsx          -- Shared game-over screen with stats + character reactions
```

### Scoring & Rewards
- Each game awards stars (1-3) based on performance
- Stars unlock harder difficulty modes
- High scores saved to localStorage
- Characters react to performance (Crazy Dave cheers, Zombie groans, etc.)

### Navigation
- New "Games" section on the Home screen alongside existing chapters
- Each game has a setup screen (select chapters/difficulty) before starting
- Games accessible after completing at least 1 lesson (soft gate)

### Accessibility
- All games work with keyboard (arrow keys + enter)
- Timer can be disabled in settings for untimed play
- Color-blind friendly: shapes + labels, not just colors

---

## Implementation Priority

| Priority | Game | Reason |
|----------|------|--------|
| 1st | Zombie Lane Defense | Flagship, covers all chapters, most "PvZ feel" |
| 2nd | Fraction Fence | Tightest scope, easiest to implement, strong concept |
| 3rd | Sun Market | Great decimal practice, fun shopping mechanic |
| 4th | Power Garden | Most complex, but exponents chapter is self-contained |

### Estimated Complexity

| Game | New Components | State Complexity | Estimated Size |
|------|---------------|-----------------|----------------|
| Zombie Lane Defense | 7 | High (lanes, zombies, timer, waves) | ~500 lines |
| Fraction Fence | 6 | Medium (wall state, piece queue) | ~350 lines |
| Sun Market | 7 | Medium (cart, budget, battle sim) | ~400 lines |
| Power Garden | 7 | High (plots, growth, combine, debuffs) | ~450 lines |

---

## Open Questions

1. **Persistent progress:** Should game performance unlock anything in the lesson chapters?
2. **Difficulty modes:** Easy (no timer, hints) / Normal / Hard (faster timer, trickier numbers)?
3. **Sound effects:** Worth adding? (pea firing, zombie groan, sun collect, correct/wrong chimes)
4. **Mobile touch:** Any mobile-specific interactions beyond tap-to-select?
5. **Multiplayer potential:** Any of these games work as 2-player (local, taking turns)?
