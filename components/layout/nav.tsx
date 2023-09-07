'use client'

import { Github, GithubIcon, Linkedin, LinkedinIcon, Menu, X } from "lucide-react";
import Link from "next/link"
import { useEffect, useState } from "react";

export const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const setResize = () => {
      if(window.innerWidth >= 768 && menuOpen) {
        setMenuOpen(false)
      }
    }
  
    window.addEventListener("resize", setResize);
    return () => {
      window.removeEventListener("resize", setResize);
    };
  }, [menuOpen])

  const routes = [
    {
      id: '1',
      label: 'start',
      href: '#start',
    },
    {
      id: '2',
      label: 'who I am',
      href: '#who',
    },
    {
      id: '3',
      label: 'experiences',
      href: `#experience`,
     
    },
    {
      id: '4',
      label: 'projects',
      href: `#project`,
    },
    {
      id: '5',
      label: 'designs',
      href: `#design`,
    },
    {
      id: '6',
      label: 'knowledges',
      href: `#knowledge`,
    },
  ]

  return (
    <nav className="bg-nav fixed w-full">
      <div className="max-w-7xl mx-auto px-8 sm:px-8 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center justify-between w-full">
            <code className="text-2xl select-none ease-in-out transition-colors flex-shrink-0 text-alt">{'{ Amaral }'}</code>
            <div className="hidden md:block">
                <div className="ml-10 text-lg space-x-4 flex md:flex-row items-center">
                  {routes.map((index) => (
                    <Link href={index.href} key={index.id} className="cursor-pointer p-2 hover:text-alt transition duration-150 ease-in-out rounded-xl">
                        {index.label}
                    </Link> 
                  ))}
                  {' | '}
                  <Link href={'https://github.com/LrAmaral'} target="_blank"><GithubIcon /></Link>
                  <Link href={'https://www.linkedin.com/in/lucas-amaral-73650a1b0/'} target="_blank"><LinkedinIcon color="#3178d9"/></Link>
                </div>      
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
              <button onClick={toggleMenu} id="botao" className="inline-flex items-center justify-center p-2 hover:text-zinc-100 hover:bg-zinc-700 rounded-xl transition duration-100 ease-in-out" aria-label="Menu" aria-expanded="false">
                {menuOpen ? <X className="scale-125"/> : <Menu className="scale-125" />}
              </button>
          </div>
        </div>
      </div> 

      {menuOpen && ( 
        <div className="fixed md:hidden top-[4rem] left-0 bg-nav w-full h-[100vh]  px-2 pt-2 pb-3 sm:px-3">
          <div className="md:hidden items-center w-full flex flex-col">
            {routes.map((index) => (
              <Link
                href={index.href}
                key={index.id}
                onClick={closeMenu}
                className="block text-lg py-8 items-center rounded-md font-medium cursor-pointer hover:text-alt  transition duration-150 ease-in-out"
              >
                {index.label}
              </Link>
            ))}
             <Link className="px-3 py-8" href={'https://github.com/LrAmaral'} target="_blank"><GithubIcon /></Link>
             <Link className="px-3 py-8" href={'https://www.linkedin.com/in/lucas-amaral-73650a1b0/'} target="_blank"><LinkedinIcon color="#3178d9"/></Link>
          </div>
        </div>
       )}
    </nav>
  )
}
