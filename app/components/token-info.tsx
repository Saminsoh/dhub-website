
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Copy, ExternalLink, Coins, TrendingUp, DollarSign, Users } from 'lucide-react'
import { Card } from './ui/card'
import { Button } from './ui/button'
import { TOKEN_INFO, DHUB_CONTRACT_ADDRESS } from '../utils/contract-config'
import { toast } from 'sonner'

export default function TokenInfo() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const copyAddress = () => {
    navigator.clipboard.writeText(DHUB_CONTRACT_ADDRESS)
    toast.success('Contract address copied to clipboard!')
  }

  const tokenStats = [
    { icon: Coins, label: 'Total Supply', value: '1,000,000,000 DHUB', color: 'text-amber-600' },
    { icon: TrendingUp, label: 'Market Cap', value: '$2.5M', color: 'text-green-600' },
    { icon: DollarSign, label: 'Current Price', value: '$0.0025', color: 'text-blue-600' },
    { icon: Users, label: 'Holders', value: '5,247', color: 'text-purple-600' }
  ]

  return (
    <section id="tokeninfo" className="py-20 bg-gradient-to-b from-orange-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-gold mb-6">
            Token Information
          </h2>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto">
            Get to know DHUB token - the digital asset that&apos;s taking the Gulf region by storm
          </p>
        </motion.div>

        {/* Token Stats Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {tokenStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <Card className="p-6 bg-white/80 backdrop-blur-sm border-orange-200 hover:shadow-lg transition-all duration-300 gecko-shadow">
                <div className="flex items-center justify-between mb-4">
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-amber-700 font-medium">{stat.label}</div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Contract Address */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="p-8 bg-white/90 backdrop-blur-sm border-orange-200 gecko-shadow">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-amber-800 mb-2">Contract Address</h3>
              <p className="text-amber-600">Verify and interact with DHUB token on the blockchain</p>
            </div>
            
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-6 mb-6">
              <div className="flex items-center justify-between">
                <code className="text-lg font-mono text-amber-800 break-all mr-4">
                  {DHUB_CONTRACT_ADDRESS}
                </code>
                <div className="flex space-x-2">
                  <Button
                    onClick={copyAddress}
                    variant="outline"
                    size="sm"
                    className="border-orange-300 text-amber-800 hover:bg-orange-100"
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-orange-300 text-amber-800 hover:bg-orange-100"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
              <div>
                <h4 className="font-semibold text-amber-800 mb-2">Token Name</h4>
                <p className="text-2xl font-bold text-gradient-gold">{TOKEN_INFO.name}</p>
              </div>
              <div>
                <h4 className="font-semibold text-amber-800 mb-2">Symbol</h4>
                <p className="text-2xl font-bold text-gradient-gold">{TOKEN_INFO.symbol}</p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
