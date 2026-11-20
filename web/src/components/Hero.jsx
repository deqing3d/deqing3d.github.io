import LoopDiagram from './LoopDiagram.jsx'

function renderRich(parts) {
  return parts.map((part, i) => {
    if (typeof part === 'string') return <span key={i}>{part}</span>
    return (
      <b key={i} className="rich-em">
        {part.b}
      </b>
    )
  })
}

export default function Hero({ site }) {
  return (
    <header className="hero-banner">
      <div className="hero-text">
        <div className="hero-eyebrow">{site.eyebrow}</div>
        <h1 className="hero-title">{site.title}</h1>
        <p className="hero-desc">{renderRich(site.desc)}</p>
        <div className="hero-stats">
          {site.stats.map((s) => (
            <div className="stat-pill" key={s.label}>
              <b>{s.value}</b>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="card hero-diagram">
        <div className="card-title">
          <span>🔁 资产闭环</span>
          <span className="badge badge-cyan">SVG</span>
        </div>
        <LoopDiagram />
        <p className="diagram-legend">
          <span className="legend-dot legend-cyan" /> 生成 / 建模
          <span className="legend-dot legend-amber" /> 清洗与验收
        </p>
      </div>
    </header>
  )
}
