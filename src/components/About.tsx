import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Award, Compass, Leaf, Lightbulb } from 'lucide-react'

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  const stats = [
    { icon: Award, value: '40+', label: 'International Awards' },
    { icon: Compass, value: '150+', label: 'Projects Delivered' },
    { icon: Leaf, value: '100%', label: 'Sustainable Designs' },
    { icon: Lightbulb, value: '25+', label: 'Years of Innovation' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.77, 0, 0.175, 1],
      },
    },
  }

  return (
    <section id="about" className="section-padding relative overflow-hidden" ref={containerRef}>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-radial-gold opacity-20" />
      
      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <span className="text-gold-500 text-sm tracking-widest uppercase font-medium">
                About Adam
              </span>
              <h2 className="heading-lg mt-4">
                <span className="text-white">Designing the </span>
                <span className="text-gradient-gold">Future</span>
                <span className="text-white"> of Living</span>
              </h2>
            </motion.div>

            <motion.p variants={itemVariants} className="body-text">
              With over 25 years of experience in architectural excellence, I've dedicated 
              my career to pushing the boundaries of design. Every project is a unique 
              opportunity to create spaces that not only serve their purpose but elevate 
              the human experience.
            </motion.p>

            <motion.p variants={itemVariants} className="body-text">
              My philosophy centers on the harmonious blend of aesthetics, functionality, 
              and sustainability. From luxury residences to landmark commercial projects, 
              each design tells a story of innovation and timeless elegance.
            </motion.p>

            {/* Philosophy Points */}
            <motion.div variants={itemVariants} className="grid sm:grid-cols-2 gap-4 pt-4">
              {[
                'Sustainable Innovation',
                'Human-Centric Design',
                'Timeless Aesthetics',
                'Functional Excellence',
              ].map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-3 p-4 rounded-lg bg-dark-800/50 border border-gold-500/10 hover:border-gold-500/30 transition-colors"
                >
                  <div className="w-2 h-2 rounded-full bg-gold-500" />
                  <span className="text-gray-300 text-sm">{point}</span>
                </div>
              ))}
            </motion.div>

            {/* Signature */}
            <motion.div variants={itemVariants} className="flex items-center gap-6 pt-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold-500 to-gold-700 p-0.5">
                <div className="w-full h-full rounded-full bg-dark-900 flex items-center justify-center">
                  <span className="text-gold-500 font-display text-xl font-bold">A</span>
                </div>
              </div>
              <div>
                <p className="text-white font-display text-lg">Adam Richardson</p>
                <p className="text-gold-500 text-sm">Principal Architect & Founder</p>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Image Grid */}
          <motion.div variants={itemVariants} className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Main Image */}
              <div className="col-span-2 relative overflow-hidden rounded-2xl">
                <motion.div
                  className="aspect-[16/10] bg-gradient-to-br from-dark-700 to-dark-800 relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80')`,
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm font-medium">Azure Tower, Dubai</p>
                    <p className="text-gold-500 text-xs">Award-winning Sustainable Design</p>
                  </div>
                </motion.div>
              </div>

              {/* Smaller Images */}
              <motion.div
                className="aspect-square relative overflow-hidden rounded-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80')`,
                  }}
                />
                <div className="absolute inset-0 bg-dark-900/30" />
              </motion.div>

              <motion.div
                className="aspect-square relative overflow-hidden rounded-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=400&q=80')`,
                  }}
                />
                <div className="absolute inset-0 bg-dark-900/30" />
              </motion.div>
            </div>

            {/* Experience Badge */}
            <motion.div
              className="absolute -bottom-6 -left-6 glass-card p-6 gold-glow"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <span className="text-4xl font-display font-bold text-gradient-gold">25+</span>
              <p className="text-gray-400 text-sm mt-1">Years of<br />Excellence</p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-24"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="glass-card p-6 text-center hover:gold-border-glow transition-all duration-500 group"
            >
              <stat.icon className="w-8 h-8 text-gold-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <span className="block text-3xl font-display font-bold text-white mb-2">
                {stat.value}
              </span>
              <span className="text-sm text-gray-400">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About
