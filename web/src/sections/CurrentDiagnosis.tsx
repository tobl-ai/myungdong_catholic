import { Section, Card, Table } from '../components/Section'

export function CurrentDiagnosis() {
  return (
    <Section id="diagnosis" title="2. 현행 시스템 진단" subtitle="기술 노후화 수준: 극심 (Critical)">
      <Card className="mb-8 border-accent/30 bg-red-50/50">
        <h3 className="font-bold text-lg mb-4 text-accent">굿뉴스 기술 격차</h3>
        <Table
          headers={['항목', '현재 상태', '업계 표준 (2026)', '격차']}
          rows={[
            ['백엔드', 'Classic ASP (1996)', 'Next.js / Node.js', '30년'],
            ['프론트엔드', 'jQuery + 바닐라 JS', 'React / Vue / Svelte', '15년+'],
            ['레이아웃', '테이블 + 프레임셋', 'Flexbox / Grid + 반응형', '20년+'],
            ['API', 'XML over AJAX', 'REST / GraphQL + JSON', '15년+'],
            ['모바일', '별도 모바일 사이트', '반응형 단일 코드베이스 / PWA', '10년+'],
            ['인증', '쿠키 기반 세션', 'OAuth 2.0 / JWT / Firebase Auth', '10년+'],
            ['호스팅', 'On-Premise (망분리)', 'Cloud (GCP/AWS)', '10년+'],
            ['AI', '없음', 'LLM 통합, RAG, 에이전트', '전무'],
          ]}
        />
      </Card>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card>
          <h3 className="font-bold text-lg mb-4 text-primary">서브도메인 난립 (10개+)</h3>
          <div className="space-y-2 text-sm font-mono">
            {[
              { d: 'www', l: '메인 포털 (프레임 기반)' },
              { d: 'maria', l: '가톨릭정보 콘텐츠' },
              { d: 'news', l: '가톨릭 뉴스' },
              { d: 'member', l: '회원 관리' },
              { d: 'photo', l: '갤러리' },
              { d: 'pds', l: '자료실' },
              { d: 'bbs', l: '게시판' },
              { d: 'club', l: '커뮤니티' },
              { d: 'mail', l: '이메일' },
            ].map(({ d, l }) => (
              <div key={d} className="flex items-center gap-2">
                <span className="text-accent">{d}</span>
                <span className="text-muted">.catholic.or.kr</span>
                <span className="text-xs text-muted ml-auto">{l}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h3 className="font-bold text-lg mb-4 text-primary">하상앱 현황</h3>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="text-center p-3 bg-red-50 rounded-xl">
              <div className="text-accent text-2xl font-bold">0.67%</div>
              <div className="text-xs text-muted">보급률 (4만/600만)</div>
            </div>
            <div className="text-center p-3 bg-red-50 rounded-xl">
              <div className="text-accent text-2xl font-bold">3.6</div>
              <div className="text-xs text-muted">App Store 평점/5.0</div>
            </div>
          </div>
          <div className="text-sm text-muted space-y-1">
            <p>주요 불만: 결제 오류, QR 인식 불량, 로그인 오류</p>
            <p>기능: 매일미사, 성경, 가톨릭페이, 교적 연동</p>
          </div>
        </Card>
      </div>

      <Card>
        <h3 className="font-bold text-lg mb-4 text-primary">부서별 홈페이지 노후화</h3>
        <Table
          headers={['부서', '기술', '디자인', 'HTTPS', '상태']}
          rows={[
            ['청소년국 중고등부', 'jQuery, IE6 레거시', '중상', 'O', '활성'],
            ['청소년국 청년부', 'jQuery, AJAX', '중상', 'O', '활성'],
            ['학교사목부', 'jQuery', '하', '?', '비활성'],
            ['사목국', 'jQuery, ASP', '중하', '?', '중간'],
            ['사회사목국', 'ASP, GIF 네비게이션', '하 (최악)', 'X (HTTP!)', '위험'],
          ]}
        />
      </Card>
    </Section>
  )
}
