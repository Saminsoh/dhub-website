
'use client'

import { ConnectButton } from '@rainbow-me/rainbowkit'
import { motion } from 'framer-motion'
import Image from 'next/image'

export function Header() {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-orange-200 shadow-lg"
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="relative w-12 h-12 overflow-hidden rounded-full shadow-md">
            <Image
              src="/dhub-mascot.png"
              alt="DHUB Desert Lizard Mascot"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gradient">DHUB</h1>
            <p className="text-xs text-orange-600">Diamond Hands Desert Lizard</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#token" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Token</a>
          <a href="#tokenomics" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Tokenomics</a>
          <a href="#community" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Community</a>
        </nav>

        <ConnectButton />
      </div>
    </motion.header>
  )
}
