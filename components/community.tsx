
'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const socialLinks = [
  {
    name: 'Twitter',
    icon: '🐦',
    url: 'https://twitter.com/dhub_token',
    description: 'Follow for updates',
    color: 'from-blue-400 to-blue-600'
  },
  {
    name: 'Telegram',
    icon: '📱',
    url: 'https://t.me/dhub_community',
    description: 'Join the discussion',
    color: 'from-blue-500 to-blue-700'
  },
  {
    name: 'Discord',
    icon: '🎮',
    url: 'https://discord.gg/dhub',
    description: 'Desert lizard hangout',
    color: 'from-indigo-500 to-purple-600'
  },
  {
    name: 'Reddit',
    icon: '🤖',
    url: 'https://reddit.com/r/dhub',
    description: 'Memes & discussions',
    color: 'from-orange-500 to-red-600'
  }
]

export function Community() {
  return (
    <section id="community" className="py-16 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">Join the Desert</h2>
          <p className="text-lg text-gray-700">Connect with fellow desert lizards worldwide</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-orange-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${social.color} rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform`}>
                <span className="text-2xl">{social.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">{social.name}</h3>
              <p className="text-gray-600 text-center text-sm mb-3">{social.description}</p>
              <div className="flex items-center justify-center text-orange-600 group-hover:text-orange-700">
                <ExternalLink size={16} className="mr-1" />
                <span className="text-sm font-semibold">Join Now</span>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-orange-500 to-amber-600 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-4">Ready to Join the Revolution? 🦎</h3>
          <p className="text-lg mb-6 opacity-90">
            Become part of the desert lizard community and hold your DHUB with diamond hands!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-orange-600 font-bold rounded-full hover:bg-gray-100 transition-colors">
              Buy DHUB Now
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-orange-600 transition-colors">
              View on DEX
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
