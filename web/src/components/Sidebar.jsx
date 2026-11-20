import { NAV } from '../data/pages.js'

const BASE = import.meta.env.BASE_URL

export default function Sidebar({ pageId, open, onClose }) {
  return (
    <>
      {open && <div className="sidebar-backdrop" onClick={onClose} aria-hidden="true" />}
      <aside className={`sidebar${open ? ' is-open' : ''}`}>
        <div className="brand">
          <div className="brand-title">deqing3D</div>
          <div className="brand-sub">3D 工作流笔记</div>
        </div>

        <ul className="nav-list">
          {NAV.map((item, index) => (
            <li className="nav-item" key={item.id}>
              <a
                className={`nav-link${pageId === item.id ? ' active' : ''}`}
                href={`${BASE}${item.id}/`}
                aria-current={pageId === item.id ? 'page' : undefined}
              >
                <span className="nav-num">{String(index + 1).padStart(2, '0')}</span>
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="sidebar-footer">
          <a href="https://github.com/deqing3d/deqing3d.github.io" target="_blank" rel="noreferrer noopener">
            源码仓库
          </a>
        </div>
      </aside>
    </>
  )
}
