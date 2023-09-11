'use client'

import { useState } from 'react'
import { SiJavascript, SiNextdotjs, SiPrisma, SiReact, SiTailwindcss, SiTypescript} from 'react-icons/si'

const Knowledge = () => {

  const tech = [
    {
      id: 1,
      icon: <SiJavascript color='#ffff00' />,
    },
    {
      id: 2,
      icon: <SiTypescript color='#3178C6' />,
    },
    {
      id: 3,
      icon: <SiReact color='#61dafb' />,
    },
    {
      id: 4,
      icon: <SiNextdotjs color='#fff' />,
    },
    {
      id: 5,
      icon: <SiTailwindcss color='#06b6d4' />,
    },
    {
      id: 6,
      icon: <SiPrisma color='#16a394' />,
    },
  ]

  const [mousePass, setMousePass] = useState(false)

  const handleMouseOver = () => {
    setMousePass(true)
  }

  const handleMouseOut = () => {
    setMousePass(false)
  }

  return (
    <div id="knowledge" className='text-justify h-screen flex xs:flex-col md:flex-row gap-16 w-full justify-center items-center'>
      <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className='xs:w-3/4 md:w-1/4 flex flex-col justify-center items-start gap-4'>
        <h1 className='underline decoration-alt text-4xl'>Knowledges</h1>
        <p>Skills with: </p>
        <p>
          DOM, Functions, Components, Responsive design, Media Queries, Props, Interface, Dynamic Routes, Hooks...  
        </p>
      </div>
      <div className="grid grid-cols-4 justify-items-center items-center border rounded-2xl border-alt xs:h-[25vh] md:h-[20vh] xs:w-3/4 md:w-[25%]">
        {tech.map((item) => (
          <div key={item.id} className="text-5xl hover:scale-110 duration-300 transition ease-in-out">
            {item.icon}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Knowledge