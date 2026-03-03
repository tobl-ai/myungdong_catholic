import { useState, useEffect } from 'react'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { CarloAcutis } from './sections/CarloAcutis'
import { RfpSummary } from './sections/RfpSummary'
import { CurrentDiagnosis } from './sections/CurrentDiagnosis'
import { BeforeAfter } from './sections/BeforeAfter'
import { Vision2027 } from './sections/Vision2027'
import { YangupErp } from './sections/YangupErp'
import { SecurityAnalysis } from './sections/SecurityAnalysis'
import { TechStack } from './sections/TechStack'
import { Benchmarking } from './sections/Benchmarking'
import { Roadmap } from './sections/Roadmap'
import { Footer } from './components/Footer'
import { WebRenewal } from './mockup/WebRenewal'
import { GoodNewsMockup } from './mockup/GoodNewsMockup'
import { AgentNative } from './mockup/AgentNative'

export default function App() {
  const [activeSection, setActiveSection] = useState('hero')
  const [route, setRoute] = useState(window.location.hash)

  useEffect(() => {
    const onHash = () => setRoute(window.location.hash)
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  if (route === '#/renewal') return <WebRenewal />
  if (route === '#/mockup') return <GoodNewsMockup />
  if (route === '#/agent') return <AgentNative />

  return (
    <div className="min-h-screen">
      <Nav active={activeSection} onNavigate={setActiveSection} />
      <main className="lg:ml-64">
        <Hero />
        <CarloAcutis />
        <RfpSummary />
        <CurrentDiagnosis />
        <BeforeAfter />
        <Vision2027 />
        <YangupErp />
        <SecurityAnalysis />
        <TechStack />
        <Benchmarking />
        <Roadmap />
        <Footer />
      </main>
    </div>
  )
}
