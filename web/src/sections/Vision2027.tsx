import { Section, Card } from '../components/Section'

const services = [
  { icon: '📖', name: '성경', desc: '다중 번역, 비교, 오디오, AI 해설' },
  { icon: '⛪', name: '매일미사', desc: '텍스트+오디오+영상, 전례력 연동' },
  { icon: '🙏', name: '기도', desc: '성무일도, 묵주기도, 개인기도 트래커' },
  { icon: '😇', name: '성인', desc: '검색, 축일 알림, AI 스토리텔링' },
  { icon: '📚', name: '교리교육', desc: 'AI 튜터, 레벨별 학습 경로' },
  { icon: '💬', name: '커뮤니티', desc: '게시판, Q&A, 나눔' },
  { icon: '📰', name: '뉴스', desc: 'AI 요약, 개인화 피드' },
  { icon: '🏠', name: '본당 정보', desc: '검색, 미사시간, 행사' },
  { icon: '✨', name: '성사 안내', desc: '준비 가이드, 일정' },
  { icon: '🎵', name: '미디어', desc: '성가, 강론, 동영상' },
  { icon: '🌍', name: 'WYD 2027', desc: '묵주기도 카운터, 등록' },
  { icon: '🤖', name: 'AI 에이전트', desc: 'MCP 서버, llms.txt, API' },
]

const aiFeatures = [
  { name: '가톨릭 교리 AI (RAG)', desc: '교리서·교황 문헌·성경 27,000건+ 기반 질의응답. 항상 출처 명시.' },
  { name: 'AI 전례력 비서', desc: '개인 성인 축일, 본당 행사, 전례 시기별 맞춤 푸시 알림' },
  { name: '성경 읽기 AI 코치', desc: '읽기 계획, 진도 추적, 묵상 질문 자동 생성' },
  { name: '교리 학습 경로', desc: '예비자/초신자/심화 레벨별 AI 맞춤 커리큘럼' },
  { name: '강론 준비 AI (사제용)', desc: '전례 독서 + 해설 + 시의적 주제 종합 자료 생성' },
  { name: '본당 행정 AI', desc: '공지 작성, 주보 생성, 행사 관리 자동화' },
]

export function Vision2027() {
  return (
    <Section id="vision" title="5. 2027년형 굿뉴스 비전" subtitle="API-First · AI-Native · Agent-Ready">
      <div className="grid md:grid-cols-4 gap-3 mb-10">
        {['API-First', 'AI-Native', 'Agent-Ready', '신자 생애주기'].map((p, i) => (
          <div key={i} className="bg-primary text-white rounded-xl p-4 text-center">
            <div className="text-gold font-bold text-lg">{p}</div>
          </div>
        ))}
      </div>

      <Card className="mb-8">
        <h3 className="font-bold text-lg mb-4 text-primary">통합 서비스 구조 (단일 Next.js 앱)</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {services.map(s => (
            <div key={s.name} className="bg-bg rounded-xl p-3 text-center">
              <div className="text-2xl mb-1">{s.icon}</div>
              <div className="font-bold text-sm">{s.name}</div>
              <div className="text-xs text-muted mt-1">{s.desc}</div>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <h3 className="font-bold text-lg mb-4 text-primary">AI 기능 상세</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {aiFeatures.map(f => (
            <div key={f.name} className="bg-bg rounded-xl p-4">
              <div className="font-bold text-sm text-primary mb-1">{f.name}</div>
              <div className="text-xs text-muted">{f.desc}</div>
            </div>
          ))}
        </div>
      </Card>

      {/* Phase 1 Mockup Links */}
      <h3 className="font-bold text-lg mt-10 mb-4 text-primary">Phase 1 · 기본 목업</h3>
      <div className="grid md:grid-cols-3 gap-4">
        <a
          href="#/renewal"
          className="block bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-6 text-white hover:shadow-xl transition-shadow group"
        >
          <div className="text-xs tracking-wider mb-2 font-medium text-blue-200">웹 리뉴얼</div>
          <h3 className="text-lg font-bold mb-2 group-hover:text-blue-200 transition-colors">
            모던 웹사이트 →
          </h3>
          <p className="text-white/50 text-xs">
            전통적 웹 구조 + 반응형 + 현대적 디자인. 즉시 이해 가능한 UX.
          </p>
        </a>
        <a
          href="#/mockup"
          className="block bg-gradient-to-r from-primary to-primary-light rounded-2xl p-6 text-white hover:shadow-xl transition-shadow group"
        >
          <div className="text-gold text-xs tracking-wider mb-2 font-medium">에이전트 UX</div>
          <h3 className="text-lg font-bold mb-2 group-hover:text-gold transition-colors">
            AI 중심 인터페이스 →
          </h3>
          <p className="text-white/50 text-xs">
            AI가 곧 인터페이스. 하나의 입력창이 모든 것을 해결.
          </p>
        </a>
        <a
          href="#/agent"
          className="block bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 text-white hover:shadow-xl transition-shadow group border border-white/10"
        >
          <div className="text-blue-400 text-xs tracking-wider mb-2 font-medium">네이티브 AI</div>
          <h3 className="text-lg font-bold mb-2 group-hover:text-blue-400 transition-colors">
            내 폰의 AI 에이전트 →
          </h3>
          <p className="text-white/50 text-xs">
            앱 불필요. 내 AI가 MCP/A2A로 굿뉴스에 직접 접속.
          </p>
        </a>
      </div>

      {/* Phase 2 Link */}
      <h3 className="font-bold text-lg mt-8 mb-4 text-primary">Phase 2 · 차세대 에이전트 UX</h3>
      <a
        href="#/p2"
        className="block bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-700 rounded-2xl p-6 md:p-8 text-white hover:shadow-2xl hover:shadow-indigo-500/20 transition-all group"
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="text-indigo-200 text-xs tracking-wider mb-2 font-medium">PHASE 2 · AGENTIC UX</div>
            <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-indigo-200 transition-colors">
              차세대 에이전트 인터페이스 →
            </h3>
            <p className="text-white/50 text-sm max-w-lg">
              Generative UI, Autonomy Dial, Audit Interface, Intent Preview,
              Confidence Signal, Escalation Pathway, Delegative UI, Anticipatory Design
            </p>
          </div>
          <div className="flex flex-wrap gap-2 md:max-w-[200px]">
            {['Generative UI', 'Autonomy Dial', 'Audit Log', 'Confidence', 'Delegation', 'Escalation'].map(tag => (
              <span key={tag} className="text-[9px] bg-white/10 px-2 py-1 rounded-md text-white/60">{tag}</span>
            ))}
          </div>
        </div>
      </a>
    </Section>
  )
}
