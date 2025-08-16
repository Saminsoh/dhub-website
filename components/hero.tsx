
'use client'

import { motion } from 'framer-motion'
import { useAccount } from 'wagmi'

export function Hero() {
  const { isConnected } = useAccount()

  return (
    <section className="pt-24 pb-16 px-4">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-orange-400 to-amber-600 rounded-full flex items-center justify-center animate-float lizard-glow">
            <span className="text-6xl">🦎</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-6xl md:text-8xl font-bold mb-6 text-gradient"
        >
          DHUB
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-2xl md:text-3xl font-semibold text-orange-800 mb-4"
        >
          Diamond Hands Desert Lizard
        </motion.p>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto"
        >
          The ultimate meme coin for true diamond hands! Join the desert lizard revolution 
          with 7.77B DHUB tokens on Ethereum. Survive the desert, hold through the storms! 🏜️💎
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-600 text-white font-bold rounded-full hover:from-orange-600 hover:to-amber-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Buy DHUB
          </button>
          <button className="px-8 py-4 border-2 border-orange-500 text-orange-600 font-bold rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300">
            View Chart
          </button>
        </motion.div>

        {isConnected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-8 p-4 bg-green-100 border border-green-300 rounded-lg inline-block"
          >
            <p className="text-green-800 font-semibold">🎉 Wallet Connected! Welcome to the desert! 🦎</p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
