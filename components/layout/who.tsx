'use client'

import { useState, useEffect } from "react";

export function Who() {

  const [experienceMonths, setExperienceMonths] = useState(1);
  const referenceDate: Date = new Date("2023-09-18");

  useEffect(() => {
    const today: Date = new Date();
    const timeDifference: number = today.getTime() - referenceDate.getTime();
    const daysDifference: number = timeDifference / (1000 * 60 * 60 * 24);
    const newExperienceMonths: number = Math.floor(daysDifference / 30) + 1;
    setExperienceMonths(newExperienceMonths);
  }, []);

  return (
    <div id="who" className="w-full h-screen items-center justify-center flex">
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
                          {experienceMonths}+ month
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
                  <p className="tracking-wide text-justify indent-12">
                    Hi there, I'm Lucas. I live in São Paulo, Brazil, since I was a kid, I'm always be a creative guy and I really liked tech stuff, I finded my way to express my creative 
                    in the world of programming.
                    I'm passionate about creating modern website 
                    applications with responsive designs and I love learning new things,
                    I strive to do my best to find the right solution as quickly as possible.
                  </p>
              </div>
          </div>
      </div>
    </div>
  </div>
  )
}