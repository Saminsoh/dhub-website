
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DHUB - The Gulf Innovation Token 🦎',
  description: 'DHUB is the premier meme token of the Gulf region, powered by the spirit of innovation and community. Join the desert revolution! 🏜️',
  keywords: 'DHUB, meme token, cryptocurrency, Gulf, innovation, blockchain, DeFi, desert token, lizard token',
  openGraph: {
    title: 'DHUB - The Gulf Innovation Token 🦎',
    description: 'Join the DHUB community and ride the waves of the Gulf with our innovation-powered meme token! 🚀',
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
      <body className={`${inter.className} bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 min-h-screen relative overflow-x-hidden`}>
        {/* Sand texture overlay */}
        <div className="fixed inset-0 bg-sand-texture opacity-30 pointer-events-none" aria-hidden="true" />
        
        {/* Heat shimmer effect */}
        <div className="fixed inset-0 bg-gradient-heat pointer-events-none animate-heat-wave" aria-hidden="true" />
        
        <Providers>
          <main className="relative z-10">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}
