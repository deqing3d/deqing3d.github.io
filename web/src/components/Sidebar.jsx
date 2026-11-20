export default function Sidebar({
  site,
  modules,
  progress,
  activeId,
  open,
  onNavigate,
  onClose,
}) {
  const percent = progress.total === 0 ? 0 : Math.round((progress.done / progress.total) * 100)

  return (
    <>
      {open && <div className="sidebar-backdrop" onClick={onClose} aria-hidden="true" />}
      <aside className={`sidebar${open ? ' is-open' : ''}`}>
        <div className="brand">
          <div className="brand-title">
            <span>🧊 {site.brand}</span>
            <span className="brand-badge">{site.badge}</span>
          </div>
          <div className="brand-sub">{site.brandSub}</div>
        </div>

        <div className="progress-box">
          <div className="progress-header">
            <span>栏位掌握进度</span>
            <span>
              {progress.done} / {progress.total} ({percent}%)
            </span>
          </div>
          <div className="progress-bar-bg">
            <div className="progress-bar-fill" style={{ width: `${percent}%` }} />
          </div>
        </div>

        <ul className="nav-list">
          {modules.map((mod, index) => (
            <li className="nav-item" key={mod.id}>
              <a
                className={`nav-link${activeId === mod.id ? ' active' : ''}`}
                href={`#${mod.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  onNavigate(mod.id)
                }}
              >
                <span className="nav-num">{String(index + 1).padStart(2, '0')}</span>
                <span>{mod.title}</span>
                <span className="nav-tag" data-tone={mod.tone}>
                  {mod.tag}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="sidebar-footer">
          <div>🧱 全部内容为个人实践总结，持续补充</div>
          <div>
            📚 源码：
            <a href="https://github.com/deqing3d/deqing3d.github.io" target="_blank" rel="noreferrer noopener">
              仓库
            </a>
          </div>
        </div>
      </aside>
    </>
  )
}
