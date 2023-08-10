'use client'

import Link from "next/link"
import { ThemeToggle } from "./theme"
import { usePathname} from 'next/navigation'
import { cn } from "@/lib/utils"
import { Github, Instagram, Linkedin, Menu } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { Button } from "./ui/button"

export const Nav = () => {

  const pathname = usePathname()

  const routes = [
    {
      id: '1',
      label: 'overview',
      href: '/',
      active: pathname === `/`,
    },
    {
      id: '2',
      label: 'projects',
      href: `/projects`,
      active: pathname === `/projects`,
    },
    {
      id: '3',
      label: 'contact',
      href: '/contact',  
      active: pathname === `/contact`,
    },
  ]

  return (
    <div className="font-alt flex flex-row md:justify-around xs:justify-between my-6 items-center">
      <div className="flex gap-4 xs:ml-4 md:ml-0">
          <div className="flex flex-row gap-4 items-center">
              {routes.map((index) => (
                <Link href={index.href} key={index.id} className={cn("cursor-pointer", index.active ? "hover:text-zinc-500" : 'hover:text-zinc-500')}>
                  {index.label}
                </Link>
              ))}
          </div>
      </div>
      <div className="flex flex-row items-center justify-end md:gap-4 xs:gap-2 xs:mr-4 md:mr-0">
      <Link href={'https://www.instagram.com/amaraldev/'} target="_blank">
          <Instagram className="hover:text-zinc-500 text-pink-500 transition-colors ease-in-out cursor-pointer"/>
        </Link>
        <Link href={'https://github.com/LrAmaral'} target="_blank">
          <Github className="hover:text-zinc-500 transition-colors ease-in-out cursor-pointer"/>
        </Link>
        <Link href={'https://www.linkedin.com/in/lucas-amaral-73650a1b0/'} target="_blank">
          <Linkedin className="hover:text-zinc-500 transition-colors ease-in-out text-blue-700 dark:text-blue-500 dark:hover:text-zinc-500 cursor-pointer"/>
        </Link>
        <ThemeToggle />
      </div>
    </div>
  )
}
