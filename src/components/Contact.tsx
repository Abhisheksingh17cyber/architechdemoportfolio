import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast'
import { 
  Send, 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Linkedin,
  Instagram,
  Twitter
} from 'lucide-react'

const Contact = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formRef.current) return

    setIsSubmitting(true)

    try {
      // Replace these with your actual EmailJS credentials
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formRef.current,
        'YOUR_PUBLIC_KEY'
      )
      
      toast.success('Message sent successfully!')
      formRef.current.reset()
    } catch (error) {
      toast.error('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: MapPin,
      label: 'Studio Location',
      value: '123 Architecture Plaza, Suite 500',
      subValue: 'New York, NY 10001',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (212) 555-0190',
      subValue: 'Mon-Fri, 9am-6pm EST',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@adamarchitect.com',
      subValue: 'We reply within 24 hours',
    },
    {
      icon: Clock,
      label: 'Working Hours',
      value: 'Monday - Friday',
      subValue: '9:00 AM - 6:00 PM EST',
    },
  ]

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ]

  return (
    <section id="contact" className="section-padding relative overflow-hidden" ref={containerRef}>
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-radial-gold opacity-10" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-gold-500 text-sm tracking-widest uppercase font-medium">
            Get in Touch
          </span>
          <h2 className="heading-lg mt-4 mb-6">
            <span className="text-white">Let's Create </span>
            <span className="text-gradient-gold">Together</span>
          </h2>
          <p className="body-text">
            Ready to bring your architectural vision to life? Reach out and let's 
            discuss how we can transform your ideas into extraordinary spaces.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm text-gray-400">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    required
                    className="w-full px-4 py-4 bg-dark-800 border border-gold-500/20 rounded-lg text-white placeholder-gray-500 focus:border-gold-500 focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm text-gray-400">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    required
                    className="w-full px-4 py-4 bg-dark-800 border border-gold-500/20 rounded-lg text-white placeholder-gray-500 focus:border-gold-500 focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm text-gray-400">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="user_phone"
                    className="w-full px-4 py-4 bg-dark-800 border border-gold-500/20 rounded-lg text-white placeholder-gray-500 focus:border-gold-500 focus:outline-none transition-colors"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="project_type" className="text-sm text-gray-400">
                    Project Type
                  </label>
                  <select
                    id="project_type"
                    name="project_type"
                    required
                    className="w-full px-4 py-4 bg-dark-800 border border-gold-500/20 rounded-lg text-white focus:border-gold-500 focus:outline-none transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">Select a project type</option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="cultural">Cultural & Public</option>
                    <option value="sustainable">Sustainable Design</option>
                    <option value="interior">Interior Architecture</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="budget" className="text-sm text-gray-400">
                  Estimated Budget
                </label>
                <select
                  id="budget"
                  name="budget"
                  className="w-full px-4 py-4 bg-dark-800 border border-gold-500/20 rounded-lg text-white focus:border-gold-500 focus:outline-none transition-colors appearance-none cursor-pointer"
                >
                  <option value="">Select budget range</option>
                  <option value="under-500k">Under $500,000</option>
                  <option value="500k-1m">$500,000 - $1,000,000</option>
                  <option value="1m-5m">$1,000,000 - $5,000,000</option>
                  <option value="5m-10m">$5,000,000 - $10,000,000</option>
                  <option value="over-10m">Over $10,000,000</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm text-gray-400">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-4 bg-dark-800 border border-gold-500/20 rounded-lg text-white placeholder-gray-500 focus:border-gold-500 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your project vision, requirements, and timeline..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </span>
                {!isSubmitting && <Send className="w-4 h-4 relative z-10" />}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="glass-card p-6 group hover:border-gold-500/40 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center mb-4 group-hover:bg-gold-500/20 transition-colors">
                    <info.icon className="w-5 h-5 text-gold-500" />
                  </div>
                  <p className="text-xs text-gold-500 uppercase tracking-wider mb-1">
                    {info.label}
                  </p>
                  <p className="text-white font-medium">{info.value}</p>
                  <p className="text-sm text-gray-500">{info.subValue}</p>
                </motion.div>
              ))}
            </div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="glass-card p-1 overflow-hidden"
            >
              <div className="aspect-video relative rounded-xl overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-60"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1524813686514-a57563d77965?w=800&q=80')`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-gold-500 text-dark-900 rounded-lg font-medium flex items-center gap-2 hover:bg-gold-400 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <MapPin className="w-4 h-4" />
                    View on Map
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="flex items-center justify-between glass-card p-6"
            >
              <div>
                <p className="text-white font-medium">Follow Our Journey</p>
                <p className="text-sm text-gray-500">Behind the scenes & inspiration</p>
              </div>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full border border-gold-500/30 flex items-center justify-center text-gold-500 hover:bg-gold-500 hover:text-dark-900 transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
