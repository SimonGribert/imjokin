import dynamic from 'next/dynamic';
import { gribertNarrow } from '../ui/fonts'

const ThemedLogo = dynamic(() => import('@/assets/images/ThemedLogo'), { ssr: false })

export type HeroType = { name: string; title: string }

const Hero = ({ name, title }: HeroType) => {
  return (
    <div className="m-auto bg-white dark:bg-black vibrant:bg-green-toy snap-start	">
      <div
        className={`
        flex justify-center items-center lg:h-screen h-svh w-full max-w-screen-xl mx-auto`}
      >
        <div className="flex flex-col items-center">
          <div className="mb-10">
            <ThemedLogo height={170} width={123} />
          </div>
          <h1
            style={gribertNarrow.style}
            className={`
              text-black 
              dark:text-white
              vibrant:text-black
              xl:text-hero-name-xl xl:leading-hero-name-xl
              lg:text-hero-name-lg lg:leading-hero-name-lg
              md:text-hero-name-md md:leading-hero-name-md
              sm:text-hero-name-sm sm:leading-hero-name-sm 
              text-hero-name-xs leading-hero-name-xs`}
          >
            {name}
          </h1>
          <hr className="border-t-2 border-black dark:border-white border-solid w-full xl:mb-6 mb-5 lg:mt-3 mt-2" />
          <h2
            style={gribertNarrow.style}
            className={`
            text-black dark:text-white vibrant:text-black
            xl:text-hero-title-xl xl:leading-hero-title-xl
            lg:text-hero-title-lg lg:leading-hero-title-lg
            md:text-hero-title-md md:leading-hero-title-md
            sm:text-hero-title-sm sm:leading-hero-title-sm 
            text-hero-title-xs leading-hero-title-xs`}
          >
            {title}
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Hero
