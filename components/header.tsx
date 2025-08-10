
'use client'

import { useState } from 'react'
import { useAccount } from 'wagmi'
import { Menu, X, Zap } from 'lucide-react'
import WalletButton from './wallet-button'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isConnected } = useAccount()

  const navigation = [
    { name: 'Token Info', href: '#tokeninfo' },
    { name: 'Tokenomics', href: '#tokenomics' },
    { name: 'Community', href: '#community' }
  ]

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-orange-200/50 sand-pattern"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="relative w-12 h-12 animate-pulse-glow">
              <Image
                src="https://cdn.abacus.ai/images/040c0b76-9c70-4a39-9316-35c88d8b6ce6.png"
                alt="DHUB Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-2xl font-bold text-gradient-gold">DHUB</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.05 }}
                className="text-amber-800 hover:text-orange-600 font-medium transition-colors duration-200"
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          {/* Wallet Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <WalletButton />
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-amber-800 hover:bg-orange-100 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 border-t border-orange-200/50"
          >
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-amber-800 hover:text-orange-600 font-medium py-2 transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}
