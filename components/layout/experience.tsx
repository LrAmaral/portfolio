'use client'

export const Experience = () => {
  return (
    <div id="experience" className="flex flex-col gap-6 justify-center items-center w-full h-screen " >
      <div className="bg-zinc-900 border-alt border p-40 rounded-2xl flex flex-col justify-center items-center">
        <div className="flex flex-row items-center justify-center gap-[4rem]">
          <div className="flex flex-col justify-center items-center mb-28">
            <h2 className="text-2xl font-bold font-alt mt-10 mb-8 flex items-center gap-2">Professional experience</h2>
            <div className="border-l border-alt p-2 flex flex-col gap-2">
                <p className="text-lg">Computer Store Clerk at Imac Informática.</p>
                <p className="text-sm">January 2021 - December 2021</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <h2 className="text-2xl font-bold font-sans">
            Education 
            </h2>
            <p className="text-lg">
              • Currently studying System Analysis and Development.
            </p>
            <p className="text-lg">
              • Currently studying English language course on CNA.
            </p>
            <p className="text-lg">
              • Graduated in Computer network technician integrated into high school.
            </p>
          </div>
          </div>
        </div>
      </div>
  )
}
