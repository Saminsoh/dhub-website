
'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Code, Copy, CheckCircle, AlertCircle, ExternalLink, X } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { isContractConfigured, DHUB_CONTRACT_ADDRESS } from '@/utils/contract-config'
import { toast } from 'sonner'

export default function ContractSetupGuide() {
  const [copiedStep, setCopiedStep] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(true)
  
  const isContractSet = isContractConfigured()

  // Auto-hide the success message after 5 seconds
  useEffect(() => {
    if (isContractSet && isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(false)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [isContractSet, isVisible])

  const copyToClipboard = (text: string, step: number) => {
    navigator.clipboard.writeText(text)
    setCopiedStep(step)
    toast.success('Copied to clipboard!')
    setTimeout(() => setCopiedStep(null), 2000)
  }

  const setupSteps = [
    {
      title: "1. Deploy Your Smart Contract",
      description: "Deploy your ERC-20 token contract to Ethereum mainnet or testnet",
      code: "// Use Remix, Hardhat, or Foundry to deploy",
      action: "Deploy Contract"
    },
    {
      title: "2. Update Contract Address",
      description: "Replace the placeholder address in contract configuration",
      code: `export const DHUB_CONTRACT_ADDRESS = 'YOUR_CONTRACT_ADDRESS_HERE'`,
      action: "Update config"
    },
    {
      title: "3. Add Contract ABI",
      description: "Replace the ABI array with your contract's actual ABI",
      code: "export const DHUB_CONTRACT_ABI = [ /* Your contract ABI */ ]",
      action: "Update ABI"
    },
    {
      title: "4. Configure RPC Endpoints",
      description: "Add your preferred RPC providers for reliable connections",
      code: `const config = createConfig({
  chains: [mainnet, sepolia, bsc],
  transports: {
    [mainnet.id]: http('https://eth-mainnet.alchemyapi.io/v2/YOUR-API-KEY')
  }
})`,
      action: "Update RPC"
    }
  ]

  if (isContractSet && isVisible) {
    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="mb-8"
        >
          <Card className="p-4 bg-green-50 border-green-200 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-green-800">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium text-sm">Contract Connected Successfully!</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsVisible(false)}
                className="text-green-600 hover:text-green-800 hover:bg-green-100 h-6 w-6 p-0"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-green-600 mt-1 ml-7">
              Live data from: {DHUB_CONTRACT_ADDRESS.slice(0, 10)}...{DHUB_CONTRACT_ADDRESS.slice(-4)}
            </p>
          </Card>
        </motion.div>
      </AnimatePresence>
    )
  }

  if (isContractSet && !isVisible) {
    return null
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-8"
    >
      <Card className="p-8 bg-orange-50 border-orange-200">
        <div className="text-center mb-6">
          <AlertCircle className="w-12 h-12 text-orange-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-orange-800 mb-2">
            Contract Setup Required
          </h3>
          <p className="text-orange-700">
            Follow these steps to connect your smart contract and enable live blockchain data
          </p>
        </div>

        <div className="space-y-6">
          {setupSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 border border-orange-200"
            >
              <h4 className="font-semibold text-orange-800 mb-2">{step.title}</h4>
              <p className="text-orange-700 mb-4">{step.description}</p>
              
              <div className="bg-gray-900 rounded-lg p-4 relative">
                <pre className="text-green-400 text-sm overflow-x-auto">
                  <code>{step.code}</code>
                </pre>
                <Button
                  onClick={() => copyToClipboard(step.code, index)}
                  size="sm"
                  variant="outline"
                  className="absolute top-2 right-2"
                >
                  {copiedStep === index ? (
                    <CheckCircle className="w-4 h-4" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              className="border-orange-300 text-orange-800 hover:bg-orange-100"
              onClick={() => window.open('https://remix.ethereum.org/', '_blank')}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Open Remix IDE
            </Button>
            <Button
              variant="outline"
              className="border-orange-300 text-orange-800 hover:bg-orange-100"
              onClick={() => window.open('https://docs.openzeppelin.com/contracts/4.x/erc20', '_blank')}
            >
              <Code className="w-4 h-4 mr-2" />
              ERC-20 Documentation
            </Button>
          </div>
          
          <p className="text-sm text-orange-600 mt-4">
            Need help? Check our documentation or contact the development team.
          </p>
        </div>
      </Card>
    </motion.div>
  )
}
