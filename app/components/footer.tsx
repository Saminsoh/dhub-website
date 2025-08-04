
'use client'

import { Coffee, Heart, ExternalLink } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-t from-desert-800 to-desert-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="https://cdn.abacus.ai/images/4267ca2f-a806-4e80-9c70-78ae320c5307.png"
                alt="DHUB Mascot"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <div className="text-2xl font-bold text-gradient-dhub">DHUB</div>
                <div className="text-sm text-desert-200">DesertDhub Token</div>
              </div>
            </div>
            <p className="text-desert-200 mb-4 max-w-md">
              Born in the Arabian desert, DHUB represents the resilience and community spirit 
              of the Gulf region. Like the dhub lizard, we adapt and thrive together.
            </p>
            <div className="flex items-center space-x-2 text-desert-300">
              <Coffee className="w-4 h-4" />
              <span className="text-sm">Made with قهوة عربية and desert spirit</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-desert-100">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'Token Info', href: '#tokeninfo' },
                { name: 'Tokenomics', href: '#tokenomics' },
                { name: 'Community', href: '#community' },
                { name: 'Contract', href: `https://etherscan.io/token/0xc52ebCa549c24a49bcb69941B976baED89E540Eb` }
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-desert-300 hover:text-white transition-colors duration-200 flex items-center"
                    onClick={(e) => {
                      if (link.href.startsWith('#')) {
                        e.preventDefault()
                        document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
                      }
                    }}
                  >
                    {link.name}
                    {link.href.startsWith('http') && <ExternalLink className="w-3 h-3 ml-1" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Token Details */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-desert-100">Token Details</h4>
            <div className="space-y-2 text-sm">
              <div>
                <span className="text-desert-300">Total Supply:</span>
                <br />
                <span className="text-white font-mono">7,777,777,777 DHUB</span>
              </div>
              <div>
                <span className="text-desert-300">Distribution:</span>
                <br />
                <span className="text-white">100% Community</span>
              </div>
              <div>
                <span className="text-desert-300">Network:</span>
                <br />
                <span className="text-white">Ethereum</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-desert-600 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="flex items-center space-x-2 text-desert-300">
                <span className="text-2xl">🦎</span>
                <span className="text-sm">Desert Strong</span>
                <span className="text-2xl">🏜️</span>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-desert-300 text-sm mb-1">
                © {currentYear} DesertDhub Community. Built with{' '}
                <Heart className="w-4 h-4 inline text-red-400" />{' '}
                in the Gulf region.
              </p>
              <p className="text-desert-400 text-xs">
                DHUB is a community meme token. Please do your own research.
              </p>
            </div>
          </div>
        </div>

        {/* Cultural Elements */}
        <div className="text-center mt-8 pt-8 border-t border-desert-600">
          <div className="flex justify-center items-center space-x-4 text-desert-300">
            <span className="text-2xl">🫖</span>
            <span className="text-lg font-arabic">أهلاً وسهلاً</span>
            <span className="text-2xl">☕</span>
          </div>
          <p className="text-desert-400 text-sm mt-2">
            Welcome to the DHUB family - where Gulf traditions meet blockchain innovation
          </p>
        </div>
      </div>
    </footer>
  )
}
