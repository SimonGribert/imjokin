'use client'

import { AnimatePresence, motion } from 'framer-motion'

const Transition = ({ children }: { children: React.ReactNode }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: '0%' }}
        exit={{ y: '-100%' }}

        transition={{ ease: 'easeInOut', duration: 0.75 }}
        className="w-full h-screen overflow-y-hidden bg-black"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export default Transition
