import { useState } from 'react'
import { MockupHero } from './MockupHero'
import { MockupServices } from './MockupServices'
import { MockupChat } from './MockupChat'
import { MockupDailyMass } from './MockupDailyMass'
import { MockupDashboard } from './MockupDashboard'

const base = import.meta.env.BASE_URL

const navItems = ['매일미사', '성경', 'AI 상담', '본당 찾기', '커뮤니티', '기도']

export function GoodNewsMockup() {
  const [mobileMenu, setMobileMenu] = useState(false)
  const [activeTab, setActiveTab] = useState('home')

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#1B2A4A] to-[#2d4a7a] flex items-center justify-center">
              <span className="text-[#C5A572] text-sm font-bold">G</span>
            </div>
            <div>
              <div className="font-bold text-[#1B2A4A] text-sm leading-tight">굿뉴스 2.0</div>
              <div className="text-[10px] text-gray-400">서울대교구</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map(item => (
              <button key={item} className="px-3 py-2 text-sm text-gray-600 hover:text-[#1B2A4A] hover:bg-gray-50 rounded-lg transition-colors">
                {item}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button className="hidden md:flex items-center gap-2 bg-[#1B2A4A] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#2d4a7a] transition-colors">
              <span className="text-[#C5A572]">✦</span> 로그인
            </button>
            <button onClick={() => setMobileMenu(!mobileMenu)} className="md:hidden p-2 text-gray-600">
              {mobileMenu ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {mobileMenu && (
          <div className="md:hidden bg-white border-t border-gray-100 p-4 space-y-1">
            {navItems.map(item => (
              <button key={item} className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 rounded-lg">
                {item}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Tab Bar (Mobile) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 flex">
        {[
          { id: 'home', icon: '🏠', label: '홈' },
          { id: 'mass', icon: '📖', label: '미사' },
          { id: 'ai', icon: '✦', label: 'AI' },
          { id: 'prayer', icon: '📿', label: '기도' },
          { id: 'my', icon: '👤', label: 'MY' },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-2 flex flex-col items-center gap-0.5 text-xs transition-colors
              ${activeTab === tab.id ? 'text-[#1B2A4A] font-bold' : 'text-gray-400'}`}
          >
            <span className="text-lg">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <main className="pb-20 md:pb-0">
        <MockupHero base={base} />
        <MockupServices base={base} />
        <MockupDailyMass />
        <MockupChat base={base} />
        <MockupDashboard base={base} />
      </main>

      {/* Footer */}
      <footer className="bg-[#1B2A4A] text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 text-sm">
          <div>
            <div className="text-[#C5A572] font-bold mb-3">굿뉴스 2.0</div>
            <p className="text-white/50 text-xs leading-relaxed">
              AI 에이전트 시대의 가톨릭 디지털 선교 플랫폼.
              카를로 아쿠티스 성인의 정신을 이어갑니다.
            </p>
          </div>
          <div>
            <div className="text-white/80 font-medium mb-3">서비스</div>
            <div className="space-y-2 text-white/40 text-xs">
              {['매일미사', '성경 검색', 'AI 교리 상담', '본당 찾기', '묵주기도'].map(s => (
                <div key={s}>{s}</div>
              ))}
            </div>
          </div>
          <div>
            <div className="text-white/80 font-medium mb-3">기술</div>
            <div className="space-y-2 text-white/40 text-xs">
              {['Next.js 15', 'Firebase', 'Gemini AI', 'MCP Protocol', 'GCP Seoul'].map(s => (
                <div key={s}>{s}</div>
              ))}
            </div>
          </div>
          <div>
            <div className="text-white/80 font-medium mb-3">WYD 2027</div>
            <p className="text-white/40 text-xs">2027.8.3-8 서울</p>
            <p className="text-[#C5A572] text-xs mt-2">D-887</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/10 text-center">
          <p className="text-white/30 text-xs">
            이것은 카를로 프로젝트 컨설팅용 목업입니다 ·{' '}
            <a href={`${base}#/`} className="text-[#C5A572] hover:underline">← 컨설팅 프레젠테이션으로 돌아가기</a>
          </p>
        </div>
      </footer>
    </div>
  )
}
