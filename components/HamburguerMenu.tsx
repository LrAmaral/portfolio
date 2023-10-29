'use client'

import { containerVars } from '@/app/utils/containerVars'
import { menuVars } from '@/app/utils/menuVars'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import MobileNavLink from './MobilenNavLink'

const HamburguerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  useEffect(() => {
    const setResize = () => innerWidth >= 768 && menuOpen ? setMenuOpen(false) : null

    window.addEventListener('resize', setResize)
  }, [menuOpen])

  const menuClose = () => setMenuOpen(false)

  const routes = [
    {
      id: 'start',
      label: 'Start',
      href: '#start',
    },
    {
      id: 'who',
      label: 'Who I Am',
      href: '#who',
    },
    {
      id: 'experience',
      label: 'Experiences',
      href: `#experience`,
    },
    {
      id: 'project',
      label: 'Projects',
      href: `#project`,
    },
    {
      id: 'read',
      label: 'Read',
      href: `#read`,
    },
    {
      id: 'contact',
      label: 'Contact',
      href: `#contact`,
    },
  ]

  return (
    <>
    <motion.button 
    animate={menuOpen ? 'open' : 'closed'}
    onClick={toggleMenu} 
    className='flex flex-col space-y-1 justify-center scale-150 z-10'
    >
      <motion.span variants={{
        closed: { rotate: 0, y: 0 },
        open: { rotate: 45, y: 5 },
      }} 
        className='w-5 h-px bg-white block'></motion.span>
      <motion.span variants={{ 
        closed: { opacity: 1, transition: { duration: 0.1 } },
        open: { opacity: 0, transition: { duration: 0.1 } },
      }} 
      className='w-5 h-px bg-white block'></motion.span>
      <motion.span variants={{
        closed: { rotate: 0, y: 0 },
        open: { rotate: -45, y: -5 },
      }} 
      className='w-5 h-px bg-white block'></motion.span>
      </motion.button>
      <AnimatePresence>
        {menuOpen && ( 
          <motion.div 
          variants={menuVars} 
          initial="initial" 
          animate="animate" 
          exit="exit" 
          className="fixed md:hidden origin-right left-0 top-0 flex flex-col justify-center bg-nav w-full h-screen">
            <motion.div 
                onClick={menuClose}
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="py-24 gap-16 flex flex-col items-center text-xl"
              >
              {routes.map(({id, label, href}) => (
                <div key={id} onClick={menuClose} >
                  <MobileNavLink
                    href={href}
                    label={label}
                  />
                </div>
              ))}
            </motion.div>
          </motion.div>
        )}
        </AnimatePresence></>
  )
}

export default HamburguerMenu