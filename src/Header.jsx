import React, { useState } from 'react'
import { UserIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import logo from './assets/logo.png'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-center justify-between py-3">
          <a href="/" className="shrink-0">
            <img src={logo} alt="logo" className="w-16" />
          </a>
          <nav className="hidden md:block">
            <ul className="flex gap-6 lg:gap-10 text-sm lg:text-base whitespace-nowrap">
              <li><a className="hover:underline hover:underline-offset-4" href="#">Equipment</a></li>
              <li><a className="hover:underline hover:underline-offset-4" href="#">About&nbsp;Us</a></li>
              <li><a className="hover:underline hover:underline-offset-4" href="#">Blog</a></li>
            </ul>
          </nav>
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2">
              <UserIcon className="h-6 w-6" />
              <h2 className="text-sm lg:text-base whitespace-nowrap">Account</h2>
            </div>
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen(!open)}
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-white"
            >
              {open ? <XMarkIcon className="h-7 w-7" /> : <Bars3Icon className="h-7 w-7" />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        <div
          className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${
            open ? 'max-h-96' : 'max-h-0'
          }`}
        >
          <nav className="border-t border-white/10">
            <ul className="flex flex-col py-3 gap-2 text-sm">
              <li><a className="block px-1 py-2 hover:underline hover:underline-offset-4" href="#">Equipment</a></li>
              <li><a className="block px-1 py-2 hover:underline hover:underline-offset-4" href="#">About&nbsp;Us</a></li>
              <li><a className="block px-1 py-2 hover:underline hover:underline-offset-4" href="#">Blog</a></li>
              <li className="sm:hidden border-t border-white/10 mt-2 pt-2">
                <a className="flex items-center gap-2 px-1 py-2" href="#">
                  <UserIcon className="h-6 w-6" />
                  <span>Account</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
