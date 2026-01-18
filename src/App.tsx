import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Toaster } from 'react-hot-toast'

// Components
import Preloader from './components/Preloader'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Awards from './components/Awards'
import Process from './components/Process'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ParticlesBackground from './components/ParticlesBackground'
import ScrollProgress from './components/ScrollProgress'
import BlueprintBuilder from './components/BlueprintBuilder'
import ArchitecturalKeypoints from './components/ArchitecturalKeypoints'

// Hooks
import { useLenis } from './hooks/useLenis'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const mainRef = useRef<HTMLDivElement>(null)

  // Initialize Lenis smooth scroll
  useLenis()

  useEffect(() => {
    // Simulate loading time for assets
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <Toaster 
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#1a1a1a',
            color: '#D4AF37',
            border: '1px solid rgba(212, 175, 55, 0.2)',
          },
        }}
      />
      
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>

      <motion.div
        ref={mainRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative"
      >
        <ParticlesBackground />
        <Navbar />
        <main>
          <Hero />
          <About />
          <ArchitecturalKeypoints />
          <Services />
          <BlueprintBuilder />
          <Projects />
          <Process />
          <Awards />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </motion.div>
    </>
  )
}

export default App
