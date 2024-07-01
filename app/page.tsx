import Hero from '@/components/sections/Hero'
import { HeroData } from '@/data/hero'

const Home = () => {
  return (
    <main>
      <Hero {...HeroData} />
    </main>
  )
}

export default Home
