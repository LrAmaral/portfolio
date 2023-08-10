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
        <p>{'>'} HTML {' '}</p>
        <p>{'>'} CSS {' '}</p>
        <p>{'>'} Git {' '}</p>
        <p>{'>'} PHP {' '}</p>
        <p>{'>'} Javascript {' '}</p>
        <p>{'>'} Typescript {' '}</p>
        <p>{'>'} React {' '}</p>
        <p>{'>'} NextJS {' '}</p>
        <p>{'>'} TalwindCSS {' '}</p>
        <p>{'>'} C# {' '}</p>
        <p>{'>'} Java {' '}</p>
        <p>{'>'} ... </p>
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
