import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  Building2, 
  Home, 
  Landmark, 
  TreePine, 
  Palette, 
  Ruler,
  ArrowUpRight 
} from 'lucide-react'

const services = [
  {
    icon: Building2,
    title: 'Commercial Architecture',
    description: 'Designing innovative commercial spaces that maximize productivity and create lasting impressions for businesses worldwide.',
    features: ['Office Buildings', 'Retail Spaces', 'Mixed-Use Developments'],
  },
  {
    icon: Home,
    title: 'Residential Design',
    description: 'Creating bespoke luxury homes that blend comfort with cutting-edge design, tailored to each client\'s unique lifestyle.',
    features: ['Custom Homes', 'Renovations', 'Multi-Family Housing'],
  },
  {
    icon: Landmark,
    title: 'Cultural & Public',
    description: 'Crafting iconic public spaces and cultural institutions that inspire communities and stand as landmarks for generations.',
    features: ['Museums', 'Libraries', 'Community Centers'],
  },
  {
    icon: TreePine,
    title: 'Sustainable Design',
    description: 'Pioneering eco-friendly architecture that harmonizes with nature while achieving LEED certification and beyond.',
    features: ['Green Buildings', 'Solar Integration', 'Net-Zero Design'],
  },
  {
    icon: Palette,
    title: 'Interior Architecture',
    description: 'Transforming interior spaces with meticulous attention to detail, creating environments that enhance daily living.',
    features: ['Space Planning', 'Material Selection', 'Custom Fixtures'],
  },
  {
    icon: Ruler,
    title: 'Master Planning',
    description: 'Developing comprehensive urban plans that shape cities and communities with vision, sustainability, and purpose.',
    features: ['Urban Design', 'Campus Planning', 'Landscape Integration'],
  },
]

const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.77, 0, 0.175, 1],
      },
    },
  }

  return (
    <section id="services" className="section-padding relative overflow-hidden bg-dark-800/30" ref={containerRef}>
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-dark-900 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-dark-900 to-transparent" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-gold-500 text-sm tracking-widest uppercase font-medium">
            Our Services
          </span>
          <h2 className="heading-lg mt-4 mb-6">
            <span className="text-white">Comprehensive </span>
            <span className="text-gradient-gold">Architectural</span>
            <span className="text-white"> Solutions</span>
          </h2>
          <p className="body-text">
            From concept to completion, we offer a full spectrum of architectural services 
            designed to bring your vision to life with precision and artistry.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group relative"
            >
              <div className="h-full glass-card p-8 hover:border-gold-500/40 transition-all duration-500 overflow-hidden">
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gold-500/10 flex items-center justify-center group-hover:bg-gold-500/20 transition-colors duration-300">
                    <service.icon className="w-7 h-7 text-gold-500" />
                  </div>
                  <motion.div
                    className="absolute -inset-2 rounded-xl border border-gold-500/20 opacity-0 group-hover:opacity-100"
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
                </div>

                {/* Content */}
                <h3 className="text-xl font-display font-semibold text-white mb-3 group-hover:text-gold-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-500">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Link */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-gold-500 text-sm font-medium hover:gap-3 transition-all"
                >
                  Learn More
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Have a unique project in mind? Let's discuss how we can help.
          </p>
          <motion.a
            href="#contact"
            className="btn-outline inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Start a Conversation</span>
            <ArrowUpRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
