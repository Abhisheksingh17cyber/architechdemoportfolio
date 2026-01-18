import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Award, Trophy, Medal, Star } from 'lucide-react'

const awards = [
  {
    year: '2024',
    awards: [
      { name: 'AIA Honor Award', project: 'The Aurora Residence', category: 'Residential Design' },
      { name: 'Dezeen Award', project: 'The Aurora Residence', category: 'House of the Year' },
    ],
  },
  {
    year: '2023',
    awards: [
      { name: 'CTBUH Award', project: 'Nexus Tower', category: 'Best Tall Building' },
      { name: 'Pritzker Nomination', project: 'Harmony Cultural Center', category: 'Cultural' },
      { name: 'WAF Award', project: 'Desert Oasis Villa', category: 'Completed Buildings' },
    ],
  },
  {
    year: '2022',
    awards: [
      { name: 'LEED Platinum', project: 'The Greenhouse', category: 'Sustainability' },
      { name: 'Green Building Award', project: 'The Greenhouse', category: 'Environmental Excellence' },
      { name: 'Urban Land Institute', project: 'Skyline Pavilion', category: 'Excellence in Development' },
    ],
  },
  {
    year: '2021',
    awards: [
      { name: 'Architizer A+ Award', project: 'Cascade House', category: 'Private House' },
      { name: 'RIBA International Prize', project: 'Meridian Complex', category: 'Commercial' },
    ],
  },
]

const publications = [
  'Architectural Digest',
  'Dezeen',
  'ArchDaily',
  'Wallpaper*',
  'Dwell',
  'Azure Magazine',
  'Metropolis',
  'Frame Magazine',
]

const Awards = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  return (
    <section className="section-padding relative overflow-hidden" ref={containerRef}>
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-gold-500 text-sm tracking-widest uppercase font-medium">
            Recognition
          </span>
          <h2 className="heading-lg mt-4 mb-6">
            <span className="text-white">Awards & </span>
            <span className="text-gradient-gold">Accolades</span>
          </h2>
          <p className="body-text">
            Our commitment to excellence has been recognized by leading institutions 
            and publications in the architectural world.
          </p>
        </motion.div>

        {/* Awards Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { icon: Trophy, value: '40+', label: 'International Awards' },
            { icon: Medal, value: '15+', label: 'Design Excellence' },
            { icon: Star, value: '8', label: 'Pritzker Nominations' },
            { icon: Award, value: '25+', label: 'Sustainability Awards' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="glass-card p-6 text-center group hover:gold-border-glow transition-all duration-500"
            >
              <stat.icon className="w-8 h-8 text-gold-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <span className="block text-3xl font-display font-bold text-gradient-gold">
                {stat.value}
              </span>
              <span className="text-sm text-gray-400">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Awards Timeline */}
        <div className="grid lg:grid-cols-2 gap-8">
          {awards.map((yearGroup, yearIndex) => (
            <motion.div
              key={yearGroup.year}
              initial={{ opacity: 0, x: yearIndex % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + yearIndex * 0.1 }}
              className="glass-card p-6"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl font-display font-bold text-gradient-gold">
                  {yearGroup.year}
                </span>
                <div className="flex-1 h-px bg-gradient-to-r from-gold-500/50 to-transparent" />
              </div>

              <div className="space-y-4">
                {yearGroup.awards.map((award, index) => (
                  <motion.div
                    key={award.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + yearIndex * 0.1 + index * 0.05 }}
                    className="flex items-start gap-4 p-4 rounded-lg bg-dark-700/50 hover:bg-dark-700 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500/20 transition-colors">
                      <Award className="w-5 h-5 text-gold-500" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium group-hover:text-gold-500 transition-colors">
                        {award.name}
                      </h4>
                      <p className="text-sm text-gray-400">{award.project}</p>
                      <span className="inline-block mt-1 text-xs text-gold-500/60 px-2 py-0.5 rounded-full bg-gold-500/10">
                        {award.category}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured In */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20"
        >
          <p className="text-center text-gray-500 text-sm uppercase tracking-widest mb-8">
            Featured In
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {publications.map((pub, index) => (
              <motion.span
                key={pub}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.05 }}
                className="text-gray-500 hover:text-gold-500 transition-colors cursor-default text-lg font-display"
              >
                {pub}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Awards
