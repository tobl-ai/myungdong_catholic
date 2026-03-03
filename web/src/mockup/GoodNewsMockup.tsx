import { useState, useEffect } from 'react'
import { AgentHome } from './AgentHome'
import { AgentChat } from './AgentChat'

const base = import.meta.env.BASE_URL

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
    <div className="min-h-screen bg-[#fafaf8] text-[#1a1a1a] relative">
      {/* Minimal Header */}
      <header className="sticky top-0 z-40 bg-[#fafaf8]/80 backdrop-blur-xl border-b border-black/5">
        <div className="max-w-lg mx-auto px-5 h-12 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-[#1a1a1a] flex items-center justify-center">
              <span className="text-[#d4b896] text-[10px] font-bold">G</span>
            </div>
            <span className="text-sm font-medium tracking-tight">굿뉴스</span>
          </div>
          <div className="flex items-center gap-3">
            <button className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center text-xs">
              🔔
            </button>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#d4b896] to-[#b8956a] flex items-center justify-center text-white text-xs font-bold">
              M
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      {chatOpen ? (
        <AgentChat
          base={base}
          initialQuery={chatQuery}
          onClose={() => setChatOpen(false)}
        />
      ) : (
        <AgentHome base={base} time={time} onAsk={openChat} />
      )}

      {/* Bottom Nav - Ultra Minimal */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-[#fafaf8]/90 backdrop-blur-xl border-t border-black/5 pb-[env(safe-area-inset-bottom)]">
        <div className="max-w-lg mx-auto flex items-center h-14">
          {[
            { icon: '○', label: '홈', active: !chatOpen },
            { icon: '✦', label: 'AI', active: chatOpen },
            { icon: '◎', label: '기도', active: false },
            { icon: '□', label: '나', active: false },
          ].map(tab => (
            <button
              key={tab.label}
              onClick={() => tab.label === 'AI' ? openChat() : setChatOpen(false)}
              className={`flex-1 flex flex-col items-center gap-0.5 transition-colors
                ${tab.active ? 'text-[#1a1a1a]' : 'text-black/25'}`}
            >
              <span className="text-lg font-light">{tab.icon}</span>
              <span className="text-[9px] tracking-wider">{tab.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Back to Presentation */}
      <div className="fixed bottom-16 left-0 right-0 z-40 pointer-events-none flex justify-center pb-2">
        <a
          href={`${base}#/`}
          className="pointer-events-auto text-[10px] text-black/20 hover:text-black/50 bg-white/80 backdrop-blur px-3 py-1 rounded-full transition-colors"
        >
          ← 컨설팅으로 돌아가기
        </a>
      </div>
    </div>
  )
}
