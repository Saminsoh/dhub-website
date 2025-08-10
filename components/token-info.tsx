
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Copy, ExternalLink, Coins, TrendingUp, DollarSign, Users, Wifi, WifiOff, Loader2 } from 'lucide-react'
import { Card } from './ui/card'
import { Button } from './ui/button'
import { DHUB_CONTRACT_ADDRESS } from '../utils/contract-config'
import { useDhubTokenData } from '../hooks/use-dhub-contract'
import { toast } from 'sonner'

export default function TokenInfo() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const { totalSupply, name, symbol, isLoading, isLive, isContractValid } = useDhubTokenData()

  const copyAddress = () => {
    navigator.clipboard.writeText(DHUB_CONTRACT_ADDRESS)
    toast.success('Contract address copied to clipboard!')
  }

  const openEtherscan = () => {
    if (isContractValid) {
      window.open(`https://etherscan.io/token/${DHUB_CONTRACT_ADDRESS}`, '_blank')
    } else {
      toast.error('Please set a valid contract address first')
    }
  }

  const tokenStats = [
    { 
      icon: Coins, 
      label: 'Total Supply', 
      value: isLoading ? 'Loading...' : `${totalSupply} ${symbol}`, 
      color: 'text-amber-600',
      isLive: isLive
    },
    { 
      icon: TrendingUp, 
      label: 'Market Cap', 
      value: '$TBD', 
      color: 'text-green-600',
      isLive: false,
      note: 'Available after DEX listing'
    },
    { 
      icon: DollarSign, 
      label: 'Current Price', 
      value: '$TBD', 
      color: 'text-blue-600',
      isLive: false,
      note: 'Available after DEX listing'
    },
    { 
      icon: Users, 
      label: 'Holders', 
      value: 'TBD', 
      color: 'text-purple-600',
      isLive: false,
      note: 'Available after deployment'
    }
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
          
          {/* Live Data Indicator */}
          <div className="flex items-center justify-center mt-4">
            <div className={`flex items-center px-3 py-1 rounded-full ${
              isLive ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'
            }`}>
              {isLive ? (
                <>
                  <Wifi className="w-4 h-4 mr-2" />
                  Live blockchain data
                </>
              ) : (
                <>
                  <WifiOff className="w-4 h-4 mr-2" />
                  {isContractValid ? 'Connecting to contract...' : 'Demo data - Contract not set'}
                </>
              )}
            </div>
          </div>
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
              <Card className="p-6 bg-white/80 backdrop-blur-sm border-orange-200 hover:shadow-lg transition-all duration-300 dhub-shadow relative">
                {/* Live indicator badge */}
                <div className="absolute top-2 right-2">
                  {stat.isLive ? (
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" title="Live data" />
                  ) : (
                    <div className="w-3 h-3 bg-gray-300 rounded-full" title="Static data" />
                  )}
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  {stat.label === 'Total Supply' && isLoading && (
                    <Loader2 className="w-6 h-6 animate-spin text-amber-600" />
                  )}
                </div>
                
                <div className="text-2xl font-bold text-gray-900 mb-2 min-h-[2rem] flex items-center">
                  {stat.value}
                </div>
                
                <div className="text-amber-700 font-medium">{stat.label}</div>
                
                {stat.note && (
                  <div className="text-xs text-amber-600 mt-2 italic">{stat.note}</div>
                )}
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
          <Card className="p-8 bg-white/90 backdrop-blur-sm border-orange-200 dhub-shadow">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-amber-800 mb-2">Contract Address</h3>
              <p className="text-amber-600">
                {isContractValid 
                  ? 'Verify and interact with DHUB token on the blockchain'
                  : 'Contract address will be updated after deployment'
                }
              </p>
            </div>
            
            <div className={`bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-6 mb-6 ${
              !isContractValid ? 'opacity-50' : ''
            }`}>
              <div className="flex items-center justify-between">
                <code className="text-lg font-mono text-amber-800 break-all mr-4">
                  {isContractValid ? DHUB_CONTRACT_ADDRESS : '0x0000000000000000000000000000000000000000'}
                </code>
                <div className="flex space-x-2">
                  <Button
                    onClick={copyAddress}
                    variant="outline"
                    size="sm"
                    className="border-orange-300 text-amber-800 hover:bg-orange-100"
                    disabled={!isContractValid}
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                  <Button
                    onClick={openEtherscan}
                    variant="outline"
                    size="sm"
                    className="border-orange-300 text-amber-800 hover:bg-orange-100"
                    disabled={!isContractValid}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
              <div>
                <h4 className="font-semibold text-amber-800 mb-2 flex items-center justify-center">
                  Token Name
                  {isLoading && <Loader2 className="w-4 h-4 animate-spin ml-2" />}
                  {isLive && !isLoading && <div className="w-2 h-2 bg-green-500 rounded-full ml-2" />}
                </h4>
                <p className="text-2xl font-bold text-gradient-gold">
                  {isLoading ? 'Loading...' : name}
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-amber-800 mb-2 flex items-center justify-center">
                  Symbol
                  {isLoading && <Loader2 className="w-4 h-4 animate-spin ml-2" />}
                  {isLive && !isLoading && <div className="w-2 h-2 bg-green-500 rounded-full ml-2" />}
                </h4>
                <p className="text-2xl font-bold text-gradient-gold">
                  {isLoading ? 'Loading...' : symbol}
                </p>
              </div>
            </div>

            {!isContractValid && (
              <div className="mt-6 p-4 bg-orange-50 border border-orange-200 rounded-lg">
                <p className="text-amber-800 text-center">
                  <strong>For Developers:</strong> Update the contract address in{' '}
                  <code className="bg-orange-100 px-2 py-1 rounded">utils/contract-config.ts</code>{' '}
                  after deployment to see live blockchain data.
                </p>
              </div>
            )}
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
