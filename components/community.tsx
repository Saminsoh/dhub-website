
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MessageCircle, Users, Zap, Gift, ExternalLink } from 'lucide-react'
import { Card } from './ui/card'
import { Button } from './ui/button'
import Image from 'next/image'

// Dhub Emoticon Component
const DhubEmoji = ({ className = "w-5 h-5" }: { className?: string }) => (
  <Image
    src="https://cdn.abacus.ai/images/6cf6bc5c-0a47-42d0-a3b3-4c22f64bd58c.png"
    alt="🦎"
    width={20}
    height={20} 
    className={`inline-block ${className}`}
  />
)

export default function Community() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const socialLinks = [
    {
      name: 'Telegram',
      description: 'Join our community for real-time discussions and updates',
      status: 'Coming Soon',
      icon: MessageCircle,
      color: 'from-blue-400 to-blue-600',
      link: '#'
    },
    {
      name: 'Discord',
      description: 'Connect with fellow DHUB holders and participate in community events',
      status: 'Coming Soon',
      icon: Users,
      color: 'from-purple-400 to-purple-600',
      link: '#'
    },
    {
      name: 'Twitter',
      description: 'Follow us for the latest news, announcements, and market updates',
      status: 'Coming Soon',
      icon: Zap,
      color: 'from-cyan-400 to-cyan-600',
      link: '#'
    }
  ]



  return (
    <section id="community" className="py-20 bg-gradient-to-b from-orange-50 to-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-gold mb-6">
            Join Our Community
          </h2>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto">
            Get ready to join the DHUB innovation community! Social channels launching soon - 
            where visionaries gather to share memes, discuss DHUB, and build something awesome together.
          </p>
        </motion.div>



        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {socialLinks.map((social, index) => (
            <motion.div
              key={social.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <Card className="p-8 bg-white/90 backdrop-blur-sm border-orange-200 dhub-shadow hover:shadow-xl transition-all duration-300 group">
                <div className={`w-16 h-16 bg-gradient-to-br ${social.color} rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <social.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-amber-800 mb-3 text-center">{social.name}</h3>
                <p className="text-amber-700 mb-4 text-center">{social.description}</p>
                <div className="text-center mb-6">
                  <span className="text-xl font-bold text-gradient-gold">{social.status}</span>
                </div>
                <Button 
                  className="w-full dhub-gradient text-white font-semibold hover:shadow-lg transition-all duration-300 opacity-50 cursor-not-allowed"
                  disabled
                >
                  Launching Soon
                  <Zap className="w-4 h-4 ml-2" />
                </Button>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Community Guidelines */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="p-8 bg-white/90 backdrop-blur-sm border-orange-200 dhub-shadow">
            <h3 className="text-2xl font-bold text-amber-800 mb-6 text-center flex items-center justify-center gap-2">
              <DhubEmoji /> DHUB Code of Conduct <DhubEmoji />
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-amber-800 mb-3">🌟 DHUB Do&apos;s</h4>
                <ul className="space-y-2 text-amber-700">
                  <li>🤝 Be a friendly community member</li>
                  <li>📈 Share those juicy DHUB gains (and losses, we all been there)</li>
                  <li>🆘 Help newbie members navigate their first steps</li>
                  <li>🎉 Celebrate community wins like finding an oasis</li>
                  <li>🚀 Embrace your inner DHUB innovation energy</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-amber-800 mb-3">🚫 Innovation Don&apos;ts</h4>
                <ul className="space-y-2 text-amber-700">
                  <li>🌪️ Don&apos;t spam harder than a sandstorm</li>
                  <li>💸 No &quot;trust me bro&quot; financial advice</li>
                  <li>😤 Keep the community drama-free zone</li>
                  <li>🐍 No toxic behavior in DHUB community</li>
                  <li>📰 Don&apos;t spread fake news like tumbleweeds</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-amber-600 font-medium text-lg flex items-center justify-center gap-1">
                Stay hydrated, stay based, stay DHUB! <DhubEmoji className="w-4 h-4" />💎✨
              </p>
              <p className="text-sm text-amber-500 mt-2">
                *Not financial advice, just desert wisdom from your friendly DHUB community*
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
