
'use client'

import { motion } from 'framer-motion'
import { Zap, TrendingUp, Users, Shield } from 'lucide-react'
import { Button } from './ui/button'

export default function Hero() {
  const features = [
    { icon: TrendingUp, text: 'Trending' },
    { icon: Users, text: 'Community' },
    { icon: Shield, text: 'Secure' },
    { icon: Zap, text: 'Fast' }
  ]

  return (
    <section className="relative pt-20 pb-16 overflow-hidden sand-pattern">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-amber-300 to-orange-400 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-orange-400 to-red-400 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-gradient-to-br from-yellow-300 to-amber-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Heading */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gradient-gold">DHUB</span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold text-amber-800 mb-4">
              The Gulf Gecko Token
            </h2>
            <p className="text-lg md:text-xl text-amber-700 max-w-3xl mx-auto leading-relaxed">
              Powered by the spirit of the desert gecko, DHUB is the premier meme token 
              connecting the Gulf region through community, innovation, and endless possibilities.
            </p>
          </motion.div>

          {/* Feature Icons */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center space-x-8 mb-12"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.text}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mb-2 gecko-shadow animate-bounce-slow">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <span className="text-sm font-medium text-amber-800">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              onClick={() => {
                // Scroll to token info section
                document.getElementById('tokeninfo')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="gecko-gradient text-white font-semibold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 animate-pulse-glow"
            >
              <Zap className="w-5 h-5 mr-2" />
              Buy DHUB Token
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                // Scroll to tokenomics section
                document.getElementById('tokenomics')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="border-2 border-orange-300 text-amber-800 hover:bg-orange-100 px-8 py-4 text-lg font-semibold"
            >
              Learn More
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {[
              { label: 'Total Supply', value: '1B DHUB' },
              { label: 'Community Members', value: '10K+' },
              { label: 'Markets Listed', value: '5+' }
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient-gold mb-2">
                  {stat.value}
                </div>
                <div className="text-amber-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
