import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, MapPin, Calendar, Award, X } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'The Aurora Residence',
    category: 'Residential',
    location: 'Malibu, California',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
    description: 'A stunning cliffside residence that seamlessly blends indoor and outdoor living with panoramic ocean views.',
    awards: ['AIA Honor Award', 'Dezeen Award'],
    area: '12,500 sq ft',
    featured: true,
  },
  {
    id: 2,
    title: 'Nexus Tower',
    category: 'Commercial',
    location: 'Singapore',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    description: 'A 45-story sustainable office tower featuring vertical gardens and innovative energy systems.',
    awards: ['CTBUH Award'],
    area: '850,000 sq ft',
    featured: true,
  },
  {
    id: 3,
    title: 'Harmony Cultural Center',
    category: 'Cultural',
    location: 'Tokyo, Japan',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&q=80',
    description: 'A contemporary cultural space celebrating traditional Japanese architecture with modern interpretations.',
    awards: ['Pritzker Nomination'],
    area: '75,000 sq ft',
    featured: true,
  },
  {
    id: 4,
    title: 'Desert Oasis Villa',
    category: 'Residential',
    location: 'Dubai, UAE',
    year: '2022',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    description: 'A luxury desert retreat featuring passive cooling systems and indigenous landscaping.',
    awards: ['WAF Award'],
    area: '18,000 sq ft',
    featured: false,
  },
  {
    id: 5,
    title: 'The Greenhouse',
    category: 'Sustainable',
    location: 'Copenhagen, Denmark',
    year: '2022',
    image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&q=80',
    description: 'A revolutionary zero-carbon office building that produces more energy than it consumes.',
    awards: ['LEED Platinum', 'Green Building Award'],
    area: '120,000 sq ft',
    featured: false,
  },
  {
    id: 6,
    title: 'Skyline Pavilion',
    category: 'Commercial',
    location: 'New York, USA',
    year: '2021',
    image: 'https://images.unsplash.com/photo-1577495508326-19a1b3cf65b7?w=800&q=80',
    description: 'A striking mixed-use development redefining the Manhattan skyline with sustainable luxury.',
    awards: ['Urban Land Institute Award'],
    area: '450,000 sq ft',
    featured: false,
  },
]

const categories = ['All', 'Residential', 'Commercial', 'Cultural', 'Sustainable']

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  const filteredProjects = projects.filter(
    (project) => activeFilter === 'All' || project.category === activeFilter
  )

  return (
    <section id="projects" className="section-padding relative overflow-hidden" ref={containerRef}>
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-gold-500 text-sm tracking-widest uppercase font-medium">
            Portfolio
          </span>
          <h2 className="heading-lg mt-4 mb-6">
            <span className="text-white">Selected </span>
            <span className="text-gradient-gold">Works</span>
          </h2>
          <p className="body-text">
            Explore our collection of award-winning projects that showcase our commitment 
            to innovative design and architectural excellence.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-gold-500 text-dark-900'
                  : 'bg-dark-800 text-gray-400 hover:text-gold-500 border border-gold-500/20'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`group cursor-pointer ${
                  project.featured ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                  {/* Image */}
                  <motion.div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${project.image}')` }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.7 }}
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gold-500/90 text-dark-900 text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-2 text-gold-500/80 text-sm mb-2">
                      <MapPin className="w-3 h-3" />
                      <span>{project.location}</span>
                      <span className="mx-2">•</span>
                      <Calendar className="w-3 h-3" />
                      <span>{project.year}</span>
                    </div>
                    
                    <h3 className="text-xl font-display font-semibold text-white group-hover:text-gold-500 transition-colors">
                      {project.title}
                    </h3>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <div className="flex items-center gap-2 text-gold-500">
                        <span className="text-sm">View Project</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Hover Border */}
                  <div className="absolute inset-0 border-2 border-gold-500/0 group-hover:border-gold-500/50 rounded-2xl transition-colors duration-500" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.button
            className="btn-outline inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View All Projects</span>
            <ArrowUpRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-900/95 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              className="relative max-w-4xl w-full bg-dark-800 rounded-2xl overflow-hidden border border-gold-500/20"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-dark-900/80 flex items-center justify-center text-white hover:text-gold-500 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid md:grid-cols-2">
                {/* Image */}
                <div 
                  className="aspect-square bg-cover bg-center"
                  style={{ backgroundImage: `url('${selectedProject.image}')` }}
                />

                {/* Content */}
                <div className="p-8 flex flex-col justify-center">
                  <span className="text-gold-500 text-sm tracking-wider uppercase mb-2">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-3xl font-display font-bold text-white mb-4">
                    {selectedProject.title}
                  </h3>
                  
                  <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-gold-500" />
                      {selectedProject.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4 text-gold-500" />
                      {selectedProject.year}
                    </div>
                  </div>

                  <p className="text-gray-400 mb-6">
                    {selectedProject.description}
                  </p>

                  <div className="mb-6">
                    <span className="text-xs text-gray-500 uppercase tracking-wider">Project Area</span>
                    <p className="text-white font-medium">{selectedProject.area}</p>
                  </div>

                  {/* Awards */}
                  {selectedProject.awards.length > 0 && (
                    <div>
                      <span className="text-xs text-gray-500 uppercase tracking-wider">Awards</span>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {selectedProject.awards.map((award) => (
                          <span
                            key={award}
                            className="inline-flex items-center gap-1 px-3 py-1 bg-gold-500/10 text-gold-500 text-xs rounded-full"
                          >
                            <Award className="w-3 h-3" />
                            {award}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <motion.a
                    href="#contact"
                    className="btn-primary mt-8 text-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedProject(null)}
                  >
                    <span className="relative z-10">Discuss Similar Project</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects
