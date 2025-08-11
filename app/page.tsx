
import Header from '@/components/header'
import Hero from '@/components/hero'
import TokenInfo from '@/components/token-info'
import Tokenomics from '@/components/tokenomics'
import Community from '@/components/community'
import Footer from '@/components/footer'
import ContractSetupGuide from '@/components/contract-setup-guide'

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <div className="container mx-auto px-4 pt-8">
        <ContractSetupGuide />
      </div>
      <Hero />
      <TokenInfo />
      <Tokenomics />
      <Community />
      <Footer />
    </main>
  )
}
