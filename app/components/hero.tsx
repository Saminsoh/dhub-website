
'use client'

import { motion } from 'framer-motion'
import { Zap, TrendingUp, Users, Shield, Coffee } from 'lucide-react'
import { Button } from './ui/button'
import Image from 'next/image'

export default function Hero() {
  const features = [
    { icon: TrendingUp, text: 'Community Driven' },
    { icon: Users, text: '7.7B Supply' },
    { icon: Shield, text: 'Desert Strong' },
    { icon: Coffee, text: 'Gulf Culture' }
  ]

  return (
    <section id="home" className="relative pt-24 pb-16 overflow-hidden desert-pattern">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-desert-gradient rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-blockchain-gradient rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-dhub-gradient rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* DHUB Mascot */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, type: "spring", bounce: 0.5 }}
            className="mb-8"
          >
            <div className="mx-auto w-32 h-32 mb-6 animate-float">
              <Image
                src="https://cdn.abacus.ai/images/4267ca2f-a806-4e80-9c70-78ae320c5307.png"
                alt="DHUB Desert Lizard Mascot"
                width={128}
                height={128}
                className="w-full h-full object-cover rounded-full dhub-shadow"
              />
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gradient-dhub">DesertDhub</span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold text-desert-800 mb-4">
              The Gulf Desert Lizard Token 🦎
            </h2>
            <p className="text-lg md:text-xl text-desert-700 max-w-3xl mx-auto leading-relaxed">
              Born in the vast Arabian desert, DHUB represents the resilience and adaptability 
              of the desert dhub lizard. Join our community of 7.7 billion tokens, 
              where tradition meets innovation! ☕🏜️
            </p>
          </motion.div>

          {/* Feature Icons */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center space-x-6 md:space-x-8 mb-12"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.text}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-dhub-gradient rounded-full flex items-center justify-center mb-2 dhub-shadow animate-bounce-slow">
                  <feature.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <span className="text-xs md:text-sm font-medium text-desert-800">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Arabic Coffee Elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mb-12"
          >
            <div className="flex justify-center items-center space-x-4 text-desert-600">
              <Coffee className="w-6 h-6" />
              <span className="text-lg font-arabic">قهوة عربية</span>
              <span className="text-sm">•</span>
              <span className="text-lg">Dhub Spirit</span>
              <span className="text-sm">•</span>
              <span className="text-lg">🏜️ Desert Strong</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button
              size="lg"
              onClick={() => {
                document.getElementById('tokeninfo')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="dhub-gradient text-white font-semibold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 animate-pulse-glow"
            >
              <Zap className="w-5 h-5 mr-2" />
              Discover DHUB Token
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                document.getElementById('tokenomics')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="border-2 border-desert-400 text-desert-800 hover:bg-desert-100 px-8 py-4 text-lg font-semibold"
            >
              Learn About Tokenomics
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {[
              { label: 'Total Supply', value: '7.77B DHUB', icon: '🦎' },
              { label: 'Community Owned', value: '100%', icon: '👥' },
              { label: 'Desert Heritage', value: 'Authentic', icon: '🏜️' }
            ].map((stat, index) => (
              <div key={stat.label} className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl dhub-shadow">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-2xl md:text-3xl font-bold text-gradient-dhub mb-2">
                  {stat.value}
                </div>
                <div className="text-desert-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
