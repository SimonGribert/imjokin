'use client'

import { useHeaderColor } from '@/hooks/useHeaderColor'
import { useEffect } from 'react'

const About = () => {
  var setColor = useHeaderColor((s) => s.setColor)

  useEffect(() => {
    setColor(true)
  }, [setColor])

  return <div className="bg-orange-toy w-full h-screen">About</div>
}

export default About
