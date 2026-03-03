export function MockupDashboard({ base: _base }: { base: string }) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-xl font-bold text-[#1B2A4A]">나의 신앙 대시보드</h2>
          <p className="text-sm text-gray-400 mt-1">개인화된 신앙 여정 관리</p>
        </div>
        <span className="text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-full">마리아 · 명동성당</span>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {/* Prayer Tracker */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-[#1B2A4A] text-sm">기도 현황</h3>
            <span className="text-xs text-gray-400">이번 주</span>
          </div>
          <div className="grid grid-cols-7 gap-1 mb-4">
            {['월', '화', '수', '목', '금', '토', '일'].map((d, i) => (
              <div key={d} className="text-center">
                <div className="text-[10px] text-gray-400 mb-1">{d}</div>
                <div className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center text-xs
                  ${i < 2 ? 'bg-[#C5A572] text-white' : i === 2 ? 'bg-[#C5A572]/30 text-[#C5A572]' : 'bg-gray-100 text-gray-300'}`}>
                  {i < 2 ? '✓' : i === 2 ? '·' : ''}
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-[#C5A572] rounded-full w-2/7" />
            </div>
            <span className="text-xs text-gray-400">2/7일</span>
          </div>
        </div>

        {/* Mass Attendance */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-[#1B2A4A] text-sm">미사 참례</h3>
            <span className="text-xs text-gray-400">3월</span>
          </div>
          <div className="text-center mb-4">
            <div className="text-4xl font-bold text-[#1B2A4A]">12</div>
            <div className="text-xs text-gray-400 mt-1">올해 총 참례 횟수</div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-500">다음 미사</span>
              <span className="text-[#1B2A4A] font-medium">주일 10:00 · 명동성당</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-500">최근 참례</span>
              <span className="text-gray-400">3.2 (일) 주일미사</span>
            </div>
          </div>
        </div>

        {/* Reading Progress */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-[#1B2A4A] text-sm">성경 통독</h3>
            <span className="text-xs text-[#C5A572]">진행 중</span>
          </div>
          <div className="space-y-3">
            {[
              { book: '마태오 복음', progress: 85, ch: '26/28장' },
              { book: '시편', progress: 42, ch: '63/150편' },
              { book: '창세기', progress: 100, ch: '완독' },
            ].map(b => (
              <div key={b.book}>
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="text-gray-600">{b.book}</span>
                  <span className="text-gray-400">{b.ch}</span>
                </div>
                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${b.progress === 100 ? 'bg-green-400' : 'bg-[#C5A572]'}`}
                    style={{ width: `${b.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Parish Search */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <h3 className="font-bold text-[#1B2A4A] text-sm mb-4">본당 찾기</h3>
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="지역명, 본당명으로 검색..."
              className="flex-1 bg-gray-50 rounded-xl px-4 py-3 text-sm outline-none"
            />
            <button className="bg-[#1B2A4A] text-white px-5 py-3 rounded-xl text-sm">
              검색
            </button>
          </div>
        </div>
        <div className="grid md:grid-cols-2">
          {/* Map Placeholder */}
          <div className="h-64 bg-gray-100 flex items-center justify-center">
            <div className="text-center text-gray-400">
              <div className="text-4xl mb-2">🗺</div>
              <p className="text-sm">지도 영역</p>
              <p className="text-xs">Google Maps 연동</p>
            </div>
          </div>
          {/* Parish List */}
          <div className="p-4 space-y-3">
            {[
              { name: '명동성당', dist: '0.3km', mass: '주일 7,9,10,11,12,17,19시', addr: '중구 명동길 74' },
              { name: '약현성당', dist: '1.2km', mass: '주일 7,9,10:30,12,19시', addr: '중구 중림로 27' },
              { name: '중림동성당', dist: '1.8km', mass: '주일 8,10,12,19시', addr: '중구 중림로 50' },
            ].map(p => (
              <div key={p.name} className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer">
                <div className="w-10 h-10 rounded-lg bg-[#1B2A4A]/10 flex items-center justify-center text-[#1B2A4A] shrink-0">
                  ⛪
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-[#1B2A4A]">{p.name}</span>
                    <span className="text-xs text-[#C5A572]">{p.dist}</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-0.5">{p.addr}</p>
                  <p className="text-xs text-gray-500 mt-1">미사: {p.mass}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Rosary Counter */}
      <div className="mt-8 bg-gradient-to-r from-purple-600 to-violet-700 rounded-2xl p-8 text-center text-white">
        <div className="text-xs text-white/60 tracking-wider mb-2">WYD 2027 묵주기도 릴레이</div>
        <div className="text-5xl font-bold mb-2">352,847,291</div>
        <div className="text-sm text-white/60 mb-6">전 세계 누적 / 목표 10억단</div>
        <div className="max-w-md mx-auto h-3 bg-white/20 rounded-full overflow-hidden mb-4">
          <div className="h-full bg-[#C5A572] rounded-full w-[35%]" />
        </div>
        <div className="flex justify-center gap-8 text-xs text-white/50">
          <div><span className="text-white font-bold">35.2%</span> 달성</div>
          <div>서울대교구 <span className="text-[#C5A572] font-bold">2.4억단</span> 선두</div>
          <div>D-887</div>
        </div>
        <button className="mt-6 bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-xl text-sm font-medium transition-colors">
          📿 묵주기도 봉헌하기
        </button>
      </div>
    </section>
  )
}
