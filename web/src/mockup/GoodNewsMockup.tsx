import { useState, useEffect } from 'react'
import { AgentHome } from './AgentHome'
import { AgentChat } from './AgentChat'

const base = import.meta.env.BASE_URL

const navItems = [
  { icon: '○', label: '홈', id: 'home' },
  { icon: '✦', label: 'AI', id: 'ai' },
  { icon: '◎', label: '기도', id: 'prayer' },
  { icon: '□', label: '나', id: 'my' },
]

export function GoodNewsMockup() {
  const [chatOpen, setChatOpen] = useState(false)
  const [chatQuery, setChatQuery] = useState('')
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 60000)
    return () => clearInterval(t)
  }, [])

  const openChat = (query = '') => {
    setChatQuery(query)
    setChatOpen(true)
  }

  return (
    <div className="min-h-screen bg-[#fafaf8] text-[#1a1a1a]">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#fafaf8]/80 backdrop-blur-xl border-b border-black/5">
        <div className="max-w-7xl mx-auto px-5 h-12 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-[#1a1a1a] flex items-center justify-center">
              <span className="text-[#d4b896] text-[10px] font-bold">G</span>
            </div>
            <span className="text-sm font-medium tracking-tight">굿뉴스</span>
            <span className="hidden md:inline text-[10px] text-black/25 ml-2">에이전트 시대의 가톨릭 플랫폼</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`${base}#/`}
              className="hidden md:inline text-[10px] text-black/25 hover:text-black/50 transition-colors"
            >
              ← 컨설팅
            </a>
            <button className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center text-xs">🔔</button>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#d4b896] to-[#b8956a] flex items-center justify-center text-white text-xs font-bold">
              M
            </div>
          </div>
        </div>
      </header>

      {/* Desktop: Two Column / Mobile: Single Column */}
      <div className="max-w-7xl mx-auto md:flex md:h-[calc(100vh-3rem)]">
        {/* Left Column - Home (always visible on desktop) */}
        <div className={`flex-1 md:overflow-y-auto md:border-r md:border-black/5
          ${chatOpen ? 'hidden md:block' : 'block'}`}
        >
          <AgentHome time={time} onAsk={openChat} />
        </div>

        {/* Right Column - AI Chat */}
        <div className={`md:w-[420px] lg:w-[480px] md:flex md:flex-col md:shrink-0
          ${chatOpen ? 'block' : 'hidden md:flex'}`}
        >
          <AgentChat
            initialQuery={chatQuery}
            onClose={() => setChatOpen(false)}
            isDesktopPanel
          />
        </div>
      </div>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#fafaf8]/90 backdrop-blur-xl border-t border-black/5 pb-[env(safe-area-inset-bottom)]">
        <div className="flex items-center h-14">
          {navItems.map(tab => (
            <button
              key={tab.id}
              onClick={() => tab.id === 'ai' ? openChat() : setChatOpen(false)}
              className={`flex-1 flex flex-col items-center gap-0.5 transition-colors
                ${(tab.id === 'ai' && chatOpen) || (tab.id === 'home' && !chatOpen)
                  ? 'text-[#1a1a1a]' : 'text-black/25'}`}
            >
              <span className="text-lg font-light">{tab.icon}</span>
              <span className="text-[9px] tracking-wider">{tab.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Mobile: back link */}
      <a
        href={`${base}#/`}
        className="md:hidden fixed bottom-16 left-1/2 -translate-x-1/2 z-40 text-[10px] text-black/20 hover:text-black/50 bg-white/80 backdrop-blur px-3 py-1 rounded-full transition-colors"
      >
        ← 컨설팅
      </a>
    </div>
  )
}
