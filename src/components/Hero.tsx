import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, Play } from 'lucide-react'
import gsap from 'gsap'
import Typewriter from 'typewriter-effect'

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate text lines
      gsap.from('.hero-line', {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power4.out',
        delay: 2.8,
      })

      // Animate decorative elements
      gsap.from('.hero-decoration', {
        scale: 0,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'elastic.out(1, 0.5)',
        delay: 3.5,
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-dark-gradient" />
      
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 -left-32 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(212, 175, 55, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(212, 175, 55, 0.3) 1px, transparent 1px)`,
          backgroundSize: '100px 100px',
        }}
      />

      {/* Main Content */}
      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 text-center px-4"
      >
        <div ref={textRef} className="space-y-6">
          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.8, duration: 0.8 }}
            className="hero-line"
          >
            <span className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-gold-500/30 bg-gold-500/5 text-gold-500 text-sm tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
              Award-Winning Architect
            </span>
          </motion.div>

          {/* Main Title */}
          <div className="hero-line overflow-hidden">
            <h1 className="heading-xl">
              <span className="block text-white">Crafting</span>
              <span className="block text-gradient-gold">Visionary</span>
              <span className="block text-white">Spaces</span>
            </h1>
          </div>

          {/* Typewriter Effect */}
          <div className="hero-line h-8 text-lg md:text-xl text-gray-400 font-light">
            <Typewriter
              options={{
                strings: [
                  'Sustainable Design Solutions',
                  'Luxury Residential Architecture',
                  'Commercial Masterpieces',
                  'Urban Innovation',
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 30,
                delay: 50,
              }}
            />
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.2, duration: 0.8 }}
            className="hero-line max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed"
          >
            Where architecture meets artistry. Creating spaces that inspire, 
            innovate, and stand the test of time.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.4, duration: 0.8 }}
            className="hero-line flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
          >
            <motion.a
              href="#projects"
              className="btn-primary relative z-10 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">View Portfolio</span>
            </motion.a>

            <motion.button
              className="flex items-center gap-3 px-6 py-4 text-white group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="w-12 h-12 rounded-full border-2 border-gold-500/50 flex items-center justify-center group-hover:bg-gold-500 group-hover:border-gold-500 transition-all duration-300">
                <Play className="w-4 h-4 text-gold-500 group-hover:text-dark-900 transition-colors ml-0.5" />
              </span>
              <span className="text-gray-300 group-hover:text-gold-500 transition-colors">
                Watch Showreel
              </span>
            </motion.button>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -left-20 top-1/2 -translate-y-1/2 hidden xl:block hero-decoration">
          <div className="w-px h-32 bg-gradient-to-b from-transparent via-gold-500/50 to-transparent" />
        </div>
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 hidden xl:block hero-decoration">
          <div className="w-px h-32 bg-gradient-to-b from-transparent via-gold-500/50 to-transparent" />
        </div>
      </motion.div>

      {/* Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3.6, duration: 0.8 }}
        className="absolute bottom-32 left-0 right-0 z-10"
      >
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {[
              { number: '150+', label: 'Projects Completed' },
              { number: '25+', label: 'Years Experience' },
              { number: '40+', label: 'Awards Won' },
              { number: '12', label: 'Countries' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.8 + index * 0.1 }}
                className="text-center"
              >
                <span className="block text-3xl md:text-4xl font-display font-bold text-gradient-gold">
                  {stat.number}
                </span>
                <span className="text-sm text-gray-500 tracking-wide">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.a
          href="#about"
          className="flex flex-col items-center gap-2 text-gold-500/60 hover:text-gold-500 transition-colors cursor-pointer"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </motion.a>
      </motion.div>

      {/* Side Text */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden xl:block">
        <span className="vertical-text text-xs tracking-[0.3em] text-gold-500/40 uppercase">
          Architecture Studio
        </span>
      </div>
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:block">
        <span className="vertical-text text-xs tracking-[0.3em] text-gold-500/40 uppercase">
          Est. 2001
        </span>
      </div>
    </section>
  )
}

export default Hero
