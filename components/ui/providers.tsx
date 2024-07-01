'use client'

import { ThemeProvider } from 'next-themes'
import IncludeClasses from './IncludeClasses'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider themes={['dark', 'light', 'vibrant']} attribute="class" defaultTheme="system" enableSystem>
      <IncludeClasses />
      {children}
    </ThemeProvider>
  )
}
