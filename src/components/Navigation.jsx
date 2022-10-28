import Link from 'next/link'
import { useRouter } from 'next/router'
import clsx from 'clsx'
import { Disclosure } from '@headlessui/react'



export function Navigation({ navigation, className }) {
  let router = useRouter()

  return (
    <nav className={clsx('text-base lg:text-sm', className)}>
      <ul role="list" className="space-y-9">
        {navigation.map((section) => (
          <li key={section.title}>
            <h2 className="font-display font-medium text-slate-900 dark:text-white">
              {section.title}
            </h2>
            <ul
              role="list"
              className="mt-2 space-y-2 border-l-2 border-slate-100 dark:border-slate-800 lg:mt-4 lg:space-y-4 lg:border-slate-200"
            >
              {section.links.map((link) => (
                !link.children ? (
                  <li key={link.href} className="relative">
                    <Link
                      href={link.href}
                      className={clsx(
                        'block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full',
                        link.href === router.pathname
                          ? 'font-semibold text-indigo-600 before:bg-indigo-600'
                          : 'text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-300 dark:before:bg-slate-700 dark:hover:text-slate-300'
                      )}
                    >
                      {link.title}
                    </Link>
                  </li>
                ) :
                  (
                    <Disclosure as="li" key={link.title} className="relative">
                      {({ open }) => (
                        <>
                          <Disclosure.Button
                            className={clsx(
                              'relative group pl-3.5 w-full flex text-left items-center before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full',
                              'text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-300 dark:before:bg-slate-700 dark:hover:text-slate-300'
                            )}
                          >
                            <span className="flex-1">{link.title}</span>
                            <svg
                              className={clsx(
                                open ? 'text-gray-400 rotate-90' : 'text-gray-300',
                                'ml-4 h-5 w-5 flex-shrink-0 transform transition-colors duration-150 ease-in-out group-hover:text-gray-400'
                              )}
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                            >
                              <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
                            </svg>
                          </Disclosure.Button>
                          <Disclosure.Panel className="space-y-1">
                            {link.children.map((child) => (
                              <Disclosure.Button
                                key={child.title}
                                as="a"
                                href={child.href}
                                className={clsx(
                                  'relative w-full flex items-center py-2 pl-8 pr-2 text-sm before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full',
                                  child.href === router.pathname
                                    ? 'font-semibold text-indigo-600 before:bg-indigo-600'
                                    : 'text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-300 dark:before:bg-slate-700 dark:hover:text-slate-300'
                                )}
                              >
                                {child.title}
                              </Disclosure.Button>
                            ))}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  )


              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}
