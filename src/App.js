import React from 'react'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import About from './Components/About'
import ConsultationBanner from './Components/ConsultationBanner'
import Skills from './Components/Skills'
import TestimonialsSection from './Components/TestimonialsSection'
import ContactSection from './Components/ContactSection'
import Footer from './Components/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      <ConsultationBanner />
     <div className='min-h-[200vh] relative'>  <Skills /></div>
      <TestimonialsSection /> 
      <ConsultationBanner />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App