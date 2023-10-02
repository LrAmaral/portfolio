'use client'

import { Menu, X } from "lucide-react";
import Link from "next/link"
import { useEffect, useState } from "react";

import { routes } from '@/app/utils/routes'

export function MainNav() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  useEffect(() => {
    const setResize = () =>
      innerWidth >= 768 && menuOpen ? setMenuOpen(false) : null

    window.addEventListener('resize', setResize)
  }, [menuOpen])

  const menuClose = () => setMenuOpen(false)

  return (
    <>
      <nav className="fixed bg-nav w-full z-10">
        <div className="max-w-[76.875rem] h-16 mx-auto flex justify-between items-center px-6">
            <Link href={''} className="md:block font-bold text-2xl select-none ease-in-out hidden transition-colors text-alt">
                {'{ Amaral }'}
            </Link>
            <div className="hidden md:flex text-lg gap-6">
                {routes.map(({href, id, label}) => (
                  <Link href={href} key={id} className="cursor-pointer hover:text-alt transition duration-200 ease-in-out">
                    {label}
                  </Link> 
                ))}
            </div>
            <div className="flex w-full justify-between md:hidden">
              <Link href={'/'} className="text-2xl font-bold select-none ease-in-out transition-colors text-alt z-10">
                  {'{ Amaral }'}
              </Link>
              <button onClick={toggleMenu} className="z-10">
                  {menuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
        {menuOpen && ( 
          <div className="fixed md:hidden left-0 top-0 bg-nav w-full h-screen">
            <div 
                onClick={menuClose}
                className="py-24 px-6 gap-20 flex flex-col items-center text-2xl"
              >
              {routes.map(({id, label, href}) => (
                <Link
                  href={href}
                  key={id}
                  onClick={menuClose}
                  className="hover:text-alt transition duration-200 ease-in-out"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        )}
        </div>
      </nav>
    </>
  )
}
