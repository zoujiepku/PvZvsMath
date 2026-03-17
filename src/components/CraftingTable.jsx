import MathText from './MathText'

function CraftingSlot({ content, label, highlight }) {
  return (
    <div className={`crafting-slot${highlight ? ' crafting-slot-output' : ''}`}>
      <div className="crafting-slot-content">
        <MathText text={content} />
      </div>
      {label && <span className="crafting-slot-label">{label}</span>}
    </div>
  )
}

function CraftingTable({ inputs, output, outputLabel, title }) {
  return (
    <div className="crafting-table">
      {title && <div className="crafting-title">{title}</div>}
      <div className="crafting-layout">
        <div className="crafting-inputs">
          {inputs.map((input, i) => (
            <div key={i} className="crafting-input-row">
              <CraftingSlot content={input.content} label={input.label} />
              {i < inputs.length - 1 && (
                <span className="crafting-plus">+</span>
              )}
            </div>
          ))}
        </div>
        <div className="crafting-arrow">
          <span className="crafting-arrow-shaft" />
          <span className="crafting-arrow-head" />
        </div>
        <CraftingSlot content={output} label={outputLabel} highlight />
      </div>
    </div>
  )
}

export default CraftingTable
