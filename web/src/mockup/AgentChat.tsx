import { useState, useEffect, useRef } from 'react'

interface Message {
  role: 'user' | 'ai'
  content: string
  sources?: string[]
  richCard?: { type: string; data: Record<string, string> }
}

const demoResponses: Record<string, Message> = {
  default: {
    role: 'ai',
    content: '무엇이든 물어보세요. 교리, 성경, 기도, 본당 정보 등 가톨릭 신앙 생활에 대해 도움을 드릴 수 있습니다.',
  },
  '오늘 복음 해설해 줘': {
    role: 'ai',
    content: '오늘 복음은 **마르코 10,17-27** "부자 청년" 이야기입니다.\n\n한 청년이 예수님께 영원한 생명을 얻는 방법을 묻습니다. 예수님은 십계명을 지키라 하시고, 청년이 다 지킨다 하자 "가서 가진 것을 팔아 가난한 이에게 주어라" 하십니다.\n\n**핵심 메시지**: 소유 자체가 아니라, 소유에 **마음이 묶여 있는 것**이 문제입니다. 우리에게 "놓지 못하는 것"이 무엇인지 성찰하라는 초대입니다.\n\n예수님은 "사람에게는 불가능하지만, 하느님께는 모든 것이 가능하다"고 위로하십니다.',
    sources: ['마르 10,17-27', '가톨릭 교리서 §2544', '프란치스코 교황 강론 2024.10.13'],
  },
  '세례 준비는 어떻게?': {
    role: 'ai',
    content: '세례 준비 과정을 안내해 드릴게요.\n\n**1. 본당 방문** → 예비신자 교리반 등록\n시작: 매년 3월, 9월\n\n**2. 예비신자 교리** (6개월)\n주 1회 수업 + 미사 참례\n\n**3. 세례식**\n부활 성야(4월) 또는 성탄(12월)\n\n가장 가까운 본당은 **명동성당**이며, 예비신자 교리반은 **매주 수요일 19:30**에 진행됩니다.',
    sources: ['가톨릭 교리서 §1229-1245', '서울대교구 예비신자 안내'],
    richCard: { type: 'parish', data: { name: '명동성당', time: '수 19:30', dist: '0.3km' } },
  },
  '가까운 본당 찾아줘': {
    role: 'ai',
    content: '현재 위치 기준 가까운 본당 3곳입니다.',
    richCard: { type: 'parishes', data: { name: '명동성당', time: '주일 7,9,10,11,12,17,19시', dist: '0.3km' } },
  },
  '오늘의 성인은 누구?': {
    role: 'ai',
    content: '오늘(3월 3일)의 성인은 **성녀 쿠네군다**(Cunegunda)입니다.\n\n헝가리 출신의 신성 로마 제국 황후로, 남편 성 하인리히 2세와 함께 수많은 성당과 수도원을 건립했습니다. 남편 사후 수도원에 입회하여 여생을 기도와 봉사로 보냈습니다.\n\n**한 줄 묵상**: 높은 지위에서도 겸손과 봉사를 실천한 삶.',
    sources: ['성인 전기', '로마 순교록'],
  },
}

function findResponse(q: string): Message {
  const key = Object.keys(demoResponses).find(k => q.includes(k) || k.includes(q))
  return key ? demoResponses[key] : demoResponses.default
}

interface Props {
  base: string
  initialQuery: string
  onClose: () => void
}

export function AgentChat({ base: _base, initialQuery, onClose }: Props) {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const endRef = useRef<HTMLDivElement>(null)

  const scrollToEnd = () => endRef.current?.scrollIntoView({ behavior: 'smooth' })

  const send = (text: string) => {
    if (!text.trim()) return
    const userMsg: Message = { role: 'user', content: text }
    setMessages(prev => [...prev, userMsg])
    setInput('')
    setTyping(true)

    setTimeout(() => {
      const aiMsg = findResponse(text)
      setMessages(prev => [...prev, aiMsg])
      setTyping(false)
    }, 800 + Math.random() * 600)
  }

  useEffect(() => { scrollToEnd() }, [messages, typing])
  useEffect(() => { if (initialQuery) send(initialQuery) }, [])

  return (
    <div className="flex flex-col h-[calc(100vh-7.5rem)]">
      {/* Chat Header */}
      <div className="px-5 py-3 flex items-center gap-3">
        <button onClick={onClose} className="text-black/30 hover:text-black/60 transition-colors text-sm">
          ←
        </button>
        <div className="flex-1 text-center">
          <span className="text-xs font-medium">✦ AI 상담</span>
        </div>
        <button className="text-black/30 text-xs">새 대화</button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-5 space-y-5 pb-4">
        {messages.length === 0 && !typing && (
          <div className="text-center py-20">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-[#1a1a1a] flex items-center justify-center mb-4">
              <span className="text-[#d4b896] text-xl">✦</span>
            </div>
            <p className="text-black/30 text-sm">교리, 성경, 기도에 대해<br />무엇이든 물어보세요</p>
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {['오늘 복음 해설해 줘', '세례 준비는 어떻게?', '오늘의 성인은 누구?'].map(s => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className="text-xs bg-white border border-black/5 px-3 py-2 rounded-xl hover:border-[#d4b896]/40 transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((msg, i) => (
          <div key={i} className={msg.role === 'user' ? 'flex justify-end' : ''}>
            {msg.role === 'user' ? (
              <div className="bg-[#1a1a1a] text-white text-sm px-4 py-2.5 rounded-2xl rounded-tr-md max-w-[85%]">
                {msg.content}
              </div>
            ) : (
              <div className="max-w-[90%]">
                <div className="text-sm text-black/70 leading-relaxed whitespace-pre-line">
                  {msg.content.split(/(\*\*.*?\*\*)/g).map((part, j) =>
                    part.startsWith('**') && part.endsWith('**')
                      ? <strong key={j} className="text-[#1a1a1a] font-semibold">{part.slice(2, -2)}</strong>
                      : <span key={j}>{part}</span>
                  )}
                </div>

                {/* Rich Card - Parish */}
                {msg.richCard?.type === 'parish' && (
                  <div className="mt-3 bg-white rounded-xl border border-black/5 p-4">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">⛪</span>
                      <div>
                        <div className="text-sm font-medium">{msg.richCard.data.name}</div>
                        <div className="text-[10px] text-black/40">{msg.richCard.data.dist} · 교리반 {msg.richCard.data.time}</div>
                      </div>
                    </div>
                    <button className="mt-3 w-full py-2 bg-[#1a1a1a] text-white text-xs rounded-lg">
                      길찾기 →
                    </button>
                  </div>
                )}

                {msg.richCard?.type === 'parishes' && (
                  <div className="mt-3 space-y-2">
                    {[
                      { name: '명동성당', dist: '0.3km', mass: '주일 7,9,10,11,12,17,19시' },
                      { name: '약현성당', dist: '1.2km', mass: '주일 7,9,10:30,12,19시' },
                      { name: '중림동성당', dist: '1.8km', mass: '주일 8,10,12,19시' },
                    ].map(p => (
                      <div key={p.name} className="bg-white rounded-xl border border-black/5 p-3 flex items-center gap-3">
                        <span>⛪</span>
                        <div className="flex-1">
                          <div className="text-xs font-medium">{p.name} <span className="text-black/30 font-normal">{p.dist}</span></div>
                          <div className="text-[10px] text-black/40">{p.mass}</div>
                        </div>
                        <span className="text-black/20 text-xs">→</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Sources */}
                {msg.sources && (
                  <div className="mt-2 flex flex-wrap gap-1">
                    {msg.sources.map((s, k) => (
                      <span key={k} className="text-[10px] text-black/25 bg-black/[0.03] px-2 py-0.5 rounded-md">
                        {s}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}

        {typing && (
          <div className="flex items-center gap-1.5 py-2">
            {[0, 1, 2].map(i => (
              <div
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-black/20 animate-bounce"
                style={{ animationDelay: `${i * 150}ms` }}
              />
            ))}
          </div>
        )}

        <div ref={endRef} />
      </div>

      {/* Input */}
      <div className="px-5 pb-2 pt-2">
        <div className="flex items-center gap-2 bg-white rounded-2xl border border-black/5 px-4 py-2 focus-within:border-[#d4b896]/40 focus-within:shadow-[0_2px_12px_rgba(212,184,150,0.1)] transition-all">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && send(input)}
            placeholder="메시지 입력..."
            className="flex-1 text-sm bg-transparent outline-none placeholder-black/25"
          />
          <button
            onClick={() => send(input)}
            disabled={!input.trim()}
            className="w-8 h-8 rounded-xl bg-[#1a1a1a] text-white flex items-center justify-center text-xs disabled:opacity-20 transition-opacity"
          >
            ↑
          </button>
        </div>
        <p className="text-[9px] text-black/15 text-center mt-1.5">
          교회 공식 문헌 기반 · 사목적 판단을 대체하지 않습니다
        </p>
      </div>
    </div>
  )
}
