
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'
import { Card } from './ui/card'
import { Coins, Users, Zap, Coffee, Heart, Globe } from 'lucide-react'
import Image from 'next/image'

export default function Tokenomics() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  // 100% Community Distribution
  const tokenDistribution = [
    { name: 'Community', value: 100, color: '#d97706', icon: Users }
  ]

  const communityAllocation = [
    { category: 'Public Launch', percentage: 40, color: '#d97706', description: 'Available for public trading from day one' },
    { category: 'Community Rewards', percentage: 25, color: '#b45309', description: 'Airdrops, contests, and community engagement' },
    { category: 'Liquidity Provision', percentage: 20, color: '#92400e', description: 'DEX liquidity and trading pairs' },
    { category: 'Marketing & Growth', percentage: 10, color: '#78350f', description: 'Community growth and awareness campaigns' },
    { category: 'Future Developments', percentage: 5, color: '#451a03', description: 'Reserved for community-voted initiatives' }
  ]

  const releaseSchedule = [
    { month: 'Launch', available: 100, locked: 0 },
    { month: 'Month 1', available: 100, locked: 0 },
    { month: 'Month 3', available: 100, locked: 0 },
    { month: 'Month 6', available: 100, locked: 0 },
    { month: 'Month 12', available: 100, locked: 0 }
  ]

  return (
    <section id="tokenomics" className="py-20 bg-gradient-to-b from-white to-desert-50 desert-pattern">
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
              className="animate-float"
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-dhub mb-6">
            100% Community Tokenomics
          </h2>
          <p className="text-xl text-desert-700 max-w-3xl mx-auto">
            Unlike traditional tokens with team allocations, DHUB is truly community-owned. 
            All 7.7 billion tokens belong to the desert community from day one! 🦎🏜️
          </p>
        </motion.div>

        {/* Main Distribution - 100% Community */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <Card className="p-8 bg-white/90 backdrop-blur-sm border-desert-200 dhub-shadow max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-center text-desert-800 mb-8">
              Token Distribution
            </h3>
            <div className="text-center">
              <div className="w-40 h-40 mx-auto mb-6 bg-dhub-gradient rounded-full flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <Users className="w-12 h-12 text-desert-600 mx-auto mb-2" />
                    <div className="text-3xl font-bold text-gradient-dhub">100%</div>
                  </div>
                </div>
              </div>
              <h4 className="text-2xl font-bold text-desert-800 mb-2">Community Owned</h4>
              <p className="text-desert-600 mb-4">All 7,777,777,777 DHUB tokens</p>
              <div className="bg-desert-50 rounded-lg p-4">
                <p className="text-desert-700 font-medium">
                  ✅ No team allocation<br/>
                  ✅ No founder tokens<br/>
                  ✅ No private sales<br/>
                  ✅ Fair launch for everyone
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Community Allocation Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center text-desert-800 mb-8">
            How Community Tokens Are Used
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {communityAllocation.map((item, index) => (
              <motion.div
                key={item.category}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Card className="p-6 bg-white/80 backdrop-blur-sm border-desert-200 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="flex items-center mb-4">
                    <div 
                      className="w-6 h-6 rounded-full mr-3"
                      style={{ backgroundColor: item.color }}
                    />
                    <h4 className="font-bold text-desert-800">{item.category}</h4>
                  </div>
                  <div className="text-3xl font-bold text-gradient-dhub mb-2">
                    {item.percentage}%
                  </div>
                  <p className="text-desert-600 text-sm">
                    {item.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Release Schedule */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <Card className="p-8 bg-white/90 backdrop-blur-sm border-desert-200 dhub-shadow">
            <h3 className="text-2xl font-bold text-desert-800 mb-6 text-center">
              Token Release Schedule
            </h3>
            <div className="h-80 mb-6">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={releaseSchedule}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#fed7aa" />
                  <XAxis 
                    dataKey="month" 
                    tick={{ fill: '#92400e', fontSize: 12 }}
                  />
                  <YAxis tick={{ fill: '#92400e' }} />
                  <Tooltip 
                    formatter={(value) => [`${value}%`, 'Available']}
                    labelStyle={{ color: '#92400e' }}
                  />
                  <Bar dataKey="available" fill="#d97706" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="text-center bg-desert-50 rounded-lg p-6">
              <Coffee className="w-8 h-8 text-desert-600 mx-auto mb-3" />
              <h4 className="text-xl font-bold text-desert-800 mb-2">
                All Tokens Available from Launch! ☕
              </h4>
              <p className="text-desert-700">
                Like sharing Arabic coffee with friends, DHUB tokens are available to everyone 
                from day one. No vesting, no locks - pure community spirit! 🦎
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Key Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: Heart,
              title: 'Community First',
              description: '100% of tokens belong to the desert community - no team allocation'
            },
            {
              icon: Zap,
              title: 'Instant Access',
              description: 'All 7.7B tokens available from launch - no vesting or locks'
            },
            {
              icon: Globe,
              title: 'Fair Distribution',
              description: 'Equal opportunity for all community members to participate'
            }
          ].map((feature, index) => (
            <Card key={feature.title} className="p-6 bg-white/80 backdrop-blur-sm border-desert-200 hover:shadow-lg transition-all duration-300 dhub-shadow text-center">
              <div className="w-16 h-16 bg-dhub-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-desert-800 mb-3">{feature.title}</h4>
              <p className="text-desert-700">{feature.description}</p>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
