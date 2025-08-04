
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MessageCircle, Twitter, Send, Coffee, Users, Heart } from 'lucide-react'
import { Card } from './ui/card'
import { Button } from './ui/button'
import Image from 'next/image'

export default function Community() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const socialLinks = [
    {
      name: 'Telegram',
      icon: Send,
      description: 'Join our main community chat',
      link: '#',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50 hover:bg-blue-100'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      description: 'Follow for latest updates',
      link: '#',
      color: 'text-sky-500',
      bgColor: 'bg-sky-50 hover:bg-sky-100'
    },
    {
      name: 'Discord',
      icon: MessageCircle,
      description: 'Connect with dhub family',
      link: '#',
      color: 'text-indigo-500',
      bgColor: 'bg-indigo-50 hover:bg-indigo-100'
    }
  ]

  const communityFeatures = [
    {
      icon: Coffee,
      title: 'Arabic Coffee Sessions',
      description: 'Weekly community calls where we share updates over virtual qahwa',
      emoji: '☕'
    },
    {
      icon: Users,
      title: 'Desert Family',
      description: 'A welcoming community that embraces Gulf traditions and values',
      emoji: '🤝'
    },
    {
      icon: Heart,
      title: 'Community Support',
      description: 'Help each other grow and succeed in the crypto desert',
      emoji: '💚'
    }
  ]

  return (
    <section id="community" className="py-20 bg-gradient-to-b from-desert-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <Image
              src="https://cdn.abacus.ai/images/4267ca2f-a806-4e80-9c70-78ae320c5307.png"
              alt="DHUB Mascot"
              width={64}
              height={64}
              className="animate-bounce-slow"
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-dhub mb-6">
            Join the Desert Community
          </h2>
          <p className="text-xl text-desert-700 max-w-3xl mx-auto">
            Welcome to the DHUB family! Like the hospitality of the Gulf, our community 
            welcomes everyone with open arms and traditional Arabic coffee ☕🦎
          </p>
        </motion.div>

        {/* Arabic Cultural Welcome */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <Card className="p-8 bg-white/90 backdrop-blur-sm border-desert-200 dhub-shadow max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <div className="text-6xl mb-4">🏜️☕🦎</div>
              <h3 className="text-2xl font-bold text-desert-800 mb-2">أهلاً وسهلاً</h3>
              <h4 className="text-xl text-desert-600 mb-4">Welcome to the DHUB Desert</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-desert-50 rounded-lg p-4">
                <div className="text-3xl mb-2">🫖</div>
                <h5 className="font-bold text-desert-800 mb-1">Dallah</h5>
                <p className="text-sm text-desert-600">Traditional coffee pot representing hospitality</p>
              </div>
              <div className="bg-desert-50 rounded-lg p-4">
                <div className="text-3xl mb-2">☕</div>
                <h5 className="font-bold text-desert-800 mb-1">Finjaan</h5>
                <p className="text-sm text-desert-600">Small cups for sharing community moments</p>
              </div>
              <div className="bg-desert-50 rounded-lg p-4">
                <div className="text-3xl mb-2">🦎</div>
                <h5 className="font-bold text-desert-800 mb-1">Dhub Spirit</h5>
                <p className="text-sm text-desert-600">Desert resilience and community strength</p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Community Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {communityFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <Card className="p-6 bg-white/80 backdrop-blur-sm border-desert-200 hover:shadow-lg transition-all duration-300 dhub-shadow text-center h-full">
                <div className="mb-4">
                  <div className="text-4xl mb-2">{feature.emoji}</div>
                  <div className="w-12 h-12 bg-dhub-gradient rounded-full flex items-center justify-center mx-auto">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-desert-800 mb-3">{feature.title}</h4>
                <p className="text-desert-700">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-center text-desert-800 mb-8">
            Connect with the DHUB Community
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {socialLinks.map((social, index) => (
              <motion.div
                key={social.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Card className={`p-6 ${social.bgColor} border-desert-200 hover:shadow-lg transition-all duration-300 cursor-pointer group`}>
                  <div className="text-center">
                    <div className={`w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <social.icon className={`w-8 h-8 ${social.color}`} />
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">{social.name}</h4>
                    <p className="text-gray-600 mb-4">{social.description}</p>
                    <Button
                      variant="outline"
                      className="border-desert-300 text-desert-800 hover:bg-desert-100"
                      onClick={() => window.open(social.link, '_blank')}
                    >
                      Join Community
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <Card className="p-8 bg-white/90 backdrop-blur-sm border-desert-200 dhub-shadow max-w-2xl mx-auto">
            <div className="text-4xl mb-4">🦎☕🏜️</div>
            <h3 className="text-2xl font-bold text-desert-800 mb-4">
              Ready to Join the Desert Family?
            </h3>
            <p className="text-desert-700 mb-6">
              Become part of the DHUB community where Gulf traditions meet blockchain innovation. 
              Together, we're stronger than the desert storm!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="dhub-gradient text-white font-semibold px-8 py-3"
                onClick={() => window.open('#', '_blank')}
              >
                <Send className="w-5 h-5 mr-2" />
                Join Telegram
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-desert-400 text-desert-800 hover:bg-desert-100 px-8 py-3 font-semibold"
                onClick={() => window.open('#', '_blank')}
              >
                <Twitter className="w-5 h-5 mr-2" />
                Follow Twitter
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
