import { motion } from 'framer-motion'

const Preloader = () => {
  const containerVariants = {
    exit: {
      y: '-100%',
      transition: {
        duration: 0.8,
        ease: [0.77, 0, 0.175, 1],
        delay: 0.2,
      },
    },
  }

  const logoVariants = {
    initial: { 
      scale: 0,
      opacity: 0,
    },
    animate: { 
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.77, 0, 0.175, 1],
      },
    },
    exit: {
      scale: 0.8,
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  }

  const textVariants = {
    initial: { 
      opacity: 0,
      y: 20,
    },
    animate: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.3,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
      },
    },
  }

  const lineVariants = {
    initial: { 
      scaleX: 0,
    },
    animate: { 
      scaleX: 1,
      transition: {
        duration: 2,
        delay: 0.5,
        ease: [0.77, 0, 0.175, 1],
      },
    },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-dark-900"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-radial-gold opacity-30" />
      
      {/* Logo/Icon */}
      <motion.div
        variants={logoVariants}
        className="relative mb-8"
      >
        <svg 
          width="120" 
          height="120" 
          viewBox="0 0 100 100" 
          className="drop-shadow-2xl"
        >
          <defs>
            <linearGradient id="goldGradLoader" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D4AF37" />
              <stop offset="50%" stopColor="#F5E6A3" />
              <stop offset="100%" stopColor="#D4AF37" />
            </linearGradient>
          </defs>
          <motion.polygon 
            points="50,10 85,90 15,90" 
            fill="none" 
            stroke="url(#goldGradLoader)" 
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
          <motion.line 
            x1="50" y1="10" x2="50" y2="90" 
            stroke="url(#goldGradLoader)" 
            strokeWidth="1.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
          />
          <motion.line 
            x1="32" y1="50" x2="68" y2="50" 
            stroke="url(#goldGradLoader)" 
            strokeWidth="1.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeInOut" }}
          />
        </svg>
        
        {/* Rotating circle */}
        <motion.div
          className="absolute -inset-4 border border-gold-500/30 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      {/* Text */}
      <motion.div variants={textVariants} className="text-center">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-gradient-gold mb-2">
          ADAM
        </h1>
        <p className="text-gold-500/60 text-sm tracking-[0.3em] uppercase">
          Architecture Studio
        </p>
      </motion.div>

      {/* Loading bar */}
      <motion.div 
        className="absolute bottom-20 left-1/2 -translate-x-1/2 w-48 h-[2px] bg-dark-700 overflow-hidden rounded-full"
      >
        <motion.div
          variants={lineVariants}
          className="h-full bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600 origin-left"
        />
      </motion.div>

      {/* Loading text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-10 text-gold-500/50 text-xs tracking-widest uppercase"
      >
        Loading Experience
      </motion.p>
    </motion.div>
  )
}

export default Preloader
