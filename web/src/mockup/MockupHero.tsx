import { useState } from 'react'

export function MockupHero({ base }: { base: string }) {
  const [query, setQuery] = useState('')

  return (
    <section className="relative overflow-hidden">
      {/* Cathedral Background */}
      <div className="absolute inset-0">
        <img
          src={`${base}images/cathedral-hero.png`}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1B2A4A]/80 via-[#1B2A4A]/60 to-[#1B2A4A]/90" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-16 md:py-24 text-center">
        {/* Liturgical Season Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400" />
          <span className="text-white/80 text-xs">연중 제8주간 월요일</span>
          <span className="text-white/40 text-xs">· 2026.03.03</span>
        </div>

        {/* Today's Verse */}
        <h1 className="text-2xl md:text-4xl font-light text-white leading-relaxed mb-3">
          "주님은 나의 목자, 아쉬울 것 없어라"
        </h1>
        <p className="text-white/50 text-sm mb-10">시편 23,1 · 오늘의 화답송</p>

        {/* AI Search Bar */}
        <div className="max-w-2xl mx-auto relative">
          <div className="flex items-center bg-white/95 backdrop-blur rounded-2xl shadow-2xl shadow-black/20 overflow-hidden">
            <span className="pl-5 text-[#C5A572] text-lg">✦</span>
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="AI에게 무엇이든 물어보세요... 교리, 성경, 기도..."
              className="flex-1 px-4 py-4 text-sm text-gray-800 placeholder-gray-400 bg-transparent outline-none"
            />
            <button className="bg-[#1B2A4A] text-white px-6 py-4 text-sm font-medium hover:bg-[#2d4a7a] transition-colors">
              검색
            </button>
          </div>
          <div className="flex flex-wrap justify-center gap-2 mt-3">
            {['세례 준비는 어떻게?', '오늘의 복음 해설', '가까운 본당 찾기'].map(q => (
              <button
                key={q}
                onClick={() => setQuery(q)}
                className="text-xs text-white/50 bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full transition-colors"
              >
                {q}
              </button>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="flex flex-wrap justify-center gap-6 mt-12">
          {[
            { icon: '⛪', label: '서울대교구', value: '226개 본당' },
            { icon: '📿', label: '묵주기도', value: '3.5억단 달성' },
            { icon: '👥', label: '오늘 접속', value: '12,847명' },
            { icon: '🕊', label: 'WYD 2027', value: 'D-887' },
          ].map(s => (
            <div key={s.label} className="text-center">
              <span className="text-2xl">{s.icon}</span>
              <div className="text-white font-medium text-sm mt-1">{s.value}</div>
              <div className="text-white/40 text-[10px]">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
