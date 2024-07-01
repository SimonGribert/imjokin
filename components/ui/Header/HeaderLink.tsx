import Link from 'next/link'
import { gribertNarrow } from '../fonts'
import { HeaderLinkType } from './'

const HeaderLink = ({ text, href }: HeaderLinkType) => {
  return (
    <Link
      href={href}
      style={gribertNarrow.style}
      className={`
        lg:text-3xl lg:h-16 
        sm:text-2xl sm:h-12
        text-xl h-10
        outline-black dark:outline-white text-black dark:text-white
        outline outline-2 outline-offset-[-1px] w-full flex justify-center items-center 
        hover:bg-black dark:hover:bg-white vibrant:hover:bg-orange-toy
        hover:text-white dark:hover:text-black vibrant:hover:text-black
      `}
    >
      {text}
    </Link>
  )
}

export default HeaderLink
