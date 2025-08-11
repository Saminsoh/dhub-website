
'use client'

import { motion } from 'framer-motion'
import { Zap, MessageCircle, Users, Mail } from 'lucide-react'
import Image from 'next/image'

// Dhub Emoticon Component for Footer
const DhubEmoji = ({ className = "w-4 h-4" }: { className?: string }) => (
  <Image
    src="https://cdn.abacus.ai/images/6cf6bc5c-0a47-42d0-a3b3-4c22f64bd58c.png"
    alt="🦎"
    width={16}
    height={16} 
    className={`inline-block ${className}`}
  />
)

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Token Info', href: '#tokeninfo' },
    { name: 'Tokenomics', href: '#tokenomics' },
    { name: 'Community', href: '#community' }
  ]

  const socialLinks = [
    { name: 'Telegram', icon: MessageCircle, href: '#' },
    { name: 'Discord', icon: Users, href: '#' },
    { name: 'Twitter', icon: Zap, href: '#' }
  ]

  return (
    <footer className="bg-gradient-to-br from-amber-900 via-orange-900 to-yellow-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="col-span-1 md:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative w-12 h-12 animate-pulse-glow">
                <Image
                  src="https://cdn.abacus.ai/images/040c0b76-9c70-4a39-9316-35c88d8b6ce6.png" 
                  alt="DHUB Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-3xl font-bold text-gradient-gold">DHUB</span>
            </div>
            <p className="text-amber-200 mb-6 max-w-md leading-relaxed">
              The Gulf Innovation Token - Connecting the region through innovation, 
              community, and the unstoppable spirit of technological advancement.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-amber-800/50 rounded-full flex items-center justify-center hover:bg-amber-700 transition-colors duration-200"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-6 text-amber-200">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-amber-300 hover:text-white transition-colors duration-200 font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6 text-amber-200">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-amber-400" />
                <span className="text-amber-300">hello@dhub-token.com</span>
              </div>
              <div className="mt-6">
                <p className="text-amber-200 text-sm">
                  Join our community and stay updated with the latest DHUB news and developments.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-amber-800/50 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-amber-300 text-sm">
              © {currentYear} DHUB Token. All rights reserved.
            </div>
            <div className="text-amber-400 text-sm font-medium flex items-center justify-center gap-1">
              Built with <DhubEmoji className="w-4 h-4" /> for the Gulf community
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
