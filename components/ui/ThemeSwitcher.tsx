'use client'

import { useHeaderColor } from '@/hooks/useHeaderColor'
import { classNames } from '@/utils/css'
import { useTheme } from 'next-themes'

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()
  const color = useHeaderColor((s) => s.color)

  const themes = ['dark', 'light', 'vibrant', 'system']

  var toggleThemes = () => {
    if (!theme) return

    const indexOfTheme = themes.indexOf(theme)

    if (indexOfTheme === -1 || indexOfTheme + 1 === themes.length) {
      setTheme(themes[0])
    } else {
      setTheme(themes[indexOfTheme + 1])
    }
  }

  return (
    <button
      onClick={toggleThemes}
      type="button"
      className={classNames(
        `inline-flex items-center gap-x-2 py-1 px-3 text-sm capitalize
			 text-black hover:bg-black hover:text-white
		 	 dark:text-white dark:hover:bg-white dark:hover:text-black
			 vibrant:text-black
			    fixed lg:bottom-12 bottom-5 right-5`,
        'outline-black outline outline-2 outline-offset-[-1px]',
        'dark:outline-white',
        color ? 'vibrant:hover:bg-green-toy' : 'vibrant:hover:bg-orange-toy',
      )}
    >
      {theme === 'vibrant' ? (
        <svg
          fill="#000000"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Rainbow">
            <g>
              <path d="M3.089,16.71A9,9,0,0,1,8.97,8.326,8.912,8.912,0,0,1,20.911,16.71a.5.5,0,0,0,1,0,10.033,10.033,0,0,0-6.46-9.291,9.981,9.981,0,0,0-11.06,2.944,10.058,10.058,0,0,0-2.3,6.347.5.5,0,0,0,1,0Z" />
              <path d="M5.985,16.71A6.078,6.078,0,0,1,12,10.7a6.078,6.078,0,0,1,6.015,6.015.5.5,0,0,0,1,0A7.013,7.013,0,0,0,6.606,12.228,7.151,7.151,0,0,0,4.985,16.71a.5.5,0,0,0,1,0Z" />
              <path d="M8.88,16.71a3.12,3.12,0,0,1,6.24,0,.5.5,0,0,0,1,0,4.119,4.119,0,0,0-7.255-2.669A4.219,4.219,0,0,0,7.88,16.71a.5.5,0,0,0,1,0Z" />
            </g>
          </g>
        </svg>
      ) : (
        <>
          <svg
            className="flex-shrink-0 size-4 dark:hidden"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="4"></circle>
            <path d="M12 2v2"></path>
            <path d="M12 20v2"></path>
            <path d="m4.93 4.93 1.41 1.41"></path>
            <path d="m17.66 17.66 1.41 1.41"></path>
            <path d="M2 12h2"></path>
            <path d="M20 12h2"></path>
            <path d="m6.34 17.66-1.41 1.41"></path>
            <path d="m19.07 4.93-1.41 1.41"></path>
          </svg>
          <svg
            className="flex-shrink-0 size-4 hidden dark:inline-block"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
          </svg>
        </>
      )}
      <span className="lg:block hidden">{theme}</span>
    </button>
  )
}

export default ThemeSwitcher
