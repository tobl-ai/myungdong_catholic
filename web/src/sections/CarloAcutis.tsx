import { Section, Card } from '../components/Section'

export function CarloAcutis() {
  return (
    <Section id="carlo" title="카를로 아쿠티스" subtitle="인터넷의 수호성인, 이 프로젝트의 영감">
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="border-gold/30 bg-gold/5">
          <div className="text-center mb-4">
            <img
              src={`${import.meta.env.BASE_URL}images/carlo-acutis-art.png`}
              alt="카를로 아쿠티스 - 스테인드글라스 스타일"
              className="w-40 h-40 mx-auto rounded-2xl object-cover shadow-lg mb-3"
            />
            <h3 className="font-bold text-xl text-primary">카를로 아쿠티스</h3>
            <p className="text-sm text-muted">Carlo Acutis (1991.05.03 - 2006.10.12)</p>
            <p className="text-xs text-gold mt-1">밀레니얼 세대 최초의 성인</p>
          </div>
          <div className="space-y-3 text-sm text-text">
            <p>
              이탈리아 밀라노 출생. 어린 시절부터 컴퓨터 프로그래밍에 뛰어난
              재능을 보여, 11세에 독학으로 웹 개발을 시작했습니다.
            </p>
            <p>
              전 세계 <strong className="text-primary">성체 기적</strong>을 조사하고
              문서화하는 웹사이트를 직접 설계·개발했습니다. 이 사이트는 현재까지
              수백만 명이 방문하는 <strong className="text-primary">디지털 선교의 모범 사례</strong>가
              되었습니다.
            </p>
            <p>
              2006년 15세의 나이로 급성 백혈병으로 선종.
              2020년 시복, <strong className="text-gold">2025년 9월 7일 시성</strong>.
            </p>
            <blockquote className="border-l-4 border-gold pl-4 py-2 bg-gold/5 rounded-r-lg italic text-muted">
              "우리 모두는 독창적으로 태어났는데, 많은 이들이 복사본으로 죽는다."
              <br />
              <span className="text-xs not-italic">— 카를로 아쿠티스</span>
            </blockquote>
          </div>
        </Card>

        <div className="space-y-6">
          <Card>
            <h3 className="font-bold text-lg mb-4 text-primary">왜 &ldquo;카를로 프로젝트&rdquo;인가</h3>
            <div className="space-y-4">
              {[
                {
                  n: '1',
                  t: '기술로 복음을 전한 선구자',
                  d: '15세 청년이 웹 기술로 전 세계에 성체 기적을 알림. 기술은 도구이자 사명.',
                },
                {
                  n: '2',
                  t: '인터넷의 수호성인',
                  d: '교황청이 공식 지정. 바티칸 앱(2026.01)도 그의 이름으로 봉헌.',
                },
                {
                  n: '3',
                  t: '굿뉴스 30주년과의 연결',
                  d: '1996년 굿뉴스 출범 당시 카를로는 5세. 같은 시대에 시작된 디지털 선교를 이제 혁신할 시점.',
                },
                {
                  n: '4',
                  t: '청년 세대에게 보내는 메시지',
                  d: 'WYD 2027 서울에서 카를로의 정신을 이어받아, AI 시대의 새로운 디지털 선교를 시작.',
                },
              ].map(item => (
                <div key={item.n} className="flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold text-sm shrink-0">
                    {item.n}
                  </div>
                  <div>
                    <div className="font-bold text-sm">{item.t}</div>
                    <p className="text-xs text-muted mt-1">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="bg-primary text-white !border-0">
            <h3 className="text-gold font-bold mb-3">카를로의 디지털 유산</h3>
            <div className="grid grid-cols-3 gap-4 text-center text-sm">
              <div>
                <div className="text-gold text-2xl font-bold">148+</div>
                <div className="text-white/60 text-xs">성체 기적 기록</div>
              </div>
              <div>
                <div className="text-gold text-2xl font-bold">165+</div>
                <div className="text-white/60 text-xs">전시 개최국</div>
              </div>
              <div>
                <div className="text-gold text-2xl font-bold">15세</div>
                <div className="text-white/60 text-xs">선종 나이</div>
              </div>
            </div>
            <p className="text-white/60 text-xs mt-4 text-center">
              "인터넷은 하느님의 선물입니다. 이를 통해 모든 이에게 복음을 전할 수 있습니다."
            </p>
          </Card>
        </div>
      </div>
    </Section>
  )
}
