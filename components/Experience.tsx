'use client'

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const Experience = () =>{

  const targetRef = useRef<HTMLDivElement>(null) 
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['end end', 'end start']
  })

  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0])


  return (
    <motion.div style={{opacity}} ref={targetRef} id="experience" className="w-full h-screen items-center justify-center flex">
      <div className="max-w-full mx-auto">
          <div className="flex flex-col border-alt items-center gap-16">
           <div className="flex flex-col items-center gap-2">
              <p className="text-neutral-400">Explore My</p>
              <p className="text-3xl font-bold">Experience</p>
           </div>
            <div className="flex flex-col border-alt items-center gap-2">
                  <p className="text-base md:text-xl">Frontend Developer on a Volunteer Work at InkPen.</p>
                  <p className="text-sm">September 2023 - The present moment</p>
                <span className="h-6 bg-alt w-0.5" />
                  <p className="md:text-xl">Computer Store Clerk at Imac Informática.</p>
                  <p className="text-sm">January 2021 - December 2021</p>
            </div>
          </div>
      </div>
    </motion.div>
  )
}

export default Experience
