import { useState } from 'react'

const base = import.meta.env.BASE_URL

const navMenus = [
  { label: '매일미사', items: ['오늘의 미사', '전례력', '강론 모음', '성가'] },
  { label: '성경', items: ['성경 검색', '오늘의 말씀', '성경 통독', '주석'] },
  { label: '교리', items: ['교리서', '교회 문헌', '교리 Q&A', '예비신자'] },
  { label: '본당', items: ['본당 찾기', '미사 시간', '교구 안내', '행사'] },
  { label: '커뮤니티', items: ['공지사항', '나눔터', '묵주기도', '갤러리'] },
]

const news = [
  { tag: '교구', title: '2027 서울 세계청년대회 자원봉사자 모집 시작', date: '2026.03.03' },
  { tag: '교황청', title: '프란치스코 교황, 사순 시기 메시지 발표', date: '2026.03.02' },
  { tag: '본당', title: '명동성당 사순 특별 강좌 안내 (3/10-4/12)', date: '2026.03.01' },
  { tag: '사회', title: '서울대교구 사회사목국, 봄맞이 나눔 캠페인', date: '2026.02.28' },
]

export function WebRenewal() {
  const [mobileMenu, setMobileMenu] = useState(false)
  const [hoveredMenu, setHoveredMenu] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-[#1B2A4A] text-white/60 text-[11px]">
        <div className="max-w-7xl mx-auto px-6 h-8 flex items-center justify-between">
          <span>서울대교구 가톨릭 정보 포털</span>
          <div className="flex gap-4">
            <span className="hover:text-white cursor-pointer">로그인</span>
            <span className="hover:text-white cursor-pointer">회원가입</span>
            <span className="hover:text-white cursor-pointer">English</span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img src={`${base}images/hero-faith-tech.png`} alt="" className="w-10 h-10 rounded-lg object-cover" />
            <div>
              <div className="font-bold text-[#1B2A4A] text-lg leading-tight">굿뉴스</div>
              <div className="text-[10px] text-gray-400">GoodNews 2.0</div>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 relative">
            {navMenus.map((menu, i) => (
              <div
                key={menu.label}
                className="relative"
                onMouseEnter={() => setHoveredMenu(i)}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <button className="px-4 py-5 text-sm text-gray-700 hover:text-[#1B2A4A] font-medium transition-colors">
                  {menu.label}
                </button>
                {hoveredMenu === i && (
                  <div className="absolute top-full left-0 bg-white border border-gray-100 rounded-xl shadow-xl py-2 min-w-[160px] z-50">
                    {menu.items.map(item => (
                      <button key={item} className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#1B2A4A]">
                        {item}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden md:flex items-center gap-2 bg-gray-100 rounded-lg px-4 py-2 text-sm text-gray-400 hover:bg-gray-200 transition-colors w-48">
              <span>🔍</span> 검색...
            </button>
            <button onClick={() => setMobileMenu(!mobileMenu)} className="lg:hidden text-gray-600 text-xl">
              {mobileMenu ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {mobileMenu && (
          <div className="lg:hidden border-t border-gray-100 p-4 bg-white">
            {navMenus.map(m => (
              <div key={m.label} className="py-2">
                <div className="font-medium text-sm text-[#1B2A4A] px-2 py-2">{m.label}</div>
                <div className="grid grid-cols-2 gap-1">
                  {m.items.map(item => (
                    <button key={item} className="text-left px-2 py-1.5 text-xs text-gray-500 hover:text-[#1B2A4A]">{item}</button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </header>

      {/* Hero Banner */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <img src={`${base}images/cathedral-hero.png`} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1B2A4A]/80 to-[#1B2A4A]/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-lg">
              <div className="text-[#C5A572] text-xs tracking-wider mb-3">연중 제8주간 월요일 · 2026.03.03</div>
              <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
                "주님은 나의 목자,<br />아쉬울 것 없어라"
              </h1>
              <p className="text-white/60 text-sm mb-6">시편 23,1 · 오늘의 화답송</p>
              <div className="flex gap-3">
                <button className="bg-[#C5A572] text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-[#b8956a] transition-colors">
                  오늘의 미사 →
                </button>
                <button className="bg-white/10 text-white px-6 py-3 rounded-lg text-sm backdrop-blur hover:bg-white/20 transition-colors">
                  성경 읽기
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="max-w-7xl mx-auto px-6 -mt-12 relative z-10 mb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: '📖', title: '매일미사', desc: '오늘의 독서와 복음' },
            { icon: '📕', title: '성경 검색', desc: '전문 검색 · 주석' },
            { icon: '⛪', title: '본당 찾기', desc: '지도 · 미사 시간' },
            { icon: '📿', title: '묵주기도', desc: 'WYD 2027 릴레이' },
          ].map(c => (
            <div key={c.title} className="bg-white rounded-xl p-5 shadow-lg border border-gray-100 hover:shadow-xl hover:border-[#C5A572]/30 transition-all cursor-pointer">
              <span className="text-3xl">{c.icon}</span>
              <div className="font-bold text-[#1B2A4A] mt-3">{c.title}</div>
              <div className="text-xs text-gray-400 mt-1">{c.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Two Column: Reading + News */}
      <section className="max-w-7xl mx-auto px-6 mb-12">
        <div className="grid md:grid-cols-5 gap-8">
          {/* Today's Mass */}
          <div className="md:col-span-3">
            <h2 className="text-xl font-bold text-[#1B2A4A] mb-4">오늘의 미사</h2>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              {[
                { type: '제1독서', src: '1베드 1,3-9', color: 'border-blue-400' },
                { type: '화답송', src: '시편 111', color: 'border-purple-400' },
                { type: '복음', src: '마르 10,17-27', color: 'border-red-400' },
              ].map(r => (
                <div key={r.type} className={`border-l-3 ${r.color} pl-4 py-3 mb-3 last:mb-0 hover:bg-white rounded-r-lg transition-colors cursor-pointer`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs text-[#C5A572] font-medium">{r.type}</span>
                      <div className="text-sm font-medium text-[#1B2A4A] mt-0.5">{r.src}</div>
                    </div>
                    <span className="text-gray-300">→</span>
                  </div>
                </div>
              ))}
              <div className="mt-4 flex gap-3">
                <button className="text-xs bg-[#1B2A4A] text-white px-4 py-2 rounded-lg">▶ 음성 낭독</button>
                <button className="text-xs bg-gray-200 text-gray-600 px-4 py-2 rounded-lg">📄 전문 보기</button>
              </div>
            </div>
          </div>

          {/* News */}
          <div className="md:col-span-2">
            <h2 className="text-xl font-bold text-[#1B2A4A] mb-4">뉴스</h2>
            <div className="space-y-3">
              {news.map((n, i) => (
                <div key={i} className="p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-[#C5A572]/30 transition-all cursor-pointer">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] bg-[#1B2A4A]/10 text-[#1B2A4A] px-2 py-0.5 rounded-full">{n.tag}</span>
                    <span className="text-[10px] text-gray-400">{n.date}</span>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">{n.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WYD 2027 Banner */}
      <section className="max-w-7xl mx-auto px-6 mb-12">
        <div className="bg-gradient-to-r from-purple-600 to-violet-700 rounded-2xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <div className="text-xs text-white/60 tracking-wider mb-2">WORLD YOUTH DAY 2027</div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">서울 세계청년대회</h2>
            <p className="text-white/60 text-sm mb-4">2027.8.3-8 · 예상 참가자 50-70만명</p>
            <button className="bg-white text-purple-700 px-6 py-3 rounded-lg text-sm font-bold hover:bg-white/90 transition-colors">
              자세히 보기 →
            </button>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold">D-887</div>
            <div className="text-white/50 text-xs mt-2">묵주기도 3.5억 / 10억단 (35.2%)</div>
            <div className="h-2 bg-white/20 rounded-full overflow-hidden mt-3 w-48">
              <div className="h-full bg-[#C5A572] rounded-full w-[35%]" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1B2A4A] text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-sm mb-8">
          <div>
            <div className="text-[#C5A572] font-bold mb-3">굿뉴스 2.0</div>
            <p className="text-white/40 text-xs leading-relaxed">서울대교구 가톨릭 정보 포털</p>
          </div>
          {navMenus.slice(0, 3).map(m => (
            <div key={m.label}>
              <div className="text-white/70 font-medium mb-3">{m.label}</div>
              <div className="space-y-1.5 text-white/40 text-xs">
                {m.items.map(item => <div key={item} className="hover:text-white/70 cursor-pointer">{item}</div>)}
              </div>
            </div>
          ))}
        </div>
        <div className="max-w-7xl mx-auto pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <p className="text-white/30 text-xs">이것은 카를로 프로젝트 컨설팅용 목업입니다</p>
          <div className="flex gap-4 text-xs">
            <a href={`${base}#/mockup`} className="text-[#C5A572] hover:underline">에이전트 UX →</a>
            <a href={`${base}#/agent`} className="text-blue-400 hover:underline">네이티브 AI →</a>
            <a href={`${base}#/`} className="text-white/40 hover:underline">컨설팅 →</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
