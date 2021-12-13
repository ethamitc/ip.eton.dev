import { Popover } from '@headlessui/react'

export default function Navbar({children}) {
  return (
    <div className="relative pt-6 pb-16 sm:pb-24 font-mono">
        <Popover>
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <nav
                  className="relative flex items-center justify-between sm:h-10 md:justify-center"
                  aria-label="Global"
                >
                  <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                    <div className="flex items-center justify-between w-full md:w-auto">
                      <a href="#">
                        <span className="sr-only">ip.eton.dev</span>
                        <h1 className="font-bold text-2xl text-red-500">&lt;<span className="font-medium text-lg text-gray-500 dark:text-gray-200"><span className='italic text-gray-400'>ip.</span>eton.dev</span>&gt;</h1>

                      </a>
                    </div>
                  </div>
                  
                </nav>
              </div>

            </>
          )}
        </Popover>

        {children}
      </div>
  )
}