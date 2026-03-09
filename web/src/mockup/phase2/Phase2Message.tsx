export interface P2Message {
  role: 'user' | 'ai'
  content: string
  confidence?: number
  sources?: string[]
  intentPreview?: { description: string; actions: string[] }
  escalation?: { reason: string; target: string; targetDesc: string }
  generatedUI?: { type: string; data: Record<string, string> }
}

function Bold({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\*\*.*?\*\*)/g).map((part, j) =>
        part.startsWith('**') && part.endsWith('**')
          ? <strong key={j} className="text-[#1a1a1a] font-semibold">{part.slice(2, -2)}</strong>
          : <span key={j}>{part}</span>
      )}
    </>
  )
}

function ConfidenceBar({ value }: { value: number }) {
  const color = value >= 90 ? 'bg-green-500' : value >= 70 ? 'bg-amber-500' : 'bg-orange-500'
  const label = value >= 90 ? '높음' : value >= 70 ? '보통' : '낮음'
  return (
    <div className="flex items-center gap-2 mb-1.5">
      <div className="w-10 h-1 rounded-full bg-black/5 overflow-hidden">
        <div className={`h-full rounded-full ${color}`} style={{ width: `${value}%` }} />
      </div>
      <span className="text-[9px] text-black/25">{value}% · {label}</span>
    </div>
  )
}

export function Phase2Message({ msg }: { msg: P2Message }) {
  if (msg.role === 'user') {
    return (
      <div className="flex justify-end">
        <div className="bg-indigo-600 text-white text-sm px-4 py-2.5 rounded-2xl rounded-tr-md max-w-[85%]">{msg.content}</div>
      </div>
    )
  }

  return (
    <div className="max-w-[95%]">
      {/* Confidence Signal */}
      {msg.confidence !== undefined && <ConfidenceBar value={msg.confidence} />}

      {/* Content */}
      <div className="text-sm text-black/70 leading-relaxed whitespace-pre-line">
        <Bold text={msg.content} />
      </div>

      {/* Intent Preview */}
      {msg.intentPreview && (
        <div className="mt-3 bg-indigo-50 rounded-xl p-4 border border-indigo-200/50">
          <div className="text-[10px] text-indigo-600 font-medium mb-2">📋 실행 계획 미리보기</div>
          <div className="text-xs text-black/60 mb-3">{msg.intentPreview.description}</div>
          <div className="space-y-1.5 mb-3">
            {msg.intentPreview.actions.map((a, k) => (
              <div key={k} className="flex items-start gap-2 text-[11px] text-black/40">
                <span className="text-indigo-400 shrink-0">{k + 1}.</span>
                <span>{a}</span>
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            <button className="flex-1 py-2 bg-indigo-600 text-white text-xs rounded-lg font-medium hover:bg-indigo-700 transition-colors">승인</button>
            <button className="flex-1 py-2 bg-white text-black/40 text-xs rounded-lg border border-black/10 hover:border-indigo-200 transition-colors">수정</button>
          </div>
        </div>
      )}

      {/* Escalation Pathway */}
      {msg.escalation && (
        <div className="mt-3 bg-amber-50 rounded-xl p-4 border border-amber-200/50">
          <div className="text-[10px] text-amber-700 font-medium mb-1">⚠ 전문가 상담 권장</div>
          <div className="text-xs text-black/50 mb-2">{msg.escalation.reason}</div>
          <div className="bg-white rounded-lg p-3 flex items-center gap-3 border border-amber-100">
            <span className="text-lg">🧑‍🦱</span>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-medium">{msg.escalation.target}와 상담</div>
              <div className="text-[10px] text-black/30 truncate">{msg.escalation.targetDesc}</div>
            </div>
            <button className="text-[10px] text-amber-700 font-medium shrink-0">연결 →</button>
          </div>
        </div>
      )}

      {/* Generative UI - Prayer Timer */}
      {msg.generatedUI?.type === 'prayer-timer' && (
        <div className="mt-3 bg-gradient-to-br from-violet-50 to-indigo-50 rounded-xl p-4 border border-violet-200/50">
          <div className="text-[9px] text-indigo-400 mb-2 tracking-wider uppercase">✦ Generated UI</div>
          <div className="flex items-center justify-between mb-3">
            <div className="text-sm font-medium text-violet-900">{msg.generatedUI.data.name}</div>
            <span className="text-[10px] text-violet-500">{msg.generatedUI.data.duration}</span>
          </div>
          <div className="text-[10px] text-black/30 mb-3">{msg.generatedUI.data.parts}</div>
          <button className="w-full py-2.5 bg-violet-600 text-white text-xs rounded-lg font-medium hover:bg-violet-700 transition-colors">▶ 기도 시작</button>
        </div>
      )}

      {/* Generative UI - Prayer Counter */}
      {msg.generatedUI?.type === 'prayer-counter' && (
        <div className="mt-3 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-200/50">
          <div className="text-[9px] text-purple-400 mb-2 tracking-wider uppercase">✦ Generated UI</div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-purple-700 text-xs font-medium">WYD 2027 묵주기도</span>
            <span className="text-purple-700 text-xs">{msg.generatedUI.data.pct}%</span>
          </div>
          <div className="h-1.5 bg-white/60 rounded-full overflow-hidden mb-2">
            <div className="h-full bg-purple-500 rounded-full" style={{ width: `${msg.generatedUI.data.pct}%` }} />
          </div>
          <div className="flex justify-between text-[10px] text-black/30">
            <span>오늘 {msg.generatedUI.data.today}단 · 이번 주 {msg.generatedUI.data.weekly}단</span>
            <span>전체 {msg.generatedUI.data.total}단</span>
          </div>
        </div>
      )}

      {/* Sources */}
      {msg.sources && (
        <div className="mt-2 flex flex-wrap gap-1">
          {msg.sources.map((s, k) => (
            <span key={k} className="text-[10px] text-black/20 bg-black/[0.03] px-2 py-0.5 rounded-md">{s}</span>
          ))}
        </div>
      )}
    </div>
  )
}
