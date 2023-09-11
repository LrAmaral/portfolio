'use client'

import Education from "../_components/education"
import Professional from "../_components/professional"

export const Experience = () => {
  return (
    <div id="experience" className="flex flex-col justify-center gap-14 items-center w-full h-screen" >
      <h2 className="text-4xl underline decoration-alt">Experiences</h2>
        <div className="flex flex-col justify-center items-center gap-16">
            <Professional />
            <Education />
        </div>
    </div>
  )
}
