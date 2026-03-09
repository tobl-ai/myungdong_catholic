interface Props {
  onClose: () => void
}

const stats = { total: 12, auto: 8, reviewed: 3, pending: 1 }

const auditItems = [
  { time: '18:05', action: '내일 미사 시간을 캘린더에 추가했습니다', category: '전례', status: 'auto' as const, detail: '명동성당 07:00 아침미사 → Google Calendar' },
  { time: '17:30', action: '오늘의 묵상 질문 3개를 생성했습니다', category: '성경', status: 'auto' as const, detail: '"부자 청년" 본문 기반 · 교리서 참조' },
  { time: '12:00', action: '삼종기도 알림을 보냈습니다', category: '기도', status: 'auto' as const, detail: '매일 12:00 자동 발송 (위임됨)' },
  { time: '07:00', action: '오늘의 복음 요약을 전송했습니다', category: '전례', status: 'reviewed' as const, detail: '마르 10,17-27 요약 + AI 해설 · 사용자 확인 완료' },
  { time: '06:30', action: '새 본당 공지사항 3건을 감지했습니다', category: '관리', status: 'pending' as const, detail: '사순 특별 강좌, 성가대 모집, 주보 업데이트' },
  { time: '어제', action: '주간 성경 읽기 리포트를 생성했습니다', category: '성경', status: 'reviewed' as const, detail: '마르코 복음 8-10장 · 진도 78% · 요약 3페이지' },
  { time: '어제', action: '묵주기도 5단 봉헌을 기록했습니다', category: '기도', status: 'auto' as const, detail: '주간 누적 5단 · WYD 2027 릴레이 참여' },
]

const statusStyle = {
  auto: { bg: 'bg-green-50', text: 'text-green-600', label: '자동 처리' },
  reviewed: { bg: 'bg-indigo-50', text: 'text-indigo-600', label: '검토 완료' },
  pending: { bg: 'bg-amber-50', text: 'text-amber-600', label: '확인 필요' },
}

export function Phase2Audit({ onClose }: Props) {
  return (
    <div className="flex flex-col bg-[#f7f7fa] h-full md:h-[calc(100vh-3.5rem)]">
      {/* Header */}
      <div className="px-5 py-3 flex items-center gap-3 border-b border-black/5 shrink-0">
        <button onClick={onClose} className="md:hidden text-black/30 hover:text-black/60 text-sm">←</button>
        <div className="flex-1">
          <span className="text-xs font-medium">◈ 에이전트 활동 로그</span>
          <span className="text-[10px] text-black/25 ml-2">Audit Interface</span>
        </div>
      </div>

      {/* Stats */}
      <div className="px-5 py-3 flex gap-3 border-b border-black/5 shrink-0">
        {[
          { label: '전체', value: stats.total, color: 'text-black/60' },
          { label: '자동 처리', value: stats.auto, color: 'text-green-600' },
          { label: '검토 완료', value: stats.reviewed, color: 'text-indigo-600' },
          { label: '확인 필요', value: stats.pending, color: 'text-amber-600' },
        ].map(s => (
          <div key={s.label} className="text-center flex-1">
            <div className={`text-lg font-semibold ${s.color}`}>{s.value}</div>
            <div className="text-[9px] text-black/30">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Timeline */}
      <div className="flex-1 overflow-y-auto px-5 py-4">
        <div className="space-y-0.5">
          {auditItems.map((item, i) => {
            const style = statusStyle[item.status]
            return (
              <div key={i} className="flex gap-3 py-3 border-b border-black/5 last:border-0">
                <div className="text-[10px] text-black/25 w-10 shrink-0 pt-0.5 text-right">{item.time}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                    <span className={`text-[9px] px-1.5 py-0.5 rounded-full ${style.bg} ${style.text}`}>{style.label}</span>
                    <span className="text-[9px] text-black/15">{item.category}</span>
                  </div>
                  <div className="text-sm text-black/70">{item.action}</div>
                  <div className="text-[10px] text-black/25 mt-0.5">{item.detail}</div>
                  {item.status === 'pending' && (
                    <div className="flex gap-2 mt-2">
                      <button className="text-[10px] text-indigo-600 font-medium bg-indigo-50 px-3 py-1.5 rounded-lg hover:bg-indigo-100 transition-colors">승인</button>
                      <button className="text-[10px] text-black/30 bg-black/5 px-3 py-1.5 rounded-lg hover:bg-black/10 transition-colors">취소</button>
                      <button className="text-[10px] text-black/30 bg-black/5 px-3 py-1.5 rounded-lg hover:bg-black/10 transition-colors">상세</button>
                    </div>
                  )}
                  {item.status === 'auto' && (
                    <button className="text-[10px] text-black/15 mt-1 hover:text-red-400 transition-colors">되돌리기</button>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Footer */}
      <div className="px-5 py-3 border-t border-black/5 shrink-0">
        <p className="text-[9px] text-black/15 text-center">
          에이전트의 모든 자율 행동을 투명하게 기록 · 승인/되돌리기 가능
        </p>
      </div>
    </div>
  )
}
