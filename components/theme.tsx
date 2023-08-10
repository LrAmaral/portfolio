"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { setTheme } = useTheme()

  return (
    <>
      <div>
        <Button  size="icon">
          <Sun onClick={() => setTheme('dark')} className="hover:text-zinc-500 h-[1.6rem] w-[1.6rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon onClick={() => setTheme('light')} className="hover:text-zinc-500 absolute h-[1.6rem] w-[1.6rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
      </div>
    </>
  )
}
