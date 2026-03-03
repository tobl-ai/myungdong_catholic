import { Section, Card, Table } from '../components/Section'

export function RfpSummary() {
  return (
    <Section id="rfp" title="1. RFP 핵심 요약" subtitle="카를로 프로젝트 컨설팅 제안요청서 분석">
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card>
          <h3 className="font-bold text-lg mb-4 text-primary">프로젝트 개요</h3>
          <dl className="space-y-3 text-sm">
            {[
              ['프로젝트명', '카를로 프로젝트 컨설팅'],
              ['사업명', 'AI시대 가톨릭 교회 정보 시스템 혁신'],
              ['예산', '3억 5천만원 (VAT 포함)'],
              ['기간', '착수일로부터 6개월'],
              ['발주처', '천주교 서울대교구 전산정보실'],
            ].map(([k, v]) => (
              <div key={k} className="flex">
                <dt className="w-24 text-muted shrink-0">{k}</dt>
                <dd className="font-medium">{v}</dd>
              </div>
            ))}
          </dl>
        </Card>
        <Card>
          <h3 className="font-bold text-lg mb-4 text-primary">카를로 아쿠티스</h3>
          <p className="text-sm text-muted leading-relaxed mb-3">
            2025년 9월 시성된 <strong className="text-text">"인터넷의 수호성인"</strong>.
            15세에 선종한 밀레니얼 세대 최초의 성인으로, 교회 웹사이트를 직접 제작하고
            136건의 성체기적을 온라인으로 전시했습니다.
          </p>
          <p className="text-sm text-gold font-medium">
            "카를로가 2000년대에 웹사이트로 했던 것을, 2027년에는 AI 에이전트로 한다."
          </p>
        </Card>
      </div>

      <Card className="mb-8">
        <h3 className="font-bold text-lg mb-4 text-primary">5대 추진 배경</h3>
        <div className="grid md:grid-cols-5 gap-4">
          {[
            { n: '01', t: 'AI 신앙생활', d: 'AI 데이터 마트, 통합검색, 사목지원' },
            { n: '02', t: '시스템 재구축', d: '굿뉴스/부서 홈페이지 노후화 해결' },
            { n: '03', t: '선교 콘텐츠', d: '비신자/예비자용 교리 콘텐츠 확대' },
            { n: '04', t: '양업 연동', d: '통합 로그인, 교적 조회, 교무금' },
            { n: '05', t: 'WYD 2027', d: '세계청년대회 온라인 지원' },
          ].map(({ n, t, d }) => (
            <div key={n} className="text-center p-4 rounded-xl bg-bg">
              <div className="text-gold font-bold text-2xl mb-2">{n}</div>
              <div className="font-bold text-sm mb-1">{t}</div>
              <div className="text-xs text-muted">{d}</div>
            </div>
          ))}
        </div>
      </Card>

      <Table
        headers={['대분류', '중분류', '설명']}
        rows={[
          ['마스터플랜 수립', 'AI기술 / 선교 / 양업 / 그룹웨어 / 굿뉴스', '종합 계획, 단계별 부문별 계획'],
          ['현행 업무분석', '부서 홈페이지 / 업무 프로세스 / 업무 표준화', '개편방안 및 개선방안 도출'],
          ['DB 분석/설계', '양업·그룹웨어·굿뉴스·부서DB / 통합/연동 / 신규설계', 'DB 통합 및 신규 설계'],
          ['정보구조 설계', '정보시스템 / 서버/DB / 시스템 통합', '아키텍처 설계'],
          ['일정 및 예산', '단계별 / 부문별 계획', '구축 및 예산 계획'],
          ['벤치마킹', '국내외 사례 분석', '가톨릭·개신교·공공·민간 디지털 전환 사례'],
        ]}
      />
    </Section>
  )
}
