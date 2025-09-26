'use client'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import '@rainbow-me/rainbowkit/styles.css'

import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit'
import { WagmiProvider } from 'wagmi'
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
} from 'wagmi/chains'
import {
  QueryClientProvider,
  QueryClient,
} from '@tanstack/react-query'

const config = getDefaultConfig({
  appName: 'DHUB - Diamond Hands Desert Lizard',
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!,
  chains: [mainnet, polygon, optimism, arbitrum, base],
  ssr: true,
})

const queryClient = new QueryClient()

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DHUB - Diamond Hands Desert Lizard',
  description: 'The ultimate meme coin for diamond hands! Join the desert lizard revolution with 7.77B DHUB tokens.',
  keywords: 'DHUB, meme coin, cryptocurrency, desert lizard, diamond hands, Ethereum, DeFi',
  openGraph: {
    title: 'DHUB - Diamond Hands Desert Lizard',
    description: 'The ultimate meme coin for diamond hands! Join the desert lizard revolution.',
    type: 'website',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DHUB - Diamond Hands Desert Lizard',
    description: 'The ultimate meme coin for diamond hands! Join the desert lizard revolution.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WagmiProvider config={config}>
          <QueryClientProvider client={queryClient}>
            <RainbowKitProvider>
              {children}
            </RainbowKitProvider>
          </QueryClientProvider>
        </WagmiProvider>
      </body>
    </html>
  )
}
