'use client'

import { Calendar, Code2, Cpu, HelpingHand } from "lucide-react"

export const Experience = () => {
  return (
    <div className="flex flex-col gap-6 justify-center items-center w-full" >
      <code className="xs:text-xl md:text-2xl font-bold flex items-center gap-2">
        Some skills with <Code2 />
      </code>
      <code className="xs:text-lg md:text-xl">
        <div className="flex md:flex-row xs:flex-col gap-2 items-center">
        <Cpu />
        <p className="hover:scale-105 transition-all ease-in-out cursor-pointer">{'>'} HTML {' '}</p>
        <p className="hover:scale-105 transition-all ease-in-out cursor-pointer">{'>'} CSS {' '}</p>
        <p className="hover:scale-105 transition-all ease-in-out cursor-pointer">{'>'} Git {' '}</p>
        <p className="hover:scale-105 transition-all ease-in-out cursor-pointer">{'>'} PHP {' '}</p>
        <p className="hover:scale-105 transition-all ease-in-out cursor-pointer">{'>'} Javascript {' '}</p>
        <p className="hover:scale-105 transition-all ease-in-out cursor-pointer">{'>'} Typescript {' '}</p>
        <p className="hover:scale-105 transition-all ease-in-out cursor-pointer">{'>'} React {' '}</p>
        <p className="hover:scale-105 transition-all ease-in-out cursor-pointer">{'>'} NextJS {' '}</p>
        <p className="hover:scale-105 transition-all ease-in-out cursor-pointer">{'>'} TalwindCSS {' '}</p>
        <p className="hover:scale-105 transition-all ease-in-out cursor-pointer">{'>'} Prisma ORM {' '}</p>
        <p className="hover:scale-105 transition-all ease-in-out cursor-pointer">{'>'} C# {' '}</p>
        <p className="hover:scale-105 transition-all ease-in-out cursor-pointer">{'>'} Java {' '}</p>
        <p className="hover:scale-105 transition-all ease-in-out cursor-pointer">{'>'} ... </p>
        </div>
      </code>
        <div className="flex flex-col justify-center items-center mb-28">
          <h2 className="text-2xl font-bold font-alt mt-10 mb-8 flex items-center gap-2">Professional experience <HelpingHand /></h2>
          <div className="border-l p-2">
            <div className="text-xl font-semibold flex flex-col gap-2">
              <p>Store attendant</p>
              <p className="flex gap-4 items-center"><Calendar /> January 2021 - December 2021</p>
            </div>
          </div>
        </div>
      </div>
  )
}
