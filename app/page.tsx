import AboutMe from '@/components/sections/AboutMe'
import Hero from '@/components/sections/Hero'
import { AboutMeData } from '@/data/aboutme'
import { HeroData } from '@/data/hero'

const Home = () => {
  return (
    <main className="snap-y snap-mandatory lg:h-screen h-svh overflow-scroll">
      <Hero {...HeroData} />
      <AboutMe {...AboutMeData} />
    </main>
  )
}

export default Home
