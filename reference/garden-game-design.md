# Crazy Dave's Garden — Game Design Document

## Overview

Crazy Dave's Garden is a **plant-growing + tower-defense minigame** embedded in PvZ vs Math. Players earn coins by solving math problems, use those coins to buy seeds, grow plants by answering more math questions ("watering"), and then deploy mature plants to defend the Seed Vault against zombie waves. The core loop ties every math problem the student solves to tangible in-game progress.

---

## Core Loop

```
Solve Math → Earn Coins → Buy Seeds → Water (Solve Math) → Grow Plants
                                                                  ↓
                                              Harvest for Coins  OR  Defend Against Zombies
                                                     ↓                        ↓
                                               More Coins              Coin Rewards + Plants Return
```

---

## New Game State

Players start with:
- **1200 coins**
- **120 plots** in an 11×11 grid (center cell is the Seed Vault, 24 plots within 2 steps unlocked, 96 locked)
- Empty inventory
- Tutorial shown on first visit

State is persisted to `localStorage` under key `cdg-save`.

---

## Plants

### Plant Types

| Plant | Seed Cost | Waters to Mature | Sell Value | Unlock Requirement | Role |
|---|---|---|---|---|---|
| Sunflower | 25 | 3 | 50 | Default | Economy — passive coin generation |
| Peashooter | 50 | 5 | 100 | Default | Balanced ranged attacker |
| Wall-nut | 75 | 8 | 120 | Default | Tank — absorbs zombie hits |
| Snow Pea | 75 | 6 | 130 | Complete Ch2 Quiz | Ranged — slows zombies |
| Repeater | 100 | 8 | 180 | Complete Ch4 Quiz | Ranged — fires 2 peas per volley |
| Cherry Bomb | 125 | 4 | 50 | Complete Ch6 Quiz | Single-use area explosion |
| Chomper | 150 | 12 | 300 | Default | Melee — instant-kills one zombie, long cooldown |

### Growth Stages

Growth is tracked by `growthTicks` (integer). Each correct math answer during watering adds ticks. The stage is determined by the ratio `growthTicks / growthTicksNeeded`:

| Ratio | Stage | Visual |
|---|---|---|
| 0% | Seed | Just planted |
| 1–49% | Sprout | Small growth |
| 50–99% | Growing | Getting bigger |
| 100% | Mature | Fully grown — can be harvested or sent to battle |

### Growth Mechanics (Watering)

Tapping the water drop on a non-mature plant opens a **Watering Session** — a math quiz overlay. On each correct answer:

1. **Base growth**: +1 tick
2. **Streak bonus**: +1 extra tick if answer streak >= 5
3. **Fertilizer**: x2 total ticks if the plant has been fertilized
4. **Formula**: `ticks = (1 + streakBonus) * fertilizerMultiplier`
5. Growth is capped at `growthTicksNeeded`

The session auto-closes when the plant reaches maturity.

### Mutations

Plants can mutate during watering. A mutation is rolled on each correct answer if the plant doesn't already have one:

| Streak | Mutation Chance | Possible Mutations |
|---|---|---|
| >= 10 | 30% | Golden, Frozen, or Fire |
| >= 5 | 15% | Golden, Frozen, or Fire |
| < 5 | 0% | — |

**Mutation effects:**

| Mutation | Sell Multiplier | Battle Effect |
|---|---|---|
| Golden | 2x | — |
| Frozen | 1.5x | Slows nearby zombies (15-unit radius, 0.5x speed) |
| Fire | 1.5x | Projectiles deal 50% splash damage (8-unit radius) |

Once a plant mutates, it keeps that mutation permanently.

### Wilting

Mature plants need periodic watering to stay healthy. If a mature plant is not watered within **24 hours**, it wilts back to the "growing" stage (`growthTicks` drops to `growthTicksNeeded - 1`). One watering session brings it back to mature.

- Each plant tracks `lastWatered` (timestamp), set when planted and on each correct answer during watering
- Wilt check runs on garden load — wilted plants show the water button again
- A welcome-back banner tells the player how many plants wilted
- Non-mature plants do not wilt (they're still being grown)

### Harvesting

Mature plants can be sold. Sell value = base `sellValue` from the plant type, multiplied by mutation modifier if applicable.

---

## Economy

### Earning Coins

| Source | Amount | Notes |
|---|---|---|
| Math problem (Earn Coins mode) | 5 base | +streak bonus |
| Math problem (Watering) | 5 base | +streak bonus |
| Harvesting plants | Varies | See plant sell values above |
| First-time quiz completion | 50 + (stars x 10) | Per chapter |
| Repeat quiz completion | 15 + (stars x 10) | Per chapter |
| First-time lesson completion | 25 | Per chapter |
| Repeat lesson completion | 5 | Per chapter |
| Passive sunflower income | 5/min per mature sunflower | Offline, capped at 500 total |
| Battle wave reward | 50–300 | Depends on wave number |
| Sunflowers during battle | 5 per sunflower every 3s | While the sunflower is alive |

### Streak Bonuses (Math Rewards)

| Streak | Bonus per Answer |
|---|---|
| 3–4 | +2 |
| 5–9 | +5 |
| 10+ | +10 |

### Spending Coins

| Purchase | Cost | Notes |
|---|---|---|
| Plant seeds | 25–150 | See plant table |
| Unlock a plot | 200 | Per locked plot (must be adjacent to unlocked) |
| Items | 0–80 | See items section |

---

## Garden Layout

The garden uses an **11×11 grid layout** with the Seed Vault (Crazy Dave) occupying the center cell (5,5).

### Grid Structure
- 11 rows × 11 columns = 121 cells
- Center cell (5,5) = **Seed Vault** (not a plant plot)
- 120 plant plots total
- Plots within **Chebyshev distance 2** of center (5×5 ring minus vault) = **24 plots unlocked** at start
- Remaining 96 plots are locked at 200 coins each

### Unlock Strategy
- Players can unlock any locked plot that is **adjacent** (horizontally or vertically) to an already-unlocked plot
- This creates organic outward expansion from the center vault
- No ring-based expansion — just individual plot purchases

Plot positions are calculated as percentages:
```
x = (col + 0.5) / 11 * 100    (percentage of container width)
y = (row + 0.5) / 11 * 100    (percentage of container height)
```

---

## Items

Items are consumable power-ups bought from the Shop. They are stored in the player's `inventory` (a key→count map) and consumed on use. The shop has two tabs: **Seeds** (garden items) and **Items** (battle + garden consumables).

---

### Garden Items

Used in the garden view by selecting an item from the quick bar, then tapping a plot.

#### Shovel (🪏)
- **Cost:** Free
- **Unlock:** Complete Chapter 1 Quiz
- **How to use:** Select from quick bar, then tap a planted plot.
- **What it does:** Removes the plant from the plot and refunds **25% of its sell value** as coins. The plot becomes empty and can be replanted. Useful for clearing out unwanted plants or making room.
- **Implementation:** `economy.js → useItem()` consumes 1 shovel, then the plant is set to `null` and `coins += floor(sellValue * 0.25)`.

#### Fertilizer (🧪)
- **Cost:** 30 coins
- **Unlock:** Complete Chapter 3 Quiz
- **How to use:** Select from quick bar, then tap a plot with a growing (non-mature) plant.
- **What it does:** Marks the plant as `fertilized: true`. On the **next watering session**, all growth ticks earned are **doubled** (the `fertilizedMultiplier` in WateringSession.jsx). The fertilized flag is consumed after one watering session.
- **Example:** Normally a correct answer gives 1 tick. With fertilizer, it gives 2 ticks. With a 5+ streak (bonus tick), it goes from 2 to 4 ticks per answer.

#### Plant Food (🌟)
- **Cost:** 80 coins
- **Unlock:** 6 total stars
- **How to use:** Select from quick bar, then tap a plot with a growing plant.
- **What it does:** **Instantly matures** the plant by setting `growthTicks` to `growthTicksNeeded`. The plant becomes immediately harvestable or battle-ready. No math questions needed.
- **Best for:** Expensive plants like Chomper (12 ticks) when you need a defender fast.

---

### Battle Items (Instant)

These activate immediately when their button is pressed during battle. No targeting needed.

#### Freeze (🧊)
- **Cost:** 50 coins
- **Unlock:** Complete Chapter 5 Quiz
- **What it does:** **Freezes all zombies** on the field for **5 seconds**. Frozen zombies stop moving and stop attacking. Plants continue shooting during the freeze. Timer is tracked via `battleRef.freezeUntil`.
- **Best for:** Buying time when zombies are about to breach the vault, or letting shooters deal free damage.

#### Cherry Bomb — Battle (💣)
- **Cost:** 60 coins
- **Unlock:** 12 total stars
- **What it does:** Deals **40 damage to every zombie** currently on the field. This is enough to one-shot Basic (10 HP), Cone (20 HP), and Bucket (35 HP) zombies. Effectively a field-wide nuke.
- **Note:** Different from the Cherry Bomb plant, which is placed in the garden, grows, and explodes in a 20-unit radius during battle. This item version hits ALL zombies regardless of distance.

#### Plant Food+ (⚡)
- **Cost:** 80 coins
- **Unlock:** 15 total stars
- **What it does:** **Supercharges** the first living non-Wall-nut plant for **10 seconds**. Supercharged plants get a golden glow animation. The supercharge is tracked via `battleRef.superchargedPlants[uid]`.
- **Current limitation:** The supercharge visual is implemented but the actual 2x damage multiplier during supercharge is not applied in the game loop (the `superchargedPlants` map is checked for rendering only). This is a known gap.

---

### Battle Items (Click-to-Target)

These require targeting. After pressing the item button, a golden instruction banner appears. The player clicks a target on the battlefield to activate. Press the button again or click Cancel to deselect.

#### ×2 (×2)
- **Cost:** 45 coins
- **Unlock:** 3 total stars
- **Target:** Click any friendly plant on the field.
- **What it does:** **Permanently doubles** the plant's attack damage for the rest of the battle. Sets `plant.damageMultiplier = (current || 1) * 2`. Stacks if used multiple times on the same plant (×2 → ×4 → ×8). The plant gets an orange glow and a "×2" badge. The multiplier applies to all projectiles the plant fires.
- **Math connection:** Multiplication — doubling.
- **Best for:** Boosting your strongest shooter (Repeater with ×2 = devastating).

#### Square! (x²)
- **Cost:** 100 coins
- **Unlock:** Complete Chapter 6 Quiz (Exponents)
- **Target:** Click any friendly plant on the field.
- **What it does:** Creates **3 clones** of the target plant arranged in a **2×2 grid** around the original (offsets of +3.5% in x and/or y). Each clone is a fully functional battle plant with full HP and the same type/mutation. Clones have `plotIndex: undefined` and `isClone: true`, so they **do not return to the garden** after battle — they exist only for this fight.
- **Math connection:** Squaring — x² = x × x, and visually a 2×2 square of plants.
- **Best for:** Multiplying a high-value plant like Peashooter or Snow Pea into a formation.

#### ×0 (×0)
- **Cost:** 70 coins
- **Unlock:** 9 total stars
- **Target:** Click a zombie OR a plant on the field. Cannot target the Seed Vault.
- **What it does:** **Instantly sets the target's HP to 0**, killing it immediately.
  - **If you click a zombie:** The zombie is eliminated. Great for taking out a dangerous Bucket Zombie.
  - **If you click a plant (misclick):** Your own plant is killed! It will return to the garden as **wounded** (1 growth tick, needs re-watering). This is the risk — be careful where you click.
  - **If you click the vault or empty space:** Nothing happens, item is NOT consumed.
- **Math connection:** The zero property — anything multiplied by zero equals zero.
- **Best for:** Emergency removal of a tough zombie. High risk, high reward.

#### ⅓ Pizza (🍕)
- **Cost:** 35 coins
- **Unlock:** Complete Chapter 2 Quiz (Fractions)
- **Target:** Click any empty ground on the battlefield (not on a plant, not on the vault).
- **What it does:** Places a **pizza decoy** at the clicked position. For **6 seconds**, all zombies are attracted to the pizza instead of the vault. Zombies change direction and shamble toward the pizza location. After 6 seconds the decoy expires and zombies resume heading toward the vault. The pizza pulses with a golden glow animation.
- **Placement rules:** Cannot be placed within `VAULT_RADIUS + 3` units of center (prevents placing it at the vault). Cannot be placed within 5 units of any living plant.
- **Math connection:** Fractions — a ⅓ slice of pizza.
- **Best for:** Buying time, redirecting a wave away from the vault, or grouping zombies together for an area attack.

---

## Defend Mode (Battle)

### Overview

Players select mature plants from their garden, place them on the field, and defend the Seed Vault against waves of zombies in real-time. The battle runs on a `requestAnimationFrame` game loop.

### Phases

1. **Select** — Choose a wave (must be unlocked sequentially via `highestWave`)
2. **Fighting** — Real-time battle begins immediately using garden plants in their current positions
3. **Won/Lost** — Results screen with coin reward and plant status

*Note: There is no separate placement phase. Mature plants defend from their garden positions automatically.*

### Zombie Types

| Type | HP | Speed | Damage | Notes |
|---|---|---|---|---|
| Basic Zombie | 10 | 10 | 1 | Standard |
| Cone Zombie | 20 | 10 | 1 | More HP |
| Bucket Zombie | 35 | 8 | 2 | Tanky, hits harder |
| Flag Zombie | 8 | 18 | 1 | Fast but fragile |

### Zombie Behavior

1. Spawn at random edge of the field (top/right/bottom/left)
2. Shamble toward center (Seed Vault) with sinusoidal wobble (perpendicular to movement direction). Each zombie has a random wobble phase and frequency (2–3.5 Hz). Slower zombies wobble more.
3. If a plant is within 5 units, stop and attack it
4. If the plant dies, resume moving
5. If a zombie reaches within 6 units of center (**Vault Radius**), the game is lost

### Plant Battle Stats

| Plant | Ability | Damage | Range | Fire Rate | HP | Special |
|---|---|---|---|---|---|---|
| Peashooter | Shoot | 2 | 50 | 1.5/s | 5 | — |
| Snow Pea | Shoot | 1 | 50 | 1.5/s | 5 | Slows target (0.6x for 3s) |
| Repeater | Shoot | 2 | 50 | 1.5/s | 5 | 2 shots per volley |
| Wall-nut | Block | 0 | 0 | — | 40 | Pure tank |
| Chomper | Devour | 999 | 15 | — | 8 | Instant-kill, 8s cooldown |
| Cherry Bomb | Explode | 40 | 20 | — | 1 | Self-destructs after exploding |
| Sunflower | Produce | 0 | 0 | — | 3 | Generates 5 coins every 3s |

### Waves

| Wave | Zombies | Reward |
|---|---|---|
| 1 | 2x Basic | 50 |
| 2 | 3x Basic | 75 |
| 3 | 3x Basic + 1 Cone | 100 |
| 4 | 2x Cone + 2x Basic + 1 Flag | 125 |
| 5 | 2x Cone + 1 Bucket + 1 Flag + 2x Basic | 150 |
| 6 | 2x Bucket + 2x Cone + 2x Flag + 1 Basic | 200 |
| 7 | 3x Bucket + 2x Cone + 2x Flag + 2x Basic | 250 |
| 8 | 4x Bucket + 2x Cone + 3x Flag + 1 Basic | 300 |

Waves unlock sequentially — must beat wave N to attempt wave N+1.

### Post-Battle Plant Return

- **Surviving plants** (HP > 0 at end): returned to their garden plot at full maturity
- **Fallen plants** (HP reached 0): returned to their plot but reset to 1 growth tick (sprout stage) — need re-watering to recover
- Cherry Bombs are always consumed (self-destruct)

---

## Unlock Progression

Content unlocks are tied to the main app's **chapter quiz completion** and **total star milestones**.

### Quiz Completion Unlocks

| Chapter Quiz | Unlocks |
|---|---|
| Chapter 1 | Shovel (item) |
| Chapter 2 | Snow Pea (plant) |
| Chapter 3 | Fertilizer (item) |
| Chapter 4 | Repeater (plant) |
| Chapter 5 | Freeze (battle item) |
| Chapter 6 | Cherry Bomb (plant) |

### Star Milestone Unlocks

| Total Stars | Unlocks |
|---|---|
| 6 | Plant Food (garden item) |
| 12 | Cherry Bomb — battle version (battle item) |
| 15 | Plant Food+ (battle item) |

### Star Calculation

Stars are awarded per quiz based on score percentage:
- 100% = 3 stars
- 80–99% = 2 stars
- 60–79% = 1 star
- Below 60% = 0 stars

Maximum possible: 18 stars (3 per chapter x 6 chapters).

---

## Passive Income

Mature sunflowers generate coins while the player is away:
- **Rate**: 5 coins per minute per mature sunflower
- **Cap**: 500 coins maximum per offline session
- Calculated on garden load by comparing `lastVisit` timestamp to current time
- Shown in a welcome-back banner on re-entry

---

## Tutorial

First-time visitors see a 5-step tutorial (skippable):

1. Crazy Dave introduces himself and the garden
2. Explains buying seeds (Sunflower for coins, Peashooter for fighting)
3. Explains planting in empty plots and watering
4. Explains the math-to-growth connection and streak mutations
5. Explains harvesting vs. saving plants for battle defense

Once dismissed, the `tutorialSeen` flag prevents it from showing again.

---

## Save System

- **Garden state**: `localStorage` key `cdg-save` — coins, plots, plants, inventory, highestWave, lastVisit
- **Progress state**: `localStorage` key `pvz-progress` — per-chapter quiz/lesson completion and star counts
- Garden auto-saves on every state change
- Transient fields (`passiveIncome`, `_harvestValue`) are stripped before saving

---

## File Map

| File | Purpose |
|---|---|
| `garden/CrazyDavesGarden.jsx` | Top-level wrapper, save/load, tutorial gate |
| `garden/GardenMode.jsx` | Main garden HUD, plot rendering, shop/water session orchestration |
| `garden/GardenPlot.jsx` | Individual plot component (locked/empty/planted/mature states) |
| `garden/GardenTutorial.jsx` | 5-step onboarding tutorial |
| `garden/SeedShop.jsx` | Shop overlay (seeds + items tabs) |
| `garden/WateringSession.jsx` | Math quiz overlay for growing plants |
| `garden/MathForCoins.jsx` | Standalone math quiz for earning coins |
| `garden/DefendMode.jsx` | Full battle system (select/place/fight/results) |
| `garden/PlantDisplay.jsx` | Visual plant renderer with stage/mutation styling |
| `garden/gardenData.js` | Plant types, growth stages, mutations, ring layout |
| `garden/battleData.js` | Zombie types, plant battle stats, wave configs |
| `garden/economy.js` | All coin math, state mutation helpers |
| `garden/itemData.js` | Item definitions (garden + battle) |
| `garden/gardenState.js` | localStorage persistence, passive income on load |
| `garden/garden.css` | All garden styling |
| `data/progressState.js` | Chapter progress, star calc, unlock logic |
