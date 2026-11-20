import { useState } from 'react'
import Sidebar from './components/Sidebar.jsx'
import Section from './components/Section.jsx'
import { PAGES } from './data/pages.js'

export default function App({ pageId }) {
  const page = PAGES[pageId]
  const [navOpen, setNavOpen] = useState(false)

  if (page === undefined) {
    return <div className="not-found">页面不存在。</div>
  }

  return (
    <div className="app-shell">
      <Sidebar pageId={page.id} open={navOpen} onClose={() => setNavOpen(false)} />

      <main className="main-content">
        <button
          type="button"
          className="mobile-nav-toggle"
          onClick={() => setNavOpen((v) => !v)}
          aria-expanded={navOpen}
        >
          {navOpen ? '收起目录' : '目录'}
        </button>

        <header className="page-header">
          <div className="page-kicker">{page.kicker}</div>
          <h1 className="page-title">{page.title}</h1>
          <p className="page-subtitle">{page.subtitle}</p>
        </header>

        {page.sections.map((section) => (
          <Section key={section.id} section={section} />
        ))}

        <footer className="site-footer">
          <div>deqing3D · 3D 工作流笔记</div>
          <div className="footer-links">
            <a href="https://github.com/deqing3d" target="_blank" rel="noreferrer noopener">
              GitHub
            </a>
            <span aria-hidden="true">·</span>
            <a href="/">返回首页</a>
          </div>
        </footer>
      </main>
    </div>
  )
}
