import { motion } from 'framer-motion'
import { 
  ArrowUp, 
  Linkedin, 
  Instagram, 
  Twitter, 
  Youtube,
  Mail,
  Phone,
  MapPin
} from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const footerLinks = {
    services: [
      { name: 'Residential Design', href: '#services' },
      { name: 'Commercial Architecture', href: '#services' },
      { name: 'Sustainable Design', href: '#services' },
      { name: 'Interior Architecture', href: '#services' },
      { name: 'Master Planning', href: '#services' },
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Process', href: '#process' },
      { name: 'Portfolio', href: '#projects' },
      { name: 'Awards', href: '#awards' },
      { name: 'Careers', href: '#' },
    ],
    resources: [
      { name: 'Blog', href: '#' },
      { name: 'Case Studies', href: '#' },
      { name: 'Press Kit', href: '#' },
      { name: 'FAQs', href: '#' },
      { name: 'Privacy Policy', href: '#' },
    ],
  }

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ]

  return (
    <footer className="relative bg-dark-800/50 border-t border-gold-500/10">
      {/* Main Footer */}
      <div className="container-custom py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <a href="#home" className="inline-block">
              <h3 className="text-3xl font-display font-bold text-gradient-gold">
                ADAM
              </h3>
            </a>
            <p className="mt-4 text-gray-400 max-w-sm">
              Creating visionary architectural spaces that inspire, innovate, 
              and stand the test of time. Where design meets excellence.
            </p>

            {/* Contact Info */}
            <div className="mt-6 space-y-3">
              <a 
                href="mailto:hello@adamarchitect.com"
                className="flex items-center gap-3 text-gray-400 hover:text-gold-500 transition-colors"
              >
                <Mail className="w-4 h-4 text-gold-500" />
                <span className="text-sm">hello@adamarchitect.com</span>
              </a>
              <a 
                href="tel:+12125550190"
                className="flex items-center gap-3 text-gray-400 hover:text-gold-500 transition-colors"
              >
                <Phone className="w-4 h-4 text-gold-500" />
                <span className="text-sm">+1 (212) 555-0190</span>
              </a>
              <p className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-4 h-4 text-gold-500" />
                <span className="text-sm">New York, NY 10001</span>
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full border border-gold-500/20 flex items-center justify-center text-gray-400 hover:text-gold-500 hover:border-gold-500 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {/* Services */}
              <div>
                <h4 className="text-white font-semibold mb-4">Services</h4>
                <ul className="space-y-3">
                  {footerLinks.services.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-gold-500 transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="text-white font-semibold mb-4">Company</h4>
                <ul className="space-y-3">
                  {footerLinks.company.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-gold-500 transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h4 className="text-white font-semibold mb-4">Resources</h4>
                <ul className="space-y-3">
                  {footerLinks.resources.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-gold-500 transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-16 pt-8 border-t border-gold-500/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-white font-semibold mb-1">
                Subscribe to our Newsletter
              </h4>
              <p className="text-gray-400 text-sm">
                Get the latest updates on architecture trends and our projects.
              </p>
            </div>
            <form className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-3 bg-dark-700 border border-gold-500/20 rounded-lg text-white placeholder-gray-500 focus:border-gold-500 focus:outline-none transition-colors text-sm"
              />
              <motion.button
                type="submit"
                className="px-6 py-3 bg-gold-500 text-dark-900 rounded-lg font-medium text-sm hover:bg-gold-400 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gold-500/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} Adam Architecture Studio. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-500 hover:text-gold-500 text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-gold-500 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-gold-500 text-sm transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gold-500 text-dark-900 flex items-center justify-center shadow-lg hover:bg-gold-400 transition-colors z-40"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  )
}

export default Footer
