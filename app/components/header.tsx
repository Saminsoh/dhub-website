
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
// import { ConnectButton } from '@rainbow-me/rainbowkit'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'Token Info', href: '#tokeninfo' },
    { name: 'Tokenomics', href: '#tokenomics' },
    { name: 'Community', href: '#community' },
  ]

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-sm border-b border-desert-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-3"
          >
            <div className="w-10 h-10 rounded-full bg-dhub-gradient flex items-center justify-center dhub-shadow">
              <Image
                src="https://cdn.abacus.ai/images/4267ca2f-a806-4e80-9c70-78ae320c5307.png"
                alt="DHUB Mascot"
                width={32}
                height={32}
                className="rounded-full"
              />
            </div>
            <div>
              <div className="text-xl font-bold text-gradient-dhub">DHUB</div>
              <div className="text-xs text-desert-600">DesertDhub</div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-desert-700 hover:text-desert-900 font-medium transition-colors duration-200"
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.querySelector(item.href)
                  element?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Connect Wallet Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:block">
              <button className="bg-dhub-gradient text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity">
                Connect Wallet
              </button>
            </div>
            
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md text-desert-700 hover:text-desert-900 hover:bg-desert-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-desert-200"
          >
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-desert-700 hover:text-desert-900 font-medium py-2"
                  onClick={(e) => {
                    e.preventDefault()
                    const element = document.querySelector(item.href)
                    element?.scrollIntoView({ behavior: 'smooth' })
                    setIsMenuOpen(false)
                  }}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-desert-200">
                <button className="bg-dhub-gradient text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity w-full">
                  Connect Wallet
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  )
}
