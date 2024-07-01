import HeaderLink from './HeaderLink'

export type HeaderLinkType = {
  text: string
  href: string
}

const Header = ({ links }: { links: HeaderLinkType[] }) => {
  return (
    <header className="absolute w-full lg:top-12 top-5">
      <div className="w-full flex flex-wrap px-5 mx-auto max-w-screen-xl">
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
