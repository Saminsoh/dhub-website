import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

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
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
