import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  onClick?: () => void
  icon?: boolean
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  icon = false,
  className = '',
  disabled = false,
  type = 'button',
}: ButtonProps) => {
  const baseStyles = 'relative inline-flex items-center justify-center gap-2 font-semibold rounded-lg overflow-hidden transition-all duration-300'
  
  const variants = {
    primary: 'bg-gold-500 text-dark-900 hover:shadow-[0_10px_40px_rgba(212,175,55,0.4)]',
    outline: 'border-2 border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-dark-900 hover:shadow-[0_10px_40px_rgba(212,175,55,0.3)]',
    ghost: 'text-gold-500 hover:bg-gold-500/10',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg',
  }

  const Component = href ? motion.a : motion.button

  return (
    <Component
      href={href}
      onClick={onClick}
      type={!href ? type : undefined}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
    >
      {/* Gradient overlay for primary */}
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 opacity-0 hover:opacity-100 transition-opacity duration-300" />
      )}
      
      <span className="relative z-10">{children}</span>
      
      {icon && (
        <ArrowUpRight className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </Component>
  )
}

export default Button
