import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

interface TextRevealProps {
  text: string
  className?: string
}

const TextReveal = ({ text, className = '' }: TextRevealProps) => {
  const ref = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  })

  const words = text.split(' ')

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <div className="flex flex-wrap">
        {words.map((word, index) => {
          const start = index / words.length
          const end = start + 1 / words.length
          
          return (
            <Word key={index} progress={scrollYProgress} range={[start, end]}>
              {word}
            </Word>
          )
        })}
      </div>
    </div>
  )
}

interface WordProps {
  children: string
  progress: any
  range: [number, number]
}

const Word = ({ children, progress, range }: WordProps) => {
  const opacity = useTransform(progress, range, [0.2, 1])
  const y = useTransform(progress, range, [20, 0])

  return (
    <motion.span 
      style={{ opacity, y }} 
      className="mr-3 inline-block"
    >
      {children}
    </motion.span>
  )
}

export default TextReveal
