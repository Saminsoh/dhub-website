
'use client'

import { motion } from 'framer-motion'
import { useAccount, useBalance } from 'wagmi'
import { useContractData } from '@/hooks/useContractData'
import { Copy, ExternalLink } from 'lucide-react'
import { useState } from 'react'

const CONTRACT_ADDRESS = '0xc52ebCa549c24a49bcb69941B976baED89E540Eb'

export function TokenInfo() {
  const { address, isConnected } = useAccount()
  const { data: contractData, isLoading } = useContractData()
  const { data: balance } = useBalance({
    address: address,
    token: CONTRACT_ADDRESS as `0x${string}`,
  })
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async (text: string) => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const formatNumber = (num: string | undefined) => {
    if (!num) return '0'
    const numValue = parseFloat(num)
    if (numValue >= 1e9) return `${(numValue / 1e9).toFixed(2)}B`
    if (numValue >= 1e6) return `${(numValue / 1e6).toFixed(2)}M`
    if (numValue >= 1e3) return `${(numValue / 1e3).toFixed(2)}K`
    return numValue.toFixed(2)
  }

  return (
    <section id="token" className="py-16 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">Token Information</h2>
          <p className="text-lg text-gray-700">Live data from the Ethereum blockchain</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Contract Info */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-orange-200"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4">Contract Details</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-600">Name</p>
                <p className="font-semibold">{isLoading ? 'Loading...' : contractData?.name || 'DhubToken'}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Symbol</p>
                <p className="font-semibold">{isLoading ? 'Loading...' : contractData?.symbol || 'DHUB'}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Decimals</p>
                <p className="font-semibold">{isLoading ? 'Loading...' : contractData?.decimals || '18'}</p>
              </div>
            </div>
          </motion.div>

          {/* Supply Info */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-orange-200"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4">Supply Information</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-600">Total Supply</p>
                <p className="font-semibold text-2xl text-orange-600">
                  {isLoading ? 'Loading...' : formatNumber(contractData?.totalSupply) || '7.77B'}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Network</p>
                <p className="font-semibold">Ethereum Mainnet</p>
              </div>
            </div>
          </motion.div>

          {/* User Balance */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 shadow-lg border border-orange-200"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4">Your Balance</h3>
            <div className="space-y-3">
              {isConnected ? (
                <>
                  <div>
                    <p className="text-sm text-gray-600">DHUB Balance</p>
                    <p className="font-semibold text-2xl text-green-600">
                      {balance ? formatNumber(balance.formatted) : '0'}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Status</p>
                    <p className="font-semibold text-green-600">🦎 Connected</p>
                  </div>
                </>
              ) : (
                <div className="text-center py-4">
                  <p className="text-gray-500 mb-2">Connect wallet to view balance</p>
                  <p className="text-2xl">🔌</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Contract Address */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 bg-white rounded-2xl p-6 shadow-lg border border-orange-200"
        >
          <h3 className="text-xl font-bold text-gray-800 mb-4">Contract Address</h3>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <code className="flex-1 bg-gray-100 p-3 rounded-lg text-sm font-mono break-all">
              {CONTRACT_ADDRESS}
            </code>
            <div className="flex gap-2">
              <button
                onClick={() => copyToClipboard(CONTRACT_ADDRESS)}
                className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
              >
                <Copy size={16} />
                {copied ? 'Copied!' : 'Copy'}
              </button>
              <a
                href={`https://etherscan.io/address/${CONTRACT_ADDRESS}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                <ExternalLink size={16} />
                Etherscan
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
