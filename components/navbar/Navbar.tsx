import { Bars3BottomRightIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
  return (
    <nav className="fixed w-full h-[72px] top-0 z-10">
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-[1152px] max-w-[1152px] h-full px-5 flex justify-between items-center">
          <Link href="/">
            <div className="flex justify-center items-center gap-3 cursor-pointer">
              <span className="font-semibold text-primary text-2xl">Logo</span>
            </div>
          </Link>
          <div className="md:hidden">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="outline-none">
                  <Bars3BottomRightIcon className="w-10 text-primary cursor-pointer hover:text-secondary" />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none right-0">
                  <div className="py-1">
                    <Menu.Item>
                      {() => (
                        <span
                          className={classNames(
                            'block text-primary px-4 py-2 text-sm cursor-pointer'
                          )}
                        >
                          Home
                        </span>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {() => (
                        <span
                          className={classNames(
                            'block text-primary px-4 py-2 text-sm cursor-pointer'
                          )}
                        >
                          Gallery
                        </span>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {() => (
                        <span
                          className={classNames(
                            'block text-primary px-4 py-2 text-sm cursor-pointer'
                          )}
                        >
                          Contact
                        </span>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
          <div className="hidden md:inline-block">
            <ul className="text-primary text-lg font-bold flex justify-center items-center gap-10">
              <li className="cursor-pointer hover:text-secondary">Home</li>
              <li className="cursor-pointer hover:text-secondary">Gallery</li>
              <li className="cursor-pointer hover:text-secondary">Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
