
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Copy, ExternalLink, Coins, TrendingUp, Layers, Users } from 'lucide-react'
import { Card } from './ui/card'
import { Button } from './ui/button'
import { TOKEN_INFO, DHUB_CONTRACT_ADDRESS } from '../utils/contract-config'
// import { toast } from 'sonner'
import Image from 'next/image'

export default function TokenInfo() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const copyAddress = () => {
    navigator.clipboard.writeText(DHUB_CONTRACT_ADDRESS)
    alert('Contract address copied to clipboard! 🦎')
  }

  const tokenStats = [
    { icon: Coins, label: 'Total Supply', value: '7,777,777,777 DHUB', color: 'text-desert-600' },
    { icon: Users, label: 'Distribution', value: '100% Community', color: 'text-blockchain-600' },
    { icon: Layers, label: 'Blockchain', value: 'Ethereum', color: 'text-desert-500' },
    { icon: TrendingUp, label: 'Launch', value: 'Available Now', color: 'text-blockchain-500' }
  ]

  return (
    <section id="tokeninfo" className="py-20 bg-gradient-to-b from-desert-50 to-white">
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
            Token Information
          </h2>
          <p className="text-xl text-desert-700 max-w-3xl mx-auto">
            Meet DHUB - 7.7 billion tokens representing the strength and community spirit 
            of the Gulf desert dhub lizard 🦎☕
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
              <Card className="p-6 bg-white/80 backdrop-blur-sm border-desert-200 hover:shadow-lg transition-all duration-300 dhub-shadow">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-dhub-gradient rounded-full flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-desert-700 font-medium">{stat.label}</div>
                </div>
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
          <Card className="p-8 bg-white/90 backdrop-blur-sm border-desert-200 dhub-shadow">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-desert-800 mb-2">Smart Contract Address</h3>
              <p className="text-desert-600">Verify and interact with DHUB token on Ethereum blockchain</p>
            </div>
            
            <div className="bg-gradient-to-r from-desert-50 to-blockchain-50 rounded-lg p-6 mb-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <code className="text-base sm:text-lg font-mono text-desert-800 break-all">
                  {DHUB_CONTRACT_ADDRESS}
                </code>
                <div className="flex space-x-2 flex-shrink-0">
                  <Button
                    onClick={copyAddress}
                    variant="outline"
                    size="sm"
                    className="border-desert-300 text-desert-800 hover:bg-desert-100"
                  >
                    <Copy className="w-4 h-4 mr-2" />
                    Copy
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-blockchain-300 text-blockchain-800 hover:bg-blockchain-100"
                    onClick={() => window.open(`https://etherscan.io/token/${DHUB_CONTRACT_ADDRESS}`, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Etherscan
                  </Button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-4 bg-desert-50 rounded-lg">
                <h4 className="font-semibold text-desert-800 mb-2">Token Name</h4>
                <p className="text-2xl font-bold text-gradient-dhub">{TOKEN_INFO.name}</p>
              </div>
              <div className="p-4 bg-blockchain-50 rounded-lg">
                <h4 className="font-semibold text-blockchain-800 mb-2">Symbol</h4>
                <p className="text-2xl font-bold text-gradient-dhub">{TOKEN_INFO.symbol}</p>
              </div>
              <div className="p-4 bg-gradient-to-r from-desert-50 to-blockchain-50 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Decimals</h4>
                <p className="text-2xl font-bold text-gradient-dhub">{TOKEN_INFO.decimals}</p>
              </div>
            </div>

            {/* Desert Cultural Elements */}
            <div className="mt-8 text-center">
              <div className="flex justify-center items-center space-x-4 text-desert-600 mb-4">
                <span className="text-2xl">🏜️</span>
                <span className="text-lg font-medium">Born in the Arabian Desert</span>
                <span className="text-2xl">☕</span>
              </div>
              <p className="text-desert-700 max-w-2xl mx-auto">
                Like the dhub lizard that thrives in harsh desert conditions, 
                DHUB token represents resilience, community, and the rich culture of the Gulf region.
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
