'use client'

import Image, { StaticImageData } from 'next/image'
import React, { useEffect, useRef } from 'react'

import OutlineWrapper from '../ui/OutlineWrapper'
import H3 from '../ui/H3'
import Paragraph from '../ui/Paragraph'
import Button from '../ui/Button'
import { useInView } from 'framer-motion'
import { useHeaderColor } from '@/hooks/useHeaderColor'

export type AboutMeType = {
  headshot: StaticImageData
  title1: string
  title2: string
  info: string
}

const AboutMe = ({ headshot, title1, title2, info }: AboutMeType) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.6,  })
  const setColor = useHeaderColor((s) => s.setColor)

  useEffect(() => {
    setColor(isInView)
  }, [isInView, setColor])

  return (
    <div
      ref={ref}
      className="m-auto bg-white dark:bg-black vibrant:bg-orange-toy snap-start"
    >
      <div
        className={`
        lg:h-screen w-full max-w-screen-xl mx-auto px-5 lg:pt-28 sm:pt-[68px] pt-[100px] lg:pb-12 pb-5`}
      >
        <OutlineWrapper className="flex lg:flex-row-reverse flex-col w-full h-full">
          <OutlineWrapper className="lg:w-3/5 w-full lg:h-full p-10 md:h-[550px] sm:h-[460px] h-[370px]">
            <div className="relative w-full h-full">
              <Image
                src={headshot}
                fill
                alt="Headshot of Simon Gribert"
                className="object-cover"
              />
            </div>
          </OutlineWrapper>
          <div className="lg:w-2/5 w-full flex lg:flex-col md:flex-row flex-col justify-between">
            <div className="p-10 lg:w-auto md:w-3/5">
              <H3>{title1}</H3>
              <Paragraph>{info}</Paragraph>
            </div>
            <OutlineWrapper className="p-10 lg:w-auto md:w-2/5">
              <H3>{title2}</H3>
              <div className="flex">
                <Button href="/">in</Button>
                <Button href="/">@</Button>
                <Button href="/">#</Button>
              </div>
            </OutlineWrapper>
          </div>
        </OutlineWrapper>
      </div>
    </div>
  )
}

export default AboutMe
