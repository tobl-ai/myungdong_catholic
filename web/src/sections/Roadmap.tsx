import { Section, Card, Table } from '../components/Section'

const phases = [
  {
    period: '2026 H2 (4개월)',
    title: 'Phase 1: 기반 구축',
    items: ['클라우드 전환 (GCP 서울)', 'DB 설계 및 마이그레이션', 'Firebase + Next.js 보일러플레이트', 'CI/CD 파이프라인'],
    budget: '8,400만원',
    color: 'border-blue-400',
  },
  {
    period: '2027 H1 (3개월)',
    title: 'Phase 2: 서비스 런칭',
    items: ['굿뉴스 2.0 런칭', '부서 통합', '양업 API 연동', 'WYD 2027 지원'],
    budget: '5,600만원',
    color: 'border-green-400',
  },
  {
    period: '2027 H2 (3개월)',
    title: 'Phase 3: AI/에이전트',
    items: ['AI 교리 RAG', 'MCP 서버', '에이전트 대응', '개인화 서비스'],
    budget: '5,300만원',
    color: 'border-gold',
  },
  {
    period: '2028+',
    title: 'Phase 4: 확장/고도화',
    items: ['전국 교구 확대', '글로벌 다국어', 'AI 고도화', '에이전트 생태계'],
    budget: '지속',
    color: 'border-purple-400',
  },
]

export function Roadmap() {
  return (
    <Section id="roadmap" title="10. 단계별 로드맵" subtitle="총 약 1.9억원, 7개월 (AI 초효율 기준)">
      <div className="grid md:grid-cols-4 gap-4 mb-8">
        {phases.map((p, i) => (
          <Card key={i} className={`border-l-4 ${p.color}`}>
            <div className="text-xs text-muted mb-1">{p.period}</div>
            <h3 className="font-bold text-primary mb-3">{p.title}</h3>
            <ul className="space-y-2 mb-4">
              {p.items.map((item, j) => (
                <li key={j} className="text-sm text-muted flex gap-2">
                  <span className="text-gold">→</span> {item}
                </li>
              ))}
            </ul>
            <div className="text-gold font-bold text-sm">{p.budget}</div>
          </Card>
        ))}
      </div>

      <Card className="mb-8">
        <h3 className="font-bold text-lg mb-4 text-primary">전통 vs AI 구축 방식 비교</h3>
        <Table
          headers={['항목', '전통 (10인 팀)', 'AI (2-3인 + Claude Code)', '절감률']}
          rows={[
            ['개발 기간', '18-24개월', '7개월', '60%'],
            ['개발 인력', 'PM+아키텍트+개발6+QA', '풀스택 2-3인', '70%'],
            ['총 비용', '15-25억원', '2-3억원', '85%'],
            ['월 운영비', '1,350만원+', '200-400만원', '75%'],
            ['AI 역량', '별도 AI팀 필요', 'Claude Code로 직접 구현', '-'],
            ['확장성', '서버 증설 필요', '자동 스케일링', '-'],
          ]}
        />
      </Card>

      <Card className="bg-primary text-white !border-0">
        <h3 className="font-bold text-lg mb-4 text-gold">WYD 2027 서울 디지털 전략</h3>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div>
            <div className="text-gold font-bold mb-2">행사 정보</div>
            <p className="text-white/70">2027.8.3-8 (본행사)</p>
            <p className="text-white/70">예상 참가자 50-70만명</p>
            <p className="text-white/70">아시아 2번째 WYD</p>
          </div>
          <div>
            <div className="text-gold font-bold mb-2">디지털 지원</div>
            <p className="text-white/70">묵주기도 실시간 카운터</p>
            <p className="text-white/70">다국어 AI 통번역</p>
            <p className="text-white/70">참가자 가이드/스트리밍</p>
          </div>
          <div>
            <div className="text-gold font-bold mb-2">현재 진행</div>
            <p className="text-white/70">묵주기도 3.5억/10억단 (35.2%)</p>
            <p className="text-white/70">서울대교구 2.4억단 선두</p>
            <p className="text-white/70">752일 경과</p>
          </div>
        </div>
      </Card>
    </Section>
  )
}
