
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '../components/providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DHUB - The Gulf Gecko Token',
  description: 'DHUB is the premier meme token of the Gulf region, powered by the spirit of the desert gecko.',
  keywords: 'DHUB, meme token, cryptocurrency, Gulf, gecko, blockchain, DeFi',
  openGraph: {
    title: 'DHUB - The Gulf Gecko Token',
    description: 'Join the DHUB community and ride the waves of the Gulf with our gecko-powered meme token!',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 min-h-screen`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
