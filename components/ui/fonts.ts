import { Roboto } from 'next/font/google'
import localFont from 'next/font/local'

export const roboto = Roboto({
  weight: ['300', '400', '900'],
  subsets: ['latin'],
  display: 'swap',
})

export const gribertNarrow = localFont({
  src: [
    {
      path: './../../assets/fonts/GribertNarrow-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './../../assets/fonts/GribertNarrow-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
})
