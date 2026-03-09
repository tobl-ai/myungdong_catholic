import { Section } from '../components/Section'
import { SecurityCurrentState } from './security/SecurityCurrentState'
import { SecurityMangbunli } from './security/SecurityMangbunli'
import { SecurityComparison } from './security/SecurityComparison'
import { SecurityCloudBenefits } from './security/SecurityCloudBenefits'
import { SecurityWorkforce } from './security/SecurityWorkforce'
import { SecurityDevSpeed } from './security/SecurityDevSpeed'
import { SecurityFutureProof } from './security/SecurityFutureProof'
import { SecurityRecommendation } from './security/SecurityRecommendation'

export function SecurityAnalysis() {
  return (
    <Section
      id="security"
      title="3. On-Premise vs Cloud Server vs Serverless"
      subtitle="보안 · 비용 · 유지보수 · 인력 · AI 용이성 — 데이터 기반 종합 분석"
      dark
    >
      <SecurityCurrentState />
      <SecurityMangbunli />
      <SecurityComparison />
      <SecurityCloudBenefits />
      <SecurityWorkforce />
      <SecurityDevSpeed />
      <SecurityFutureProof />
      <SecurityRecommendation />
    </Section>
  )
}
