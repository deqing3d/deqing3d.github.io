import { loopSteps } from '../data/content.js'

const CX = 160
const CY = 160
const RADIUS = 108
const NODE_W = 92
const NODE_H = 46

function polar(index, total) {
  const angle = -90 + (360 / total) * index
  const rad = (angle * Math.PI) / 180
  return {
    angle,
    x: CX + RADIUS * Math.cos(rad),
    y: CY + RADIUS * Math.sin(rad),
  }
}

/** 六步资产闭环：纯手绘 SVG，不依赖任何图表库 */
export default function LoopDiagram() {
  const total = loopSteps.length
  const points = loopSteps.map((_, i) => polar(i, total))

  return (
    <svg
      className="loop-svg"
      viewBox="0 0 320 320"
      role="img"
      aria-label="AI-3D 资产生产六步闭环示意图"
    >
      <defs>
        <linearGradient id="loopCyan" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
        <linearGradient id="loopAmber" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#f43f5e" />
        </linearGradient>
      </defs>

      <circle
        cx={CX}
        cy={CY}
        r={RADIUS}
        fill="none"
        stroke="rgba(148,163,184,0.28)"
        strokeWidth="1"
        strokeDasharray="4 6"
      />

      {points.map((p, i) => {
        const next = points[(i + 1) % total]
        const mid = {
          angle: p.angle + 180 / total,
          x: (p.x + next.x) / 2,
          y: (p.y + next.y) / 2,
        }
        return (
          <g key={`arrow-${i}`} transform={`translate(${mid.x} ${mid.y}) rotate(${mid.angle + 90})`}>
            <path d="M -5 -4 L 4 0 L -5 4 Z" fill="rgba(56,189,248,0.75)" />
          </g>
        )
      })}

      {loopSteps.map((step, i) => {
        const p = points[i]
        const accent = i % 2 === 0 ? 'url(#loopCyan)' : 'url(#loopAmber)'
        return (
          <g key={step.num}>
            <rect
              x={p.x - NODE_W / 2}
              y={p.y - NODE_H / 2}
              width={NODE_W}
              height={NODE_H}
              rx="10"
              fill="rgba(26,33,51,0.96)"
              stroke={accent}
              strokeWidth="1.4"
            />
            <text
              x={p.x}
              y={p.y - 7}
              textAnchor="middle"
              fontSize="10.5"
              fontWeight="700"
              fill="#f1f5f9"
            >
              {step.num}. {step.title}
            </text>
            <text x={p.x} y={p.y + 6} textAnchor="middle" fontSize="7.2" fill="#94a3b8">
              {step.line1}
            </text>
            <text x={p.x} y={p.y + 16} textAnchor="middle" fontSize="7.2" fill="#64748b">
              {step.line2}
            </text>
          </g>
        )
      })}

      <circle cx={CX} cy={CY} r="34" fill="rgba(11,14,23,0.95)" stroke="rgba(56,189,248,0.45)" />
      <text x={CX} y={CY - 4} textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#38bdf8">
        资产闭环
      </text>
      <text x={CX} y={CY + 9} textAnchor="middle" fontSize="7.2" fill="#94a3b8">
        Blender + AI
      </text>
    </svg>
  )
}
