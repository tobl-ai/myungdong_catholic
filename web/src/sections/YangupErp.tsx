import { Section, Card, Table } from '../components/Section'

export function YangupErp() {
  return (
    <Section id="yangup" title="6. 양업 ERP 혁신 방안" subtitle="세계 유일 전국 교회 통합 전산망의 다음 단계">
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        {[
          { phase: '단기 6개월', title: 'API Gateway', items: ['통합 인증 API', '교적 조회 API', '교무금 납입 API', '본당 정보 API'] },
          { phase: '중기 1년', title: '통합 신자 서비스', items: ['SSO (굿뉴스+하상+부서)', '신자 대시보드', '개인 축일 푸시 알림', '디지털 증명서 발급'] },
          { phase: '장기 2년', title: '에이전트 연동', items: ['MCP 서버 (인증된 에이전트)', '에이전트 성사 예약', 'AI 사목 분석', '이탈 예측/프로그램 효과'] },
        ].map((p, i) => (
          <Card key={i}>
            <div className="text-gold text-xs font-bold tracking-wider mb-1">{p.phase}</div>
            <h3 className="font-bold text-lg text-primary mb-3">{p.title}</h3>
            <ul className="space-y-2">
              {p.items.map((item, j) => (
                <li key={j} className="text-sm text-muted flex items-start gap-2">
                  <span className="text-gold mt-0.5">→</span> {item}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>

      <Card className="mb-8">
        <h3 className="font-bold text-lg mb-4 text-primary">현재 연동 구조 vs 목표 구조</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-red-50 rounded-xl p-4">
            <div className="text-accent text-xs font-bold mb-2">현재 (단절)</div>
            <div className="text-sm font-mono space-y-1">
              <p>양업 ↔ 하상앱 (연동)</p>
              <p>양업 ↔ 가톨릭페이 (연동)</p>
              <p className="text-accent">양업 ✕ 굿뉴스 (단절)</p>
              <p className="text-accent">양업 ✕ 부서 홈페이지 (단절)</p>
            </div>
          </div>
          <div className="bg-green-50 rounded-xl p-4">
            <div className="text-green-700 text-xs font-bold mb-2">목표 (통합)</div>
            <div className="text-sm font-mono space-y-1">
              <p>양업 ↔ API Gateway ↔ 모든 서비스</p>
              <p className="text-green-700">↔ 굿뉴스 2.0 (통합)</p>
              <p className="text-green-700">↔ 부서 페이지 (통합)</p>
              <p className="text-green-700">↔ AI 에이전트 (MCP)</p>
            </div>
          </div>
        </div>
      </Card>

      <Table
        headers={['하상앱 문제', '개선 방안']}
        rows={[
          ['보급률 0.67%', '굿뉴스 웹앱(PWA)으로 통합, 앱 설치 없이 접근'],
          ['평점 3.6', 'Flutter/React Native 재구축, UX 전면 개선'],
          ['결제 오류', 'Firebase + Stripe 등 검증된 결제 인프라'],
          ['QR 인식 불량', '네이티브 카메라 API 직접 활용'],
          ['AI 부재', '교리 AI, 기도 도우미, 개인화 추천 탑재'],
        ]}
      />
    </Section>
  )
}
