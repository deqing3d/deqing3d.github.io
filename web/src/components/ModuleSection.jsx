export default function ModuleSection({ module, done, onToggleDone }) {
  return (
    <section className="module-section" id={module.id}>
      <div className="module-header">
        <div>
          <div className="module-kicker">{module.kicker}</div>
          <h2 className="module-title">{module.title}</h2>
          <p className="module-subtitle">{module.subtitle}</p>
        </div>
        <button
          type="button"
          className={`check-done-btn${done ? ' completed' : ''}`}
          onClick={onToggleDone}
          aria-pressed={done}
        >
          {done ? '✓ 已掌握' : '标记为已掌握'}
        </button>
      </div>

      <div className="grid-2">
        {module.cards.map((card) => (
          <article className="card" key={card.title}>
            <div className="card-title">
              <span>{card.title}</span>
              <span className={`badge badge-${card.badge.tone}`}>{card.badge.text}</span>
            </div>
            <p className="card-body">{card.body}</p>
            <ul className="card-list">
              {card.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="notes-row">
        {module.notes.map((note) => (
          <div className="note" key={note.k}>
            <span className="note-k">{note.k}</span>
            <span className="note-v">{note.v}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
