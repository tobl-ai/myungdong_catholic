import { Card } from '../../components/Section'

export function SecurityCurrentState() {
  return (
    <>
      <Card className="mb-6 !bg-red-900/20 !border-red-500/30">
        <h3 className="text-red-400 font-bold text-lg mb-3">현재 상태: Classic ASP + On-Premise + 망분리</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-white/80">
          <ul className="space-y-2">
            <li className="flex gap-2"><span className="text-red-400">✕</span> Classic ASP 보안 패치 종료 — 새 취약점 무방비</li>
            <li className="flex gap-2"><span className="text-red-400">✕</span> SQL Injection(DB 조작 공격) 극도 취약</li>
            <li className="flex gap-2"><span className="text-red-400">✕</span> 감사 로그 부재 — 침해 추적 불가</li>
            <li className="flex gap-2"><span className="text-red-400">✕</span> 사회사목국 HTTP(비암호화) 운영</li>
          </ul>
          <ul className="space-y-2">
            <li className="flex gap-2"><span className="text-red-400">✕</span> 보안 전문 인력 부족, 24/7 모니터링 불가</li>
            <li className="flex gap-2"><span className="text-red-400">✕</span> 재해 복구 체계 미비</li>
            <li className="flex gap-2"><span className="text-red-400">✕</span> 2025.02 ASP.NET Machine Key 대규모 공격 사례</li>
            <li className="flex gap-2"><span className="text-red-400">✕</span> 개인정보보호법 안전성 조치 미충족 위험</li>
          </ul>
        </div>
      </Card>

      <Card className="mb-6 !bg-orange-900/20 !border-orange-500/30">
        <h3 className="text-orange-400 font-bold text-lg mb-3">망분리의 최대 비용: AI를 못 쓴다</h3>
        <div className="text-sm text-white/80 space-y-3">
          <p>망분리 환경에서는 <strong className="text-orange-300">외부 AI API 호출이 불가능</strong>합니다. 보안 문제를 넘어 <strong className="text-white">조직의 생존 문제</strong>입니다:</p>
          <ul className="space-y-2 ml-4">
            <li>590만 신자 대상 AI 교리 상담, 성경 해설, 1,700+ 본당 행정 자동화 — <strong className="text-red-400">전부 불가</strong></li>
            <li>IBM 2025: AI 보안 도구 도입 시 침해 탐지 <strong className="text-white">80일 단축</strong>, 비용 <strong className="text-white">$1.9M 절감</strong></li>
            <li>2024.8 금융위: <strong className="text-gold">"망분리가 클라우드·AI 도입의 장벽"</strong>이라 공식 인정</li>
            <li>WYD 2027: 50만 참가자 실시간 서비스 — 망분리 환경에서 물리적 불가능</li>
          </ul>
          <p className="text-orange-300 mt-2">보안을 위해 망분리를 하는 것이 아니라, 망분리 때문에 혁신이 멈춥니다.</p>
        </div>
      </Card>
    </>
  )
}
