import { classNames } from '@/utils/css'

const OutlineWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode
  className: string
}) => {
  return (
    <div
      className={classNames(
        'outline-black outline outline-2 outline-offset-[-1px]',
        'dark:outline-white',
        className,
      )}
    >
      {children}
    </div>
  )
}

export default OutlineWrapper
