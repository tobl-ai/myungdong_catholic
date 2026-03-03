export function MockupServices({ base }: { base: string }) {
  const services = [
    {
      icon: '📖',
      title: '매일미사',
      desc: '오늘의 독서와 복음, 음성 낭독',
      color: 'from-blue-500 to-indigo-600',
      badge: 'LIVE',
    },
    {
      icon: '✦',
      title: 'AI 교리 상담',
      desc: '27,000건 교회 문헌 기반 AI',
      color: 'from-[#C5A572] to-amber-600',
      badge: 'NEW',
    },
    {
      icon: '📿',
      title: '묵주기도',
      desc: '실시간 카운터 · WYD 2027 연동',
      color: 'from-purple-500 to-violet-600',
      badge: '3.5억단',
    },
    {
      icon: '⛪',
      title: '본당 찾기',
      desc: '지도 기반 검색 · 미사 시간표',
      color: 'from-green-500 to-emerald-600',
    },
    {
      icon: '📕',
      title: '성경',
      desc: '전문 검색 · AI 해설 · 오디오',
      color: 'from-red-500 to-rose-600',
    },
    {
      icon: '🎵',
      title: '성가',
      desc: '가톨릭 성가 전곡 · 악보 · 반주',
      color: 'from-pink-500 to-fuchsia-600',
    },
    {
      icon: '📅',
      title: '전례력',
      desc: '전례 시기 · 축일 · 성인',
      color: 'from-teal-500 to-cyan-600',
    },
    {
      icon: '🎓',
      title: '교리 학습',
      desc: '단계별 교리서 · AI 튜터',
      color: 'from-orange-500 to-amber-600',
    },
  ]

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-xl font-bold text-[#1B2A4A]">서비스</h2>
          <p className="text-sm text-gray-400 mt-1">에이전트 시대의 통합 가톨릭 플랫폼</p>
        </div>
        <button className="text-sm text-[#C5A572] hover:underline">전체보기 →</button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {services.map(s => (
          <button
            key={s.title}
            className="group relative bg-white rounded-2xl p-5 border border-gray-100 hover:border-[#C5A572]/30 hover:shadow-lg hover:shadow-[#C5A572]/5 transition-all text-left"
          >
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center text-white text-xl mb-3 group-hover:scale-110 transition-transform`}>
              {s.icon}
            </div>
            <div className="font-bold text-sm text-[#1B2A4A] mb-1">{s.title}</div>
            <div className="text-xs text-gray-400 leading-relaxed">{s.desc}</div>
            {s.badge && (
              <span className="absolute top-3 right-3 text-[10px] font-bold bg-[#C5A572]/10 text-[#C5A572] px-2 py-0.5 rounded-full">
                {s.badge}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Agent Protocol Banner */}
      <div className="mt-8 bg-gradient-to-r from-[#1B2A4A] to-[#2d4a7a] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
        <img
          src={`${base}images/ai-assistant.png`}
          alt="AI Assistant"
          className="w-full md:w-48 h-32 md:h-28 object-cover rounded-xl"
        />
        <div className="flex-1 text-center md:text-left">
          <div className="text-[#C5A572] text-xs font-medium tracking-wider mb-2">AGENT ERA READY</div>
          <h3 className="text-white font-bold text-lg mb-2">AI 에이전트가 당신의 신앙 여정을 돕습니다</h3>
          <p className="text-white/50 text-sm mb-4">
            MCP · A2A · llms.txt 프로토콜 지원. Claude, Gemini 등 어떤 AI 에이전트도
            굿뉴스의 교리·성경·전례 데이터에 안전하게 접근할 수 있습니다.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-2">
            {['MCP Server', 'A2A Protocol', 'llms.txt', 'Structured Data'].map(tag => (
              <span key={tag} className="text-xs bg-white/10 text-white/70 px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
