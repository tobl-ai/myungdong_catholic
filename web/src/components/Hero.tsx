export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary-light to-primary overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-gold blur-3xl" />
        <div className="absolute bottom-20 left-20 w-64 h-64 rounded-full bg-white blur-3xl" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <div className="text-gold/80 text-sm tracking-[0.3em] uppercase mb-6 font-medium">
          Carlo Project Consulting
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          AI 에이전트 시대,<br />
          <span className="text-gold">가톨릭 정보 시스템</span>의<br />
          새로운 길을 엽니다
        </h1>
        <p className="text-white/70 text-lg md:text-xl mb-4 max-w-2xl mx-auto leading-relaxed">
          "인터넷을 통해 신앙을 전한 카를로 아쿠티스 성인처럼,<br className="hidden md:block" />
          교회의 새 길을 엽니다."
        </p>
        <p className="text-white/50 text-sm mb-10">
          굿뉴스 30주년 · 2027 세계청년대회 · AI 시대 대비
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {[
            { n: '3.5억원', l: '컨설팅 예산' },
            { n: '6개월', l: '사업 기간' },
            { n: '30년', l: '기술 격차' },
            { n: '600만', l: '신자 규모' },
          ].map(({ n, l }) => (
            <div key={l} className="bg-white/10 backdrop-blur rounded-xl px-6 py-4 min-w-[140px]">
              <div className="text-gold text-2xl font-bold">{n}</div>
              <div className="text-white/60 text-xs mt-1">{l}</div>
            </div>
          ))}
        </div>

        <a href="#rfp" className="inline-flex items-center gap-2 text-white/60 hover:text-gold transition-colors text-sm">
          아래로 스크롤 ↓
        </a>
      </div>
    </section>
  )
}
