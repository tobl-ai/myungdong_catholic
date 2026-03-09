import { Card } from '../../components/Section'

const breachCases = [
  { name: 'Stuxnet (2010)', target: '이란 핵시설 (완전 에어갭)', method: 'USB 경유', result: '원심분리기 1,000대 파괴' },
  { name: 'GoldenJackal (2024)', target: '유럽 정부기관 (망분리)', method: 'USB 맞춤 악성코드', result: '이메일·암호키·문서 탈취' },
  { name: 'ScarCruft (2025)', target: '에어갭 시스템', method: 'USB + Zoho C2', result: '북한 해커 감시 체계 구축' },
  { name: '롯데카드 (2025)', target: 'On-Premise 서버', method: '8년 된 CVE 미패치', result: '고객 300만명, 200GB 유출' },
]

const roadmapPhases = [
  {
    phase: 'Phase 1', period: '2024 하반기', title: '규제 샌드박스', color: 'text-blue-400',
    items: [
      '74개 기업, 141건 혁신 금융 서비스 신청',
      '2024.11: 1차 지정 — 신한 AI Banker, KB AI 상담, 카카오뱅크 등 9개사 10건',
      '생성형 AI 기반 금융 서비스 최초 허용',
      '비고객정보 업무(ERP, 협업)에 SaaS 사용 허용',
    ],
  },
  {
    phase: 'Phase 2', period: '2025년', title: '제도화', color: 'text-green-400',
    items: [
      '가명처리된 개인신용정보 R&D 활용 허용',
      '전자금융감독규정 개정으로 샌드박스 성과 제도화',
      '안전성 검증 후 실제 개인신용정보 처리로 확대',
      'KB·신한·하나·우리 4대 은행 M365 + Copilot 도입',
    ],
  },
  {
    phase: 'Phase 3', period: '2026년~', title: '디지털 금융보안법', color: 'text-purple-400',
    items: [
      '규칙 중심 → 원칙 중심 보안 규제로 전환',
      '자율보안체계 + 회복력 강화 + CISO 권한 확대',
      '2026.1: SaaS 망분리 면제 규정 사전입법예고',
      '2026.1.22: AI 기본법 시행 — 국가 AI 생태계 본격 구축',
    ],
  },
]

const countries = [
  { country: '미국', approach: '연성규제 (FFIEC 가이드라인)', note: '기업 자율, 사후 책임' },
  { country: 'EU', approach: 'DORA/NIS2 프레임워크', note: '원칙 중심, 물리 분리 불요' },
  { country: '싱가포르', approach: 'MAS 기술 위험 관리', note: '리스크 기반, 분리 권고만' },
]

export function SecurityMangbunli() {
  return (
    <>
      <Card className="mb-6 !bg-white/5 !border-white/10">
        <h3 className="text-gold font-bold text-lg mb-3">망분리 = 안전? 실증 사례</h3>
        <div className="space-y-3 text-sm text-white/80">
          <p><strong className="text-gold">오해:</strong> "망 분리하면 해킹 불가" → <strong className="text-white">진실:</strong> 세계 최고 수준 망분리도 뚫렸습니다:</p>
          <div className="grid md:grid-cols-2 gap-3 my-3">
            {breachCases.map(c => (
              <div key={c.name} className="bg-white/5 rounded-lg p-3 border border-white/10">
                <div className="text-white font-medium text-xs">{c.name}</div>
                <div className="text-white/40 text-[10px] mt-1">대상: {c.target} | 방법: {c.method}</div>
                <div className="text-red-400 text-[10px]">결과: {c.result}</div>
              </div>
            ))}
          </div>
          <p className="text-white/60 text-xs">
            종교기관도 예외 아님: 루터교 세계연맹(2024.12 랜섬웨어), 세계교회협의회, 미국 메가교회 다수.
            <strong className="text-white"> 종교기관 70%+가 최근 2년 내 사이버 공격 경험.</strong>
          </p>
        </div>
      </Card>

      <Card className="mb-6 !bg-blue-900/20 !border-blue-500/30">
        <h3 className="text-blue-400 font-bold text-lg mb-3">한국 정부 망분리 폐기 로드맵 (2024.8.13 금융위)</h3>
        <p className="text-xs text-white/50 mb-3">배경: 2013년 3.20 사이버테러 이후 18년간 유지된 망분리 정책 전면 재검토</p>
        <div className="space-y-3">
          {roadmapPhases.map(p => (
            <div key={p.phase} className="bg-white/5 rounded-lg p-3 border border-white/10">
              <div className="flex items-center gap-2 mb-2">
                <span className={`${p.color} font-bold text-sm`}>{p.phase}</span>
                <span className="text-white/40 text-xs">{p.period}</span>
                <span className="text-white font-medium text-sm">— {p.title}</span>
              </div>
              <ul className="space-y-1 ml-2">
                {p.items.map((item, i) => (
                  <li key={i} className="flex gap-2 text-xs text-white/70">
                    <span className={p.color}>→</span><span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Card>

      <Card className="mb-6 !bg-white/5 !border-white/10">
        <h3 className="text-gold font-bold text-lg mb-3">한국: 세계 유일의 민간 물리적 망분리 의무 국가</h3>
        <div className="text-sm text-white/80 space-y-3">
          <p>전자금융거래법 제21조 + 전자금융감독규정 제15조. <strong className="text-white">민간 금융사에 물리적 망분리를 법으로 강제하는 국가는 한국뿐</strong>입니다.</p>
          <div className="grid md:grid-cols-3 gap-3">
            {countries.map(c => (
              <div key={c.country} className="bg-white/5 rounded-lg p-3 border border-white/10">
                <div className="text-white font-medium text-sm">{c.country}</div>
                <div className="text-white/50 text-xs mt-1">{c.approach}</div>
                <div className="text-white/40 text-[10px] mt-1">{c.note}</div>
              </div>
            ))}
          </div>
          <p className="text-white/40 text-xs">업계 비판: '갈라파고스 규제'. 실제 공공기관 중 망분리 구현은 <strong className="text-white">11%에 불과.</strong></p>
        </div>
      </Card>

      <Card className="mb-6 !bg-indigo-900/20 !border-indigo-500/30">
        <h3 className="text-indigo-400 font-bold text-lg mb-3">N2SF: 망분리를 대체하는 국가 네트워크 보안 프레임워크</h3>
        <div className="text-sm text-white/80 space-y-3">
          <p>2025.9 국정원 발표. 데이터 중요도 기반 <strong className="text-white">차등 보안</strong>으로 전환:</p>
          <div className="grid md:grid-cols-3 gap-3">
            {[
              { grade: 'C (기밀)', desc: '국가비밀·안보', cloud: '클라우드 불가', color: 'text-red-400', border: 'border-red-500/30' },
              { grade: 'S (민감)', desc: '개인정보·내부 문서', cloud: '조건부 허용 (CSAP 인증)', color: 'text-yellow-400', border: 'border-yellow-500/30' },
              { grade: 'O (공개)', desc: '공개 데이터·일반 업무', cloud: 'AI·클라우드 자유 활용', color: 'text-green-400', border: 'border-green-500/30' },
            ].map(g => (
              <div key={g.grade} className={`bg-white/5 rounded-lg p-3 border ${g.border}`}>
                <div className={`${g.color} font-bold text-sm`}>{g.grade}</div>
                <div className="text-white/50 text-xs mt-1">{g.desc}</div>
                <div className="text-white/40 text-[10px] mt-1">{g.cloud}</div>
              </div>
            ))}
          </div>
          <p className="text-indigo-300 text-xs">
            천주교 정보시스템(굿뉴스 등) → O(공개) 등급: 클라우드·AI 제한 없음. 590만 신자 개인정보 → S(민감): CSAP 인증 클라우드(GCP) 사용 가능.
          </p>
        </div>
      </Card>
    </>
  )
}
