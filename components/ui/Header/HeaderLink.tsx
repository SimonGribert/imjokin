'use client'

import Link from 'next/link'
import { gribertNarrow } from '../fonts'
import { HeaderLinkType } from './'
import { useHeaderColor } from '@/hooks/useHeaderColor'
import { classNames } from '@/utils/css'

const HeaderLink = ({ text, href }: HeaderLinkType) => {
  const color = useHeaderColor((s) => s.color)

  return (
    <Link
      href={href}
      style={gribertNarrow.style}
      className={classNames(
        `
        lg:text-3xl lg:h-16 
        sm:text-2xl sm:h-12
        text-xl h-10
        text-black outline-black
        dark:outline-white dark:text-white
        outline outline-2 outline-offset-[-1px] 
        w-full flex justify-center items-center 
        hover:bg-black dark:hover:bg-white 
        hover:text-white dark:hover:text-black vibrant:hover:text-black
      `,
        color ? 'vibrant:hover:bg-green-toy' : 'vibrant:hover:bg-orange-toy',
      )}
    >
      {text}
    </Link>
  )
}

export default HeaderLink
