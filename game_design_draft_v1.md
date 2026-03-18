# PvZ vs Math - Game Design Draft v1

## Design Philosophy

**v0 Problem:** Math was a toll booth. "Solve 3+4 to fire your pea." The player wants to play
PvZ and tolerates the math. The game and the math are two separate activities glued together.

**v1 Principle:** Math IS the gameplay. The player does math because that's how they make
strategic decisions. Success requires mathematical thinking, not just computing answers.
The player isn't being quizzed — they're planning, experimenting, and discovering.

---

## Game 1: Plant Commander

### Concept

A turn-by-turn strategy puzzle. You see the zombie wave coming, you see your budget, and you
must plan your plant placement to survive. Every placement decision is a math decision — damage
calculation, resource budgeting, and optimization. After you place your plants, you hit "Go"
and watch the battle play out. Did your math check out?

The core insight: real PvZ strategy IS math. Cost-benefit analysis, resource allocation,
damage-per-second calculations. This game makes those calculations explicit, visible, and
central to the experience.

### Why This Works

The player is never asked "What is 3 × 4?" as a quiz. Instead, they're staring at a lane with
a 12-HP zombie and thinking: "Two Peashooters do 1+1 = 2 damage per turn. Zombie arrives in
5 turns. 2 × 5 = 10... that's not enough. I need a Repeater (2 damage/turn) plus a Peashooter
(1 damage/turn) = 3/turn × 5 turns = 15. That works with 3 to spare."

The math isn't a gate — it's how you think about the problem.

### The Lawn

```
         Col 1    Col 2    Col 3    Col 4    Col 5
       +--------+--------+--------+--------+--------+
Lane 1 |        |        |        |        |     →  | Zombie (HP: 6)
       +--------+--------+--------+--------+--------+
Lane 2 |        |        |        |        |  →  →  | 2 Zombies (HP: 4, 8)
       +--------+--------+--------+--------+--------+
Lane 3 |        |        |        |        |     →  | Zombie (HP: 10)
       +--------+--------+--------+--------+--------+

Sun Budget: ☀ 8.00                   [▶ FIGHT!]
```

The player drags plants from their seed tray onto the grid. The zombie formation is
fully visible — no surprises. This is a planning game, not a reaction game.

### Plant Stats

Every plant has simple, transparent stats. The player can see all the math.

| Plant | Cost | Effect | Notes |
|-------|------|--------|-------|
| Peashooter | ☀ 1.50 | 1 damage/turn to first zombie in lane | Basic unit |
| Repeater | ☀ 3.00 | 2 damage/turn | Exactly 2× Peashooter, but costs 2× too |
| Snow Pea | ☀ 2.00 | 1 damage/turn, zombie moves at ½ speed | Doubles the time you have |
| Sunflower | ☀ 1.00 | Produces ☀ 0.50 per turn | Investment — pays back over time |
| Wall-Nut | ☀ 2.00 | 0 damage, absorbs 8 hits | Buys time for shooters |
| Torchwood | ☀ 2.50 | Doubles damage of all peas passing through it | Must be placed AHEAD of shooters |
| Cherry Bomb | ☀ 5.00 | One-time 10 damage to all zombies in a 3×3 area | Expensive but powerful |

### How Math Topics Emerge Naturally

**Addition & Multiplication (Chapter 1: Math Laws)**

Two Peashooters in one lane = 1 + 1 = 2 damage/turn. Three Peashooters = 1 + 1 + 1 = 3 damage/turn.
The player naturally thinks in terms of addition.

A Repeater does 2/turn. Two Repeaters = 2 + 2 = 4/turn. Or is it cheaper to use 4 Peashooters?
4 × 1.50 = 6.00 vs 2 × 3.00 = 6.00. Same cost, same damage — but Repeaters save column space.
The commutative and associative properties emerge from comparing arrangements.

**Distributive Property (Chapter 1)**

Torchwood is literally the distributive property in plant form. Place a Torchwood in column 3:
- Two Peashooters behind it (columns 1, 2) each do 1 damage
- Torchwood doubles: 2 × (1 + 1) = 4 total damage
- Player discovers: this is the same as (2×1) + (2×1) = 2 + 2 = 4

Is it better to have 2 Peashooters + Torchwood, or 2 Repeaters?
- 2 Peashooters (☀3.00) + Torchwood (☀2.50) = ☀5.50 for 4 damage/turn
- 2 Repeaters (☀6.00) = 4 damage/turn
- Same damage, but Peashooter+Torchwood is cheaper! Distributive property wins.

What about 3 Peashooters + Torchwood?
- 3 × ☀1.50 + ☀2.50 = ☀7.00 for 2 × (1+1+1) = 6 damage/turn
- vs. 3 Repeaters = 3 × ☀3.00 = ☀9.00 for 6 damage/turn
- The Torchwood advantage scales with more shooters — discovering why distributive works.

**Fractions (Chapters 2-3)**

Snow Pea slows zombies to ½ speed. A zombie that normally arrives in 4 turns now takes 8 turns.
Two Snow Peas? Do they stack to ¼ speed? (Maybe — or maybe ½ × ½ = ¼ is a concept to discover.)

Sunflower economy is inherently fractional:
- Sunflower costs ☀1.00, produces ☀0.50/turn
- After 2 turns, it has paid for itself (0.50 × 2 = 1.00)
- If the battle lasts 6 turns, net gain = 0.50 × 6 − 1.00 = ☀2.00
- Two Sunflowers: net gain = 2 × (0.50 × 6 − 1.00) = ☀4.00
- But did I have enough budget to spare 2.00 on Sunflowers AND still defend?

Wall-Nut absorbs 8 hits. If 2 zombies attack it each turn, it lasts 8 ÷ 2 = 4 turns.
If 3 zombies? 8 ÷ 3 = 2⅔ turns — it breaks partway through turn 3. Fractions as division.

**Decimals (Chapters 4-5)**

All costs are decimals. The budget is a decimal. Every purchase requires mentally tracking:
- "I have ☀8.00. Peashooter costs ☀1.50. After buying: 8.00 − 1.50 = ☀6.50."
- "Can I afford 2 Repeaters (2 × 3.00 = 6.00) and a Sunflower (1.00)? 6.00 + 1.00 = 7.00. Yes."
- "Three Snow Peas: 3 × 2.00 = 6.00. Remaining: 8.00 − 6.00 = 2.00. Just enough for a Wall-Nut."

Sunflower income creates decimal arithmetic throughout the game:
- Turn 1: budget = 8.00 − 6.50 (spent) + 0.50 (sunflower) = 2.00
- Turn 2: 2.00 + 0.50 = 2.50 — now I can afford another Peashooter mid-battle!

**Exponents (Chapter 6)**

Some advanced levels introduce the Gatling Pea (4 damage — it's 2²) and Gloom-Shroom
(hits all 8 adjacent tiles — area = damage × tiles = multiplicative explosion).

Zombie hordes can double each wave: Wave 1 = 2 zombies, Wave 2 = 4, Wave 3 = 8, Wave 4 = 16.
Player sees the exponential growth pattern and must plan ahead.

Stacking multipliers: Peashooter (1) → Torchwood (×2) → another boost plant (×2 again) =
1 × 2 × 2 = 4 = 2² damage. Three boosts = 2³ = 8. The player discovers exponent stacking.

### Puzzle Progression

Each level is a self-contained puzzle. Early levels are simple, later ones require deeper math.

**World 1: Backyard Basics (Addition, Counting)**
```
Level 1-1: 1 lane, 1 zombie (HP 3). Budget ☀3.00. Plants: Peashooter only.
  → Player learns: Peashooter does 1/turn, zombie arrives in 5 turns. 1×5=5 > 3. ✓
  → Just place 1 Peashooter. Introduction level.

Level 1-2: 1 lane, 1 zombie (HP 8). Budget ☀3.00. Plants: Peashooter only.
  → 1 Peashooter × 5 turns = 5 damage < 8. Need 2 Peashooters: 2×5=10 > 8. ✓
  → Discovery: more plants = more damage (addition).

Level 1-3: 2 lanes, zombies HP 4 and HP 6. Budget ☀4.50.
  → Must split budget across lanes. 1 Peashooter per lane costs 3.00. Is that enough?
  → Lane 1: 1×5=5 > 4 ✓. Lane 2: 1×5=5 < 6 ✗. Need 2 in lane 2: costs 1.50+1.50+1.50=4.50. ✓
  → Discovery: resource allocation requires planning.
```

**World 2: Sun Economy (Decimals, Budgeting)**
```
Level 2-1: Introduce Sunflower. Tight budget but Sunflower earns enough for extra plant mid-battle.
  → Player discovers investing pays off if the battle lasts long enough.

Level 2-2: Multiple purchase options, all viable. Which is cheapest?
  → 3 Peashooters (☀4.50) vs 1 Repeater + 1 Peashooter (☀4.50) vs other combos.
  → Same damage, same cost — but different spatial arrangements. Introduction to equivalence.

Level 2-3: Budget is ☀7.25. Plant costs are all decimals. Must calculate exactly.
  → "Can I afford Repeater (3.00) + Snow Pea (2.00) + Sunflower (1.00) + Peashooter (1.50)?
     3.00 + 2.00 + 1.00 + 1.50 = 7.50. No! Over by 0.25."
  → Must find a combination that fits. Decimal addition under constraint.
```

**World 3: Torchwood Tactics (Multiplication, Distributive Property)**
```
Level 3-1: Introduce Torchwood. Show the ×2 multiplier effect.
  → Place Peashooter behind Torchwood. See 1 become 2. Aha!

Level 3-2: 1 Torchwood, budget for 3 Peashooters. Where to place Torchwood?
  → Behind 1 shooter: 2 + 1 + 1 = 4 damage. Behind 2: 2 + 2 + 1 = 5. Behind all 3: 2+2+2 = 6.
  → Player discovers: Torchwood is most efficient when boosting the most plants.
  → This IS the distributive property: 2×3 > 2×1 + 1×2.

Level 3-3: Multiple lanes. Only 1 Torchwood. Which lane benefits most?
  → Lane with 3 shooters: Torchwood adds +3 damage (from 3 to 6).
  → Lane with 1 shooter: Torchwood adds +1 damage (from 1 to 2).
  → Optimal allocation = put multiplier where it has most to multiply.
```

**World 4: Slow & Steady (Fractions, Rates)**
```
Level 4-1: Introduce Snow Pea. Zombie at ½ speed means twice the turns to arrive.
  → Zombie normally arrives in 4 turns. Slowed = 8 turns. Now 1 Peashooter (8 damage) enough?
  → Teaches: ½ speed = ×2 time = ×2 total damage from each plant.

Level 4-2: Wall-Nut + shooters. Wall absorbs 8 hits. How long does it last?
  → 1 zombie attacking: 8 turns. 2 zombies: 4 turns. 3 zombies: 2⅔ turns.
  → Discovery: division creates fractions. 8÷3 isn't a whole number.

Level 4-3: Sunflower ROI. Battle lasts N turns. Is investing in Sunflower worth it?
  → Sunflower: cost 1.00, returns 0.50/turn. Break-even at turn 2.
  → 6-turn battle: profit = 0.50 × 6 − 1.00 = 2.00 sun.
  → Short battle (3 turns): profit = 1.50 − 1.00 = 0.50. Barely worth it.
  → Fractions and decimals in an investment context.
```

**World 5: Power Stacking (Exponents)**
```
Level 5-1: Multiple Torchwoods in sequence. Do they stack?
  → Peashooter → Torchwood → Torchwood: 1 × 2 × 2 = 4 damage. That's 2².
  → Three Torchwoods: 1 × 2 × 2 × 2 = 8 = 2³.
  → Discovery: repeated multiplication IS exponents.

Level 5-2: Zombie waves double. Wave 1: 2 zombies. Wave 2: 4. Wave 3: 8.
  → Pattern: 2^n zombies on wave n. How many on wave 5? 2^5 = 32.
  → Can your defenses scale to match? Need exponential growth to fight exponential threat.

Level 5-3: Boss level. Huge zombie HP, tiny budget.
  → Only way to win: chain multipliers for exponential damage.
  → 1 Peashooter + 4 Torchwoods = 1 × 2⁴ = 16 damage/turn.
  → Cost: 1.50 + 4×2.50 = 11.50. Compare to 16 Peashooters = 16 × 1.50 = 24.00.
  → Exponents are powerful because they achieve more with less.
```

### What the Player Sees After "Fight"

The simulation plays out visually — peas fly, zombies advance, numbers float up showing damage.
The player watches their math play out in real time. Key feedback:

- Damage numbers pop up above zombies: "−2", "−4" (after Torchwood)
- Sun counter ticks up each turn if Sunflowers are placed
- Zombie HP bars drain at the rate the player calculated
- If the zombie reaches column 1: the plant gets eaten, damage numbers turn red
- Victory: remaining plants celebrate. Defeat: see exactly WHERE the math fell short.

**Crucially: on defeat, the game shows WHY you lost.**
- "Lane 2: Your damage was 3/turn. Zombie had 16 HP and arrived in 5 turns. 3×5 = 15 < 16.
   You needed 1 more damage per turn!"
- This turns failure into a learning moment. The math is transparent.

### Post-Level Analysis

After each level (win or lose), a brief breakdown:

```
+------------------------------------------+
|  Level Complete!                ☆☆☆       |
+------------------------------------------+
|                                           |
|  Lane 1: ✓ Defended                       |
|    Damage: 2/turn × 5 turns = 10         |
|    Zombie HP: 6  →  Killed on turn 3     |
|                                           |
|  Lane 2: ✓ Defended                       |
|    Damage: 4/turn (2×Torchwood) × 5 = 20 |
|    Zombie HP: 15  →  Killed on turn 4    |
|                                           |
|  Budget: ☀8.00 spent, ☀0.50 remaining    |
|  Sunflower earned: ☀2.50 over 5 turns    |
|                                           |
|  [NEXT LEVEL]    [RETRY FOR ☆☆☆]         |
+------------------------------------------+
```

Three stars based on:
- ☆ Win (all zombies defeated)
- ☆☆ Win with budget remaining ≤ ☀1.00 (efficient spending)
- ☆☆☆ Win with optimal solution (fewest plants possible)

### React Component Structure

```
src/components/games/PlantCommander/
  PlantCommander.jsx        -- Main game state machine
  LawnGrid.jsx              -- 3-5 lane × 5 col grid, drag-drop zones
  SeedTray.jsx              -- Available plants with costs
  ZombiePreview.jsx         -- Incoming zombie formation with HP
  BudgetBar.jsx             -- Sun budget display
  BattleSimulation.jsx      -- Animated playback after "Fight"
  DamagePopup.jsx           -- Floating damage numbers
  PostLevelBreakdown.jsx    -- Math breakdown of what happened
  LevelData.js              -- Puzzle definitions (zombie formations, budgets, plant pools)
```

### State

```js
{
  level: { lanes, budget, availablePlants, zombieFormation },
  placements: [
    { lane: 0, col: 1, plant: 'peashooter' },
    { lane: 0, col: 2, plant: 'torchwood' },
    ...
  ],
  phase: 'planning' | 'simulating' | 'result',
  budget: 8.00,
  simulation: {
    turn: 0,
    laneStates: [...],  // damage dealt, zombie HP remaining
  },
  stars: 0,
}
```

---

## Game 2: Number Line Blaster

### Concept

The lawn IS a number line. Zombies appear at specific number positions. You have a set of
operation cards (+3, ×2, −1, ÷2, ², +½) that you chain together to move your "pea" from
its starting position to the zombie's position. Land exactly on a zombie = hit. Miss = wasted turn.

This is a puzzle game where mathematical operations are your weapons. You're not solving a
problem someone gave you — you're constructing your own equation to reach a target number.

### Why This Works

Instead of "What is 3 × 4?", the player is asked "The zombie is at position 12. You start
at 0. You have these cards: [+3] [×2] [+6] [×4]. How do you get to 12?"

Multiple solutions exist:
- +3, ×4 → 3 → 12 ✓
- +6, ×2 → 6 → 12 ✓
- +3, +3, ×2 → 3 → 6 → 12 ✓
- +6, +6 → 6 → 12 ✓

The player discovers commutativity (does order matter?), practices operations, and builds
number sense — all because they WANT to hit the zombie.

### Screen Layout

```
+------------------------------------------+
|  Number Line Blaster          Level: 7    |
|  Cards remaining: 4     Zombies: 2        |
+------------------------------------------+
|                                           |
|  0---1---2---3---4---5---6---7---8---9---10
|  🌱                      🧟         🧟   |
|  ↑ You                                    |
+------------------------------------------+
|                                           |
|  Your cards:                              |
|  [+2] [+3] [×2] [−1] [+½]               |
|                                           |
|  Chain: [  ] → [  ] → [  ]               |
|  Result: ?                                |
|                                           |
|  [🔥 FIRE!]    [↩ RESET CHAIN]           |
+------------------------------------------+
```

### Core Mechanics

**The Number Line:**
- Horizontal line from 0 to some max (starts small: 0-10, grows to 0-100)
- Zombies are placed at specific number positions
- Your "plant cannon" starts at position 0 (or another starting number)
- Goal: chain operations to land exactly on each zombie's position

**Operation Cards:**
- You get a hand of 4-6 operation cards each level
- Drag cards into the "chain" slots to build an expression
- Cards are consumed when used (limited resources — choose wisely!)
- Each level's card set is designed so that solutions exist but require thought

**Card Types by World:**

| World | Card Pool | Math Focus |
|-------|-----------|-----------|
| 1: Backyard | +1, +2, +3, +4, +5 | Addition, counting |
| 2: Pool | +n, −n | Addition and subtraction |
| 3: Fog | ×2, ×3, +n, −n | Multiplication enters |
| 4: Roof | +½, +¼, +¾, +n | Fractions on the number line |
| 5: Night | ×0.5, ×1.5, +0.25, ×n | Decimals as operations |
| 6: Final Stand | ², √, ×n, ÷n, ^n | Exponents and roots |

**Chaining & Order of Operations:**

Cards are applied LEFT TO RIGHT (no standard order of operations — the chain is sequential).
This is deliberate: it lets the player explore how order changes results.

```
Start: 2
Chain: [×3] then [+4]  →  2 → 6 → 10
Chain: [+4] then [×3]  →  2 → 6 → 18
```

"Wait, I get different answers depending on the order!" This is a natural discovery of
why order matters — and when it doesn't (commutativity of addition: +3 then +4 = +4 then +3).

**Multiple Zombies:**

Later levels have 2-3 zombies at different positions. You must split your cards wisely:
- Use some cards to hit zombie 1, remaining cards to hit zombie 2
- Or find a path that passes through multiple zombie positions!
  - Start 0 → [+3] → 3 (Zombie 1!) → [×2] → 6 (Zombie 2!)
  - A single chain that hits both — bonus points!

**Zombie Types:**

| Zombie Type | Position | Special Rule |
|-------------|----------|-------------|
| Regular | Whole numbers (3, 7, 12) | Basic target |
| Fraction Zombie | Fractions (½, ¾, 2⅓) | Must land on fractional position |
| Decimal Zombie | Decimals (3.5, 7.25) | Must land on decimal position |
| Power Zombie | Powers (4=2², 8=2³, 27=3³) | Has a "weakness" exponent shown |
| Mystery Zombie | Hidden position, given clues | "I'm 3 more than 2×4" → solve to find position |

### How Math Topics Emerge Naturally

**Addition & Subtraction (Basics)**

"Zombie at 7. Cards: +3, +4, +2, −1."
- +3, +4 = 7. Direct hit!
- +2, +3, +4, −1 = 8. Miss — wait, I only needed +3 and +4. Learning efficiency.
- Discovery: I can add in any order (+3,+4 = +4,+3). Commutative property!

**Multiplication (Chapter 1)**

"Zombie at 12. Cards: +3, ×2, ×4, +1."
- +3, ×4 = 12. Hit!
- ×4, +3 = 0×4 + 3 = 3. Miss! Multiplying zero first doesn't help.
- Discovery: ×n is powerful when applied to a bigger number. Order matters differently for × vs +.

**Distributive Property (Chapter 1)**

"Two zombies: at 6 and at 10. Cards: +2, +3, ×2."
- Hit zombie at 6: +3, ×2 = 6. ✓
- But now I used ×2 and +3... only +2 left. Can't reach 10!
- Alternative: +2, ×2 = 4. Miss on 6. Then need to reach 10 with +3... 4+3=7. Miss!
- Winning strategy: +2, +3, ×2 = 5, ×2 = 10. Hits zombie 2 at 10!
  But misses zombie 1 at 6. Unless... I fire at turn 2 of the chain!
  +2=2, +3=5 → pass through 5 (no zombie), ×2=10. Only hits 10.
- Hmm — what if I do +3, ×2 = 6 (hit!), then restart at 0 with +2... can't reach 10.
- This level teaches: sometimes you can't get both. Resource scarcity = hard choices.

**Fractions (Chapters 2-3)**

"Zombie at position 2½. Cards: +1, +½, +½, ×2."
- +1, +1, +½ — wait, I only have one +1. So: +1, +½, +½, ×? No.
- +½, +½, +½, +½, +½ — I only have two +½ cards.
- +1, +½, ×2 = 1.5, ×2 = 3. Miss!
- +½, ×2, +½ = 0.5, ×2=1, +0.5 = 1.5. Miss!
- ×2, +½, +1 = 0, +0.5=0.5, +1=1.5. Miss!
- +1, +½ = 1.5. That's not 2.5 yet... +½, +½ = 1. +1, +½, +½ = 2.0. Still not 2.5!
  Hmm: +1, +½, +½, +½... only 2 half-cards.
- Oh! +½, +½, +1 = 2.0. Then I need +½ more. I'm out of halves.
  Wait — what about ×2 first? ×2 on 0 = 0. Useless at start.
  +1, +½ = 1.5. Then ×2 = 3.0. Overshoot!
  +½, +1 = 1.5, ×2 = 3.0. Same.
  +½, ×2 = 1.0, +1 = 2.0, +½ = 2.5! YES!
- Discovery: the ORDER of fraction operations matters. ½ then ×2 = 1, but ×2 then ½ stays ½.

**Decimals (Chapters 4-5)**

"Zombie at 7.5. Cards: ×1.5, +5, +2.5, −0.5."
- +5, +2.5 = 7.5. Direct hit with addition!
- +5, ×1.5 = 7.5. Also works! Different operations, same result.
- Discovery: 5 + 2.5 = 5 × 1.5 = 7.5. A decimal multiplication can equal an addition.

**Exponents (Chapter 6)**

"Zombie at 32. Cards: +2, ², ², ×2."
- +2 = 2. ² = 4. ² = 16. ×2 = 32. HIT!
- Chain: 2 → 2² = 4 → 4² = 16 → 16×2 = 32.
- Discovery: squaring twice = 2^(2×2) = 2⁴ = 16. Then ×2 = 2⁵ = 32.
- Repeated squaring grows FAST. This is exponential power.

"Zombie at 8. Cards: +2, ³, +8, √."
- +2, ³ = 8. Hit! (2 cubed = 8)
- +8, √ = √8 ≈ 2.83. Miss! √8 isn't clean.
- Discovery: cubing and cube roots are inverses — but only for perfect cubes.

### Puzzle Progression

**World 1: Backyard (Addition)**
```
1-1: Zombie at 5. Cards: +2, +3. → 2+3=5.
1-2: Zombie at 7. Cards: +1, +2, +3, +4. → Multiple solutions. Discover which combos work.
1-3: Two zombies at 4 and 7. Cards: +1, +2, +3, +4. → Must split cards between two shots.
1-4: Zombie at 9. Cards: +3, +3, +3. → 3+3+3. Repeated addition!
1-5: Zombie at 10. Cards: +2, +3, +4, +5. → Multiple paths. Find the 2-card solution.
```

**World 2: Pool (Addition & Subtraction)**
```
2-1: Zombie at 3. Cards: +5, −2. → 5−2=3. Introduction of subtraction.
2-2: Zombie at 1. Cards: +4, +3, −6. → 4+3−6=1. Must use subtraction strategically.
2-3: Two zombies at 2 and 5. Cards: +3, +2, −1, +3. → Allocate cards.
2-4: Zombie at 0. Cards: +4, −4. → 4−4=0. Zero!
2-5: Zombie at 6. Cards: +10, −3, −1, −2. → 10−3−1=6 or 10−2−1−1... explore.
```

**World 3: Fog (Multiplication)**
```
3-1: Zombie at 6. Cards: +3, ×2. → 3×2=6. Multiplication introduced.
3-2: Zombie at 12. Cards: +2, +3, ×2, ×3. → Multiple paths: 2×6? 3×4? 2,×3,×2=12?
3-3: Zombie at 15. Cards: +3, +5, ×3, ×5. → 3×5 or 5×3. Same answer! Commutative!
3-4: Two zombies at 8 and 9. Cards: +2, +3, ×3, ×4. → 2,×4=8 and 3,×3=9. Resource split.
3-5: Zombie at 20. Cards: +2, +3, ×4, ×2. → 2+3=5,×4=20 or +2,×4=8... need to think.
```

**World 4: Roof (Fractions)**
```
4-1: Zombie at 1½. Cards: +1, +½. → 1+½=1½. Fractions on the number line.
4-2: Zombie at 2. Cards: +½, +½, +½, +½. → ½+½+½+½=2. Four halves = 2 wholes.
4-3: Zombie at ¾. Cards: +¼, +¼, +¼, +½. → ¼+¼+¼=¾. Or ¼+½=¾. Equivalent fractions.
4-4: Zombie at 3. Cards: +⅓, ×3, +2. → ⅓,×3=1,+2=3. Fraction × whole number.
4-5: Two zombies at ½ and 1½. Cards: +½, +½, +½, +¼, +¼.
     → Shot 1: +½ hits ½. Shot 2: +½,+½,+¼,+¼ = 1½. Resource management with fractions.
```

**World 5: Night (Decimals)**
```
5-1: Zombie at 3.0. Cards: +1.5, ×2. → 1.5×2=3. Decimal multiplication.
5-2: Zombie at 7.5. Cards: +5, +2.5, ×1.5. → 5+2.5=7.5. Or 5×1.5=7.5. Two paths!
5-3: Zombie at 0.75. Cards: +0.25, +0.50, +0.25. → 0.25+0.50=0.75. Or 0.25+0.25+0.25=0.75.
5-4: Zombie at 10. Cards: ×2.5, +4, ×0.5, +3. → +4,×2.5=10. Or +3,+4=7... nope.
5-5: Two zombies at 2.5 and 5.0. Cards: +2.5, ×2, +0.5, ×1.5, +1.
     → Shot 1: +2.5 hits 2.5. Shot 2: +2.5,×2=5. Or +1,+0.5,×2=3... no. Explore!
```

**World 6: Final Stand (Exponents)**
```
6-1: Zombie at 4. Cards: +2, ². → 2²=4. Introduction of squaring.
6-2: Zombie at 9. Cards: +3, ², ×3. → 3²=9. Or +3,×3=9. Two totally different paths!
6-3: Zombie at 27. Cards: +3, ², ×3, ³. → 3³=27. Cubing!
6-4: Zombie at 16. Cards: +2, ², ², ×4. → 2²=4,²=16. Or +2,²=4,×4=16. Exponent stacking.
6-5: Zombie at 3. Cards: +9, √, +27, ∛. → √9=3. Or ∛27=3. Roots are inverse of powers!
6-6: Boss: Zombies at 4, 8, and 16. Cards: +2, ², ², ², ×2, ×2.
     → 2²=4 ✓, then 4²=16... but need 8 too. Must plan card allocation carefully.
     → Possible: Shot 1: +2,²=4. Shot 2: +2,×2,×2=8. Shot 3: ... ²=remaining²...
     → The puzzle IS the math.
```

### Hint System

If stuck, player can ask Crazy Dave for hints:
- Hint 1: "The zombie is at 12. Try starting with +3..." (partial path)
- Hint 2: "3, then ×4... what do you get?" (more guidance)
- Hint 3: Show the full solution chain but let player execute it

Hints reduce star rating (3★ = no hints, 2★ = 1 hint, 1★ = 2+ hints).

### Chain Visualization

As the player builds their chain, show the running result visually on the number line:

```
Chain: [+3] → [×2] → [+1]

Number line:
0---1---2---3---4---5---6---7---8
         ╰──+3──╯      ╰×2─╯ ╰+1╯
Start=0 ──→ 3 ──→ 6 ──→ 7

Result: 7    Zombie at: 8    MISS (off by 1)
```

The player can SEE the operations as jumps/stretches on the number line. Multiplication
appears as a stretch (3 stretches to 6 = doubled). Addition appears as a hop.
This builds spatial intuition for what operations do.

### React Component Structure

```
src/components/games/NumberLineBlaster/
  NumberLineBlaster.jsx     -- Main game state machine
  NumberLine.jsx            -- Visual number line with positions, zombies, and pea marker
  OperationCard.jsx         -- Draggable operation card (+3, ×2, etc.)
  CardTray.jsx              -- Hand of available cards
  ChainBuilder.jsx          -- Slots where player builds their operation chain
  ChainVisualizer.jsx       -- Shows running result on number line as chain is built
  FireButton.jsx            -- Execute the chain
  LevelData.js              -- Puzzle definitions (zombie positions, card sets)
  HintSystem.jsx            -- Crazy Dave hints
```

### State

```js
{
  level: { zombiePositions, cards, startPosition, numberLineMax },
  hand: ['+3', '×2', '+½', '²', ...],     // available cards
  chain: ['+3', '×2'],                      // current chain being built
  chainResult: 6,                           // running computation
  firedShots: [                             // previous shots this level
    { chain: ['+3', '×2'], result: 6, hit: true, zombieIndex: 0 },
  ],
  remainingZombies: [8],
  phase: 'building' | 'fired' | 'complete',
  hintsUsed: 0,
}
```

---

## Comparison: v0 vs v1

| Aspect | v0 (Toll Booth) | v1 (Integrated) |
|--------|----------------|-----------------|
| Math role | Gate: solve to proceed | Tool: use math to plan/build |
| Player motivation | "I have to do math" | "I want to do math (to win)" |
| Discovery | None — answers are right/wrong | Player discovers properties by experimenting |
| Failure feedback | "Wrong! The answer was 7" | "Your damage was 15 but zombie had 16 HP — 1 short!" |
| Replayability | Low (same flashcards) | High (optimize for fewer plants, find new paths) |
| Math depth | Surface (compute answers) | Deep (strategy, optimization, equivalence) |

---

## Implementation Priority

| Priority | Game | Reason |
|----------|------|--------|
| 1st | **Number Line Blaster** | Tightest scope, strongest concept, covers all chapters progressively |
| 2nd | **Plant Commander** | Richer strategy but more complex to build (simulation engine needed) |

Number Line Blaster is recommended first because:
- Simpler to implement (no battle simulation, no real-time elements)
- Each level is a small, self-contained puzzle (easy to design many levels)
- Covers ALL math topics naturally through card types
- The chain visualization is a powerful teaching tool
- Core loop is tight: build chain → fire → see result → adjust

Plant Commander is the bigger, more ambitious game but requires:
- A battle simulation engine
- Drag-and-drop plant placement
- Damage/turn calculations
- More complex visual feedback

Both games could share a level-select screen styled as a PvZ adventure map.

---

## Open Questions

1. **Number Line Blaster: Free-form input?** Should players type numbers or only use cards?
   Cards are more puzzle-like; free-form is more open but harder to design levels for.
2. **Plant Commander: Real-time or turn-based simulation?** Real-time is more exciting but
   turn-based makes the math more visible.
3. **Progression gate:** Should Game 2 require completing Game 1? Or both available from start?
4. **Difficulty modes:** "Seedling" (more cards, hints enabled), "Gardener" (normal),
   "Crazy Dave" (fewer cards, no hints, tight solutions)?
5. **Level editor?** Could players create and share their own puzzles?
