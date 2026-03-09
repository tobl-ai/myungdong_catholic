import { Card } from '../../components/Section'

export function SecurityCloudBenefits() {
  return (
    <>
      <Card className="mb-6 !bg-purple-900/20 !border-purple-500/30">
        <h3 className="text-purple-400 font-bold text-lg mb-3">Google Wiz 인수 ($32B): 클라우드 보안에 올인</h3>
        <div className="text-sm text-white/80 space-y-2">
          <p><strong className="text-white">Wiz</strong> — 이스라엘 출신 클라우드 보안 회사. AWS·Azure·GCP 등 모든 클라우드의 보안 취약점을 자동 스캔합니다.</p>
          <ul className="space-y-1 ml-4 text-xs">
            <li className="flex gap-2"><span className="text-purple-400">·</span> 2020년 창업 → 4년 만에 매출 $500M(6,500억원), Fortune 100의 50%가 고객</li>
            <li className="flex gap-2"><span className="text-purple-400">·</span> Google이 <strong className="text-white">$32B(약 42조원)</strong>에 인수 — 역대 최대 사이버보안 M&A</li>
            <li className="flex gap-2"><span className="text-purple-400">·</span> 2026.3 현재 미국 법무부·EU 승인 완료, 최종 마감 임박</li>
          </ul>
          <p className="text-purple-300 text-xs mt-2">Google이 보안에 42조원을 투자하는 이유: 고객 데이터를 지키는 것이 클라우드 사업의 핵심이기 때문.</p>
        </div>
      </Card>

      <Card className="mb-6 !bg-white/5 !border-white/10">
        <h3 className="text-gold font-bold text-lg mb-3">공동 책임 모델 (Shared Fate)</h3>
        <div className="text-sm text-white/80 space-y-3">
          <p>Google은 단순 분담이 아닌 <strong className="text-gold">"운명 공동체(Shared Fate)"</strong>를 표방합니다:</p>
          <div className="grid md:grid-cols-2 gap-4 mt-2">
            <div className="bg-white/5 rounded-lg p-3 border border-blue-500/20">
              <div className="text-blue-400 text-xs font-bold mb-2">Google 책임 영역</div>
              <ul className="space-y-1 text-white/60 text-xs">
                <li>· 물리적 데이터센터 보안</li>
                <li>· 네트워크·하드웨어 인프라</li>
                <li>· OS·하이퍼바이저 패치</li>
                <li>· 기본 암호화 (저장+전송)</li>
                <li>· DDoS(대량 접속 공격) 방어</li>
              </ul>
            </div>
            <div className="bg-white/5 rounded-lg p-3 border border-gold/20">
              <div className="text-gold text-xs font-bold mb-2">천주교(교구) 책임 영역</div>
              <ul className="space-y-1 text-white/60 text-xs">
                <li>· 사용자 계정·권한 설정</li>
                <li>· 애플리케이션 코드 보안</li>
                <li>· 데이터 분류·접근 정책</li>
                <li>· 개인정보보호법 준수</li>
                <li>· 보안 설정 검토·관리</li>
              </ul>
            </div>
          </div>
          <p className="text-white/50 text-xs mt-2">
            현재 On-Premise는 <strong className="text-red-400">양쪽 모두를 소수 전산팀이 혼자 감당</strong> — 590만 신자 데이터를 보호하기에 역부족.
            Serverless 전환 시 인프라 보안 대부분을 Google이 담당 → <strong className="text-gold">서비스와 데이터 거버넌스에 집중</strong>.
          </p>
        </div>
      </Card>

      <Card className="mb-6 !bg-white/5 !border-white/10">
        <h3 className="text-gold font-bold text-lg mb-3">AI + 개인정보 보호</h3>
        <div className="text-sm text-white/80 space-y-2">
          <p><strong className="text-white">Q: "AI에 개인정보 넣으면 학습에 사용되지 않나?"</strong></p>
          <p className="text-xs">Google Cloud Vertex AI 보장사항:</p>
          <ul className="space-y-1 ml-4 text-xs">
            <li className="flex gap-2"><span className="text-green-400">✓</span> 고객 데이터를 모델 학습에 미사용 (서비스약관 제17조)</li>
            <li className="flex gap-2"><span className="text-green-400">✓</span> 서울 리전(asia-northeast3)에서 데이터 저장·처리</li>
            <li className="flex gap-2"><span className="text-green-400">✓</span> VPC(가상 사설 네트워크) 격리 + CMEK(고객 관리 암호키) 지원</li>
            <li className="flex gap-2"><span className="text-green-400">✓</span> Zero Data Retention(데이터 미보관) 옵션</li>
            <li className="flex gap-2"><span className="text-green-400">✓</span> FIPS 140-2(미국 연방 암호화 표준) 검증 완료</li>
          </ul>
          <p className="text-white/50 text-xs mt-2">
            신앙정보는 개인정보보호법상 <strong className="text-gold">민감정보</strong>.
            On-Premise보다 클라우드가 법적 요구사항(암호화·접근통제·감사로그) 충족에 유리합니다.
          </p>
        </div>
      </Card>

      <Card className="mb-6 !bg-green-900/20 !border-green-500/30">
        <h3 className="text-green-400 font-bold text-lg mb-3">Serverless(Firebase)의 추가 이점</h3>
        <div className="text-sm text-white/80 space-y-3">
          <p><strong className="text-white">Firebase는 IaaS보다 한 단계 더 나아간 BaaS(Backend as a Service)</strong>입니다:</p>
          <div className="grid md:grid-cols-2 gap-3 text-xs">
            <div className="bg-white/5 rounded-lg p-3 border border-green-500/20">
              <div className="text-green-400 font-bold mb-2">보안 측면</div>
              <ul className="space-y-1 text-white/60">
                <li>· Firebase Auth: OAuth 2.0, MFA 기본 내장</li>
                <li>· Security Rules: 선언형 접근제어 (서버 코드 불필요)</li>
                <li>· App Check: 앱 위변조 방지</li>
                <li>· 서버 자체가 없으므로 서버 해킹 불가</li>
              </ul>
            </div>
            <div className="bg-white/5 rounded-lg p-3 border border-green-500/20">
              <div className="text-green-400 font-bold mb-2">비용 측면</div>
              <ul className="space-y-1 text-white/60">
                <li>· 무료 티어: 50K MAU, 일 50K 읽기·쓰기</li>
                <li>· 개별 본당: 월 $0 (무료 티어 충분)</li>
                <li>· 천주교 전체(수백만 사용자): 월 $500-2,000</li>
                <li>· 유휴 시 비용 $0 (요청 기반 과금)</li>
              </ul>
            </div>
          </div>
          <p className="text-green-300 text-xs mt-2">
            IaaS(GCP VM)는 24/7 서버가 돌아가므로 트래픽 없어도 비용 발생. Firebase는 <strong className="text-white">사용한 만큼만</strong> 과금.
          </p>
        </div>
      </Card>

      <Card className="mb-6 !bg-amber-900/20 !border-amber-500/30">
        <h3 className="text-amber-400 font-bold text-lg mb-3">투명성: Firebase/Serverless의 한계와 대응 전략</h3>
        <div className="text-sm text-white/80 space-y-2">
          <p className="text-xs text-white/50">컨설턴트로서 장점만이 아닌 한계도 투명하게 공유합니다:</p>
          <div className="space-y-2">
            {[
              {
                limit: '벤더 락인 (Vendor Lock-in)',
                detail: 'Firestore, Cloud Functions 등은 GCP 전용. 나중에 AWS/Azure로 이전하려면 코드 재작성 필요.',
                mitigation: 'Firebase는 오픈소스 대안(Supabase) 존재. 핵심 비즈니스 로직을 프레임워크 독립적으로 설계하면 이전 비용 최소화. 현실적으로 Google이 Firebase를 폐기할 가능성은 극히 낮음.',
              },
              {
                limit: 'Firestore 쿼리 제한',
                detail: '복잡한 JOIN, 집계(aggregation), 전문 검색(full-text search) 불가. 관계형 DB 대비 쿼리 유연성 부족.',
                mitigation: '검색은 Algolia/Typesense(검색 엔진) 연동. 복잡한 집계는 Cloud Functions에서 처리. 천주교 정보시스템은 콘텐츠 조회 중심이라 JOIN 필요성 낮음. 신자 관계형 데이터는 BigQuery 연동으로 해결.',
              },
              {
                limit: 'Egress(외부 전송) 비용',
                detail: '대량 데이터 외부 전송 시 비용 급증 가능. Firestore 읽기도 건당 과금.',
                mitigation: 'CDN 캐싱(Firebase Hosting)으로 정적 콘텐츠 90%+ 캐시 처리. 수백만 사용자라도 Firestore 실제 히트는 10% 미만. ISR(증분 정적 재생성)으로 동적 콘텐츠도 캐싱. 월 $500-2,000 수준.',
              },
              {
                limit: 'Cloud Functions Cold Start',
                detail: '오랫동안 호출 안 된 함수의 첫 실행 시 1-3초 지연 발생.',
                mitigation: 'Cloud Run(2세대 Functions)으로 min-instances 설정. 천주교 접속 패턴은 예측 가능(주일 미사 전후, 전례력 기반)하여 pre-warming 최적화 용이.',
              },
            ].map(item => (
              <div key={item.limit} className="bg-white/5 rounded-lg p-3 border border-amber-500/10">
                <div className="flex items-start gap-2">
                  <span className="text-amber-400 text-xs mt-0.5">!</span>
                  <div className="flex-1">
                    <div className="text-amber-300 font-bold text-xs">{item.limit}</div>
                    <div className="text-white/50 text-[10px] mt-0.5">{item.detail}</div>
                    <div className="text-green-400/80 text-[10px] mt-1">대응: {item.mitigation}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-amber-300/70 text-xs mt-2">
            모든 기술에는 트레이드오프가 존재합니다. Firebase의 한계는 수백만 규모에서도 아키텍처 설계로 관리 가능하며,
            On-Premise + Classic ASP를 유지하는 리스크(보안 패치 종료, AI 불가, 에이전트 대응 불가)와 비교하면 현저히 낮습니다.
          </p>
        </div>
      </Card>

      <Card className="mb-6 !bg-cyan-900/20 !border-cyan-500/30">
        <h3 className="text-cyan-400 font-bold text-lg mb-3">AI가 보안 코드를 짠다</h3>
        <div className="text-sm text-white/80 space-y-3">
          <p>2026년 현재, AI 코딩 도구(Claude Code, GitHub Copilot 등)는 <strong className="text-white">보안 코드 작성에 특히 뛰어난 능력</strong>을 보여줍니다:</p>
          <div className="grid md:grid-cols-2 gap-3 text-xs">
            <div className="bg-white/5 rounded-lg p-3 border border-cyan-500/20">
              <div className="text-cyan-400 font-bold mb-2">AI가 잘하는 보안 작업</div>
              <ul className="space-y-1.5 text-white/60">
                <li>· OWASP Top 10 취약점 자동 탐지·수정</li>
                <li>· Firebase Security Rules 자동 생성</li>
                <li>· SQL Injection, XSS 방어 코드 자동 삽입</li>
                <li>· IAM 정책·최소 권한 원칙 자동 적용</li>
                <li>· 암호화·해싱 로직 모범 사례 적용</li>
              </ul>
            </div>
            <div className="bg-white/5 rounded-lg p-3 border border-cyan-500/20">
              <div className="text-cyan-400 font-bold mb-2">보안 전문팀이 불필요해지는 이유</div>
              <ul className="space-y-1.5 text-white/60">
                <li>· 코드 리뷰 시 보안 취약점 자동 발견</li>
                <li>· SAST(정적 분석) 수준의 검사를 코딩 시점에 수행</li>
                <li>· 최신 보안 패턴(Zero Trust, CSP 등) 내장</li>
                <li>· 인증·인가 코드의 정형화된 패턴 생성</li>
                <li>· 보안 설정 오류(misconfiguration) 방지</li>
              </ul>
            </div>
          </div>
          <p className="text-cyan-300 text-xs mt-2">
            기존에는 보안 엔지니어 1명(연봉 6,000만원+)이 필요했으나, <strong className="text-white">AI 도구를 활용하면 개발자 2-3명이 엔터프라이즈급 보안 품질을 달성</strong> 가능.
            보안 코드는 정형화된 패턴이 많아 AI가 특히 잘 수행하는 영역입니다.
          </p>
        </div>
      </Card>
    </>
  )
}
