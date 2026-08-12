import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import CoursesSection from './components/CoursesSection'
import JourneyTimeline from './components/JourneyTimeline'
import MethodologySection from './components/MethodologySection'
import DifferentiatorsSection from './components/DifferentiatorsSection'
import CertificationBanner from './components/CertificationBanner'
import FaqAccordion from './components/FaqAccordion'
import FinalCta from './components/FinalCta'
import Footer from './components/Footer'
import WhatsAppFloatButton from './components/WhatsAppFloatButton'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <CoursesSection />
        <JourneyTimeline />
        <MethodologySection />
        <DifferentiatorsSection />
        <CertificationBanner />
        <FaqAccordion />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFloatButton />
    </>
  )
}

export default App
