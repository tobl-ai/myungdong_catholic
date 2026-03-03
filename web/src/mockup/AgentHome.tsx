const greetings: Record<string, string> = {
  morning: '좋은 아침이에요',
  afternoon: '평화를 빕니다',
  evening: '편안한 저녁이에요',
}

function getGreeting(h: number) {
  if (h < 12) return greetings.morning
  if (h < 18) return greetings.afternoon
  return greetings.evening
}

const contextCards = [
  { label: '오늘의 복음', sub: '마르 10,17-27', icon: '📖' },
  { label: '저녁미사', sub: '명동성당 19:00', icon: '⛪' },
  { label: '묵주기도', sub: '오늘 아직 안 함', icon: '📿' },
]

const suggestions = [
  '오늘 복음 해설해 줘',
  '세례 준비는 어떻게?',
  '가까운 본당 찾아줘',
  '고해성사 전 양심성찰',
  '묵주기도 바치기',
  '오늘의 성인은 누구?',
]

interface Props {
  base: string
  time: Date
  onAsk: (q: string) => void
}

export function AgentHome({ base: _base, time, onAsk }: Props) {
  const hour = time.getHours()

  return (
    <main className="max-w-lg mx-auto px-5 pb-24 pt-6">
      {/* Greeting */}
      <section className="mb-8">
        <p className="text-black/40 text-sm">{getGreeting(hour)}, 마리아님</p>
        <h1 className="text-2xl font-semibold tracking-tight mt-1 leading-snug">
          연중 제8주간 월요일
        </h1>
        <p className="text-black/30 text-xs mt-2">2026년 3월 3일 · 사순 시기 전</p>
      </section>

      {/* The One Input */}
      <section className="mb-10">
        <button
          onClick={() => onAsk('')}
          className="w-full bg-white rounded-2xl p-4 flex items-center gap-3 shadow-[0_1px_3px_rgba(0,0,0,0.04)] border border-black/5 hover:border-[#d4b896]/40 hover:shadow-[0_2px_12px_rgba(212,184,150,0.15)] transition-all active:scale-[0.99]"
        >
          <div className="w-9 h-9 rounded-xl bg-[#1a1a1a] flex items-center justify-center shrink-0">
            <span className="text-[#d4b896] text-sm">✦</span>
          </div>
          <span className="text-black/30 text-sm text-left">무엇이든 물어보세요...</span>
        </button>

        {/* Quick Suggestions - Horizontal Scroll */}
        <div className="flex gap-2 mt-3 overflow-x-auto pb-1 -mx-1 px-1 scrollbar-none">
          {suggestions.map(s => (
            <button
              key={s}
              onClick={() => onAsk(s)}
              className="shrink-0 text-xs text-black/40 bg-white border border-black/5 px-3 py-1.5 rounded-full hover:border-[#d4b896]/40 hover:text-black/60 transition-colors"
            >
              {s}
            </button>
          ))}
        </div>
      </section>

      {/* Context Cards - What you need right now */}
      <section className="mb-10">
        <h2 className="text-[11px] text-black/30 tracking-wider uppercase mb-3">지금</h2>
        <div className="grid grid-cols-3 gap-2">
          {contextCards.map(c => (
            <button
              key={c.label}
              onClick={() => onAsk(c.label)}
              className="bg-white rounded-2xl p-4 text-left border border-black/5 hover:border-[#d4b896]/30 transition-all active:scale-[0.97]"
            >
              <span className="text-xl">{c.icon}</span>
              <div className="mt-3 text-xs font-medium leading-tight">{c.label}</div>
              <div className="text-[10px] text-black/30 mt-1">{c.sub}</div>
            </button>
          ))}
        </div>
      </section>

      {/* Today's Verse */}
      <section className="mb-10">
        <div className="bg-[#1a1a1a] rounded-2xl p-6 text-white">
          <p className="text-white/40 text-[10px] tracking-wider uppercase mb-4">오늘의 말씀</p>
          <blockquote className="text-lg font-light leading-relaxed mb-4">
            "주님은 나의 목자,<br />아쉬울 것 없어라."
          </blockquote>
          <p className="text-white/30 text-xs">시편 23,1 · 화답송</p>
          <button
            onClick={() => onAsk('오늘 화답송 해설해 줘')}
            className="mt-4 text-xs text-[#d4b896] hover:underline"
          >
            ✦ AI 해설 듣기
          </button>
        </div>
      </section>

      {/* Rosary Counter - Minimal */}
      <section className="mb-10">
        <div className="bg-white rounded-2xl p-5 border border-black/5">
          <div className="flex items-center justify-between mb-3">
            <div>
              <div className="text-[10px] text-black/30 tracking-wider uppercase">WYD 2027 묵주기도</div>
              <div className="text-xl font-semibold tracking-tight mt-1">3.5억단</div>
            </div>
            <div className="text-right">
              <div className="text-[10px] text-black/30">목표 10억단</div>
              <div className="text-xs text-[#d4b896] font-medium mt-1">35.2%</div>
            </div>
          </div>
          <div className="h-1 bg-black/5 rounded-full overflow-hidden">
            <div className="h-full bg-[#d4b896] rounded-full w-[35%]" />
          </div>
          <button className="mt-4 w-full py-2.5 bg-[#1a1a1a] text-white text-xs rounded-xl hover:bg-black/80 transition-colors">
            오늘의 묵주기도 봉헌 →
          </button>
        </div>
      </section>

      {/* Recent Conversations */}
      <section className="mb-10">
        <h2 className="text-[11px] text-black/30 tracking-wider uppercase mb-3">최근 대화</h2>
        <div className="space-y-2">
          {[
            { q: '세례 준비 과정 안내', when: '어제', msgs: 4 },
            { q: '사순 시기 의미와 실천', when: '3일 전', msgs: 6 },
            { q: '명동성당 주일미사 시간', when: '1주 전', msgs: 2 },
          ].map(conv => (
            <button
              key={conv.q}
              onClick={() => onAsk(conv.q)}
              className="w-full bg-white rounded-xl p-4 flex items-center gap-3 text-left border border-black/5 hover:border-[#d4b896]/30 transition-all"
            >
              <div className="w-8 h-8 rounded-lg bg-black/5 flex items-center justify-center text-black/20 text-xs shrink-0">
                ✦
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium truncate">{conv.q}</div>
                <div className="text-[10px] text-black/30 mt-0.5">{conv.when} · {conv.msgs}개 메시지</div>
              </div>
              <span className="text-black/15 text-sm">→</span>
            </button>
          ))}
        </div>
      </section>

      {/* Agent Era Badge */}
      <section className="text-center py-8">
        <div className="inline-flex items-center gap-2 text-[10px] text-black/20">
          <span>MCP</span>
          <span className="w-0.5 h-0.5 rounded-full bg-black/15" />
          <span>A2A</span>
          <span className="w-0.5 h-0.5 rounded-full bg-black/15" />
          <span>llms.txt</span>
          <span className="w-0.5 h-0.5 rounded-full bg-black/15" />
          <span>Agent-Ready</span>
        </div>
      </section>
    </main>
  )
}
