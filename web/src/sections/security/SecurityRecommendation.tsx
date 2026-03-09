import { Card } from '../../components/Section'

export function SecurityRecommendation() {
  return (
    <Card className="mt-8 !bg-gold/10 !border-gold/40">
      <h3 className="text-gold font-bold text-xl mb-4">최종 권장: Serverless(Firebase) 전면 리빌드 + 데이터 마이그레이션</h3>

      <div className="grid md:grid-cols-4 gap-3 mb-6">
        <div className="bg-white/5 rounded-lg p-4 border border-gold/20">
          <div className="text-gold font-bold text-2xl mb-1">590만</div>
          <div className="text-white/60 text-xs">한국 천주교 신자</div>
          <div className="text-white/40 text-[10px] mt-1">1,700+ 본당, 16개 교구</div>
        </div>
        <div className="bg-white/5 rounded-lg p-4 border border-gold/20">
          <div className="text-gold font-bold text-2xl mb-1">80%</div>
          <div className="text-white/60 text-xs">비용 절감 (On-Premise 대비)</div>
          <div className="text-white/40 text-[10px] mt-1">1,300만원/월 → 260만원/월</div>
        </div>
        <div className="bg-white/5 rounded-lg p-4 border border-gold/20">
          <div className="text-gold font-bold text-2xl mb-1">97%</div>
          <div className="text-white/60 text-xs">운영 시간 절감</div>
          <div className="text-white/40 text-[10px] mt-1">90-175시간/월 → 2-6시간/월</div>
        </div>
        <div className="bg-white/5 rounded-lg p-4 border border-gold/20">
          <div className="text-gold font-bold text-2xl mb-1">50줄</div>
          <div className="text-white/60 text-xs">AI 연동 코드</div>
          <div className="text-white/40 text-[10px] mt-1">On-Premise 500줄+ → 50줄</div>
        </div>
      </div>

      <div className="space-y-4 text-sm text-white/80">
        <div>
          <div className="text-white font-bold mb-2">왜 Firebase 전면 리빌드인가?</div>
          <ul className="space-y-1.5 ml-4 text-xs">
            <li className="flex gap-2"><span className="text-gold">1.</span> Classic ASP는 패치가 불가능합니다. 부분 개선이 아닌 <strong className="text-white">전면 교체만이 해답</strong>입니다.</li>
            <li className="flex gap-2"><span className="text-gold">2.</span> Firebase는 인증·DB·호스팅·함수를 <strong className="text-white">하나의 플랫폼</strong>으로 제공 — 별도 인프라 구축 불필요</li>
            <li className="flex gap-2"><span className="text-gold">3.</span> 보안 책임의 90%를 Google이 담당 — 590만 신자 데이터를 <strong className="text-white">Google 보안 인프라($10B+/년)로 보호</strong></li>
            <li className="flex gap-2"><span className="text-gold">4.</span> AI(Gemini) 연동이 Firebase Genkit으로 <strong className="text-white">네이티브 통합</strong> — 전국 1,700+ 본당에 AI 서비스 즉시 제공</li>
            <li className="flex gap-2"><span className="text-gold">5.</span> WYD 2027 50만 참가자 + 590만 신자 동시 접속 대응: <strong className="text-white">자동 스케일링</strong>으로 트래픽 폭증에 자동 대응</li>
            <li className="flex gap-2"><span className="text-gold">6.</span> 에이전트 시대 대비: 모든 Firebase Function이 <strong className="text-white">MCP Tool 엔드포인트</strong>로 전환 가능 — future-proof 아키텍처</li>
          </ul>
        </div>

        <div>
          <div className="text-white font-bold mb-2">AI로 리빌드하면 왜 빠른가?</div>
          <ul className="space-y-1.5 ml-4 text-xs">
            <li className="flex gap-2"><span className="text-cyan-400">→</span> Claude Code / Copilot으로 <strong className="text-white">풀스택 코드 자동 생성</strong> — 개발 속도 3-5배 향상</li>
            <li className="flex gap-2"><span className="text-cyan-400">→</span> Firebase Security Rules, Firestore 스키마, Cloud Functions — <strong className="text-white">AI가 보일러플레이트 코드를 즉시 생성</strong></li>
            <li className="flex gap-2"><span className="text-cyan-400">→</span> 기존 Classic ASP 코드를 AI가 분석하여 <strong className="text-white">자동 마이그레이션 스크립트 생성</strong></li>
            <li className="flex gap-2"><span className="text-cyan-400">→</span> 테스트·보안 감사·문서화까지 AI가 보조 — <strong className="text-white">2-3명이 10명 팀의 생산성</strong></li>
          </ul>
        </div>

        <div>
          <div className="text-white font-bold mb-2">데이터 마이그레이션 전략</div>
          <ul className="space-y-1.5 ml-4 text-xs">
            <li className="flex gap-2"><span className="text-green-400">✓</span> <strong className="text-white">기존 MS SQL → Firestore</strong>: AI가 스키마 매핑 + 변환 스크립트 자동 생성</li>
            <li className="flex gap-2"><span className="text-green-400">✓</span> <strong className="text-white">590만 신자 데이터</strong>: 암호화 상태로 전송, Firestore CMEK(고객 관리 암호키) 적용</li>
            <li className="flex gap-2"><span className="text-green-400">✓</span> 단계적 전환: 서울대교구 파일럿 → 검증 → 전국 16개 교구 확대</li>
            <li className="flex gap-2"><span className="text-green-400">✓</span> 병행 운영 90일: 기존 시스템 유지하며 안전하게 전환</li>
            <li className="flex gap-2"><span className="text-green-400">✓</span> 양업시스템(ERP) 연동: Firebase Functions → 양업 API 브릿지</li>
          </ul>
        </div>
      </div>

      <div className="mt-6 p-4 bg-white/5 rounded-lg border border-gold/20">
        <div className="grid md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-gold font-bold text-sm">추정 기간</div>
            <div className="text-white text-xl font-bold mt-1">7개월</div>
            <div className="text-white/40 text-[10px]">AI 활용 초효율 기준</div>
          </div>
          <div>
            <div className="text-gold font-bold text-sm">필요 인력</div>
            <div className="text-white text-xl font-bold mt-1">2-3명</div>
            <div className="text-white/40 text-[10px]">풀스택 + AI 도구</div>
          </div>
          <div>
            <div className="text-gold font-bold text-sm">총 비용</div>
            <div className="text-white text-xl font-bold mt-1">~2-3억원</div>
            <div className="text-white/40 text-[10px]">전통 방식 15-25억 대비 85% 절감</div>
          </div>
          <div>
            <div className="text-gold font-bold text-sm">월 운영비</div>
            <div className="text-white text-xl font-bold mt-1">~260만원</div>
            <div className="text-white/40 text-[10px]">수백만 사용자 규모 기준</div>
          </div>
        </div>
      </div>

      <p className="text-white/50 text-xs mt-4 text-center">
        "가장 안전한 서버는 관리할 서버가 없는 것이다." — Serverless의 철학
      </p>
    </Card>
  )
}
