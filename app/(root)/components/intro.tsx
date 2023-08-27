'use client'

import { useEffect, useState } from "react"
import { Clipboard } from "./clipboard";

export const Intro = () => {

  const [word, setWords] = useState([
    'Creative', 'Web', 'React', 'Frontend'
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % word.length);
    }, 4000); // Defina o intervalo de tempo em milissegundos (aqui, 4000 ms = 4 segundos)
  }, []);

  return (
    <div className='lg:w-full md:w-3/4 xs:w-3/4 h-screen flex md:flex-row xs:flex-col justify-around items-center font-sans text-justify'>
        <div className="flex-col flex justify-center items-center gap-4">
          <div className="font-alt xs:text-5xl md:text-6xl">
            <h1 className=""><span className="dark:text-red-500 text-red-600 font-bold">{word[currentIndex]}</span> developer.</h1>
          </div>
            <code className="font-bold md:text-2xl xs:text-lg items-center">Bringing your ideas into a website.</code>
            <Clipboard  />
        </div>
      </div>
  )
}
