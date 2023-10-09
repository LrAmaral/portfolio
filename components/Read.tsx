'use client'

import { useScroll, useTransform, motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { useRef } from "react"

const Read = () => {
  const targetRef = useRef<HTMLDivElement>(null) 
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['end end', 'end start']
  })

  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0])

  return (
    <motion.div style={{opacity}} ref={targetRef} id="read" className="w-full h-screen items-center justify-center flex">
      <div className="max-w-full mx-auto">
       <div className="flex flex-col items-center gap-16">
          <div className="flex items-center flex-col gap-2">
            <p className="text-neutral-400">Discover</p>
            <p className="text-3xl font-bold">Knowledge</p>
          </div>
         <div >
          <Link href={'https://medium.com/@amaralrdev'} className="border border-alt p-6 rounded-xl flex gap-2 hover:scale-110 ease-in-out duration-300 transition-all" target="_blank">
                Explore my posts on medium  <ArrowUpRight />
          </Link>
         </div>
       </div>
      </div>
    </motion.div>
  )
}

export default Read