
'use client'

import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { Button } from '@/components/ui/button'
import { Wallet, LogOut } from 'lucide-react'
import { motion } from 'framer-motion'

export default function WalletButton() {
  const { address, isConnected } = useAccount()
  const { connectors, connect } = useConnect()
  const { disconnect } = useDisconnect()

  const handleConnect = () => {
    // Use the first available connector
    const connector = connectors?.[0]
    if (connector) {
      connect({ connector })
    }
  }

  if (isConnected && address) {
    return (
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="flex items-center space-x-2"
      >
        <div className="hidden sm:block text-sm text-amber-800 font-medium">
          {`${address.slice(0, 6)}...${address.slice(-4)}`}
        </div>
        <Button
          onClick={() => disconnect()}
          variant="outline"
          size="sm"
          className="border-orange-300 text-amber-800 hover:bg-orange-100"
        >
          <LogOut className="w-4 h-4 mr-2" />
          Disconnect
        </Button>
      </motion.div>
    )
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        onClick={handleConnect}
        className="dhub-gradient text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
      >
        <Wallet className="w-4 h-4 mr-2" />
        Connect Wallet
      </Button>
    </motion.div>
  )
}
