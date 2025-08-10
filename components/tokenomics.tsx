
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'
import { Card } from './ui/card'
import { Coins, Lock, Users, Zap, TrendingUp, Gift } from 'lucide-react'

export default function Tokenomics() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const tokenDistribution = [
    { name: 'Community', value: 100, color: '#f59e0b', icon: Users, amount: '7,777,777,777' }
  ]

  const releaseSchedule = [
    { month: 'Day 1', community: 100 }
  ]

  return (
    <section id="tokenomics" className="py-20 bg-gradient-to-b from-amber-50 to-orange-50 sand-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-gold mb-6">
            Tokenomics
          </h2>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto">
            100% community-driven token distribution with all tokens released from day 1 - 
            no vesting, no team allocation, purely by the community, for the community
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Token Distribution Chart */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="p-8 bg-white/90 backdrop-blur-sm border-orange-200 dhub-shadow">
              <h3 className="text-2xl font-bold text-amber-800 mb-6 text-center">
                Token Distribution
              </h3>
              <div className="h-80 mb-6">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={tokenDistribution}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={120}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {tokenDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      formatter={(value) => [`${value}%`, 'Percentage']}
                      labelStyle={{ color: '#92400e' }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-3">
                {tokenDistribution.map((item) => (
                  <div key={item.name} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div 
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: item.color }}
                      />
                      <item.icon className="w-5 h-5 text-amber-700" />
                      <div className="flex flex-col">
                        <span className="font-medium text-amber-800">{item.name}</span>
                        <span className="text-xs text-amber-600">{item.amount} DHUB</span>
                      </div>
                    </div>
                    <span className="font-bold text-gray-900">{item.value}%</span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Release Schedule */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="p-8 bg-white/90 backdrop-blur-sm border-orange-200 dhub-shadow">
              <h3 className="text-2xl font-bold text-amber-800 mb-6 text-center">
                Release Schedule
              </h3>
              <div className="h-80 mb-6">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={releaseSchedule}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#fed7aa" />
                    <XAxis 
                      dataKey="month" 
                      tick={{ fill: '#92400e', fontSize: 12 }}
                      angle={-45}
                      textAnchor="end"
                      height={60}
                    />
                    <YAxis tick={{ fill: '#92400e' }} />
                    <Tooltip 
                      formatter={(value) => [`${value}%`, 'Released']}
                      labelStyle={{ color: '#92400e' }}
                    />
                    <Bar dataKey="community" fill="#f59e0b" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="text-sm text-amber-600 text-center">
                Gradual token release ensures market stability and long-term growth
              </p>
            </Card>
          </motion.div>
        </div>

        {/* Key Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: Coins,
              title: 'Fixed Supply',
              description: '7,777,777,777 DHUB tokens with no inflation - supply is permanent'
            },
            {
              icon: Users,
              title: '100% Community',
              description: 'All tokens for the community - no team allocation, no vesting'
            },
            {
              icon: Zap,
              title: 'Instant Release',
              description: 'Full supply available from day 1 - no lock-ups or delays'
            }
          ].map((feature, index) => (
            <Card key={feature.title} className="p-6 bg-white/80 backdrop-blur-sm border-orange-200 hover:shadow-lg transition-all duration-300 dhub-shadow text-center">
              <feature.icon className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-amber-800 mb-3">{feature.title}</h4>
              <p className="text-amber-700">{feature.description}</p>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
