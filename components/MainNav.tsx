'use client'

import { Menu, X } from "lucide-react";
import Link from "next/link"
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from 'framer-motion'

import { menuVars } from "@/app/utils/menuVars";
import { containerVars } from '@/app/utils/containerVars';
import { routes } from '@/app/utils/routes'
import MobileNavLink from "./MobilenNavLink";

const MainNav = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  useEffect(() => {
    const setResize = () => innerWidth >= 768 && menuOpen ? setMenuOpen(false) : null

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
                  <div key={id} onClick={menuClose} >
                    <MobileNavLink href={href} label={label} />
                  </div>
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
        <AnimatePresence>
        {menuOpen && ( 
          <motion.div 
          variants={menuVars} 
          initial="initial" 
          animate="animate" 
          exit="exit" 
          className="fixed md:hidden origin-right left-0 top-0 bg-nav w-full h-screen">
            <motion.div 
                onClick={menuClose}
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="py-24 px-6 gap-24 flex flex-col items-center text-2xl"
              >
              {routes.map(({id, label, href}) => (
                <div key={id} className="overflow-hidden" onClick={menuClose} >
                  <MobileNavLink
                    href={href}
                    label={label}
                  />
                </div>
              ))}
            </motion.div>
          </motion.div>
        )}
        </AnimatePresence>
        </div>
      </nav>
    </>
  )
}

export default MainNav