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

      <Card className="mt-8 border-red-300 bg-red-50/30">
        <h3 className="font-bold text-lg mb-4 text-accent">왜 기술 노후화가 위험한가?</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              t: '보안 패치 불가',
              d: 'Classic ASP는 2002년 개발 중단. 새로운 취약점이 발견되어도 Microsoft가 패치하지 않음. SQL Injection, XSS에 무방비.',
              i: '🔓',
            },
            {
              t: '개발자 구인 불가',
              d: '2026년 기준 Classic ASP 개발자를 구하는 것은 거의 불가능. 기존 담당자 퇴직 시 유지보수 자체가 중단될 위험.',
              i: '👤',
            },
            {
              t: '모바일 UX 파편화',
              d: '일부 반응형 지원이 있으나, 10개+ 서브도메인 간 UX 불일치. Classic ASP 기반이라 PWA, 푸시 알림 등 현대 모바일 기능 구현 불가.',
              i: '📱',
            },
            {
              t: 'AI 에이전트 시대 대응 불가',
              d: 'MCP, A2A 등 에이전트 프로토콜 연동 불가. 경쟁 서비스(Hallow, Magisterium AI)에 신자를 빼앗길 위험.',
              i: '🤖',
            },
            {
              t: '법적 리스크',
              d: '개인정보보호법 안전성 확보조치 기준 미충족. 신앙정보는 민감정보로 암호화 의무 위반 시 과징금 최대 매출 3%.',
              i: '⚖️',
            },
            {
              t: 'WYD 2027 대응 불가',
              d: '50-70만 글로벌 참가자에게 다국어 서비스 제공 불가. 한국 교회의 디지털 역량을 세계에 보여줄 기회를 놓침.',
              i: '🌏',
            },
          ].map(item => (
            <div key={item.t} className="flex gap-3">
              <span className="text-2xl shrink-0">{item.i}</span>
              <div>
                <div className="font-bold text-sm text-primary">{item.t}</div>
                <p className="text-xs text-muted mt-1">{item.d}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="mt-8 border-orange-300 bg-orange-50/30">
        <h3 className="font-bold text-lg mb-4 text-orange-800">HTTP(비암호화) 사이트의 위험</h3>
        <p className="text-sm text-muted mb-4">
          사회사목국 등 일부 사이트가 <strong className="text-accent">HTTPS 미적용</strong> 상태로 운영 중입니다.
          HTTP는 모든 데이터를 평문(plaintext)으로 전송합니다.
        </p>
        <div className="grid md:grid-cols-2 gap-3 mb-4">
          {[
            {
              t: '비밀번호·개인정보 도청',
              d: '로그인 비밀번호, 교적 정보가 평문으로 전송. 같은 Wi-Fi 네트워크의 누구나 Wireshark 등으로 패킷 캡처·열람 가능.',
            },
            {
              t: '중간자 공격 (MITM)',
              d: '해커가 서버와 사용자 사이에서 데이터를 가로채거나 변조 가능. 가짜 응답을 삽입하여 악성코드를 배포할 수 있음.',
            },
            {
              t: '브라우저 "안전하지 않음" 경고',
              d: 'Chrome/Safari가 주소창에 "주의 요함" 경고를 표시. 교회 공식 사이트의 신뢰도를 심각하게 훼손.',
            },
            {
              t: '최신 웹 기능 사용 불가',
              d: 'HTTPS 필수 API: 위치 정보(본당 찾기), 카메라, 푸시 알림, PWA(앱 설치). HTTP에서는 전부 차단.',
            },
            {
              t: 'Google 검색 순위 하락',
              d: 'Google은 2014년부터 HTTPS를 검색 순위 요소로 반영. HTTP 사이트는 검색 결과에서 밀려 교회 접근성 저하.',
            },
            {
              t: '개인정보보호법 위반',
              d: '제29조: 개인정보의 안전한 전송을 위한 암호화 의무. 신앙정보(민감정보) 미암호화 전송은 법 위반.',
            },
          ].map(item => (
            <div key={item.t} className="bg-white/60 rounded-lg p-3">
              <div className="font-bold text-sm text-orange-800">{item.t}</div>
              <p className="text-xs text-muted mt-1">{item.d}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-3 p-3 bg-green-50 border border-green-200 rounded-lg">
          <span className="text-green-600 text-xl">✓</span>
          <p className="text-sm text-green-800">
            <strong>해결 비용: 0원.</strong> Let's Encrypt 무료 SSL 인증서로 즉시 적용 가능.
            미적용은 보안 의식·관리 체계 부재의 증거.
          </p>
        </div>
      </Card>
    </Section>
  )
}
