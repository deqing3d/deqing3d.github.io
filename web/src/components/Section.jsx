function Table({ head, rows }) {
  return (
    <div className="table-wrap">
      <table className="doc-table">
        <thead>
          <tr>
            {head.map((cell, i) => (
              <th key={i}>{cell}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri}>
              {row.map((cell, ci) => (
                <td key={ci}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function Block({ block }) {
  switch (block.t) {
    case 'h2':
      return <h2 className="blk-h2">{block.text}</h2>

    case 'h3':
      return <h3 className="blk-h3">{block.text}</h3>

    case 'lead':
      return (
        <div className="blk-lead">
          <span className="lead-name">{block.name}</span>
          <span className="lead-tag">{block.tag}</span>
        </div>
      )

    case 'p':
      return (
        <p className="blk-p">
          {block.text}
          {block.meta !== undefined && <span className="blk-meta">{block.meta}</span>}
        </p>
      )

    case 'note':
      return <p className="blk-note">{block.text}</p>

    case 'list':
      return (
        <ul className="blk-list">
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )

    case 'table':
      return <Table head={block.head} rows={block.rows} />

    case 'code':
      return <pre className="blk-code">{block.text}</pre>

    case 'link':
      return (
        <p className="blk-link-line">
          <a href={block.href} target="_blank" rel="noreferrer noopener">
            {block.label}
          </a>
        </p>
      )

    case 'stack':
      return (
        <ol className="blk-stack">
          {block.items.map((item) => (
            <li key={item.title}>
              <div className="stack-title">{item.title}</div>
              <div className="stack-desc">{item.desc}</div>
              <div className="stack-tools">{item.tools}</div>
            </li>
          ))}
        </ol>
      )

    case 'roles':
      return (
        <div className="blk-roles">
          {block.items.map((item) => (
            <div className="role-card" key={item.name}>
              <div className="role-name">{item.name}</div>
              <div className="role-line">
                <span className="role-k">推荐</span>
                {item.rec}
              </div>
              <div className="role-line">
                <span className="role-k">原因</span>
                {item.why}
              </div>
            </div>
          ))}
        </div>
      )

    case 'steps':
      return (
        <ol className="blk-steps">
          {block.items.map((step) => (
            <li key={step.num}>
              <div className="step-head">
                <span className="step-num">Step {step.num}</span>
                <span className="step-title">{step.title}</span>
              </div>
              {step.lines.map((line, i) =>
                line.link !== undefined ? (
                  <a
                    className="step-link"
                    key={i}
                    href={line.href}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {line.link}
                  </a>
                ) : (
                  <p className="step-text" key={i}>
                    {line.text}
                  </p>
                ),
              )}
            </li>
          ))}
        </ol>
      )

    case 'plans':
      return (
        <div className="blk-plans">
          {block.items.map((plan) => (
            <div className="plan-card" key={plan.label}>
              <div className="plan-head">
                <span className="plan-label">{plan.label}</span>
                <span className="plan-tag">{plan.tag}</span>
              </div>
              <div className="plan-sub">{plan.sub}</div>
              <div className="plan-combo">{plan.combo}</div>
            </div>
          ))}
        </div>
      )

    default:
      return null
  }
}

export default function Section({ section }) {
  return (
    <section className="doc-section" id={section.id}>
      <div className="doc-section-head">
        <span className="doc-num">{section.num}</span>
        <h2 className="doc-title">{section.title}</h2>
      </div>
      <div className="doc-body">
        {section.blocks.map((block, i) => (
          <Block key={`${section.id}-${i}`} block={block} />
        ))}
      </div>
    </section>
  )
}
