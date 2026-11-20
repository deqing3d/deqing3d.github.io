import { useCallback, useEffect, useMemo, useState } from 'react'
import Sidebar from './components/Sidebar.jsx'
import Hero from './components/Hero.jsx'
import ModuleSection from './components/ModuleSection.jsx'
import { modules, site } from './data/content.js'

const STORAGE_KEY = 'deqing3d-ai-game-progress'

function loadDone() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    const parsed = raw ? JSON.parse(raw) : []
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export default function App() {
  const [done, setDone] = useState(loadDone)
  const [activeId, setActiveId] = useState(modules[0]?.id)
  const [navOpen, setNavOpen] = useState(false)

  // 勾选状态持久化，刷新后仍保留
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(done))
    } catch {
      /* 隐私模式下写入失败时忽略即可，不影响使用 */
    }
  }, [done])

  const toggleDone = useCallback((id) => {
    setDone((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]))
  }, [])

  // 滚动时高亮当前区块
  useEffect(() => {
    const sections = modules
      .map((m) => document.getElementById(m.id))
      .filter((el) => el !== null)

    if (sections.length === 0 || typeof IntersectionObserver === 'undefined') return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActiveId(visible[0].target.id)
      },
      { rootMargin: '-20% 0px -55% 0px', threshold: [0, 0.25, 0.5, 1] },
    )

    sections.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const progress = useMemo(
    () => ({ done: done.length, total: modules.length }),
    [done.length],
  )

  const goTo = useCallback((id) => {
    setNavOpen(false)
    const el = document.getElementById(id)
    if (el === null) return
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    // 地址栏同步锚点，方便直接分享某一节
    window.history.replaceState(null, '', `#${id}`)
  }, [])

  return (
    <div className="app-shell">
      <Sidebar
        site={site}
        modules={modules}
        progress={progress}
        activeId={activeId}
        open={navOpen}
        onNavigate={goTo}
        onClose={() => setNavOpen(false)}
      />

      <main className="main-content">
        <button
          type="button"
          className="mobile-nav-toggle"
          onClick={() => setNavOpen((v) => !v)}
          aria-expanded={navOpen}
        >
          <span aria-hidden="true">☰</span> {navOpen ? '收起栏位' : '选择栏位'}
        </button>

        <Hero site={site} />

        {modules.map((mod) => (
          <ModuleSection
            key={mod.id}
            module={mod}
            done={done.includes(mod.id)}
            onToggleDone={() => toggleDone(mod.id)}
          />
        ))}

        <footer className="site-footer">
          <div>
            <b>deqing3D</b> · AI-3D 实验台
          </div>
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
