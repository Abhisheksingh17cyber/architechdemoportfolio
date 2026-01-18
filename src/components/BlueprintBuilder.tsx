import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { Play, Pause, RotateCcw, Maximize2, Building2, Layers, Grid3X3 } from 'lucide-react'

const BlueprintBuilder = () => {
  const [isBuilding, setIsBuilding] = useState(false)
  const [progress, setProgress] = useState(0)
  const [currentPhase, setCurrentPhase] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  const phases = [
    { name: 'Foundation', icon: Grid3X3, duration: 15 },
    { name: 'Structure', icon: Building2, duration: 25 },
    { name: 'Floors', icon: Layers, duration: 20 },
    { name: 'Exterior', icon: Building2, duration: 20 },
    { name: 'Details', icon: Maximize2, duration: 20 },
  ]

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>
    if (isBuilding && progress < 100) {
      interval = setInterval(() => {
        setProgress((prev) => {
          const newProgress = Math.min(prev + 0.5, 100)
          
          // Determine current phase
          let accumulated = 0
          for (let i = 0; i < phases.length; i++) {
            accumulated += phases[i].duration
            if (newProgress <= accumulated) {
              setCurrentPhase(i)
              break
            }
          }
          
          if (newProgress >= 100) {
            setIsComplete(true)
            setIsBuilding(false)
          }
          
          return newProgress
        })
      }, 50)
    }
    return () => clearInterval(interval)
  }, [isBuilding, progress])

  const handleStart = () => {
    if (isComplete) {
      setProgress(0)
      setCurrentPhase(0)
      setIsComplete(false)
    }
    setIsBuilding(true)
  }

  const handlePause = () => {
    setIsBuilding(false)
  }

  const handleReset = () => {
    setIsBuilding(false)
    setProgress(0)
    setCurrentPhase(0)
    setIsComplete(false)
  }

  // Calculate which building elements to show based on progress
  const showFoundation = progress >= 5
  const showBasement = progress >= 15
  const showFloor1 = progress >= 25
  const showFloor2 = progress >= 35
  const showFloor3 = progress >= 45
  const showFloor4 = progress >= 55
  const showRoof = progress >= 70
  const showWindows = progress >= 80
  const showDetails = progress >= 90

  return (
    <section ref={containerRef} className="py-32 relative overflow-hidden bg-dark-900">
      {/* Blueprint grid background */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px',
          }}
        />
      </div>

      {/* Blueprint paper texture overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/50 via-transparent to-blue-950/50" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mb-6 text-sm tracking-widest uppercase text-blue-400 border border-blue-500/30 rounded-full bg-blue-500/5">
            Interactive Experience
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            <span className="text-white">Blueprint</span>{' '}
            <span className="text-blue-400">Builder</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            Watch as architectural vision transforms into reality. Click start to see
            how we bring buildings to life from foundation to finish.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Blueprint Canvas */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto rounded-2xl overflow-hidden border-2 border-blue-500/30 bg-blue-950/30 backdrop-blur-sm">
              {/* Blueprint paper effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent" />
              
              {/* Grid lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                {/* Vertical grid lines */}
                {[...Array(20)].map((_, i) => (
                  <line
                    key={`v-${i}`}
                    x1={i * 20}
                    y1="0"
                    x2={i * 20}
                    y2="400"
                    stroke="rgba(59, 130, 246, 0.15)"
                    strokeWidth="0.5"
                  />
                ))}
                {/* Horizontal grid lines */}
                {[...Array(20)].map((_, i) => (
                  <line
                    key={`h-${i}`}
                    x1="0"
                    y1={i * 20}
                    x2="400"
                    y2={i * 20}
                    stroke="rgba(59, 130, 246, 0.15)"
                    strokeWidth="0.5"
                  />
                ))}
              </svg>

              {/* Building Blueprint SVG */}
              <svg className="absolute inset-0 w-full h-full p-8" viewBox="0 0 300 300">
                {/* Ground line */}
                <motion.line
                  x1="20"
                  y1="280"
                  x2="280"
                  y2="280"
                  stroke="#3B82F6"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: showFoundation ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                />

                {/* Foundation */}
                <AnimatePresence>
                  {showFoundation && (
                    <motion.rect
                      x="50"
                      y="260"
                      width="200"
                      height="20"
                      fill="none"
                      stroke="#3B82F6"
                      strokeWidth="2"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.8 }}
                    />
                  )}
                </AnimatePresence>

                {/* Basement */}
                <AnimatePresence>
                  {showBasement && (
                    <motion.g
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <motion.rect
                        x="60"
                        y="230"
                        width="180"
                        height="30"
                        fill="rgba(59, 130, 246, 0.1)"
                        stroke="#3B82F6"
                        strokeWidth="1.5"
                        strokeDasharray="5,5"
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        style={{ transformOrigin: 'bottom' }}
                      />
                      <text x="150" y="250" textAnchor="middle" fill="#3B82F6" fontSize="8" fontFamily="monospace">
                        BASEMENT
                      </text>
                    </motion.g>
                  )}
                </AnimatePresence>

                {/* Floor 1 */}
                <AnimatePresence>
                  {showFloor1 && (
                    <motion.g
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <rect x="60" y="190" width="180" height="40" fill="none" stroke="#3B82F6" strokeWidth="1.5" />
                      <line x1="60" y1="210" x2="240" y2="210" stroke="#3B82F6" strokeWidth="0.5" strokeDasharray="3,3" />
                    </motion.g>
                  )}
                </AnimatePresence>

                {/* Floor 2 */}
                <AnimatePresence>
                  {showFloor2 && (
                    <motion.g
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <rect x="60" y="150" width="180" height="40" fill="none" stroke="#3B82F6" strokeWidth="1.5" />
                      <line x1="60" y1="170" x2="240" y2="170" stroke="#3B82F6" strokeWidth="0.5" strokeDasharray="3,3" />
                    </motion.g>
                  )}
                </AnimatePresence>

                {/* Floor 3 */}
                <AnimatePresence>
                  {showFloor3 && (
                    <motion.g
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <rect x="60" y="110" width="180" height="40" fill="none" stroke="#3B82F6" strokeWidth="1.5" />
                      <line x1="60" y1="130" x2="240" y2="130" stroke="#3B82F6" strokeWidth="0.5" strokeDasharray="3,3" />
                    </motion.g>
                  )}
                </AnimatePresence>

                {/* Floor 4 - Penthouse */}
                <AnimatePresence>
                  {showFloor4 && (
                    <motion.g
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <rect x="80" y="70" width="140" height="40" fill="none" stroke="#3B82F6" strokeWidth="1.5" />
                      <text x="150" y="95" textAnchor="middle" fill="#3B82F6" fontSize="8" fontFamily="monospace">
                        PENTHOUSE
                      </text>
                    </motion.g>
                  )}
                </AnimatePresence>

                {/* Roof */}
                <AnimatePresence>
                  {showRoof && (
                    <motion.g
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <polygon
                        points="150,20 80,70 220,70"
                        fill="none"
                        stroke="#3B82F6"
                        strokeWidth="2"
                      />
                      <line x1="150" y1="20" x2="150" y2="70" stroke="#3B82F6" strokeWidth="0.5" strokeDasharray="3,3" />
                    </motion.g>
                  )}
                </AnimatePresence>

                {/* Windows */}
                <AnimatePresence>
                  {showWindows && (
                    <motion.g
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, staggerChildren: 0.1 }}
                    >
                      {/* Floor 1 windows */}
                      <rect x="80" y="195" width="20" height="30" fill="none" stroke="#60A5FA" strokeWidth="1" />
                      <rect x="120" y="195" width="60" height="30" fill="none" stroke="#60A5FA" strokeWidth="1" />
                      <rect x="200" y="195" width="20" height="30" fill="none" stroke="#60A5FA" strokeWidth="1" />
                      
                      {/* Floor 2 windows */}
                      <rect x="80" y="155" width="20" height="30" fill="none" stroke="#60A5FA" strokeWidth="1" />
                      <rect x="120" y="155" width="20" height="30" fill="none" stroke="#60A5FA" strokeWidth="1" />
                      <rect x="160" y="155" width="20" height="30" fill="none" stroke="#60A5FA" strokeWidth="1" />
                      <rect x="200" y="155" width="20" height="30" fill="none" stroke="#60A5FA" strokeWidth="1" />
                      
                      {/* Floor 3 windows */}
                      <rect x="80" y="115" width="20" height="30" fill="none" stroke="#60A5FA" strokeWidth="1" />
                      <rect x="120" y="115" width="20" height="30" fill="none" stroke="#60A5FA" strokeWidth="1" />
                      <rect x="160" y="115" width="20" height="30" fill="none" stroke="#60A5FA" strokeWidth="1" />
                      <rect x="200" y="115" width="20" height="30" fill="none" stroke="#60A5FA" strokeWidth="1" />
                      
                      {/* Penthouse windows */}
                      <rect x="100" y="75" width="30" height="30" fill="none" stroke="#60A5FA" strokeWidth="1" />
                      <rect x="170" y="75" width="30" height="30" fill="none" stroke="#60A5FA" strokeWidth="1" />
                    </motion.g>
                  )}
                </AnimatePresence>

                {/* Details - Door, Columns, etc */}
                <AnimatePresence>
                  {showDetails && (
                    <motion.g
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {/* Main entrance */}
                      <rect x="130" y="240" width="40" height="40" fill="rgba(59, 130, 246, 0.2)" stroke="#3B82F6" strokeWidth="2" />
                      <line x1="150" y1="240" x2="150" y2="280" stroke="#3B82F6" strokeWidth="1" />
                      
                      {/* Decorative columns */}
                      <rect x="55" y="190" width="5" height="90" fill="none" stroke="#60A5FA" strokeWidth="1" />
                      <rect x="240" y="190" width="5" height="90" fill="none" stroke="#60A5FA" strokeWidth="1" />
                      
                      {/* Dimension lines */}
                      <line x1="30" y1="70" x2="30" y2="280" stroke="#94A3B8" strokeWidth="0.5" />
                      <line x1="25" y1="70" x2="35" y2="70" stroke="#94A3B8" strokeWidth="0.5" />
                      <line x1="25" y1="280" x2="35" y2="280" stroke="#94A3B8" strokeWidth="0.5" />
                      <text x="20" y="175" textAnchor="middle" fill="#94A3B8" fontSize="6" fontFamily="monospace" transform="rotate(-90 20 175)">
                        210 ft
                      </text>
                      
                      {/* Labels */}
                      <text x="150" y="295" textAnchor="middle" fill="#3B82F6" fontSize="10" fontFamily="monospace" fontWeight="bold">
                        ADAM ARCHITECTS
                      </text>
                    </motion.g>
                  )}
                </AnimatePresence>

                {/* Blueprint corner marks */}
                <g stroke="#3B82F6" strokeWidth="1">
                  <path d="M10,30 L10,10 L30,10" fill="none" />
                  <path d="M270,10 L290,10 L290,30" fill="none" />
                  <path d="M290,270 L290,290 L270,290" fill="none" />
                  <path d="M30,290 L10,290 L10,270" fill="none" />
                </g>
              </svg>

              {/* Scanning line effect while building */}
              {isBuilding && (
                <motion.div
                  className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
                  initial={{ top: '100%' }}
                  animate={{ top: `${100 - progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              )}

              {/* Completion glow effect */}
              <AnimatePresence>
                {isComplete && (
                  <motion.div
                    className="absolute inset-0 bg-blue-500/10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0.3, 0] }}
                    transition={{ duration: 1.5, repeat: 2 }}
                  />
                )}
              </AnimatePresence>
            </div>

            {/* Blueprint title stamp */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-blue-500/50 rounded-full flex items-center justify-center bg-dark-900 rotate-12">
              <div className="text-center">
                <span className="text-blue-400 text-xs font-mono">APPROVED</span>
                <div className="text-blue-500 text-lg font-bold">AA</div>
              </div>
            </div>
          </motion.div>

          {/* Controls & Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Progress Bar */}
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Construction Progress</span>
                <span className="text-blue-400 font-mono">{Math.round(progress)}%</span>
              </div>
              <div className="h-3 bg-dark-800 rounded-full overflow-hidden border border-blue-500/20">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-600 via-blue-400 to-blue-500 rounded-full"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
            </div>

            {/* Phase Indicators */}
            <div className="space-y-3">
              <span className="text-sm text-gray-400">Building Phases</span>
              <div className="grid grid-cols-5 gap-2">
                {phases.map((phase, index) => {
                  const Icon = phase.icon
                  const isActive = index === currentPhase && isBuilding
                  const isCompleted = index < currentPhase || (index === currentPhase && progress >= phases.slice(0, index + 1).reduce((a, b) => a + b.duration, 0))
                  
                  return (
                    <motion.div
                      key={phase.name}
                      className={`p-3 rounded-lg border text-center transition-all duration-300 ${
                        isActive
                          ? 'border-blue-400 bg-blue-500/20 shadow-lg shadow-blue-500/20'
                          : isCompleted
                          ? 'border-blue-500/50 bg-blue-500/10'
                          : 'border-gray-700 bg-dark-800/50'
                      }`}
                      animate={isActive ? { scale: [1, 1.05, 1] } : {}}
                      transition={{ duration: 0.5, repeat: isActive ? Infinity : 0 }}
                    >
                      <Icon className={`w-5 h-5 mx-auto mb-1 ${
                        isActive ? 'text-blue-400' : isCompleted ? 'text-blue-500' : 'text-gray-600'
                      }`} />
                      <span className={`text-xs ${
                        isActive ? 'text-blue-400' : isCompleted ? 'text-blue-500' : 'text-gray-500'
                      }`}>
                        {phase.name}
                      </span>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            {/* Control Buttons */}
            <div className="flex gap-4">
              {!isBuilding ? (
                <motion.button
                  onClick={handleStart}
                  className="flex-1 flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Play className="w-5 h-5" />
                  {isComplete ? 'Rebuild' : 'Start Construction'}
                </motion.button>
              ) : (
                <motion.button
                  onClick={handlePause}
                  className="flex-1 flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-500 text-white font-semibold rounded-xl shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Pause className="w-5 h-5" />
                  Pause
                </motion.button>
              )}
              
              <motion.button
                onClick={handleReset}
                className="px-6 py-4 border border-gray-700 text-gray-400 rounded-xl hover:border-blue-500/50 hover:text-blue-400 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <RotateCcw className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Status Message */}
            <AnimatePresence mode="wait">
              <motion.div
                key={isComplete ? 'complete' : currentPhase}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="p-4 rounded-xl border border-blue-500/20 bg-blue-500/5"
              >
                {isComplete ? (
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                    <div>
                      <span className="text-green-400 font-semibold">Construction Complete!</span>
                      <p className="text-gray-400 text-sm">The building is ready for occupancy.</p>
                    </div>
                  </div>
                ) : isBuilding ? (
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse" />
                    <div>
                      <span className="text-blue-400 font-semibold">
                        Building {phases[currentPhase]?.name}...
                      </span>
                      <p className="text-gray-400 text-sm">Precision engineering in progress.</p>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-gray-500" />
                    <div>
                      <span className="text-gray-400">Ready to begin construction</span>
                      <p className="text-gray-500 text-sm">Click start to watch the building process.</p>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Technical specs */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-gray-800 bg-dark-800/50">
                <span className="text-gray-500 text-xs uppercase tracking-wider">Total Floors</span>
                <p className="text-2xl font-bold text-white mt-1">4 + Basement</p>
              </div>
              <div className="p-4 rounded-xl border border-gray-800 bg-dark-800/50">
                <span className="text-gray-500 text-xs uppercase tracking-wider">Building Height</span>
                <p className="text-2xl font-bold text-white mt-1">210 ft</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default BlueprintBuilder
