import React from 'react'
import { gribertNarrow } from './fonts'

const H3 = ({ children }: { children: React.ReactNode }) => {
  return (
    <h3
      style={gribertNarrow.style}
      className="xl:text-7xl md:text-6xl sm:text-5xl text-3xl mb-5 text-black dark:text-white"
    >
      {children}
    </h3>
  )
}

export default H3
