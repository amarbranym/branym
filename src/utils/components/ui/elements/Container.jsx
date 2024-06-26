import clsx from 'clsx'

export function Container({ as: Component = 'div', className, children }) {
  return (
    <Component className={clsx('mx-auto lg:max-w-5xl xl:max-w-7xl px-3 lg:px-8', className)}>
      <div className="mx-auto lg:max-w-none">{children}</div>
    </Component>
  )
}
