import Header from '@/components/Header'
import HeroMinimal from '@/components/HeroMinimal'
import FeaturesMinimal from '@/components/FeaturesMinimal'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <HeroMinimal />
      <FeaturesMinimal />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
