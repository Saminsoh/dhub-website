
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MessageCircle, Users, Zap, Gift, ExternalLink } from 'lucide-react'
import { Card } from './ui/card'
import { Button } from './ui/button'

export default function Community() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const socialLinks = [
    {
      name: 'Telegram',
      description: 'Join our active community for real-time discussions and updates',
      members: '8.5K',
      icon: MessageCircle,
      color: 'from-blue-400 to-blue-600',
      link: '#'
    },
    {
      name: 'Discord',
      description: 'Connect with fellow DHUB holders and participate in community events',
      members: '3.2K',
      icon: Users,
      color: 'from-purple-400 to-purple-600',
      link: '#'
    },
    {
      name: 'Twitter',
      description: 'Follow us for the latest news, announcements, and market updates',
      members: '12K',
      icon: Zap,
      color: 'from-cyan-400 to-cyan-600',
      link: '#'
    }
  ]

  const communityStats = [
    { label: 'Total Community Members', value: '25,000+', icon: Users },
    { label: 'Active Daily Users', value: '2,500+', icon: Zap },
    { label: 'Rewards Distributed', value: '$150K+', icon: Gift }
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
            Be part of the fastest-growing crypto community in the Gulf region. 
            Connect, share, and grow together with fellow DHUB enthusiasts.
          </p>
        </motion.div>

        {/* Community Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {communityStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <Card className="p-6 bg-white/90 backdrop-blur-sm border-orange-200 gecko-shadow text-center hover:shadow-lg transition-all duration-300">
                <stat.icon className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gradient-gold mb-2">{stat.value}</div>
                <div className="text-amber-700 font-medium">{stat.label}</div>
              </Card>
            </motion.div>
          ))}
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
              <Card className="p-8 bg-white/90 backdrop-blur-sm border-orange-200 gecko-shadow hover:shadow-xl transition-all duration-300 group">
                <div className={`w-16 h-16 bg-gradient-to-br ${social.color} rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <social.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-amber-800 mb-3 text-center">{social.name}</h3>
                <p className="text-amber-700 mb-4 text-center">{social.description}</p>
                <div className="text-center mb-6">
                  <span className="text-2xl font-bold text-gradient-gold">{social.members}</span>
                  <span className="text-amber-600 ml-2">members</span>
                </div>
                <Button 
                  className="w-full gecko-gradient text-white font-semibold hover:shadow-lg transition-all duration-300"
                  onClick={() => window.open(social.link, '_blank')}
                >
                  Join {social.name}
                  <ExternalLink className="w-4 h-4 ml-2" />
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
          <Card className="p-8 bg-white/90 backdrop-blur-sm border-orange-200 gecko-shadow">
            <h3 className="text-2xl font-bold text-amber-800 mb-6 text-center">
              Community Guidelines
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-amber-800 mb-3">✅ Do&apos;s</h4>
                <ul className="space-y-2 text-amber-700">
                  <li>• Be respectful and supportive</li>
                  <li>• Share valuable insights and news</li>
                  <li>• Help newcomers learn about DHUB</li>
                  <li>• Participate in community events</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-amber-800 mb-3">❌ Don&apos;ts</h4>
                <ul className="space-y-2 text-amber-700">
                  <li>• No spam or excessive promotion</li>
                  <li>• No financial advice or investment tips</li>
                  <li>• No hate speech or discrimination</li>
                  <li>• No spreading of false information</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-amber-600 font-medium">
                Together, we build a stronger DHUB community! 🦎🚀
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
