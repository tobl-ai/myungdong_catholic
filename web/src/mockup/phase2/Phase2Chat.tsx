import { useState, useEffect, useRef } from 'react'
import { Phase2Message, type P2Message } from './Phase2Message'

const demoResponses: Record<string, P2Message> = {
  default: {
    role: 'ai', content: '무엇이든 물어보거나, 작업을 위임해 주세요.', confidence: 100,
  },
  '저녁기도 시간입니다': {
    role: 'ai',
    content: '저녁기도(성무일도 만과)를 준비했습니다. 오늘은 연중 제8주간 월요일입니다.',
    confidence: 98,
    sources: ['성무일도 · 연중 제8주간 월요일'],
    generatedUI: {
      type: 'prayer-timer',
      data: { name: '저녁기도 (만과)', duration: '약 15분', parts: '찬미가 → 시편 → 짧은 독서 → 마리아의 노래' },
    },
  },
  '내일 복음 미리보기': {
    role: 'ai',
    content: '내일(3월 4일) 복음은 **마르코 10,28-31** "백 배로 받을 것"입니다.\n\n베드로가 "모든 것을 버리고 스승님을 따랐습니다"라 하자, 예수님은 현세에서 백 배를 받고 내세에서 영원한 생명을 받을 것이라 하십니다.\n\n**핵심**: 포기가 아닌 **투자**의 관점. 하느님께 드린 것은 결코 잃어버린 것이 아닙니다.',
    confidence: 94,
    sources: ['마르 10,28-31', '교리서 §2544', '베네딕토 16세 강론 2011.10.09'],
  },
  '고해성사 준비 도와줘': {
    role: 'ai',
    content: '양심성찰을 위한 질문들을 준비했습니다.\n\n**십계명 기반 양심성찰:**\n1. 하느님 외에 다른 것을 최우선에 두지 않았는가?\n2. 하느님의 이름을 헛되이 부르지 않았는가?\n3. 주일과 축일을 거룩히 지켰는가?\n\n다만, 고해성사는 사목적 판단이 필요한 영역입니다.',
    confidence: 72,
    escalation: {
      reason: '고해성사는 성사적 판단이 필요한 영역입니다',
      target: '사제',
      targetDesc: '명동성당 고해시간: 매일 16:00-17:30',
    },
  },
  '매일 아침 복음 요약 위임': {
    role: 'ai',
    content: '새 위임 작업을 등록하겠습니다. 아래 실행 계획을 확인해 주세요.',
    confidence: 100,
    intentPreview: {
      description: '매일 아침 7:00에 당일 복음을 요약하여 알림으로 전송',
      actions: [
        '굿뉴스 MCP에서 당일 전례 독서 조회',
        'AI 해설 생성 (교리서 + 교부 문헌 참조)',
        '요약본을 푸시 알림으로 전송',
      ],
    },
  },
  '묵주기도 리마인더': {
    role: 'ai',
    content: '묵주기도 1단을 봉헌하겠습니다.',
    confidence: 100,
    generatedUI: {
      type: 'prayer-counter',
      data: { today: '1', weekly: '5', total: '352,847,293', pct: '35.2' },
    },
  },
}

function findResponse(q: string): P2Message {
  const key = Object.keys(demoResponses).find(k => k && q.includes(k))
  return key ? demoResponses[key] : demoResponses.default
}

interface Props {
  initialQuery: string
  onClose: () => void
  autonomy: number
}

export function Phase2Chat({ initialQuery, onClose, autonomy }: Props) {
  const [messages, setMessages] = useState<P2Message[]>([])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const endRef = useRef<HTMLDivElement>(null)
  const prevQuery = useRef('')

  const scroll = () => endRef.current?.scrollIntoView({ behavior: 'smooth' })

  const send = (text: string) => {
    if (!text.trim()) return
    setMessages(prev => [...prev, { role: 'user', content: text }])
    setInput('')
    setTyping(true)
    setTimeout(() => {
      setMessages(prev => [...prev, findResponse(text)])
      setTyping(false)
    }, 800 + Math.random() * 600)
  }

  useEffect(() => { scroll() }, [messages, typing])
  useEffect(() => {
    if (initialQuery && initialQuery !== prevQuery.current) {
      prevQuery.current = initialQuery
      send(initialQuery)
    }
  }, [initialQuery])

  const suggestions = ['저녁기도 시간입니다', '내일 복음 미리보기', '고해성사 준비 도와줘', '매일 아침 복음 요약 위임']

  return (
    <div className="flex flex-col bg-[#f7f7fa] h-full md:h-[calc(100vh-3.5rem)]">
      {/* Header */}
      <div className="px-5 py-3 flex items-center gap-3 border-b border-black/5 shrink-0">
        <button onClick={onClose} className="md:hidden text-black/30 hover:text-black/60 text-sm">←</button>
        <div className="flex-1">
          <span className="text-xs font-medium">✦ AI 에이전트</span>
          <span className="text-[10px] text-indigo-500/50 ml-2">자율도 {['최소', '낮음', '균형', '높음', '최대'][autonomy]}</span>
        </div>
        <button onClick={() => { setMessages([]); prevQuery.current = '' }} className="text-[10px] text-black/30 hover:text-black/60 transition-colors">새 대화</button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-5 space-y-5 py-4">
        {messages.length === 0 && !typing && (
          <div className="text-center py-16">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center mb-4">
              <span className="text-white text-xl">✦</span>
            </div>
            <p className="text-black/30 text-sm mb-1">질문하거나 작업을 위임하세요</p>
            <p className="text-black/15 text-[10px]">Generative UI · Confidence Signal · Intent Preview</p>
            <div className="flex flex-wrap justify-center gap-2 mt-6 max-w-xs mx-auto">
              {suggestions.map(s => (
                <button key={s} onClick={() => send(s)} className="text-xs bg-white border border-black/5 px-3 py-2 rounded-xl hover:border-indigo-200 transition-colors">{s}</button>
              ))}
            </div>
          </div>
        )}

        {messages.map((msg, i) => <Phase2Message key={i} msg={msg} />)}

        {typing && (
          <div className="flex items-center gap-1.5 py-2">
            {[0, 1, 2].map(i => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-indigo-300 animate-bounce" style={{ animationDelay: `${i * 150}ms` }} />
            ))}
          </div>
        )}
        <div ref={endRef} />
      </div>

      {/* Input */}
      <div className="px-5 pb-4 pt-2 shrink-0">
        <div className="flex items-center gap-2 bg-white rounded-2xl border border-black/5 px-4 py-2 focus-within:border-indigo-300/60 focus-within:shadow-[0_2px_12px_rgba(99,102,241,0.08)] transition-all">
          <input
            type="text" value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && send(input)}
            placeholder="질문 또는 위임..."
            className="flex-1 text-sm bg-transparent outline-none placeholder-black/20"
          />
          <button
            onClick={() => send(input)} disabled={!input.trim()}
            className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white flex items-center justify-center text-xs disabled:opacity-20 transition-opacity"
          >↑</button>
        </div>
        <p className="text-[9px] text-black/15 text-center mt-1.5">Confidence Signal · Intent Preview · Escalation Pathway · Generative UI</p>
      </div>
    </div>
  )
}
