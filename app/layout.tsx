
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
// import { Providers } from './providers'
// import { Toaster } from 'sonner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DesertDhub (DHUB) - The Gulf Desert Lizard Token',
  description: 'Join the DesertDhub community! DHUB is the premier meme token representing the spirit of the Gulf desert and the resilient dhub lizard.',
  keywords: 'DesertDhub, DHUB, meme token, cryptocurrency, Gulf region, desert lizard, blockchain',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
