import { Card } from '../../components/Section'

export function SecurityFutureProof() {
  return (
    <>
      <Card className="mb-6 mt-8 !bg-violet-900/20 !border-violet-500/40">
        <h3 className="text-violet-300 font-bold text-xl mb-2">에이전트 시대를 위한 Future-Proof 아키텍처</h3>
        <p className="text-white/50 text-xs mb-4">2026-2030: AI가 "도구"에서 "동료"로 전환되는 시대. 590만 신자 · 1,700+ 본당을 위한 아키텍처가 이를 수용할 수 있어야 합니다.</p>

        <div className="space-y-4 text-sm text-white/80">
          <div>
            <div className="text-white font-bold mb-2">AI 에이전트란?</div>
            <p className="text-xs text-white/60">사용자를 대신하여 <strong className="text-white">자율적으로 작업을 계획·실행·검증</strong>하는 AI 시스템.
            단순 챗봇(Q&A)이 아닌, 데이터를 읽고, API를 호출하고, 의사결정을 내리고, 결과를 보고하는 <strong className="text-violet-300">디지털 동료</strong>입니다.</p>
          </div>

          <div>
            <div className="text-white font-bold mb-3">에이전트가 작동하려면 필요한 것</div>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                {
                  title: 'API-First 아키텍처',
                  desc: '에이전트는 API를 통해 시스템과 소통. 화면이 아닌 API가 인터페이스.',
                  on: 'Classic ASP: API 없음. 화면 스크래핑만 가능',
                  fire: 'Firebase Functions = 에이전트가 호출할 수 있는 API 엔드포인트',
                  icon: '🔌',
                },
                {
                  title: '구조화된 데이터',
                  desc: '에이전트는 JSON/구조화된 데이터를 읽고 쓸 수 있어야 함.',
                  on: 'MS SQL + Classic ASP: 에이전트 접근 불가 (망분리)',
                  fire: 'Firestore = JSON 네이티브, 에이전트가 직접 읽고 쓰기 가능',
                  icon: '📊',
                },
                {
                  title: '인증·권한 체계',
                  desc: '에이전트별로 다른 권한 레벨. 사람처럼 인증이 필요.',
                  on: '인증 체계 미비. 에이전트 접근 개념 자체가 없음',
                  fire: 'Firebase Auth + Custom Claims = 에이전트별 RBAC(역할별 권한)',
                  icon: '🔐',
                },
                {
                  title: '실시간 데이터 동기화',
                  desc: '에이전트가 데이터 변경을 즉시 감지하고 반응해야 함.',
                  on: '폴링만 가능. 실시간 불가',
                  fire: 'Firestore 실시간 리스너 = 데이터 변경 즉시 에이전트에 전달',
                  icon: '⚡',
                },
              ].map(item => (
                <div key={item.title} className="bg-white/5 rounded-lg p-3 border border-violet-500/20">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-base">{item.icon}</span>
                    <span className="text-violet-300 font-bold text-xs">{item.title}</span>
                  </div>
                  <p className="text-white/50 text-[10px] mb-2">{item.desc}</p>
                  <div className="text-[10px] space-y-1">
                    <div className="text-red-400">On-Premise: {item.on}</div>
                    <div className="text-green-400">Firebase: {item.fire}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="text-white font-bold mb-3">MCP (Model Context Protocol): 에이전트의 표준 인터페이스</div>
            <div className="bg-white/5 rounded-lg p-4 border border-violet-500/20">
              <p className="text-xs text-white/60 mb-3">
                Anthropic이 2024년 공개한 <strong className="text-white">MCP</strong>는 AI 에이전트가 외부 시스템과 소통하는 표준 프로토콜.
                USB-C가 모든 기기를 연결하듯, MCP는 <strong className="text-violet-300">모든 AI 에이전트를 모든 서비스에 연결</strong>합니다.
              </p>
              <div className="grid md:grid-cols-3 gap-3 text-[10px]">
                <div className="bg-white/5 rounded p-2 border border-white/10">
                  <div className="text-violet-400 font-bold mb-1">MCP Tools</div>
                  <div className="text-white/50">Firebase Function 하나 = MCP Tool 하나.<br />미사 조회, 성경 검색, 예약 등 각 기능이 에이전트 도구가 됨</div>
                </div>
                <div className="bg-white/5 rounded p-2 border border-white/10">
                  <div className="text-violet-400 font-bold mb-1">MCP Resources</div>
                  <div className="text-white/50">Firestore 컬렉션 = MCP Resource.<br />본당 정보, 전례력, 성경 텍스트를 에이전트에 노출</div>
                </div>
                <div className="bg-white/5 rounded p-2 border border-white/10">
                  <div className="text-violet-400 font-bold mb-1">MCP Prompts</div>
                  <div className="text-white/50">교리 해설, 강론 작성, 신자 안내 등 정형화된 AI 프롬프트를 에이전트에 제공</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="text-white font-bold mb-3">에이전트 시대 구체적 사용 시나리오</div>
            <div className="space-y-2">
              {[
                { agent: '본당 행정 에이전트', task: '전국 1,700+ 본당 주보 자동 생성, 미사 시간 변경 공지, 헌금 리포트', level: '자율 실행' },
                { agent: '교리 상담 에이전트', task: '590만 신자 대상 교리문답·성경 RAG 응답, 교리교사 보조', level: '사람 승인 후 실행' },
                { agent: '전례 준비 에이전트', task: '전례력 기반 독서·복음 안내, 성가 추천, 강론 초안 — 16개 교구 동시', level: '자율 실행' },
                { agent: '신자 데이터 에이전트', task: '590만 신자 DB 정리, 중복 제거, 세례일·생일 알림 자동 발송', level: '사람 승인 후 실행' },
                { agent: 'WYD 2027 에이전트', task: '50만 참가자 다국어 안내, 실시간 일정, 매칭, AI 통번역', level: '자율 실행' },
              ].map(s => (
                <div key={s.agent} className="flex items-center gap-3 bg-white/5 rounded-lg p-2 border border-white/5">
                  <div className="text-violet-400 font-bold text-xs min-w-[140px]">{s.agent}</div>
                  <div className="text-white/60 text-[10px] flex-1">{s.task}</div>
                  <div className={`text-[9px] px-2 py-0.5 rounded-full whitespace-nowrap ${
                    s.level === '자율 실행' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                  }`}>{s.level}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>

      <Card className="mb-6 !bg-white/5 !border-white/10">
        <h3 className="text-white font-bold text-lg mb-3">On-Premise vs Serverless: 에이전트 대응력</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-[11px]">
            <thead>
              <tr className="text-white/50 border-b border-white/10">
                <th className="py-2 px-2 text-left">에이전트 요구사항</th>
                <th className="py-2 px-2 text-center">On-Premise (현재)</th>
                <th className="py-2 px-2 text-center">Serverless (Firebase)</th>
              </tr>
            </thead>
            <tbody className="text-white/70">
              {([
                ['API 엔드포인트', '없음 (화면만 존재)', 'Cloud Functions = REST API'],
                ['MCP 서버 구축', '불가 (망분리, API 없음)', '즉시 가능 (Functions → MCP)'],
                ['에이전트 인증', '불가', 'Firebase Auth + Custom Tokens'],
                ['실시간 데이터 접근', '불가', 'Firestore 실시간 리스너'],
                ['자동 스케일링', '불가 (물리 서버 한계)', '자동 (0 → 수만 동시 요청)'],
                ['에이전트 감사 로그', '없음', 'Cloud Audit Logs 자동 기록'],
                ['멀티 에이전트 협업', '불가', 'Pub/Sub + Firestore 이벤트'],
                ['에이전트 권한 제어', '불가', 'Security Rules + RBAC'],
              ] as string[][]).map((row, i) => (
                <tr key={i} className="border-b border-white/5">
                  <td className="py-1.5 px-2 font-medium text-white/80">{row[0]}</td>
                  <td className="py-1.5 px-2 text-center text-red-400">{row[1]}</td>
                  <td className="py-1.5 px-2 text-center text-green-400">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-white/40 text-xs mt-2">
          On-Premise + Classic ASP는 에이전트가 접근할 수 있는 인터페이스가 <strong className="text-red-400">0개</strong>.
          Firebase는 구축하는 모든 기능이 <strong className="text-green-400">자동으로 에이전트 대응</strong> 상태가 됩니다.
        </p>
      </Card>

      <Card className="mb-6 !bg-white/5 !border-violet-500/20">
        <div className="text-center">
          <p className="text-violet-300 text-sm font-bold mb-2">핵심 인사이트</p>
          <p className="text-white text-lg font-bold mb-2">
            "웹사이트를 만드는 것이 아니라, <span className="text-violet-300">에이전트가 사용할 수 있는 플랫폼</span>을 만드는 것"
          </p>
          <p className="text-white/50 text-xs">
            2027년에는 590만 신자가 직접 굿뉴스를 검색하지 않습니다. 신자의 AI 에이전트가 천주교 MCP 서버에 접속하여
            미사 시간을 확인하고, 교리를 검색하고, 성사 예약을 합니다. <strong className="text-white">지금 API-first, 에이전트-네이티브로 구축하지 않으면 2027년에는 이미 늦습니다.</strong>
          </p>
        </div>
      </Card>
    </>
  )
}
