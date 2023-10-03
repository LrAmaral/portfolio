const Experience = () =>{
  return (
    <div id="experience" className="w-full h-screen items-center justify-center flex">
      <div className="max-w-full mx-auto">
          <div className="flex flex-col border-alt items-center gap-16">
           <div className="flex flex-col items-center gap-2">
              <p className="text-neutral-400">Explore My</p>
              <p className="text-3xl font-bold">Experience</p>
           </div>
            <div className="flex flex-col border-alt items-center gap-2">
                  <p className="md:text-xl">Frontend Developer on a Volunteer Work at InkPen.</p>
                  <p className="md:text-lg">- September 2023 - The present moment</p>
                <span className="h-6 bg-alt w-0.5 animate-pulse" />
                  <p className="md:text-xl">Computer Store Clerk at Imac Informática.</p>
                  <p className="md:text-lg">- January 2021 - December 2021</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Experience
