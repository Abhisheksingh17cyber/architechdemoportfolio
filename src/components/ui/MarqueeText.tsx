import { motion } from 'framer-motion'

const MarqueeText = () => {
  const words = [
    'ARCHITECTURE',
    '•',
    'INNOVATION',
    '•',
    'SUSTAINABILITY',
    '•',
    'EXCELLENCE',
    '•',
    'DESIGN',
    '•',
    'LUXURY',
    '•',
  ]

  return (
    <div className="relative overflow-hidden py-8 bg-dark-800/30 border-y border-gold-500/10">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: [0, -1920],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 30,
            ease: 'linear',
          },
        }}
      >
        {/* Duplicate content for seamless loop */}
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center">
            {words.map((word, index) => (
              <span
                key={`${i}-${index}`}
                className={`mx-8 text-4xl md:text-5xl lg:text-6xl font-display font-bold ${
                  word === '•' ? 'text-gold-500' : 'text-dark-700 hover:text-gold-500/30 transition-colors'
                }`}
              >
                {word}
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default MarqueeText
