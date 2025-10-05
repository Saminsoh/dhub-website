
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-sand-300/50 bg-sand-50/80 backdrop-blur-md supports-[backdrop-filter]:bg-sand-50/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <span className="text-3xl animate-lizard-pulse group-hover:scale-110 transition-transform" role="img" aria-label="Desert lizard">
              🦎
            </span>
            <span className="text-2xl font-bold bg-gradient-to-r from-sunset-500 to-terracotta-500 bg-clip-text text-transparent">
              DHUB
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6" aria-label="Main navigation">
            <Link 
              href="#about" 
              className="text-sm font-medium text-clay-700 hover:text-sunset-500 transition-colors"
            >
              About
            </Link>
            <Link 
              href="#tokenomics" 
              className="text-sm font-medium text-clay-700 hover:text-sunset-500 transition-colors"
            >
              Tokenomics
            </Link>
            <Link 
              href="#community" 
              className="text-sm font-medium text-clay-700 hover:text-sunset-500 transition-colors"
            >
              Community
            </Link>
            <Link 
              href="#roadmap" 
              className="text-sm font-medium text-clay-700 hover:text-sunset-500 transition-colors"
            >
              Roadmap
            </Link>
            <Button 
              className="bg-gradient-to-r from-sunset-500 to-terracotta-500 hover:from-sunset-600 hover:to-terracotta-600 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Connect Wallet 🚀
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-clay-700 hover:text-sunset-500 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-sand-300/50" aria-label="Mobile navigation">
            <div className="flex flex-col space-y-3">
              <Link 
                href="#about" 
                className="text-sm font-medium text-clay-700 hover:text-sunset-500 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="#tokenomics" 
                className="text-sm font-medium text-clay-700 hover:text-sunset-500 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Tokenomics
              </Link>
              <Link 
                href="#community" 
                className="text-sm font-medium text-clay-700 hover:text-sunset-500 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Community
              </Link>
              <Link 
                href="#roadmap" 
                className="text-sm font-medium text-clay-700 hover:text-sunset-500 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Roadmap
              </Link>
              <Button 
                className="bg-gradient-to-r from-sunset-500 to-terracotta-500 hover:from-sunset-600 hover:to-terracotta-600 text-white font-bold shadow-lg w-full mt-2"
              >
                Connect Wallet 🚀
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
