import { useState } from 'react'

const sections = [
  { id: 'hero', label: '개요', icon: '✝' },
  { id: 'carlo', label: '카를로 아쿠티스', icon: '🕊' },
  { id: 'rfp', label: 'RFP 요약', icon: '📋' },
  { id: 'diagnosis', label: '현행 진단', icon: '🔍' },
  { id: 'before-after', label: 'Before & After', icon: '🔄' },
  { id: 'vision', label: '2027 비전', icon: '🚀' },
  { id: 'ux-demo', label: 'UX 데모', icon: '🎨' },
  { id: 'yangup', label: '양업 ERP', icon: '🏛' },
  { id: 'security', label: '보안 분석', icon: '🔒' },
  { id: 'tech', label: '기술 스택', icon: '⚡' },
  { id: 'benchmark', label: '벤치마킹', icon: '🌍' },
  { id: 'roadmap', label: '로드맵', icon: '📅' },
]

export function Nav({ active, onNavigate }: { active: string; onNavigate: (id: string) => void }) {
  const [open, setOpen] = useState(false)

  const handleClick = (id: string) => {
    onNavigate(id)
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-primary text-white p-2 rounded-lg shadow-lg"
      >
        {open ? '✕' : '☰'}
      </button>

      <nav className={`fixed top-0 left-0 h-full w-64 bg-dark text-white z-40 transform transition-transform
        ${open ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 overflow-y-auto`}>
        <div className="p-6 border-b border-white/10">
          <div className="text-gold font-bold text-sm tracking-widest">CARLO PROJECT</div>
          <div className="text-white/70 text-xs mt-1">가톨릭 정보 시스템 혁신</div>
        </div>
        <ul className="py-2">
          {sections.map(s => (
            <li key={s.id}>
              <button
                onClick={() => handleClick(s.id)}
                className={`w-full text-left px-6 py-3 text-sm flex items-center gap-3 transition-colors
                  ${active === s.id ? 'bg-white/10 text-gold border-r-2 border-gold' : 'text-white/70 hover:bg-white/5 hover:text-white'}`}
              >
                <span className="text-base">{s.icon}</span>
                {s.label}
              </button>
            </li>
          ))}
        </ul>
        <div className="p-6 border-t border-white/10 text-white/40 text-xs">
          서울대교구 전산정보실<br />2026.03
        </div>
      </nav>
    </>
  )
}
