import { Experience } from "./experience"

export const About = () => {
  return (
    <div className="md:w-full xs:w-[25rem] h-[100vh] flex flex-col items-center md:gap-6 xs:gap-12 text-justify">
      <div className="grid xs:grid-cols-1 md:grid-cols-2 justify-items-center xs:w-full md:w-3/4 xs:gap-6 md:gap-0 items-start mb-40">
        <div className="w-3/4 flex flex-col gap-4">
          <h2 className="text-3xl font-bold font-sans">
          Biography 
          </h2>
          <p className="text-xl">
            Hi there, I'm Lucas, based in São Paulo <span className="font-bold">(BR)</span>, talking shortly about me, I'm Student guy and passionate for creating modern websites, 
            for me it's awesome to combine pretty UI with a good UX.
          </p>
          <p className="text-xl">
            I'm always looking forward to improve myself to solving problems, update myself about my knowledges, I really like 
            challenges and always trying to do the best I can to being at the right solution.
          </p>
        </div>
        <div className="w-3/4 flex flex-col gap-4">
          <h2 className="text-3xl font-bold font-sans">
          Education 
          </h2>
          <p className="text-xl">
            • Currently studying System Analysis and Development.
          </p>
          <p className="text-xl">
            • Currently studying English language course on CNA.
          </p>
          <p className="text-xl">
            • Graduated in Computer network technician integrated into high school.
          </p>
        </div>
      </div>
      <Experience />
    </div>
  )
}
