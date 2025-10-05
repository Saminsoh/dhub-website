
'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles, TrendingUp, Users } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 left-10 w-72 h-72 bg-sunset-300/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-terracotta-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lizard-300/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-sunset-100 to-terracotta-100 border border-sunset-300 mb-8 animate-shimmer bg-[length:200%_100%]">
            <Sparkles className="w-4 h-4 text-sunset-600" />
            <span className="text-sm font-semibold text-sunset-700">The Gulf's Hottest Meme Token 🔥</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-sunset-500 via-terracotta-500 to-sunset-600 bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
              Welcome to the Desert
            </span>
            <br />
            <span className="text-clay-800">
              Where Memes Meet Innovation 🦎
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-clay-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            DHUB is the <span className="font-bold text-sunset-600">premier meme token</span> of the Gulf region. 
            Join our vibrant community and ride the dunes of crypto innovation! 🏜️✨
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-lg border border-sand-300 shadow-sm">
              <Users className="w-5 h-5 text-lizard-600" />
              <div className="text-left">
                <div className="text-sm text-clay-600">Community</div>
                <div className="text-lg font-bold text-clay-800">10K+ Holders</div>
              </div>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-lg border border-sand-300 shadow-sm">
              <TrendingUp className="w-5 h-5 text-sunset-600" />
              <div className="text-left">
                <div className="text-sm text-clay-600">Market Cap</div>
                <div className="text-lg font-bold text-clay-800">$1M+</div>
              </div>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-lg border border-sand-300 shadow-sm">
              <Sparkles className="w-5 h-5 text-terracotta-600" />
              <div className="text-left">
                <div className="text-sm text-clay-600">Vibe</div>
                <div className="text-lg font-bold text-clay-800">Immaculate ✨</div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-sunset-500 to-terracotta-500 hover:from-sunset-600 hover:to-terracotta-600 text-white font-bold text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
            >
              Buy DHUB Now 🚀
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-sunset-500 text-sunset-700 hover:bg-sunset-50 font-bold text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Join Community 🌟
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center gap-4 text-sm text-clay-600">
            <div className="flex items-center gap-2">
              <span className="text-green-600 text-xl">✓</span>
              <span>Audited Smart Contract</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600 text-xl">✓</span>
              <span>Liquidity Locked</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-600 text-xl">✓</span>
              <span>Community Driven</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative lizard */}
      <div className="absolute bottom-10 right-10 text-8xl opacity-20 animate-lizard-pulse hidden lg:block" aria-hidden="true">
        🦎
      </div>
    </section>
  )
}
