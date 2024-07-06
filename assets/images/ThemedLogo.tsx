'use client'

import { useTheme } from 'next-themes'
import React from 'react'
import LogoSvg from './LogoSvg';

const ThemedLogo = ({ width, height }: { width: number; height: number }) => {
  const { theme } = useTheme()

  if (theme === 'vibrant') {
    return (
      <div className="w-full h-full">
        <LogoSvg width={width} height={height} bottomColor="#1DB12C" />
      </div>
    )
  }

  return (
    <>
      <div className="hidden dark:block w-full h-full">
        <LogoSvg
          width={width}
          height={height}
          topColor="black"
          bottomColor="black"
          stroke="white"
        />
      </div>
      <div className="dark:hidden w-full h-full">
        <LogoSvg
          width={width}
          height={height}
          topColor="white"
          bottomColor="white"
        />
      </div>
    </>
  )
}

export default ThemedLogo;