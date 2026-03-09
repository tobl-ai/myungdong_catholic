import { Card } from '../../components/Section'

export function SecurityWorkforce() {
  return (
    <Card className="!bg-green-900/20 !border-green-500/30">
      <h3 className="text-green-400 font-bold text-lg mb-3">인력 역할 진화: 서버 관리자 → 클라우드 운영 전문가</h3>
      <div className="text-sm text-white/80 space-y-3">
        <p>클라우드 전환은 기존 인력의 <strong className="text-white">역할을 소멸시키는 것이 아니라 진화</strong>시킵니다:</p>
        <div className="grid md:grid-cols-2 gap-4 mt-3">
          <div>
            <div className="text-red-400 text-xs font-bold mb-2">현재 (반복·유지보수 중심)</div>
            <ul className="space-y-1.5 text-xs">
              <li className="flex gap-2"><span className="text-red-400/60">·</span> 서버실 물리 장비 관리</li>
              <li className="flex gap-2"><span className="text-red-400/60">·</span> OS 패치 수동 적용</li>
              <li className="flex gap-2"><span className="text-red-400/60">·</span> 백업 테이프 교체</li>
              <li className="flex gap-2"><span className="text-red-400/60">·</span> 하드웨어 장애 대응</li>
              <li className="flex gap-2"><span className="text-red-400/60">·</span> 네트워크 케이블링</li>
            </ul>
          </div>
          <div>
            <div className="text-green-400 text-xs font-bold mb-2">전환 후 (고부가가치 업무)</div>
            <ul className="space-y-1.5 text-xs">
              <li className="flex gap-2"><span className="text-green-400">✓</span> 클라우드 인프라 설계·운영 (비용 최적화)</li>
              <li className="flex gap-2"><span className="text-green-400">✓</span> CI/CD(자동 빌드·배포) 파이프라인 관리</li>
              <li className="flex gap-2"><span className="text-green-400">✓</span> 보안 모니터링·침해 사고 대응</li>
              <li className="flex gap-2"><span className="text-green-400">✓</span> AI 서비스 운영·데이터 거버넌스(관리 체계)</li>
              <li className="flex gap-2"><span className="text-green-400">✓</span> 벤더 관리·SLA(서비스 수준) 모니터링</li>
            </ul>
          </div>
        </div>
        <p className="text-green-300 text-xs mt-2">
          물리 서버 관리 대신, 더 가치 있는 업무로 전환됩니다.
          Google Cloud 공인 자격증(ACE: 클라우드 엔지니어, PCA: 클라우드 아키텍트) 취득 지원을 포함합니다.
        </p>
      </div>
    </Card>
  )
}
