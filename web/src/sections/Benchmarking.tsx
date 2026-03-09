import { Section, Card, Table } from '../components/Section'

export function Benchmarking() {
  return (
    <Section id="benchmark" title="8. 해외 벤치마킹" subtitle="글로벌 가톨릭 디지털 선교 사례">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {[
          {
            name: 'Hallow',
            type: '기도/명상 앱',
            users: '월 100만+ DL',
            highlight: '투자 $157M',
            desc: '10,000+ 음성 가이드, 슈퍼볼 광고 $8M. 가톨릭 앱의 상업적 성공 모델.',
            color: 'bg-purple-50 border-purple-200',
          },
          {
            name: 'Laudate',
            type: '종합 가톨릭 앱',
            users: '100만+ DL',
            highlight: '완전 무료',
            desc: '매일미사, 성경, 교리서, 묵주기도. 16개 언어. 굿뉴스와 가장 유사한 포지션.',
            color: 'bg-blue-50 border-blue-200',
          },
          {
            name: 'Magisterium AI',
            type: 'AI 교리 챗봇',
            users: '월 10만 (165개국)',
            highlight: '교황 격려 서한',
            desc: '27,000건 문헌 기반 RAG. 굿뉴스 AI의 직접 모델.',
            color: 'bg-green-50 border-green-200',
          },
          {
            name: 'Vatican.va',
            type: '교황청 웹사이트',
            users: '-',
            highlight: '30년만에 리뉴얼',
            desc: '2025.05 전면 개편. 9개 언어, 현대적 디자인. Magisterium 원클릭 접근.',
            color: 'bg-yellow-50 border-yellow-200',
          },
          {
            name: 'Vatican App',
            type: '바티칸 공식 앱',
            users: '-',
            highlight: '카를로 아쿠티스 봉헌',
            desc: '2026.01 출시. 오늘의 성인, 뉴스, 동영상. 카를로 프로젝트의 영감.',
            color: 'bg-orange-50 border-orange-200',
          },
          {
            name: 'Pope Connect',
            type: '교황 연결 앱',
            users: '-',
            highlight: '실시간 스트리밍',
            desc: '매일 묵상, 전례 라이브, 글로벌 기도 벽, 바티칸 전문가 Q&A.',
            color: 'bg-pink-50 border-pink-200',
          },
        ].map(b => (
          <Card key={b.name} className={`${b.color}`}>
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-bold text-primary">{b.name}</h3>
              <span className="text-xs bg-gold/20 text-gold px-2 py-0.5 rounded-full">{b.highlight}</span>
            </div>
            <div className="text-xs text-muted mb-2">{b.type} · {b.users}</div>
            <p className="text-sm text-text">{b.desc}</p>
          </Card>
        ))}
      </div>

      <Card>
        <h3 className="font-bold text-lg mb-4 text-primary">핵심 시사점</h3>
        <Table
          headers={['사례', '시사점', '굿뉴스 적용']}
          rows={[
            ['Magisterium AI', '교리 문헌 RAG로 165개국 서비스', '한국 교리서+성경 기반 AI 구축'],
            ['Hallow', '오디오 콘텐츠 품질이 핵심 경쟁력', '매일미사/성가 오디오 고도화'],
            ['USCCB "오프램프"', '디지털→실제 공동체 연결이 과제', '양업시스템 연동으로 구현'],
            ['Vatican 리뉴얼', '30년 만의 전면 개편', '굿뉴스 30주년 리뉴얼 시의적절'],
          ]}
        />
      </Card>
    </Section>
  )
}
