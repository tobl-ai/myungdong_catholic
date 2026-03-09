import { Card } from '../../components/Section'

const DimRow = ({ cells }: { cells: string[] }) => (
  <tr className="border-b border-white/5">
    {cells.map((cell, j) => (
      <td key={j} className={`py-1.5 px-2 ${j === 0 ? 'text-left font-medium text-white/80' : 'text-center'} ${
        cell === 'Google' || cell === 'Google (자동)' || cell === '불필요' || cell.includes('자동') ? 'text-green-400' :
        cell === '고객' || cell.startsWith('고객 ') || cell.startsWith('직접') ? 'text-red-400/80' : 'text-white/70'
      }`}>{cell}</td>
    ))}
  </tr>
)

const TotalRow = ({ cells, bold }: { cells: string[]; bold?: boolean }) => (
  <tr className={`${bold ? 'border-t-2 border-white/20' : 'border-t border-white/10'} font-bold`}>
    <td className="py-2 px-2 text-white">{cells[0]}</td>
    <td className="py-2 px-2 text-center text-red-400">{cells[1]}</td>
    <td className="py-2 px-2 text-center text-blue-400">{cells[2]}</td>
    <td className="py-2 px-2 text-center text-green-400">{cells[3]}</td>
  </tr>
)

const CompHead = () => (
  <thead>
    <tr className="text-white/50 border-b border-white/10 text-[11px]">
      <th className="py-2 px-2 text-left">항목</th>
      <th className="py-2 px-2 text-center">On-Premise<br /><span className="text-white/30">자체 서버</span></th>
      <th className="py-2 px-2 text-center">Cloud Server (IaaS)<br /><span className="text-white/30">GCP Compute Engine</span></th>
      <th className="py-2 px-2 text-center">Serverless (BaaS)<br /><span className="text-white/30">Firebase + Cloud Run</span></th>
    </tr>
  </thead>
)

export function SecurityComparison() {
  return (
    <>
      <Card className="mb-6 !bg-white/5 !border-gold/30">
        <h3 className="text-gold font-bold text-lg mb-4">5대 차원 종합 평가</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <CompHead />
            <tbody>
              {[
                { dim: '보안', op: '★★☆☆☆', cs: '★★★★☆', sl: '★★★★★' },
                { dim: '비용 (5년 TCO)', op: '★☆☆☆☆', cs: '★★★☆☆', sl: '★★★★★' },
                { dim: '유지보수', op: '★☆☆☆☆', cs: '★★★☆☆', sl: '★★★★★' },
                { dim: '필요 인력', op: '★☆☆☆☆', cs: '★★★☆☆', sl: '★★★★★' },
                { dim: 'AI 통합 용이성', op: '★☆☆☆☆', cs: '★★★★☆', sl: '★★★★★' },
              ].map(r => (
                <tr key={r.dim} className="border-b border-white/5">
                  <td className="py-2 px-2 font-medium text-white/80">{r.dim}</td>
                  <td className="py-2 px-2 text-center text-red-400">{r.op}</td>
                  <td className="py-2 px-2 text-center text-blue-400">{r.cs}</td>
                  <td className="py-2 px-2 text-center text-green-400">{r.sl}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-white/40 text-xs mt-3">N2SF C(기밀) 등급에 한해 On-Premise가 유일한 선택지. 천주교 정보시스템(굿뉴스 등)은 O/S 등급 → Serverless 최적.</p>
      </Card>

      <Card className="mb-6 !bg-white/5 !border-white/10">
        <h3 className="text-white font-bold mb-3">1. 보안 책임 분담 (Shared Responsibility)</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-[11px]">
            <CompHead />
            <tbody>
              {([
                ['물리적 보안 (데이터센터)', '고객 전담', 'Google', 'Google'],
                ['네트워크 보안', '고객 (방화벽 구매)', '공동 (VPC + Cloud Armor)', 'Google'],
                ['OS·런타임 패치', '고객 (수동, 평균 58일)', '고객 (자동화 도구 가능)', 'Google (자동)'],
                ['DDoS 방어', '고객 (별도 장비)', 'Google (기본 포함)', 'Google (기본 포함)'],
                ['암호화 (저장+전송)', '고객 (미적용 다수)', 'AES-256 기본', 'AES-256 기본'],
                ['인증·접근제어', '직접 구축', 'IAM + MFA', 'Firebase Auth + Security Rules'],
                ['침해 탐지·대응', '직접 (인력 부족)', 'Security Command Center', 'Google 자동 모니터링'],
                ['앱 코드 보안', '고객', '고객', '고객'],
              ] as string[][]).map((row, i) => <DimRow key={i} cells={row} />)}
            </tbody>
          </table>
        </div>
        <p className="text-white/40 text-xs mt-2">
          On-Premise: 8개 영역 모두 전산팀 부담 (590만 신자 데이터 보호에 역부족). IaaS: 4개. <strong className="text-green-400">Serverless: 앱 코드 1개만 자체 책임.</strong>
        </p>
      </Card>

      <Card className="mb-6 !bg-white/5 !border-white/10">
        <h3 className="text-white font-bold mb-3">2. 월 비용 비교 <span className="text-white/40 text-xs font-normal">— 수백만 사용자(천주교 전체), GCP 서울 리전</span></h3>
        <div className="overflow-x-auto">
          <table className="w-full text-[11px]">
            <CompHead />
            <tbody>
              {([
                ['컴퓨팅 (다중 서버/인스턴스)', '~$1,000 (5년 상각, 3-4대)', '~$300-600 (멀티 VM, CUD)', '~$300-500 (Cloud Run 자동 스케일)'],
                ['네트워크·회선·CDN', '~$1,000 (고대역 전용선)', '~$300 (아웃바운드 + LB)', '~$100 (Firebase Hosting + CDN)'],
                ['DB', '~$500 (MS SQL 라이선스)', '~$300 (Cloud SQL HA)', '~$200-500 (Firestore, CDN 캐싱 최적화)'],
                ['소프트웨어 라이선스', '~$500', '포함', '포함'],
                ['상면·전력·냉각', '~$800 (IDC 다중 랙)', '—', '—'],
                ['인건비 (인프라 운영)', '~$6,000 (전담 2인+)', '~$3,000 (DevOps 1.5인)', '~$1,000 (겸임 0.5인)'],
              ] as string[][]).map((row, i) => <DimRow key={i} cells={row} />)}
              <TotalRow cells={['합계/월', '~$10,000 (1,300만원)', '~$4,500 (600만원)', '~$2,000 (260만원)']} bold />
              <TotalRow cells={['5년 TCO', '~$600,000 (8억원)', '~$270,000 (3.6억원)', '~$120,000 (1.6억원)']} />
              <TotalRow cells={['절감률 (vs On-Premise)', '기준', '55% 절감', '80% 절감']} />
            </tbody>
          </table>
        </div>
        <p className="text-white/40 text-xs mt-2">전국 1,700+ 본당 · 590만 신자 규모. CDN 캐싱으로 정적 콘텐츠 90%+ 캐시 → Firestore 실제 히트 최소화. 개별 본당은 무료 티어로 <strong className="text-green-400">$0/월</strong>.</p>
      </Card>

      <Card className="mb-6 !bg-white/5 !border-white/10">
        <h3 className="text-white font-bold mb-3">3. 유지보수 부담</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-[11px]">
            <CompHead />
            <tbody>
              {([
                ['OS·보안 패치', '40-80시간/월 (수동)', '15-30시간/월', '0시간 (자동)'],
                ['모니터링·장애 대응', '20-40시간/월', '10-20시간/월', '2-5시간/월'],
                ['백업·복구 관리', '10-20시간/월', '5-10시간/월', '0시간 (자동)'],
                ['스케일링·용량', '10-20시간/월', '5-10시간/월', '0시간 (자동 스케일링)'],
                ['SLA 가용성', '~99.5% (3.6시간/월 다운)', '99.99% (4분/월)', '99.95%+ (22분/월)'],
                ['재해 복구 시간 (RTO)', '4-24시간+', '분~1시간', '초~분'],
                ['복구 시점 (RPO)', '시간 단위', '분 단위', '실시간 (자동 복제)'],
              ] as string[][]).map((row, i) => <DimRow key={i} cells={row} />)}
              <TotalRow cells={['총 운영 시간/월', '90-175시간', '37-75시간', '2-6시간']} bold />
            </tbody>
          </table>
        </div>
      </Card>

      <Card className="mb-6 !bg-white/5 !border-white/10">
        <h3 className="text-white font-bold mb-3">4. 필요 인력</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-[11px]">
            <CompHead />
            <tbody>
              {([
                ['시스템 관리자', '1-2명 (필수)', '0-1명', '불필요'],
                ['네트워크 엔지니어', '1명 (필수)', '불필요', '불필요'],
                ['보안 엔지니어', '1명 (필수)', '0.5-1명', '0-0.5명'],
                ['DBA', '0.5-1명', '0.5명', '불필요'],
                ['DevOps 엔지니어', '—', '1-2명 (필수)', '0.5-1명'],
                ['풀스택 개발자', '4-6명', '4-6명', '3-5명'],
              ] as string[][]).map((row, i) => <DimRow key={i} cells={row} />)}
              <TotalRow cells={['최소 팀 규모', '8-11명', '6-10명', '4-7명']} bold />
              <TotalRow cells={['교육 기간', '6-12개월', '3-6개월', '1-3개월']} />
              <TotalRow cells={['핵심 자격증', 'RHCE, CCNA', 'GCP ACE, CKA', 'GCP CDL']} />
            </tbody>
          </table>
        </div>
      </Card>

      <Card className="mb-6 !bg-white/5 !border-white/10">
        <h3 className="text-white font-bold mb-3">5. AI 통합 용이성</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-[11px]">
            <CompHead />
            <tbody>
              {([
                ['AI API 접근', '망분리 시 불가 / VPN 경유', 'GCP 내부 직접 호출', 'Firebase Genkit 네이티브'],
                ['네트워크 지연 (AI)', '50-200ms (외부 경유)', '1-5ms (내부)', '1-5ms (내부)'],
                ['RAG 시스템 구축', '벡터 DB 자체 구축 필요', 'Vertex AI Search', 'Firebase Extensions'],
                ['Gemini 연동 코드량', '~500줄+', '~200줄', '~50줄 (Genkit)'],
                ['모델 튜닝', '불가 (API만)', 'Vertex AI 지원', 'Vertex AI 지원'],
                ['데이터 레지던시', '완전 통제', '서울 리전 선택', '서울 리전 선택'],
              ] as string[][]).map((row, i) => <DimRow key={i} cells={row} />)}
            </tbody>
          </table>
        </div>
        <p className="text-white/40 text-xs mt-2">
          망분리 On-Premise에서는 AI API 호출 자체가 불가. Serverless는 <strong className="text-green-400">50줄 코드로 Gemini 즉시 연동</strong>.
        </p>
      </Card>
    </>
  )
}
