'use client'

import { useHeaderColor } from '@/hooks/useHeaderColor'
import { useEffect } from 'react';

const Experience = () => {
  var setColor = useHeaderColor((s) => s.setColor);

  useEffect(() => {
    setColor(false)
  }, [setColor])

  return <div className="bg-green-toy w-full h-screen">Experience</div>
}

export default Experience
