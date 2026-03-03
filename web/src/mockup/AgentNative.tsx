import { useState, useEffect, useRef } from 'react'

interface Msg {
  role: 'user' | 'agent' | 'system'
  content: string
  source?: string
  richCard?: RichCard
  typing?: boolean
}

interface RichCard {
  type: 'reading' | 'parish' | 'prayer' | 'saint' | 'services'
  data?: Record<string, string>
}

const demoFlows: Record<string, Msg[]> = {
  '오늘 미사 독서 알려줘': [
    { role: 'system', content: '굿뉴스 MCP 서버 연결 중...' },
    { role: 'system', content: '✓ goodnews.catholic.or.kr/mcp · 인증 완료' },
    {
      role: 'agent',
      content: '오늘은 **연중 제8주간 월요일**입니다.\n\n복음은 **마르코 10,17-27** "부자 청년" 이야기예요. 한 청년이 영원한 생명을 얻는 법을 묻자, 예수님은 가진 것을 팔아 가난한 이에게 주라 하십니다.\n\n핵심은 소유가 아니라 **집착**의 문제입니다.',
      source: '굿뉴스 MCP',
      richCard: { type: 'reading', data: { title: '마르 10,17-27', sub: '부자 청년', season: '연중 제8주간 월요일' } },
    },
  ],
  '가까운 성당 찾아줘': [
    { role: 'system', content: '위치 확인 중... 서울 중구' },
    { role: 'system', content: '✓ 굿뉴스 MCP + Google Maps 연동' },
    {
      role: 'agent',
      content: '현재 위치에서 가장 가까운 성당 3곳입니다.',
      source: '굿뉴스 MCP + Maps',
      richCard: { type: 'parish' },
    },
  ],
  '묵주기도 한 단 봉헌할게': [
    { role: 'system', content: '✓ 굿뉴스 묵주기도 API 연결' },
    {
      role: 'agent',
      content: '묵주기도 1단이 봉헌되었습니다.\n\n오늘 봉헌: **1단** (환희의 신비)\n이번 주 누적: **5단**\nWYD 2027 전체: **352,847,292단** (35.2%)',
      source: '굿뉴스 MCP',
      richCard: { type: 'prayer', data: { count: '352,847,292', pct: '35.2' } },
    },
  ],
  '오늘의 성인 알려줘': [
    { role: 'system', content: '✓ 굿뉴스 전례력 API' },
    {
      role: 'agent',
      content: '오늘(3월 3일)의 성인은 **성녀 쿠네군다**입니다.\n\n신성 로마 제국 황후로, 수많은 성당과 수도원을 건립했습니다. 남편 사후 수도원에 입회하여 기도와 봉사로 여생을 보냈습니다.',
      source: '굿뉴스 MCP',
      richCard: { type: 'saint', data: { name: '성녀 쿠네군다', period: '~1040', feast: '3월 3일' } },
    },
  ],
  '': [
    {
      role: 'agent',
      content: '안녕하세요, 마리아님. 가톨릭 신앙 관련 질문이 있으시면 말씀해 주세요.\n\n굿뉴스 서버에 연결되어 있어 **미사 독서**, **교리 상담**, **본당 정보**, **성경 검색** 등을 도와드릴 수 있어요.',
      richCard: { type: 'services' },
    },
  ],
}

function getFlow(q: string): Msg[] {
  const key = Object.keys(demoFlows).find(k => k && q.includes(k))
  return key ? demoFlows[key] : demoFlows['']
}

export function AgentNative() {
  const base = import.meta.env.BASE_URL
  const [messages, setMessages] = useState<Msg[]>([])
  const [input, setInput] = useState('')
  const [processing, setProcessing] = useState(false)
  const endRef = useRef<HTMLDivElement>(null)

  const scroll = () => endRef.current?.scrollIntoView({ behavior: 'smooth' })
  useEffect(() => { scroll() }, [messages])

  const send = (text: string) => {
    if (processing) return
    const flow = getFlow(text)
    if (text) setMessages(prev => [...prev, { role: 'user', content: text }])
    setInput('')
    setProcessing(true)

    let i = 0
    const next = () => {
      if (i >= flow.length) { setProcessing(false); return }
      const msg = flow[i]
      i++
      const delay = msg.role === 'system' ? 600 : 1000
      setTimeout(() => {
        setMessages(prev => [...prev, msg])
        next()
      }, delay)
    }
    next()
  }

  useEffect(() => { send('') }, [])

  return (
    <div className="min-h-screen bg-[#000] flex items-center justify-center p-4">
      {/* Phone Frame (desktop) / Full Screen (mobile) */}
      <div className="w-full max-w-sm md:max-w-md md:rounded-[2.5rem] md:border-[8px] md:border-gray-800 md:shadow-2xl md:shadow-black/50 bg-[#0a0a0a] md:h-[85vh] md:max-h-[900px] flex flex-col overflow-hidden relative min-h-screen md:min-h-0">
        {/* Status Bar */}
        <div className="flex items-center justify-between px-6 pt-3 pb-1 text-white/50 text-[10px]">
          <span>16:07</span>
          <div className="flex items-center gap-1">
            <span>5G</span>
            <span>■■■</span>
            <span>🔋</span>
          </div>
        </div>

        {/* Agent Header */}
        <div className="px-5 py-3 flex items-center gap-3 border-b border-white/5">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <span className="text-white text-sm">✦</span>
          </div>
          <div className="flex-1">
            <div className="text-white text-sm font-medium">내 AI 에이전트</div>
            <div className="text-white/30 text-[10px] flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
              굿뉴스 MCP 연결됨
            </div>
          </div>
          <button className="text-white/30 text-xs">⚙</button>
        </div>

        {/* Connected Services */}
        <div className="px-5 py-2 flex gap-2 border-b border-white/5 overflow-x-auto scrollbar-none">
          {[
            { name: '굿뉴스', status: 'MCP', color: 'bg-green-500' },
            { name: 'Maps', status: 'API', color: 'bg-blue-500' },
            { name: 'Calendar', status: 'sync', color: 'bg-purple-500' },
          ].map(s => (
            <div key={s.name} className="shrink-0 flex items-center gap-1.5 bg-white/5 rounded-full px-3 py-1">
              <span className={`w-1 h-1 rounded-full ${s.color}`} />
              <span className="text-white/50 text-[10px]">{s.name}</span>
              <span className="text-white/20 text-[9px]">{s.status}</span>
            </div>
          ))}
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
          {messages.map((msg, i) => (
            <MessageBubble key={i} msg={msg} />
          ))}
          {processing && (
            <div className="flex items-center gap-1.5 px-1">
              {[0, 1, 2].map(i => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/30 animate-bounce" style={{ animationDelay: `${i * 150}ms` }} />
              ))}
            </div>
          )}
          <div ref={endRef} />
        </div>

        {/* Input */}
        <div className="px-4 pb-6 pt-2 border-t border-white/5">
          <div className="flex gap-2 mb-3 overflow-x-auto scrollbar-none">
            {['오늘 미사 독서 알려줘', '가까운 성당 찾아줘', '묵주기도 한 단 봉헌할게', '오늘의 성인 알려줘'].map(s => (
              <button
                key={s}
                onClick={() => send(s)}
                disabled={processing}
                className="shrink-0 text-[10px] text-white/30 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full hover:bg-white/10 transition-colors disabled:opacity-30"
              >
                {s}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/30 text-sm shrink-0">
              🎤
            </button>
            <div className="flex-1 flex items-center bg-white/5 rounded-full px-4 py-2 border border-white/10 focus-within:border-blue-500/50">
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && send(input)}
                placeholder="무엇이든 물어보세요..."
                className="flex-1 bg-transparent text-white text-sm outline-none placeholder-white/20"
              />
            </div>
            <button
              onClick={() => send(input)}
              disabled={!input.trim() || processing}
              className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs disabled:opacity-20 transition-opacity shrink-0"
            >
              ↑
            </button>
          </div>
        </div>

        {/* Home Indicator */}
        <div className="flex justify-center pb-2">
          <div className="w-32 h-1 rounded-full bg-white/20" />
        </div>
      </div>

      {/* Desktop: Side Panel - How it works */}
      <div className="hidden lg:block ml-12 max-w-sm text-white/60">
        <h2 className="text-white text-2xl font-semibold mb-4">에이전트 시대의<br />가톨릭 서비스</h2>
        <p className="text-sm leading-relaxed mb-8 text-white/40">
          사용자는 굿뉴스 앱을 열지 않습니다.<br />
          내 폰의 AI 에이전트가 MCP/A2A 프로토콜로<br />
          굿뉴스 서버에 직접 접근합니다.
        </p>
        <div className="space-y-4">
          {[
            { step: '1', title: '사용자 → 내 AI', desc: '"오늘 미사 독서 알려줘"' },
            { step: '2', title: 'AI → 굿뉴스 MCP', desc: 'MCP 프로토콜로 서버 질의' },
            { step: '3', title: '굿뉴스 → AI', desc: '구조화된 데이터 응답' },
            { step: '4', title: 'AI → 사용자', desc: '자연어로 가공하여 전달' },
          ].map(s => (
            <div key={s.step} className="flex gap-3 items-start">
              <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-[10px] text-white/50 shrink-0">{s.step}</div>
              <div>
                <div className="text-white/70 text-sm font-medium">{s.title}</div>
                <div className="text-white/30 text-xs">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 pt-6 border-t border-white/10 space-y-2">
          <div className="text-[10px] text-white/30 tracking-wider uppercase">지원 프로토콜</div>
          <div className="flex flex-wrap gap-2">
            {['MCP (Model Context Protocol)', 'A2A (Agent-to-Agent)', 'llms.txt', 'OpenAPI / REST'].map(p => (
              <span key={p} className="text-[10px] bg-white/5 text-white/40 px-2 py-1 rounded-md">{p}</span>
            ))}
          </div>
        </div>
        <a href={`${base}#/mockup`} className="inline-block mt-6 text-xs text-blue-400 hover:underline">← 앱 버전 목업</a>
        <span className="mx-2 text-white/20">·</span>
        <a href={`${base}#/`} className="inline-block mt-6 text-xs text-white/30 hover:underline">컨설팅 프레젠테이션</a>
      </div>
    </div>
  )
}

function MessageBubble({ msg }: { msg: Msg }) {
  if (msg.role === 'system') {
    return (
      <div className="flex items-center gap-2 text-[10px] text-white/20 px-1">
        <span className="w-3 h-3 rounded-full border border-white/10 flex items-center justify-center text-[8px]">
          {msg.content.startsWith('✓') ? '✓' : '·'}
        </span>
        <span className="font-mono">{msg.content}</span>
      </div>
    )
  }

  if (msg.role === 'user') {
    return (
      <div className="flex justify-end">
        <div className="bg-blue-500 text-white text-sm px-4 py-2.5 rounded-2xl rounded-tr-md max-w-[85%]">
          {msg.content}
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-[95%]">
      <div className="text-white/70 text-sm leading-relaxed whitespace-pre-line">
        {msg.content.split(/(\*\*.*?\*\*)/g).map((part, j) =>
          part.startsWith('**') && part.endsWith('**')
            ? <strong key={j} className="text-white font-semibold">{part.slice(2, -2)}</strong>
            : <span key={j}>{part}</span>
        )}
      </div>

      {msg.richCard?.type === 'reading' && msg.richCard.data && (
        <div className="mt-3 bg-white/5 rounded-xl p-4 border border-white/10">
          <div className="text-[10px] text-white/30 mb-1">{msg.richCard.data.season}</div>
          <div className="text-white text-sm font-medium">{msg.richCard.data.title}</div>
          <div className="text-white/40 text-xs mt-1">{msg.richCard.data.sub}</div>
          <button className="mt-3 text-[10px] text-blue-400">전문 읽기 →</button>
        </div>
      )}

      {msg.richCard?.type === 'parish' && (
        <div className="mt-3 space-y-2">
          {[
            { name: '명동성당', dist: '0.3km', mass: '19:00 저녁미사' },
            { name: '약현성당', dist: '1.2km', mass: '18:30 저녁미사' },
            { name: '중림동성당', dist: '1.8km', mass: '19:00 저녁미사' },
          ].map(p => (
            <div key={p.name} className="bg-white/5 rounded-xl p-3 flex items-center gap-3 border border-white/10">
              <span className="text-lg">⛪</span>
              <div className="flex-1">
                <div className="text-white text-xs font-medium">{p.name} <span className="text-white/30">{p.dist}</span></div>
                <div className="text-white/30 text-[10px]">{p.mass}</div>
              </div>
              <span className="text-white/20 text-xs">→</span>
            </div>
          ))}
        </div>
      )}

      {msg.richCard?.type === 'prayer' && msg.richCard.data && (
        <div className="mt-3 bg-purple-500/10 rounded-xl p-4 border border-purple-500/20">
          <div className="flex items-center justify-between mb-2">
            <span className="text-purple-300 text-xs">WYD 2027 묵주기도</span>
            <span className="text-purple-300 text-xs font-medium">{msg.richCard.data.pct}%</span>
          </div>
          <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
            <div className="h-full bg-purple-400 rounded-full" style={{ width: `${msg.richCard.data.pct}%` }} />
          </div>
          <div className="text-white/40 text-[10px] mt-2">{msg.richCard.data.count}단 / 10억단</div>
        </div>
      )}

      {msg.richCard?.type === 'saint' && msg.richCard.data && (
        <div className="mt-3 bg-white/5 rounded-xl p-4 border border-white/10">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🕊</span>
            <div>
              <div className="text-white text-sm font-medium">{msg.richCard.data.name}</div>
              <div className="text-white/30 text-[10px]">축일 {msg.richCard.data.feast} · {msg.richCard.data.period}</div>
            </div>
          </div>
        </div>
      )}

      {msg.richCard?.type === 'services' && (
        <div className="mt-3 grid grid-cols-2 gap-2">
          {[
            { icon: '📖', name: '미사 독서', proto: 'MCP' },
            { icon: '✦', name: '교리 상담', proto: 'MCP' },
            { icon: '⛪', name: '본당 찾기', proto: 'MCP+Maps' },
            { icon: '📿', name: '묵주기도', proto: 'A2A' },
          ].map(s => (
            <div key={s.name} className="bg-white/5 rounded-lg p-3 border border-white/10">
              <span className="text-lg">{s.icon}</span>
              <div className="text-white/70 text-xs mt-1">{s.name}</div>
              <div className="text-white/20 text-[9px] font-mono">{s.proto}</div>
            </div>
          ))}
        </div>
      )}

      {msg.source && (
        <div className="mt-2 text-[9px] text-white/15 font-mono">via {msg.source}</div>
      )}
    </div>
  )
}
