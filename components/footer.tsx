
'use client'

import Link from 'next/link'
import { Twitter, Send, Github, MessageCircle } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-sand-300/50 bg-gradient-to-b from-sand-50 to-sand-100 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-4xl animate-lizard-pulse" role="img" aria-label="Desert lizard">
                🦎
              </span>
              <span className="text-2xl font-bold bg-gradient-to-r from-sunset-500 to-terracotta-500 bg-clip-text text-transparent">
                DHUB
              </span>
            </div>
            <p className="text-clay-600 mb-4 max-w-md">
              The premier meme token of the Gulf region. Join our vibrant community and ride the dunes of crypto innovation! 🏜️✨
            </p>
            <div className="flex gap-4">
              <a 
                href="https://twitter.com/dhub" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/60 hover:bg-sunset-100 border border-sand-300 hover:border-sunset-400 transition-all duration-300 hover:scale-110"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="w-5 h-5 text-clay-700 hover:text-sunset-600" />
              </a>
              <a 
                href="https://t.me/dhub" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/60 hover:bg-sunset-100 border border-sand-300 hover:border-sunset-400 transition-all duration-300 hover:scale-110"
                aria-label="Join our Telegram"
              >
                <Send className="w-5 h-5 text-clay-700 hover:text-sunset-600" />
              </a>
              <a 
                href="https://discord.gg/dhub" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/60 hover:bg-sunset-100 border border-sand-300 hover:border-sunset-400 transition-all duration-300 hover:scale-110"
                aria-label="Join our Discord"
              >
                <MessageCircle className="w-5 h-5 text-clay-700 hover:text-sunset-600" />
              </a>
              <a 
                href="https://github.com/dhub" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/60 hover:bg-sunset-100 border border-sand-300 hover:border-sunset-400 transition-all duration-300 hover:scale-110"
                aria-label="View our GitHub"
              >
                <Github className="w-5 h-5 text-clay-700 hover:text-sunset-600" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-clay-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-clay-600 hover:text-sunset-600 transition-colors">
                  About DHUB
                </Link>
              </li>
              <li>
                <Link href="#tokenomics" className="text-clay-600 hover:text-sunset-600 transition-colors">
                  Tokenomics
                </Link>
              </li>
              <li>
                <Link href="#roadmap" className="text-clay-600 hover:text-sunset-600 transition-colors">
                  Roadmap
                </Link>
              </li>
              <li>
                <Link href="#community" className="text-clay-600 hover:text-sunset-600 transition-colors">
                  Community
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-clay-800 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-clay-600 hover:text-sunset-600 transition-colors">
                  Whitepaper 📄
                </a>
              </li>
              <li>
                <a href="#" className="text-clay-600 hover:text-sunset-600 transition-colors">
                  Audit Report 🔒
                </a>
              </li>
              <li>
                <a href="#" className="text-clay-600 hover:text-sunset-600 transition-colors">
                  Brand Kit 🎨
                </a>
              </li>
              <li>
                <a href="#" className="text-clay-600 hover:text-sunset-600 transition-colors">
                  FAQ ❓
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-sand-300/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-clay-600">
            © {currentYear} DHUB. All rights reserved. Built with 💚 in the Gulf.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-clay-600 hover:text-sunset-600 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-clay-600 hover:text-sunset-600 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-sunset-500 via-terracotta-500 to-lizard-500" aria-hidden="true" />
    </footer>
  )
}
