import Transition from '@/components/ui/Transition'
import React from 'react'

const PageLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <div>
      <Transition>{children}</Transition>
    </div>
  )
}

export default PageLayout
