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
    <Section id="vision" title="4. 2027년형 굿뉴스 비전" subtitle="API-First · AI-Native · Agent-Ready">
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
    </Section>
  )
}
