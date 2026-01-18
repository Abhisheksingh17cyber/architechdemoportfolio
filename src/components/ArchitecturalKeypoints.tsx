import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  Compass, 
  Ruler, 
  PenTool, 
  Layers, 
  Building, 
  Lightbulb,
  Shield,
  Leaf,
  Maximize,
  Palette
} from 'lucide-react'

const ArchitecturalKeypoints = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  const keypoints = [
    {
      icon: Compass,
      title: 'Precision Planning',
      description: 'Every angle calculated to perfection, ensuring structural integrity and aesthetic harmony.',
      stat: '0.01°',
      statLabel: 'Accuracy',
      color: 'gold'
    },
    {
      icon: Ruler,
      title: 'Golden Ratio Design',
      description: 'Incorporating timeless proportions that create naturally pleasing visual experiences.',
      stat: '1.618',
      statLabel: 'Phi Ratio',
      color: 'gold'
    },
    {
      icon: Layers,
      title: 'Layered Complexity',
      description: 'Multi-dimensional designs that reveal new details at every scale of observation.',
      stat: '12+',
      statLabel: 'Design Layers',
      color: 'gold'
    },
    {
      icon: Lightbulb,
      title: 'Innovative Solutions',
      description: 'Pushing boundaries with cutting-edge materials and construction techniques.',
      stat: '40+',
      statLabel: 'Patents',
      color: 'gold'
    },
    {
      icon: Shield,
      title: 'Built to Last',
      description: 'Structures engineered to withstand the test of time and nature\'s forces.',
      stat: '100yr',
      statLabel: 'Warranty',
      color: 'gold'
    },
    {
      icon: Leaf,
      title: 'Sustainable Future',
      description: 'Eco-conscious designs that minimize environmental impact while maximizing efficiency.',
      stat: 'LEED',
      statLabel: 'Certified',
      color: 'gold'
    }
  ]

  const principles = [
    { icon: Building, label: 'Form Follows Function', value: 'Core Philosophy' },
    { icon: Maximize, label: 'Spatial Optimization', value: '100% Efficiency' },
    { icon: PenTool, label: 'Handcrafted Details', value: 'Bespoke Design' },
    { icon: Palette, label: 'Material Harmony', value: 'Natural Elements' },
  ]

  return (
    <section ref={containerRef} className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-900" />
      
      {/* Architectural lines decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute w-full h-full" viewBox="0 0 1920 1080" preserveAspectRatio="none">
          {/* Diagonal structural lines */}
          <motion.line
            x1="0" y1="0" x2="600" y2="1080"
            stroke="rgba(212, 175, 55, 0.08)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : {}}
            transition={{ duration: 2, delay: 0.5 }}
          />
          <motion.line
            x1="200" y1="0" x2="800" y2="1080"
            stroke="rgba(212, 175, 55, 0.05)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : {}}
            transition={{ duration: 2, delay: 0.7 }}
          />
          <motion.line
            x1="1920" y1="0" x2="1320" y2="1080"
            stroke="rgba(212, 175, 55, 0.08)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : {}}
            transition={{ duration: 2, delay: 0.5 }}
          />
          <motion.line
            x1="1720" y1="0" x2="1120" y2="1080"
            stroke="rgba(212, 175, 55, 0.05)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : {}}
            transition={{ duration: 2, delay: 0.7 }}
          />
          
          {/* Horizontal perspective lines */}
          <motion.line
            x1="0" y1="540" x2="1920" y2="540"
            stroke="rgba(212, 175, 55, 0.03)"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : {}}
            transition={{ duration: 1.5, delay: 1 }}
          />
        </svg>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 mb-6 text-sm tracking-widest uppercase text-gold-500 border border-gold-500/30 rounded-full bg-gold-500/5">
            Our Foundation
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            <span className="text-white">Architectural</span>{' '}
            <span className="text-gradient-gold">Excellence</span>
          </h2>
          <p className="max-w-3xl mx-auto text-gray-400 text-lg leading-relaxed">
            Every masterpiece begins with fundamental principles. These are the cornerstones 
            of our design philosophy that guide every line we draw.
          </p>
        </motion.div>

        {/* Structural Framework Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative mb-24"
        >
          <div className="max-w-4xl mx-auto">
            {/* Central structure visualization */}
            <div className="relative aspect-[2/1] rounded-3xl overflow-hidden border border-gold-500/20 bg-dark-800/30 backdrop-blur-sm">
              <svg className="w-full h-full" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid meet">
                {/* Grid background */}
                <defs>
                  <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(212, 175, 55, 0.05)" strokeWidth="0.5"/>
                  </pattern>
                  <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                    <rect width="100" height="100" fill="url(#smallGrid)"/>
                    <path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(212, 175, 55, 0.1)" strokeWidth="1"/>
                  </pattern>
                  <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#D4AF37" />
                    <stop offset="50%" stopColor="#F5E6A3" />
                    <stop offset="100%" stopColor="#D4AF37" />
                  </linearGradient>
                </defs>
                
                <rect width="100%" height="100%" fill="url(#grid)" />
                
                {/* Main building outline */}
                <motion.g
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  {/* Left tower */}
                  <motion.rect
                    x="100" y="80" width="120" height="280"
                    fill="none"
                    stroke="url(#goldGradient)"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={isInView ? { pathLength: 1 } : {}}
                    transition={{ duration: 1.5, delay: 0.6 }}
                  />
                  
                  {/* Center structure */}
                  <motion.rect
                    x="220" y="150" width="360" height="210"
                    fill="rgba(212, 175, 55, 0.03)"
                    stroke="#D4AF37"
                    strokeWidth="2"
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 1, delay: 0.8 }}
                    style={{ transformOrigin: 'center' }}
                  />
                  
                  {/* Right tower */}
                  <motion.rect
                    x="580" y="80" width="120" height="280"
                    fill="none"
                    stroke="url(#goldGradient)"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={isInView ? { pathLength: 1 } : {}}
                    transition={{ duration: 1.5, delay: 0.6 }}
                  />
                  
                  {/* Roof structure */}
                  <motion.polygon
                    points="400,30 100,80 700,80"
                    fill="none"
                    stroke="#D4AF37"
                    strokeWidth="2"
                    initial={{ opacity: 0, y: -20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 1.2 }}
                  />
                  
                  {/* Connection beams */}
                  <motion.line
                    x1="220" y1="200" x2="580" y2="200"
                    stroke="rgba(212, 175, 55, 0.5)"
                    strokeWidth="1"
                    strokeDasharray="10,5"
                    initial={{ pathLength: 0 }}
                    animate={isInView ? { pathLength: 1 } : {}}
                    transition={{ duration: 1, delay: 1.5 }}
                  />
                  <motion.line
                    x1="220" y1="280" x2="580" y2="280"
                    stroke="rgba(212, 175, 55, 0.5)"
                    strokeWidth="1"
                    strokeDasharray="10,5"
                    initial={{ pathLength: 0 }}
                    animate={isInView ? { pathLength: 1 } : {}}
                    transition={{ duration: 1, delay: 1.6 }}
                  />
                  
                  {/* Measurement annotations */}
                  <motion.g
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 2 }}
                  >
                    <line x1="100" y1="380" x2="700" y2="380" stroke="#D4AF37" strokeWidth="1" />
                    <line x1="100" y1="375" x2="100" y2="385" stroke="#D4AF37" strokeWidth="1" />
                    <line x1="700" y1="375" x2="700" y2="385" stroke="#D4AF37" strokeWidth="1" />
                    <text x="400" y="395" textAnchor="middle" fill="#D4AF37" fontSize="12" fontFamily="monospace">
                      600 ft
                    </text>
                  </motion.g>
                  
                  {/* Golden ratio spiral hint */}
                  <motion.path
                    d="M 400 200 Q 450 180 480 220 Q 500 260 460 290 Q 420 310 380 280 Q 350 250 370 210 Q 390 180 400 200"
                    fill="none"
                    stroke="rgba(212, 175, 55, 0.3)"
                    strokeWidth="1"
                    strokeDasharray="5,5"
                    initial={{ pathLength: 0 }}
                    animate={isInView ? { pathLength: 1 } : {}}
                    transition={{ duration: 2, delay: 1.8 }}
                  />
                </motion.g>
                
                {/* Center label */}
                <motion.text
                  x="400" y="255"
                  textAnchor="middle"
                  fill="#D4AF37"
                  fontSize="14"
                  fontFamily="serif"
                  fontWeight="bold"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 2.2 }}
                >
                  ADAM ARCHITECTS
                </motion.text>
                <motion.text
                  x="400" y="275"
                  textAnchor="middle"
                  fill="rgba(212, 175, 55, 0.6)"
                  fontSize="10"
                  fontFamily="monospace"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 2.3 }}
                >
                  STRUCTURAL ELEVATION • SCALE 1:500
                </motion.text>
              </svg>
              
              {/* Corner decorations */}
              <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-gold-500/50" />
              <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-gold-500/50" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-gold-500/50" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-gold-500/50" />
            </div>
          </div>
        </motion.div>

        {/* Design Principles Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20"
        >
          {principles.map((principle, index) => {
            const Icon = principle.icon
            return (
              <motion.div
                key={principle.label}
                className="relative p-6 rounded-2xl border border-gold-500/20 bg-dark-800/30 backdrop-blur-sm overflow-hidden group hover:border-gold-500/40 transition-all duration-500"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <Icon className="w-8 h-8 text-gold-500 mb-3" />
                  <h4 className="text-white font-semibold mb-1">{principle.label}</h4>
                  <span className="text-gold-500/70 text-sm">{principle.value}</span>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Keypoints Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {keypoints.map((point, index) => {
            const Icon = point.icon
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="group"
              >
                <div className="relative h-full p-8 rounded-2xl border border-gold-500/10 bg-dark-800/20 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-gold-500/30 hover:bg-dark-800/40">
                  {/* Hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gold-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-20 h-20">
                    <svg viewBox="0 0 80 80" className="w-full h-full">
                      <path
                        d="M80 0 L80 80 L0 80"
                        fill="none"
                        stroke="rgba(212, 175, 55, 0.1)"
                        strokeWidth="1"
                      />
                      <path
                        d="M80 0 L80 40 L40 80"
                        fill="none"
                        stroke="rgba(212, 175, 55, 0.2)"
                        strokeWidth="1"
                        className="group-hover:stroke-gold-500/40 transition-colors duration-500"
                      />
                    </svg>
                  </div>
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mb-6 group-hover:bg-gold-500/20 group-hover:border-gold-500/40 transition-all duration-500">
                      <Icon className="w-7 h-7 text-gold-500" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-gold-400 transition-colors duration-300">
                      {point.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      {point.description}
                    </p>
                    
                    {/* Stat */}
                    <div className="flex items-end gap-2">
                      <span className="text-3xl font-bold text-gradient-gold">{point.stat}</span>
                      <span className="text-gray-500 text-sm pb-1">{point.statLabel}</span>
                    </div>
                  </div>
                  
                  {/* Bottom line */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-20"
        >
          <blockquote className="max-w-3xl mx-auto">
            <p className="text-2xl md:text-3xl font-display italic text-gray-300 mb-6">
              "Architecture is the learned game, correct and magnificent, 
              of forms assembled in the light."
            </p>
            <cite className="text-gold-500 text-lg not-italic">— Le Corbusier</cite>
          </blockquote>
        </motion.div>
      </div>
    </section>
  )
}

export default ArchitecturalKeypoints
