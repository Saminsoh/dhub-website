
import Header from './components/header'
import Hero from './components/hero'
import TokenInfo from './components/token-info'
import Tokenomics from './components/tokenomics'
import Community from './components/community'
import Footer from './components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-desert-50 to-desert-100">
      <Header />
      <Hero />
      <TokenInfo />
      <Tokenomics />
      <Community />
      <Footer />
    </main>
  )
}
