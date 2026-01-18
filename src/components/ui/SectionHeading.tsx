import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

interface SectionHeadingProps {
  subtitle: string
  title: string
  highlightedWord: string
  description?: string
  centered?: boolean
}

const SectionHeading = ({ 
  subtitle, 
  title, 
  highlightedWord, 
  description,
  centered = true 
}: SectionHeadingProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  // Split title to insert highlighted word
  const titleParts = title.split(highlightedWord)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className={`max-w-3xl mb-16 ${centered ? 'mx-auto text-center' : ''}`}
    >
      {/* Subtitle */}
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="inline-flex items-center gap-2 text-gold-500 text-sm tracking-widest uppercase font-medium"
      >
        <span className="w-8 h-px bg-gold-500" />
        {subtitle}
        <span className="w-8 h-px bg-gold-500" />
      </motion.span>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="heading-lg mt-4 mb-6"
      >
        {titleParts[0]}
        <span className="text-gradient-gold">{highlightedWord}</span>
        {titleParts[1]}
      </motion.h2>

      {/* Description */}
      {description && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="body-text"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  )
}

export default SectionHeading
