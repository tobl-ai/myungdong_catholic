import { Section, Card, Table } from '../components/Section'

export function TechStack() {
  return (
    <Section id="tech" title="8. AI 초효율 구축 전략" subtitle="Firebase + Next.js + Claude Code = 85% 비용 절감">
      <Card className="mb-8">
        <h3 className="font-bold text-lg mb-4 text-primary">추천 기술 스택</h3>
        <Table
          headers={['레이어', '기술', '선택 이유']}
          rows={[
            ['프론트엔드', 'Next.js 15 (App Router)', 'SSR/ISR, SEO, React 생태계'],
            ['UI', 'Tailwind CSS + Headless UI', '빠른 개발, 커스텀 테마'],
            ['백엔드', 'Firebase (Firestore, Auth, Functions)', '서버리스, 자동 스케일링, 보안 내장'],
            ['AI (일반)', 'Gemini 2.5 Flash', '한국어 우수, 비용 효율, Google Cloud 네이티브'],
            ['AI (추론)', 'Gemini 2.5 Pro', '복잡한 교리 질의, 사목 분석'],
            ['벡터 DB', 'Pinecone / Vertex AI Vector Search', 'RAG용 임베딩 저장/검색'],
            ['개발 도구', 'Claude Code', 'AI 페어 프로그래밍, 5-10배 생산성'],
            ['호스팅', 'Vercel + GCP', 'Next.js 최적, 글로벌 CDN'],
          ]}
        />
      </Card>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-green-200 bg-green-50/30">
          <h3 className="font-bold text-lg mb-4 text-green-800">AI 방식 (2-3인 + Claude Code)</h3>
          <div className="space-y-3">
            {[
              { l: '개발 기간', v: '7개월' },
              { l: '인력', v: '풀스택 2-3인' },
              { l: '총 비용', v: '2-3억원' },
              { l: '월 운영비', v: '200-400만원' },
            ].map(({ l, v }) => (
              <div key={l} className="flex justify-between text-sm">
                <span className="text-muted">{l}</span>
                <span className="font-bold text-green-800">{v}</span>
              </div>
            ))}
          </div>
        </Card>
        <Card className="border-red-200 bg-red-50/30">
          <h3 className="font-bold text-lg mb-4 text-accent">전통 방식 (10인 팀)</h3>
          <div className="space-y-3">
            {[
              { l: '개발 기간', v: '18-24개월' },
              { l: '인력', v: 'PM 1, 아키텍트 1, 개발 6, QA 1' },
              { l: '총 비용', v: '15-25억원' },
              { l: '월 운영비', v: '1,350만원+' },
            ].map(({ l, v }) => (
              <div key={l} className="flex justify-between text-sm">
                <span className="text-muted">{l}</span>
                <span className="font-bold text-accent">{v}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card>
        <h3 className="font-bold text-lg mb-4 text-primary">월간 운영 비용 비교</h3>
        <Table
          headers={['항목', 'On-Premise (현재)', 'Cloud (신규)']}
          rows={[
            ['서버/인프라', '200만원+ (유지보수)', '50-150만원 (Firebase)'],
            ['전력/냉각', '50만원+', '0원 (포함)'],
            ['인력', '1,000만원+ (전담)', '0원 (개발팀이 겸임)'],
            ['소프트웨어', '100만원+ (라이선스)', '20-50만원 (Vercel)'],
            ['AI', '불가능', '30-100만원 (Gemini API)'],
            ['합계', '1,350만원+', '130-370만원'],
          ]}
        />
        <p className="text-sm text-gold font-medium mt-4 text-center">
          클라우드 전환 시 운영비 70-90% 절감
        </p>
      </Card>
    </Section>
  )
}
