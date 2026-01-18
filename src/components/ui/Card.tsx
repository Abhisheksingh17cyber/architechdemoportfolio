import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { LucideIcon } from 'lucide-react'

interface GlassCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  glow?: boolean
}

export const GlassCard = ({ 
  children, 
  className = '', 
  hover = true,
  glow = false 
}: GlassCardProps) => {
  return (
    <motion.div
      className={`
        backdrop-blur-xl bg-dark-800/60 border border-gold-500/20 rounded-2xl
        ${hover ? 'hover:border-gold-500/40 transition-all duration-500' : ''}
        ${glow ? 'gold-border-glow' : ''}
        ${className}
      `}
      whileHover={hover ? { y: -5 } : {}}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  )
}

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  index?: number
}

export const FeatureCard = ({ icon: Icon, title, description, index = 0 }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <GlassCard className="p-8 h-full">
        {/* Icon */}
        <div className="relative mb-6">
          <div className="w-14 h-14 rounded-xl bg-gold-500/10 flex items-center justify-center group-hover:bg-gold-500/20 transition-colors duration-300">
            <Icon className="w-7 h-7 text-gold-500" />
          </div>
          <motion.div
            className="absolute -inset-2 rounded-xl border border-gold-500/20 opacity-0 group-hover:opacity-100"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
        </div>

        {/* Content */}
        <h3 className="text-xl font-display font-semibold text-white mb-3 group-hover:text-gold-500 transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          {description}
        </p>
      </GlassCard>
    </motion.div>
  )
}

interface StatsCardProps {
  value: string
  label: string
  icon?: LucideIcon
  index?: number
}

export const StatsCard = ({ value, label, icon: Icon, index = 0 }: StatsCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <GlassCard className="p-6 text-center" glow>
        {Icon && (
          <Icon className="w-8 h-8 text-gold-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
        )}
        <span className="block text-3xl font-display font-bold text-gradient-gold mb-2">
          {value}
        </span>
        <span className="text-sm text-gray-400">{label}</span>
      </GlassCard>
    </motion.div>
  )
}

interface ImageCardProps {
  src: string
  title: string
  subtitle?: string
  category?: string
  className?: string
}

export const ImageCard = ({ src, title, subtitle, category, className = '' }: ImageCardProps) => {
  return (
    <motion.div
      className={`relative overflow-hidden rounded-2xl group cursor-pointer ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.4 }}
    >
      {/* Image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${src}')` }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.7 }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

      {/* Category Badge */}
      {category && (
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 bg-gold-500/90 text-dark-900 text-xs font-medium rounded-full">
            {category}
          </span>
        </div>
      )}

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
        <h3 className="text-xl font-display font-semibold text-white group-hover:text-gold-500 transition-colors">
          {title}
        </h3>
        {subtitle && (
          <p className="text-sm text-gold-500/80 mt-1">{subtitle}</p>
        )}
      </div>

      {/* Hover Border */}
      <div className="absolute inset-0 border-2 border-gold-500/0 group-hover:border-gold-500/50 rounded-2xl transition-colors duration-500" />
    </motion.div>
  )
}
