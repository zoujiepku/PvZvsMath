import Peashooter from './Peashooter'
import Sunflower from './Sunflower'
import Zombie from './Zombie'
import WallNut from './WallNut'
import Sun from './Sun'

const emojiToCharacter = {
  '\u2600\uFE0F': Sun,       // ☀️
  '\uD83C\uDF3B': Sunflower, // 🌻
  '\uD83E\uDEDB': Peashooter,// 🫛
  '\uD83D\uDEE1\uFE0F': WallNut, // 🛡️
  '\uD83E\uDDDF': Zombie,    // 🧟
  '\uD83C\uDF31': Peashooter,// 🌱 seedling
}

export function getCharacterForEmoji(emoji) {
  return emojiToCharacter[emoji] || null
}

export default emojiToCharacter
