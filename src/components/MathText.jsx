// Parses math markup into formatted React elements
// Syntax:
//   ^{exp}        → superscript
//   sqrt{n}       → √n
//   frac{a}{b}    → a/b as stacked fraction

function MathText({ text }) {
  if (!text) return null

  const parts = []
  let remaining = String(text)
  let key = 0

  while (remaining.length > 0) {
    // Find the next special pattern
    const supMatch = remaining.match(/\^{([^}]+)}/)
    const sqrtMatch = remaining.match(/sqrt{([^}]+)}/)
    const fracMatch = remaining.match(/frac{([^}]+)}{([^}]+)}/)

    // Collect all matches with their positions
    const candidates = []
    if (supMatch) candidates.push({ match: supMatch, type: 'sup' })
    if (sqrtMatch) candidates.push({ match: sqrtMatch, type: 'sqrt' })
    if (fracMatch) candidates.push({ match: fracMatch, type: 'frac' })

    // Pick the one that comes first
    candidates.sort((a, b) => a.match.index - b.match.index)
    const first = candidates[0]

    if (!first) {
      parts.push(<span key={key++}>{remaining}</span>)
      break
    }

    const { match, type } = first

    // Push text before the match
    if (match.index > 0) {
      parts.push(<span key={key++}>{remaining.slice(0, match.index)}</span>)
    }

    // Push the formatted element
    if (type === 'sup') {
      parts.push(<sup key={key++} className="math-exp">{match[1]}</sup>)
    } else if (type === 'sqrt') {
      parts.push(
        <span key={key++} className="math-sqrt">
          <span className="sqrt-symbol">√</span>{match[1]}
        </span>
      )
    } else if (type === 'frac') {
      parts.push(
        <span key={key++} className="math-frac">
          <span className="math-frac-num">{match[1]}</span>
          <span className="math-frac-bar" />
          <span className="math-frac-den">{match[2]}</span>
        </span>
      )
    }

    remaining = remaining.slice(match.index + match[0].length)
  }

  return <>{parts}</>
}

export default MathText
