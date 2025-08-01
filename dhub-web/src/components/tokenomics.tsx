
'use client'

import { motion } from 'framer-motion'

const tokenomicsData = [
  {
    title: 'Total Supply',
    value: '7.77B',
    description: 'Fixed supply, no minting',
    icon: '💎',
    color: 'from-blue-500 to-blue-600'
  },
  {
    title: 'Liquidity Pool',
    value: '60%',
    description: 'Locked for trading',
    icon: '🏊‍♂️',
    color: 'from-green-500 to-green-600'
  },
  {
    title: 'Community',
    value: '25%',
    description: 'Airdrops & rewards',
    icon: '🎁',
    color: 'from-purple-500 to-purple-600'
  },
  {
    title: 'Development',
    value: '10%',
    description: 'Future development',
    icon: '🛠️',
    color: 'from-orange-500 to-orange-600'
  },
  {
    title: 'Marketing',
    value: '5%',
    description: 'Promotion & partnerships',
    icon: '📢',
    color: 'from-pink-500 to-pink-600'
  }
]

export function Tokenomics() {
  return (
    <section id="tokenomics" className="py-16 px-4 bg-gradient-to-br from-orange-100 to-amber-100">
      <div className="container mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">Tokenomics</h2>
          <p className="text-lg text-gray-700">Fair distribution for the desert community</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {tokenomicsData.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-orange-200 hover:shadow-xl transition-shadow"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center mb-4 mx-auto`}>
                <span className="text-2xl">{item.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">{item.title}</h3>
              <p className="text-3xl font-bold text-center mb-2 text-gradient">{item.value}</p>
              <p className="text-gray-600 text-center text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-lg border border-orange-200"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Desert Lizard Philosophy</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">🏜️</div>
              <h4 className="font-bold text-orange-600 mb-2">Survive the Desert</h4>
              <p className="text-gray-600 text-sm">Built to withstand market volatility like a desert lizard survives harsh conditions</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">💎</div>
              <h4 className="font-bold text-orange-600 mb-2">Diamond Hands</h4>
              <p className="text-gray-600 text-sm">Rewarding long-term holders who believe in the desert lizard vision</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🦎</div>
              <h4 className="font-bold text-orange-600 mb-2">Community First</h4>
              <p className="text-gray-600 text-sm">A meme coin by the community, for the community, with fair distribution</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
