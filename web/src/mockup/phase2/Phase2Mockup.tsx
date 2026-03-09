import { useState } from 'react'
import { Phase2Home } from './Phase2Home'
import { Phase2Chat } from './Phase2Chat'
import { Phase2Audit } from './Phase2Audit'

const base = import.meta.env.BASE_URL

type View = 'home' | 'chat' | 'audit'

const autonomyLabels = ['항상 확인', '중요만 확인', '균형', '대부분 위임', '완전 자율']

export function Phase2Mockup() {
  const [view, setView] = useState<View>('home')
  const [chatQuery, setChatQuery] = useState('')
  const [autonomy, setAutonomy] = useState(2)

  const openChat = (q = '') => {
    setChatQuery(q)
    setView('chat')
  }

  return (
    <div className="min-h-screen bg-[#f7f7fa] text-[#1a1a1a]">
      {/* Header with Autonomy Dial */}
      <header className="sticky top-0 z-40 bg-[#f7f7fa]/80 backdrop-blur-xl border-b border-black/5">
        <div className="max-w-7xl mx-auto px-5 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
              <span className="text-white text-[10px] font-bold">G</span>
            </div>
            <div>
              <span className="text-sm font-semibold tracking-tight">굿뉴스</span>
              <span className="text-[9px] text-indigo-500/60 ml-1.5 hidden sm:inline">Phase 2 · Agentic UX</span>
            </div>
          </div>

          {/* Autonomy Dial (Desktop) */}
          <div className="hidden md:flex items-center gap-3 bg-white/60 rounded-full px-4 py-1.5 border border-black/5">
            <span className="text-[10px] text-black/30">에이전트 자율도</span>
            <input
              type="range" min={0} max={4} value={autonomy}
              onChange={e => setAutonomy(+e.target.value)}
              className="w-20 h-1 accent-indigo-500"
            />
            <span className="text-[10px] text-indigo-600 font-medium w-16 text-right">{autonomyLabels[autonomy]}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setView(view === 'audit' ? 'home' : 'audit')}
              className="relative w-8 h-8 rounded-full bg-white border border-black/5 flex items-center justify-center text-xs hover:border-indigo-200 transition-colors"
            >
              <span className="text-sm">◈</span>
              <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-indigo-500 rounded-full border-2 border-[#f7f7fa] text-[7px] text-white flex items-center justify-center leading-none">3</span>
            </button>
            <a href={`${base}#/`} className="hidden md:inline text-[10px] text-black/25 hover:text-black/50 transition-colors">← 컨설팅</a>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-violet-500 flex items-center justify-center text-white text-[10px] font-bold">M</div>
          </div>
        </div>
      </header>

      {/* Desktop: Two Column / Mobile: Single */}
      <div className="max-w-7xl mx-auto md:flex md:h-[calc(100vh-3.5rem)]">
        <div className={`flex-1 md:overflow-y-auto md:border-r md:border-black/5 ${view !== 'home' ? 'hidden md:block' : ''}`}>
          <Phase2Home autonomy={autonomy} onAsk={openChat} onViewAudit={() => setView('audit')} />
        </div>
        <div className={`md:w-[420px] lg:w-[480px] md:flex md:flex-col md:shrink-0 ${view === 'home' ? 'hidden md:flex' : ''}`}>
          {view === 'audit'
            ? <Phase2Audit onClose={() => setView('home')} />
            : <Phase2Chat initialQuery={chatQuery} onClose={() => setView('home')} autonomy={autonomy} />
          }
        </div>
      </div>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#f7f7fa]/90 backdrop-blur-xl border-t border-black/5 pb-[env(safe-area-inset-bottom)]">
        <div className="flex items-center h-14">
          {([
            { id: 'home' as View, icon: '◇', label: '홈' },
            { id: 'chat' as View, icon: '✦', label: 'AI' },
            { id: 'audit' as View, icon: '◈', label: '활동' },
          ]).map(tab => (
            <button
              key={tab.id}
              onClick={() => tab.id === 'chat' ? openChat() : setView(tab.id)}
              className={`flex-1 flex flex-col items-center gap-0.5 transition-colors ${view === tab.id ? 'text-indigo-600' : 'text-black/25'}`}
            >
              <span className="text-lg font-light">{tab.icon}</span>
              <span className="text-[9px] tracking-wider">{tab.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Mobile back link */}
      <a
        href={`${base}#/`}
        className="md:hidden fixed bottom-16 left-1/2 -translate-x-1/2 z-40 text-[10px] text-black/20 hover:text-black/50 bg-white/80 backdrop-blur px-3 py-1 rounded-full transition-colors"
      >
        ← 컨설팅
      </a>
    </div>
  )
}
