import Link from 'next/link'
import clsx from 'clsx'

const styles = {
  primary:
    'rounded-full bg-indigo-600 py-2 px-4 text-sm font-semibold text-white hover:bg-indigo-500 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600/50 active:bg-indigo-600',
  secondary:
    'rounded-full bg-slate-900 py-2 px-4 text-sm font-medium text-white dark:border-2 border-slate-800 hover:bg-slate-800 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 active:text-slate-500',
}

export function Button({ variant = 'primary', external = false, className, href, ...props }) {
  className = clsx(styles[variant], className)


  return href ? (
    external ? (
      <Link href={href} target="_blank" className={className} {...props} />
    ) : (
      <Link href={href} className={className} {...props} />
    )
  ) : (
    <button className={className} {...props} />
  )
}
