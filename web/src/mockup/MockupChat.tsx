import { useState } from 'react'

const sampleConversation = [
  {
    role: 'user' as const,
    text: '세례를 받고 싶은데 어떻게 준비하면 되나요?',
  },
  {
    role: 'ai' as const,
    text: '세례 준비 과정을 안내해 드리겠습니다.\n\n**1단계: 본당 방문**\n가까운 본당을 방문하여 예비신자 교리반에 등록합니다. 보통 매년 3월과 9월에 시작됩니다.\n\n**2단계: 예비신자 교리 (6개월)**\n• 주 1회 교리 수업 참석\n• 천주교 교리서 학습\n• 미사 참례 시작\n\n**3단계: 세례식**\n부활 성야 (4월) 또는 성탄 (12월)에 세례를 받습니다.\n\n현재 위치 기준 가장 가까운 본당은 **명동성당** (도보 5분)이며, 예비신자 교리반은 **매주 수요일 19:30**에 진행됩니다.',
    sources: ['가톨릭 교리서 §1229-1245', '서울대교구 예비신자 안내', '명동성당 공지'],
  },
  {
    role: 'user' as const,
    text: '교리 수업에서는 구체적으로 뭘 배우나요?',
  },
  {
    role: 'ai' as const,
    text: '예비신자 교리 과정의 주요 내용입니다:\n\n📖 **신앙의 기초** (1-4주)\n천주 존재, 삼위일체, 창조론\n\n✝️ **예수 그리스도** (5-8주)\n강생, 수난, 부활, 승천\n\n⛪ **교회와 성사** (9-16주)\n7성사, 교회의 역할, 전례\n\n🙏 **기도와 윤리** (17-24주)\n주님의 기도, 십계명, 양심 성찰\n\n각 본당마다 약간의 차이가 있으며, 대부분 **영상 교리**와 **소그룹 나눔**을 병행합니다.',
    sources: ['예비신자 교리 표준 교안 (2025)', '서울대교구 사목 지침'],
  },
]

export function MockupChat({ base: _base }: { base: string }) {
  const [input, setInput] = useState('')
  const [showSources, setShowSources] = useState<number | null>(null)

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-xl font-bold text-[#1B2A4A]">AI 교리 상담</h2>
          <p className="text-sm text-gray-400 mt-1">27,000건 교회 문헌 기반 · Gemini 2.5 Pro</p>
        </div>
        <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">● 온라인</span>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        {/* Chat Messages */}
        <div className="p-6 space-y-6 max-h-[600px] overflow-y-auto">
          {sampleConversation.map((msg, i) => (
            <div key={i} className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : ''}`}>
              {msg.role === 'ai' && (
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#C5A572] to-amber-600 flex items-center justify-center text-white text-xs font-bold shrink-0">
                  AI
                </div>
              )}
              <div className={`max-w-[80%] ${msg.role === 'user' ? 'bg-[#1B2A4A] text-white rounded-2xl rounded-tr-md px-5 py-3' : ''}`}>
                {msg.role === 'ai' ? (
                  <div className="bg-gray-50 rounded-2xl rounded-tl-md px-5 py-4">
                    <div className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                      {msg.text.split(/(\*\*.*?\*\*)/g).map((part, j) =>
                        part.startsWith('**') && part.endsWith('**')
                          ? <strong key={j} className="text-[#1B2A4A]">{part.slice(2, -2)}</strong>
                          : <span key={j}>{part}</span>
                      )}
                    </div>
                    {msg.sources && (
                      <div className="mt-3 pt-3 border-t border-gray-200">
                        <button
                          onClick={() => setShowSources(showSources === i ? null : i)}
                          className="text-xs text-[#C5A572] hover:underline"
                        >
                          출처 {msg.sources.length}건 {showSources === i ? '▲' : '▼'}
                        </button>
                        {showSources === i && (
                          <div className="mt-2 space-y-1">
                            {msg.sources.map((s, k) => (
                              <div key={k} className="text-xs text-gray-400 flex items-center gap-1">
                                <span className="text-[#C5A572]">📄</span> {s}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <p className="text-sm">{msg.text}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="border-t border-gray-100 p-4">
          <div className="flex items-center gap-3">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="교리, 성경, 기도에 대해 물어보세요..."
              className="flex-1 bg-gray-50 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#C5A572]/30"
            />
            <button className="bg-[#1B2A4A] text-white p-3 rounded-xl hover:bg-[#2d4a7a] transition-colors">
              <span className="text-sm">↑</span>
            </button>
          </div>
          <p className="text-[10px] text-gray-300 mt-2 text-center">
            AI 응답은 교회 공식 문헌에 기반하며, 사목적 판단을 대체하지 않습니다.
          </p>
        </div>
      </div>
    </section>
  )
}
