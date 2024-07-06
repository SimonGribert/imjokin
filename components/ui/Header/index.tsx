'use client'

import { useHeaderColor } from '@/hooks/useHeaderColor'
import HeaderLink from './HeaderLink'
import { classNames } from '@/utils/css'

export type HeaderLinkType = {
  text: string
  href: string
}

// const Header = ({ links }: { links: HeaderLinkType[] }) => {
//   return (
//     <header className="fixed w-full lg:top-12 top-5 z-10">
//       <div className="w-full flex flex-wrap px-5 mx-auto max-w-screen-xl">
//         {links.map((link, i) => (
//           <div className="sm:w-1/4 w-1/2" key={i}>
//             <HeaderLink {...link} />
//           </div>
//         ))}
//       </div>
//     </header>
//   )
// }
// TODO: Make sure color make sense for vibrant
const Header = ({ links }: { links: HeaderLinkType[] }) => {
  const color = useHeaderColor((s) => s.color)

  return (
    <header
      className={classNames(
        'fixed w-full z-10 bg-white dark:bg-black',
        color ? 'vibrant:bg-orange-toy' : 'vibrant:bg-green-toy',
      )}
    >
      <div className="w-full flex flex-wrap px-5 mx-auto max-w-screen-xl lg:mt-12 mt-5">
        {links.map((link, i) => (
          <div className="sm:w-1/4 w-1/2" key={i}>
            <HeaderLink {...link} />
          </div>
        ))}
      </div>
    </header>
  )
}

export default Header
