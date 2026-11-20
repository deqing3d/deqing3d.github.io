function linkLabel(item) {
  if (item.label !== undefined) return item.label
  return item.href.replace(/^https?:\/\//, '').replace(/\/$/, '')
}

function Block({ block }) {
  switch (block.type) {
    case 'sub':
      return <h3 className="block-sub">{block.title}</h3>

    case 'text':
      return <p className="block-text">{block.text}</p>

    case 'bullets':
      return (
        <ul className="block-bullets">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )

    case 'links':
      return (
        <ul className="block-links">
          {block.items.map((item) => (
            <li key={item.href + (item.note ?? '')}>
              <a href={item.href} target="_blank" rel="noreferrer noopener" title={item.href}>
                {linkLabel(item)}
              </a>
              {item.note !== undefined && <span className="link-note">{item.note}</span>}
            </li>
          ))}
        </ul>
      )

    case 'prompt':
      return <pre className="block-prompt">{block.text}</pre>

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
