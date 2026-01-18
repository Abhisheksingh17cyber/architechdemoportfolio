import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  Search, 
  Compass, 
  PenTool, 
  FileCheck, 
  Hammer, 
  KeyRound 
} from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Discovery',
    description: 'We begin by understanding your vision, requirements, and the unique characteristics of your site through in-depth consultations.',
    duration: '2-3 Weeks',
  },
  {
    number: '02',
    icon: Compass,
    title: 'Concept Development',
    description: 'Our team develops initial design concepts, exploring creative solutions that align with your goals and budget.',
    duration: '4-6 Weeks',
  },
  {
    number: '03',
    icon: PenTool,
    title: 'Design Development',
    description: 'We refine the chosen concept into detailed designs, including 3D visualizations and material selections.',
    duration: '6-8 Weeks',
  },
  {
    number: '04',
    icon: FileCheck,
    title: 'Documentation',
    description: 'Complete construction documents are prepared, ensuring every detail is specified for seamless execution.',
    duration: '8-12 Weeks',
  },
  {
    number: '05',
    icon: Hammer,
    title: 'Construction',
    description: 'We oversee the building process, ensuring quality control and design integrity throughout construction.',
    duration: 'Varies',
  },
  {
    number: '06',
    icon: KeyRound,
    title: 'Completion',
    description: 'Final walkthrough and handover, with ongoing support to ensure your complete satisfaction.',
    duration: '2-4 Weeks',
  },
]

const Process = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  return (
    <section id="process" className="section-padding relative overflow-hidden bg-dark-800/30" ref={containerRef}>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-radial-gold opacity-10" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-gold-500 text-sm tracking-widest uppercase font-medium">
            Our Process
          </span>
          <h2 className="heading-lg mt-4 mb-6">
            <span className="text-white">From Vision to </span>
            <span className="text-gradient-gold">Reality</span>
          </h2>
          <p className="body-text">
            Our proven design process ensures every project is delivered with precision, 
            creativity, and attention to detail at every stage.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold-500/30 to-transparent hidden lg:block" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`lg:grid lg:grid-cols-2 lg:gap-16 items-center ${
                  index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div
                  className={`relative ${
                    index % 2 === 0 ? 'lg:text-right lg:pr-16' : 'lg:pl-16 lg:order-2'
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glass-card p-8 group hover:border-gold-500/40 transition-all duration-500"
                  >
                    {/* Number badge */}
                    <div className={`flex items-center gap-4 mb-4 ${
                      index % 2 === 0 ? 'lg:justify-end' : ''
                    }`}>
                      <span className="text-5xl font-display font-bold text-gold-500/20 group-hover:text-gold-500/40 transition-colors">
                        {step.number}
                      </span>
                    </div>

                    <div className={`flex items-center gap-4 mb-4 ${
                      index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                    }`}>
                      <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center group-hover:bg-gold-500/20 transition-colors">
                        <step.icon className="w-6 h-6 text-gold-500" />
                      </div>
                      <h3 className="text-2xl font-display font-semibold text-white group-hover:text-gold-500 transition-colors">
                        {step.title}
                      </h3>
                    </div>

                    <p className="text-gray-400 mb-4">
                      {step.description}
                    </p>

                    <div className={`flex items-center gap-2 text-gold-500 text-sm ${
                      index % 2 === 0 ? 'lg:justify-end' : ''
                    }`}>
                      <span className="w-2 h-2 rounded-full bg-gold-500" />
                      <span>Duration: {step.duration}</span>
                    </div>
                  </motion.div>
                </div>

                {/* Center dot */}
                <div className={`hidden lg:flex justify-center ${
                  index % 2 === 0 ? 'order-2' : 'order-1'
                }`}>
                  <motion.div
                    className="w-4 h-4 rounded-full bg-gold-500 relative"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: index * 0.15 + 0.3 }}
                  >
                    <motion.div
                      className="absolute inset-0 rounded-full bg-gold-500"
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>
                </div>

                {/* Empty space for alternating layout */}
                <div className={`hidden lg:block ${
                  index % 2 === 0 ? 'order-3' : 'order-3'
                }`} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Ready to start your architectural journey?
          </p>
          <motion.a
            href="#contact"
            className="btn-primary inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Begin Your Project</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Process
