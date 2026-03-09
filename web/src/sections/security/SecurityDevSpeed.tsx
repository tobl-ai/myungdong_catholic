import { Card } from '../../components/Section'

export function SecurityDevSpeed() {
  return (
    <Card className="mb-6 !bg-cyan-900/20 !border-cyan-500/30">
      <h3 className="text-cyan-400 font-bold text-lg mb-3">Firebase + AI: 개발 속도가 3-5배 빨라지는 이유</h3>
      <div className="text-sm text-white/80 space-y-4">
        <p className="text-xs text-white/50">전통적 On-Premise 개발 18-24개월 → Firebase + AI 개발 <strong className="text-white">4-7개월</strong>. 왜 이렇게 차이가 나는가?</p>

        <div className="grid md:grid-cols-2 gap-3 text-xs">
          <div className="bg-white/5 rounded-lg p-3 border border-cyan-500/20">
            <div className="text-cyan-400 font-bold mb-2">1. 인프라 구축 시간 = 0</div>
            <ul className="space-y-1.5 text-white/60">
              <li>· 서버 구매·설치·설정: <strong className="text-red-400">2-3개월</strong> → Firebase 프로젝트 생성: <strong className="text-green-400">5분</strong></li>
              <li>· DB 설계·설치·튜닝: <strong className="text-red-400">1-2개월</strong> → Firestore 즉시 사용</li>
              <li>· SSL·도메인·CDN 설정: <strong className="text-red-400">2-4주</strong> → Firebase Hosting 자동 포함</li>
              <li>· CI/CD 파이프라인 구축: <strong className="text-red-400">2-4주</strong> → Firebase CLI 즉시 배포</li>
            </ul>
            <p className="text-cyan-300 text-[10px] mt-2">인프라 셋업에 3-6개월 소요 → <strong className="text-white">0일</strong>로 단축</p>
          </div>

          <div className="bg-white/5 rounded-lg p-3 border border-cyan-500/20">
            <div className="text-cyan-400 font-bold mb-2">2. 보일러플레이트 코드 제거</div>
            <ul className="space-y-1.5 text-white/60">
              <li>· 인증 시스템 구축: <strong className="text-red-400">2-4주</strong> → Firebase Auth: <strong className="text-green-400">1일</strong></li>
              <li>· 파일 업로드/저장: <strong className="text-red-400">1-2주</strong> → Cloud Storage: <strong className="text-green-400">2시간</strong></li>
              <li>· 푸시 알림 시스템: <strong className="text-red-400">2-3주</strong> → FCM: <strong className="text-green-400">반나절</strong></li>
              <li>· 실시간 기능: <strong className="text-red-400">3-6주</strong> → Firestore 리스너: <strong className="text-green-400">내장</strong></li>
            </ul>
            <p className="text-cyan-300 text-[10px] mt-2">Firebase가 백엔드 70%를 미리 구축해 놓음</p>
          </div>

          <div className="bg-white/5 rounded-lg p-3 border border-cyan-500/20">
            <div className="text-cyan-400 font-bold mb-2">3. AI 코드 생성 (2026년 수준)</div>
            <ul className="space-y-1.5 text-white/60">
              <li>· Claude Code / Copilot이 <strong className="text-white">풀스택 코드 자동 생성</strong></li>
              <li>· Firebase Security Rules: AI가 데이터 모델 보고 즉시 생성</li>
              <li>· Firestore 스키마·인덱스: AI가 쿼리 패턴 분석 후 최적화</li>
              <li>· Cloud Functions: AI가 비즈니스 로직 → 서버리스 함수로 변환</li>
              <li>· 테스트 코드: AI가 구현과 동시에 테스트 자동 작성</li>
            </ul>
            <p className="text-cyan-300 text-[10px] mt-2">개발자 1명 + AI = 기존 3-4명 생산성</p>
          </div>

          <div className="bg-white/5 rounded-lg p-3 border border-cyan-500/20">
            <div className="text-cyan-400 font-bold mb-2">4. 레거시 마이그레이션 자동화</div>
            <ul className="space-y-1.5 text-white/60">
              <li>· Classic ASP 코드 → AI가 분석·TypeScript로 변환</li>
              <li>· MS SQL 스키마 → Firestore 문서 구조로 자동 매핑</li>
              <li>· 데이터 이전 스크립트: AI가 ETL 파이프라인 자동 생성</li>
              <li>· API 브릿지: 양업시스템 연동 코드 AI가 자동 작성</li>
            </ul>
            <p className="text-cyan-300 text-[10px] mt-2">수동 마이그레이션 6개월 → AI 활용 <strong className="text-white">6주</strong></p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-[11px]">
            <thead>
              <tr className="text-white/50 border-b border-white/10">
                <th className="py-2 px-2 text-left">항목</th>
                <th className="py-2 px-2 text-center">전통 개발<br /><span className="text-white/30">On-Premise + 자체 구축</span></th>
                <th className="py-2 px-2 text-center">Firebase + AI<br /><span className="text-white/30">Serverless + Claude Code</span></th>
              </tr>
            </thead>
            <tbody className="text-white/70">
              {([
                ['인프라 셋업', '3-6개월', '0일 (즉시 시작)'],
                ['인증·보안 기본 구축', '1-2개월', '1-2일'],
                ['핵심 기능 개발', '6-12개월', '2-4개월'],
                ['데이터 마이그레이션', '3-6개월', '4-6주'],
                ['테스트·QA', '2-3개월', '2-4주 (AI 자동 테스트)'],
                ['배포·안정화', '1-2개월', '1-2주'],
              ] as string[][]).map((row, i) => (
                <tr key={i} className="border-b border-white/5">
                  <td className="py-1.5 px-2 font-medium text-white/80">{row[0]}</td>
                  <td className="py-1.5 px-2 text-center text-red-400">{row[1]}</td>
                  <td className="py-1.5 px-2 text-center text-green-400">{row[2]}</td>
                </tr>
              ))}
              <tr className="border-t-2 border-white/20 font-bold">
                <td className="py-2 px-2 text-white">총 소요 기간</td>
                <td className="py-2 px-2 text-center text-red-400">18-24개월</td>
                <td className="py-2 px-2 text-center text-green-400">4-7개월</td>
              </tr>
              <tr className="border-t border-white/10 font-bold">
                <td className="py-2 px-2 text-white">필요 인력</td>
                <td className="py-2 px-2 text-center text-red-400">8-12명</td>
                <td className="py-2 px-2 text-center text-green-400">2-3명</td>
              </tr>
              <tr className="border-t border-white/10 font-bold">
                <td className="py-2 px-2 text-white">추정 비용</td>
                <td className="py-2 px-2 text-center text-red-400">15-25억원</td>
                <td className="py-2 px-2 text-center text-green-400">2-3억원</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-white/40 text-xs">
          Firebase가 인프라·백엔드의 70%를 제공하고, AI가 나머지 코드의 60-70%를 생성.
          개발팀은 <strong className="text-white">비즈니스 로직과 UX에만 집중</strong> — 590만 신자를 위한 서비스 품질에 리소스를 투입할 수 있습니다.
        </p>
      </div>
    </Card>
  )
}
