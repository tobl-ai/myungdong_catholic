import { Section, Card } from '../components/Section'

const scenarios = [
  {
    q: '"오늘 미사 독서가 뭐지?"',
    before: 'catholic.or.kr 접속 → 매일미사 클릭 → 해당 날짜 찾기 → 읽기',
    after: '"오늘 미사 독서 알려줘" → 에이전트가 API로 즉시 조회, 음성/텍스트 전달',
  },
  {
    q: '"근처 성당 미사 시간"',
    before: '전국 성당 검색 → 교구 선택 → 성당 찾기 → 미사 시간표 확인',
    after: '"가까운 성당 저녁미사?" → 위치+시간 기반 자동 조회, 캘린더에 추가',
  },
  {
    q: '"견진성사 준비 방법?"',
    before: '가톨릭 교리 메뉴 → 7성사 → 견진 → 읽기',
    after: '교리서 + 본당 프로그램 + 일정을 AI가 종합 안내',
  },
  {
    q: '"이번 주 헌금 5만원"',
    before: '하상앱 → 가톨릭페이 → 충전 → QR 스캔',
    after: '에이전트가 결제 처리 (AP2 프로토콜)',
  },
  {
    q: '강론 준비 (사제)',
    before: '매일미사 + 성서해설 각각 검색 → 수동 종합',
    after: 'RAG 기반 교부 해설 + 한국적 맥락 종합 자료 자동 생성',
  },
]

export function BeforeAfter() {
  return (
    <Section id="before-after" title="4. 에이전트 시대 Before & After" subtitle="사용자 시나리오별 변화" dark>
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
          <h3 className="text-white/40 text-sm tracking-widest uppercase mb-4">2026 이전 (현재)</h3>
          <div className="font-mono text-sm text-white/70 space-y-1">
            <p>[사용자] → 브라우저 → [웹사이트]</p>
            <p className="text-white/40">→ 메뉴 탐색 → 정보 발견</p>
            <p className="mt-4 text-white/50">사람이 직접 웹사이트를 방문하여</p>
            <p className="text-white/50">메뉴를 클릭하며 정보를 탐색</p>
          </div>
        </div>
        <div className="bg-gold/10 rounded-2xl p-6 border border-gold/30">
          <h3 className="text-gold text-sm tracking-widest uppercase mb-4">2027 이후 (에이전트 시대)</h3>
          <div className="font-mono text-sm text-white/90 space-y-1">
            <p>[사용자] → [AI 에이전트] → API/MCP</p>
            <p className="text-gold">→ [데이터] → 즉시 답변</p>
            <p className="mt-4 text-white/70">에이전트가 사용자 대신 정보 수집</p>
            <p className="text-white/70">"오늘 미사 몇 시야?" 한마디면 끝</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {scenarios.map((s, i) => (
          <div key={i} className="bg-white/5 rounded-xl p-5 border border-white/10">
            <div className="text-gold font-bold text-sm mb-3">{s.q}</div>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-white/30 text-xs">BEFORE</span>
                <p className="text-white/50 mt-1">{s.before}</p>
              </div>
              <div>
                <span className="text-gold/70 text-xs">AFTER</span>
                <p className="text-white/90 mt-1">{s.after}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Card className="mt-10 !bg-white/5 !border-white/10">
        <h3 className="text-gold font-bold mb-4">핵심 프로토콜: 에이전트 인프라</h3>
        <div className="grid md:grid-cols-4 gap-4 text-sm">
          {[
            { name: 'MCP', by: 'Anthropic', desc: '에이전트 ↔ 도구 연결' },
            { name: 'A2A', by: 'Google', desc: '에이전트 간 통신' },
            { name: 'AP2', by: 'Google', desc: '에이전트 자율 결제' },
            { name: 'llms.txt', by: '커뮤니티', desc: 'AI에게 사이트 안내' },
          ].map(p => (
            <div key={p.name} className="bg-white/5 rounded-lg p-3">
              <div className="text-gold font-bold">{p.name}</div>
              <div className="text-white/40 text-xs">{p.by}</div>
              <div className="text-white/70 text-xs mt-1">{p.desc}</div>
            </div>
          ))}
        </div>
      </Card>
    </Section>
  )
}
