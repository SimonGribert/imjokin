import { classNames } from '@/utils/css'

const IncludeClasses = () => {
  return (
    <div
      className={classNames(
        true ? '' : 'dark:hidden',
        true ? '' : 'dark:block',
        'hidden'
      )}
    ></div>
  )
}

export default IncludeClasses
