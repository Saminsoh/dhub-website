
'use client'

import { motion } from 'framer-motion'

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-gray-900 text-white py-12 px-4"
    >
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-amber-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">🦎</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">DHUB</h3>
                <p className="text-xs text-gray-400">Diamond Hands Desert Lizard</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              The ultimate meme coin for diamond hands. Survive the desert, hold through the storms!
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#token" className="text-gray-400 hover:text-orange-400 transition-colors">Token Info</a></li>
              <li><a href="#tokenomics" className="text-gray-400 hover:text-orange-400 transition-colors">Tokenomics</a></li>
              <li><a href="#community" className="text-gray-400 hover:text-orange-400 transition-colors">Community</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://etherscan.io/address/0xc52ebCa549c24a49bcb69941B976baED89E540Eb" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-400 transition-colors">Etherscan</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Whitepaper</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Audit</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contract</h4>
            <p className="text-xs text-gray-400 mb-2">Ethereum Mainnet</p>
            <code className="text-xs bg-gray-800 p-2 rounded block break-all">
              0xc52ebCa549c24a49bcb69941B976baED89E540Eb
            </code>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm mb-4">
            © 2024 DHUB Token. All rights reserved. Built by the desert lizard community.
          </p>
          <p className="text-xs text-gray-500">
            ⚠️ Cryptocurrency investments are subject to high market risk. Please invest responsibly.
          </p>
        </div>
      </div>
    </motion.footer>
  )
}
