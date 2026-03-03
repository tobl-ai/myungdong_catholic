import { useState } from 'react'

const readings = [
  {
    type: '제1독서',
    source: '1베드 1,3-9',
    title: '하느님의 크신 자비',
    text: '우리 주 예수 그리스도의 아버지 하느님께서는 찬미받으소서. 그분께서는 예수 그리스도를 죽은 이들 가운데에서 부활시키시어 당신의 큰 자비로 우리를 다시 태어나게 하시고, 살아 있는 희망을 갖게 해 주셨습니다.',
    color: 'border-blue-400',
  },
  {
    type: '화답송',
    source: '시편 111(110),1-2.5-6.9.10ㄷ',
    title: '주님은 자비로이 당신 백성을 구원하셨네',
    text: '온 마음 다하여 주님께 감사하리라. 의인들의 모임과 공동체 안에서. 주님의 업적은 위대하시어 좋아하는 이 모두 그것을 살피네.',
    color: 'border-purple-400',
  },
  {
    type: '복음',
    source: '마르 10,17-27',
    title: '부자 청년',
    text: '예수님께서 길을 나서시는데, 어떤 사람이 달려와 그 앞에 무릎을 꿇고 물었다. "선하신 스승님, 영원한 생명을 받으려면 무엇을 해야 합니까?" 예수님께서 그에게 이르셨다. "왜 나를 선하다고 하느냐? 하느님 한 분 외에는 아무도 선하지 않다."',
    color: 'border-red-400',
  },
]

export function MockupDailyMass() {
  const [activeReading, setActiveReading] = useState(0)
  const [playing, setPlaying] = useState(false)

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-xl font-bold text-[#1B2A4A]">오늘의 미사</h2>
            <p className="text-sm text-gray-400 mt-1">연중 제8주간 월요일 · 2026년 3월 3일</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setPlaying(!playing)}
              className="flex items-center gap-2 bg-[#1B2A4A] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#2d4a7a] transition-colors"
            >
              {playing ? '⏸' : '▶'} 음성 낭독
            </button>
          </div>
        </div>

        {/* Reading Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {readings.map((r, i) => (
            <button
              key={i}
              onClick={() => setActiveReading(i)}
              className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-colors
                ${activeReading === i
                  ? 'bg-[#1B2A4A] text-white'
                  : 'bg-white text-gray-500 hover:bg-gray-100'}`}
            >
              {r.type}
            </button>
          ))}
          <button className="px-4 py-2 rounded-lg text-sm bg-white text-gray-500 hover:bg-gray-100 whitespace-nowrap">
            강론
          </button>
        </div>

        {/* Active Reading */}
        <div className={`bg-white rounded-2xl border-l-4 ${readings[activeReading].color} p-6 md:p-8 shadow-sm`}>
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-xs text-[#C5A572] font-medium">{readings[activeReading].type}</span>
              <h3 className="font-bold text-lg text-[#1B2A4A] mt-1">{readings[activeReading].title}</h3>
              <p className="text-sm text-gray-400">{readings[activeReading].source}</p>
            </div>
            <button className="text-xs text-gray-400 bg-gray-50 px-3 py-1.5 rounded-lg hover:bg-gray-100">
              ✦ AI 해설
            </button>
          </div>

          <p className="text-gray-700 leading-[1.9] text-[15px]">
            {readings[activeReading].text}
          </p>

          {/* Audio Progress */}
          {playing && (
            <div className="mt-6 pt-4 border-t border-gray-100">
              <div className="flex items-center gap-3">
                <span className="text-xs text-gray-400">0:23</span>
                <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-[#C5A572] rounded-full w-1/4 transition-all" />
                </div>
                <span className="text-xs text-gray-400">1:45</span>
              </div>
            </div>
          )}
        </div>

        {/* Today's Saint */}
        <div className="mt-6 bg-white rounded-2xl p-6 shadow-sm flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#C5A572] to-amber-600 flex items-center justify-center text-white text-xl shrink-0">
            🕊
          </div>
          <div className="flex-1">
            <div className="text-xs text-[#C5A572] font-medium">오늘의 성인</div>
            <div className="font-bold text-[#1B2A4A]">성녀 쿠네군다</div>
            <p className="text-xs text-gray-400 mt-0.5">헝가리 출신 황후, 수도원 설립자 (1033-1040)</p>
          </div>
          <button className="text-xs text-[#C5A572] hover:underline whitespace-nowrap">자세히 →</button>
        </div>
      </div>
    </section>
  )
}
