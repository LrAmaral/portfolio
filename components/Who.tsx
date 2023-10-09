'use client'

import { useScroll, useTransform, motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const Who = () => {
  const [experienceMonths, setExperienceMonths] = useState(1);
  const [experienceLabel, setExperienceLabel] = useState("month");
  const referenceDate: Date = new Date("2023-09-02");
  
  useEffect(() => {
    const today: Date = new Date();
    const timeDifference: number = today.getTime() - referenceDate.getTime();
    const daysDifference: number = timeDifference / (1000 * 60 * 60 * 24);
    let newExperienceMonths: number = Math.floor(daysDifference / 30) + 1;

    if (newExperienceMonths === 1) {
      setExperienceLabel('month')
    }
    else if (newExperienceMonths > 1 && newExperienceMonths < 12) {
      setExperienceLabel('months')
    }
    else if (newExperienceMonths >= 12 && newExperienceMonths <= 24) {
      newExperienceMonths = 1
      setExperienceLabel("year")
    } 
    else {
      newExperienceMonths = 1 
      const timePass = newExperienceMonths + 1
      newExperienceMonths = timePass
      setExperienceLabel("years") // this is not dynamic yet
    } 
   
    setExperienceMonths(newExperienceMonths)
  }, [])


  const targetRef = useRef<HTMLDivElement>(null) 
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['end end', 'end start']
  })

  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0])

  return (
    <motion.div id="who" style={{ opacity }} ref={targetRef} className="w-full h-screen max-h-full items-center justify-center flex">
      <div className="max-w-full mx-auto">
        <div className="items-center flex flex-col gap-16">
          <div className="flex items-center flex-col gap-2">
            <p className="text-neutral-400">Get To Know More</p>
            <p className="text-3xl font-bold">Who I Am</p>
          </div>
          <div className="justify-center items-center gap-16 flex flex-col md:flex-row">
              <div className="space-y-6">
                <div className="flex md:flex-row flex-col items-center justify-center gap-6">
                  <div className="border border-alt w-full md:w-2/4 h-32 flex gap-1 flex-col items-center justify-center rounded-xl">
                        <p className="font-semibold text-lg">
                          Experience
                        </p>
                        <p className="text-alt">
                          {experienceMonths}+ {experienceLabel}
                        </p>
                        <p>
                          Frontend Development
                        </p>
                    </div>
                    <div className="border border-alt w-full md:w-2/4 h-32 gap-1 flex flex-col items-center justify-center rounded-xl">
                      <p className="font-semibold text-lg">
                          Education
                      </p>
                      <p className="text-alt">
                        2021 - 2024
                      </p>
                      <p>
                        System Analysis and Development 
                      </p>
                    </div>
                </div>
                  <p className="tracking-wide text-justify text-sm md:text-base">
                    Hi there, I'm Lucas. I live in São Paulo, Brazil, since I was a kid, I'm always be a creative guy, then, 
                    I finded my way to express my creativity in the world of programming, I'm really passionate about creating 
                    modern website applications with awesome designs and always searching for improve myself to learning more.
                  </p>
              </div>
          </div>
      </div>
    </div>
  </motion.div>
  )
}

export default Who