import { useState } from 'react'
import { Section, Card } from '../components/Section'

const chatMessages = [
  { role: 'user' as const, text: '오늘 미사 독서가 뭔가요?' },
  { role: 'ai' as const, text: '오늘은 사순 제2주간 월요일입니다.\n\n📖 제1독서: 다니엘 9,4ㄴ-10 (주님, 저희가 당신께 죄를 지었습니다)\n📖 복음: 루카 6,36-38 (용서하여라, 그러면 너희도 용서받을 것이다)\n\n🎵 화답송: 시편 79(78),8.9.11.13\n\n▶️ 오디오로 들으시겠어요?' },
  { role: 'user' as const, text: '오늘 복음의 핵심 메시지를 쉽게 설명해줘' },
  { role: 'ai' as const, text: '오늘 복음(루카 6,36-38)의 핵심은 "자비"입니다.\n\n예수님은 세 가지를 말씀하십니다:\n1️⃣ 남을 심판하지 마라\n2️⃣ 남을 용서하라\n3️⃣ 넉넉히 주어라\n\n"너희가 되질하는 바로 그 되로 너희도 되받을 것이다"\n→ 내가 다른 사람에게 하는 만큼 하느님께서도 나에게 해주신다는 뜻입니다.\n\n📚 출처: 가톨릭 교리서 2842항' },
]

const parishResults = [
  { name: '명동대성당', dist: '0.3km', mass: '18:00 저녁미사', addr: '서울 중구 명동길74' },
  { name: '약현성당', dist: '1.2km', mass: '18:30 저녁미사', addr: '서울 중구 중림동' },
  { name: '중림동성당', dist: '1.5km', mass: '19:00 저녁미사', addr: '서울 중구 중림로' },
]

const dashboardItems = [
  { icon: '📖', label: '오늘의 말씀', value: '루카 6,36-38' },
  { icon: '😇', label: '오늘의 성인', value: '성 페르페투아와 성 펠리치타스' },
  { icon: '🙏', label: '묵주기도', value: '35.2% (3.5억/10억단)' },
  { icon: '⛪', label: '다음 미사', value: '명동대성당 18:00' },
]

export function UxDemo() {
  const [activeTab, setActiveTab] = useState<'chat' | 'parish' | 'dashboard'>('chat')

  return (
    <Section id="ux-demo" title="5. UX 데모" subtitle="2027년형 굿뉴스 인터페이스 미리보기">
      <div className="flex gap-2 mb-6">
        {[
          { id: 'chat' as const, label: 'AI 교리 상담' },
          { id: 'parish' as const, label: '성당 검색' },
          { id: 'dashboard' as const, label: '개인 대시보드' },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === tab.id
                ? 'bg-primary text-white'
                : 'bg-white text-muted hover:bg-gray-100 border border-border'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'chat' && (
        <Card>
          <div className="bg-primary rounded-t-xl px-4 py-3 -mt-6 -mx-6 mb-4">
            <div className="text-gold text-sm font-bold">가톨릭 교리 AI</div>
            <div className="text-white/60 text-xs">교리서·성경·교황 문헌 27,000건 기반</div>
          </div>
          <div className="space-y-4 max-h-[500px] overflow-y-auto">
            {chatMessages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm whitespace-pre-line ${
                  msg.role === 'user'
                    ? 'bg-primary text-white rounded-br-sm'
                    : 'bg-gray-100 text-text rounded-bl-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex gap-2">
            <input
              type="text"
              placeholder="교리, 성경, 전례에 대해 물어보세요..."
              className="flex-1 border border-border rounded-xl px-4 py-2 text-sm bg-bg"
              readOnly
            />
            <button className="bg-primary text-white px-4 py-2 rounded-xl text-sm">전송</button>
          </div>
        </Card>
      )}

      {activeTab === 'parish' && (
        <Card>
          <div className="bg-primary rounded-t-xl px-4 py-3 -mt-6 -mx-6 mb-4">
            <div className="text-gold text-sm font-bold">성당 검색</div>
            <div className="text-white/60 text-xs">위치 기반 미사 시간 자동 조회</div>
          </div>
          <div className="bg-bg rounded-xl p-3 mb-4 text-sm text-muted">
            "가까운 성당 저녁미사 있어?" → AI가 위치+시간 기반 자동 검색
          </div>
          <div className="space-y-3">
            {parishResults.map((p, i) => (
              <div key={i} className="flex items-center gap-4 p-3 bg-bg rounded-xl">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-lg">⛪</div>
                <div className="flex-1">
                  <div className="font-bold text-sm">{p.name}</div>
                  <div className="text-xs text-muted">{p.addr}</div>
                </div>
                <div className="text-right">
                  <div className="text-primary font-bold text-sm">{p.mass}</div>
                  <div className="text-xs text-muted">{p.dist}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}

      {activeTab === 'dashboard' && (
        <Card>
          <div className="bg-primary rounded-t-xl px-4 py-3 -mt-6 -mx-6 mb-4">
            <div className="text-gold text-sm font-bold">나의 굿뉴스</div>
            <div className="text-white/60 text-xs">개인화된 신앙생활 대시보드</div>
          </div>
          <div className="grid grid-cols-2 gap-3 mb-4">
            {dashboardItems.map((item, i) => (
              <div key={i} className="bg-bg rounded-xl p-4">
                <div className="text-2xl mb-2">{item.icon}</div>
                <div className="text-xs text-muted">{item.label}</div>
                <div className="font-bold text-sm mt-1">{item.value}</div>
              </div>
            ))}
          </div>
          <div className="bg-gold/10 border border-gold/30 rounded-xl p-4">
            <div className="text-gold font-bold text-sm mb-1">WYD 2027 묵주기도</div>
            <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
              <div className="bg-gold h-3 rounded-full" style={{ width: '35%' }} />
            </div>
            <div className="text-xs text-muted mt-1">3억 5,166만단 / 10억단 (35.2%)</div>
          </div>
        </Card>
      )}
    </Section>
  )
}
