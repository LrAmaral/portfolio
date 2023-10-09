'use client'

import Image from "next/image";
import Link from "next/link";
import { useTransform, useScroll, motion } from "framer-motion";
import { useRef } from "react";

const Project = () => {
  const targetRef = useRef<HTMLDivElement>(null) 
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['end end', 'end start']
  })

  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0])

  return (
    <motion.div style={{opacity}} ref={targetRef} id="project" className="w-full h-screen items-center justify-center flex">
      <div className="max-w-full mx-auto">
      <div className="flex flex-col border-alt items-center gap-16 md:gap-8">
        <div className="flex items-center flex-col gap-2">
          <p className="text-neutral-400">Browse My Recent</p>
          <p className="text-3xl font-bold">Projects</p>
        </div>
        <div className="space-y-4">
          <Link href="#" target="_blank">
            <Image src={'/assets/shop.jpg'} alt="imagem" width={1920} height={1080} className="rounded-xl"/>
          </Link>
          <p className="md:text-xl font-bold">UrbanAvenue - <span className="text-sm text-alt">In progress</span></p>
          <p className="text-justify text-xs md:text-base">
            React.JS <span className="text-alt">- </span>
            Next.JS  <span className="text-alt">- </span>
            Typescript <span className="text-alt">- </span>
            TailwindCSS <span className="text-alt">- </span>
            Prisma <span className="text-alt">- </span>
            MySQL <span className="text-alt">- </span>
            Axios <span className="text-alt">- </span>
            Zod.
          </p>
        </div>
      </div>
      </div>
    </motion.div>
  )
}

export default Project
