import { useState } from 'react'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { RfpSummary } from './sections/RfpSummary'
import { CurrentDiagnosis } from './sections/CurrentDiagnosis'
import { BeforeAfter } from './sections/BeforeAfter'
import { Vision2027 } from './sections/Vision2027'
import { YangupErp } from './sections/YangupErp'
import { SecurityAnalysis } from './sections/SecurityAnalysis'
import { TechStack } from './sections/TechStack'
import { Benchmarking } from './sections/Benchmarking'
import { Roadmap } from './sections/Roadmap'
import { UxDemo } from './sections/UxDemo'
import { Footer } from './components/Footer'

export default function App() {
  const [activeSection, setActiveSection] = useState('hero')

  return (
    <div className="min-h-screen">
      <Nav active={activeSection} onNavigate={setActiveSection} />
      <main className="lg:ml-64">
        <Hero />
        <RfpSummary />
        <CurrentDiagnosis />
        <BeforeAfter />
        <Vision2027 />
        <UxDemo />
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
