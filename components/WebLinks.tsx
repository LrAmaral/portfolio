'use client'

import { useState, useEffect } from 'react'
import MobileNavLink from './MobilenNavLink'

const WebLinks = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const setResize = () => (innerWidth >= 768 && menuOpen) ?? setMenuOpen(false)

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
    <div className="hidden md:flex text-lg gap-6">
       {routes.map(({href, id, label}) => (
        <div key={id} onClick={menuClose} >
          <MobileNavLink href={href} label={label} />
         </div>
        ))}
     </div>
  )
}

export default WebLinks