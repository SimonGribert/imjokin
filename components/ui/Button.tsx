import React from 'react'
import OutlineWrapper from './OutlineWrapper'
import { classNames } from '@/utils/css'
import Link from 'next/link'

const Button = ({
  children,
  href,
}: {
  children: React.ReactNode
  href: string
}) => {
  return (
    <OutlineWrapper
      className={classNames(
        'w-12 h-12 text-3xl font-black',
        'hover:bg-black hover:text-white',
        'dark:text-white dark:bg-black dark:hover:bg-white dark:hover:text-black',
        'vibrant:hover:bg-green-toy vibrant:text-black',
      )}
    >
      <Link
        className="w-full h-full flex justify-center items-center"
        href={href}
      >
        {children}
      </Link>
    </OutlineWrapper>
  )
}

export default Button
