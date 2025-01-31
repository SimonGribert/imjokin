import Header from '@/components/ui/Header'
import './globals.css'
import { HeaderData } from '@/data/header'
import { roboto } from '@/components/ui/fonts'
import { Providers } from '@/components/ui/providers'
import dynamic from 'next/dynamic'

const ThemeSwitcher = dynamic(() => import('@/components/ui/ThemeSwitcher'), {
  ssr: false,
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body style={roboto.style} className="relative">
        <Providers>
          <Header links={HeaderData} />
          {children}
          <ThemeSwitcher />
        </Providers>
      </body>
    </html>
  )
}
