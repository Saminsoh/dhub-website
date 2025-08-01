
'use client'

import { ConnectButton } from '@rainbow-me/rainbowkit'
import { motion } from 'framer-motion'

export function Header() {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-orange-200"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-amber-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">🦎</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gradient">DHUB</h1>
            <p className="text-xs text-orange-600">Diamond Hands Desert Lizard</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#token" className="text-gray-700 hover:text-orange-600 transition-colors">Token</a>
          <a href="#tokenomics" className="text-gray-700 hover:text-orange-600 transition-colors">Tokenomics</a>
          <a href="#community" className="text-gray-700 hover:text-orange-600 transition-colors">Community</a>
        </nav>

        <ConnectButton />
      </div>
    </motion.header>
  )
}
