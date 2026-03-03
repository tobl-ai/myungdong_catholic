import { Section, Card, Table } from '../components/Section'

export function SecurityAnalysis() {
  return (
    <Section id="security" title="7. On-Premise vs Cloud 보안 분석" subtitle="망분리 ≠ 안전, 클라우드 전환이 보안 강화" dark>
      <Card className="mb-8 !bg-red-900/20 !border-red-500/30">
        <h3 className="text-red-400 font-bold text-lg mb-3">현재 상태: Classic ASP + On-Premise + 망분리</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-white/80">
          <ul className="space-y-2">
            <li className="flex gap-2"><span className="text-red-400">✕</span> Classic ASP 보안 패치 종료 → 새 취약점 무방비</li>
            <li className="flex gap-2"><span className="text-red-400">✕</span> SQL Injection 극도 취약 (인라인 SQL)</li>
            <li className="flex gap-2"><span className="text-red-400">✕</span> 감사 로그 부재 → 침해 추적 불가</li>
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

      <Card className="mb-8 !bg-white/5 !border-white/10">
        <h3 className="text-gold font-bold text-lg mb-3">망분리 = 안전? 오해와 진실</h3>
        <div className="space-y-3 text-sm text-white/80">
          <p><strong className="text-gold">오해:</strong> "망을 분리하면 해킹당할 일이 없다"</p>
          <p><strong className="text-white">진실:</strong> 망분리는 외부 공격 경로를 줄이지만, 다음의 위험은 해결하지 못합니다:</p>
          <ul className="space-y-2 ml-4">
            <li>내부자 위협 (직원 실수/악의) - 전체 침해의 34%</li>
            <li>물리적 접근 (USB, 유지보수 업체) - 에어갭도 뚫린 사례 다수</li>
            <li>소프트웨어 취약점 - Classic ASP는 패치 자체가 불가</li>
            <li>공급망 공격 - 업데이트/유지보수 경로를 통한 침투</li>
            <li>서비스 불가 - 외부에서 접근할 수 없으면 신자 서비스도 불가</li>
          </ul>
          <p className="text-gold mt-4">핵심: 망분리로 AI도 못 쓰고, 모바일 서비스도 제한되며, 결국 기술 부채만 쌓입니다.</p>
        </div>
      </Card>

      <div className="mb-8">
        <Table
          headers={['보안 영역', 'On-Premise (현재)', 'Cloud (GCP 서울 리전)']}
          rows={[
            ['보안 투자', '자체 예산 한계', 'Google: Wiz 인수 42조원, 연간 수조원'],
            ['패치 관리', '수동 (52%가 30일 초과)', '인프라 자동 패치'],
            ['암호화', '미적용 (HTTP 사이트 존재)', '저장+전송 기본 암호화'],
            ['감사 로그', '없거나 미비', 'Cloud Audit Logs 자동 기록'],
            ['접근 제어', '인증/인가 부재', 'IAM + MFA + RBAC 내장'],
            ['침입 탐지', '별도 솔루션 필요', 'Security Command Center 내장'],
            ['전문 인력', '소수 전산팀', 'Google 보안팀 수천명 + Mandiant'],
            ['인증', '없음', 'ISO 27001, SOC 2, CSAP 다수'],
            ['데이터 위치', '서버실', '서울 리전 (asia-northeast3)'],
          ]}
        />
      </div>

      <Card className="!bg-white/5 !border-white/10">
        <h3 className="text-gold font-bold text-lg mb-3">AI + 개인정보 보호</h3>
        <div className="text-sm text-white/80 space-y-2">
          <p><strong className="text-white">Q: "AI에 개인정보 넣으면 학습에 사용되지 않나?"</strong></p>
          <p>Google Cloud Vertex AI 보장사항:</p>
          <ul className="space-y-1 ml-4">
            <li className="flex gap-2"><span className="text-green-400">✓</span> 고객 데이터를 모델 학습에 미사용 (서비스약관 제17조)</li>
            <li className="flex gap-2"><span className="text-green-400">✓</span> 서울 리전(asia-northeast3)에서 데이터 저장/처리</li>
            <li className="flex gap-2"><span className="text-green-400">✓</span> VPC 내 격리 배포 가능</li>
            <li className="flex gap-2"><span className="text-green-400">✓</span> Zero Data Retention 옵션</li>
          </ul>
          <p className="mt-3 text-white/60">
            신앙정보는 개인정보보호법상 <strong className="text-gold">민감정보</strong>.
            On-Premise보다 클라우드가 법적 요구사항(암호화, 접근통제, 감사로그) 충족이 용이합니다.
          </p>
        </div>
      </Card>
    </Section>
  )
}
