'use client'

import Image from "next/image";
import { useTransform, useScroll, motion } from "framer-motion";
import { useRef } from "react";
import TypewriterComponent from "typewriter-effect";

import profilePic from '../public/assets/profile.png'

const Intro = () => {
  const targetRef = useRef<HTMLDivElement>(null) 
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['end end', 'end start']
  })

  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0])

  return (
    <motion.section style={{ opacity }} ref={targetRef} className='w-full h-screen flex flex-col justify-center items-center'>
        <div className="flex-col md:flex-row flex justify-center items-center gap-16">
          <Image src={profilePic} alt="photo" className="w-[12rem] md:w-[18rem] pointer-events-none" />
          <div className="space-y-8">
            <div>
              <p className="opacity-60">Hello, I'm</p>
              <p className="text-xl md:text-3xl font-bold">Lucas Amaral</p>
              <p className="text-lg md:text-2xl opacity-60">Frontend Developer</p>
            </div>
            <div className="font-extrabold text-xl md:text-3xl items-center">
                I Bring Your Ideas To Life Through 
                <span className="text-alt">
                  <TypewriterComponent options={{
                    strings: [
                      "Programming.",
                      "Coding.",
                      "Development.",
                    ],
                    autoStart: true,
                    loop: true,
                    }}/> 
                </span>
            </div>
          </div>
      </div>
    </motion.section>
  )
}

export default Intro