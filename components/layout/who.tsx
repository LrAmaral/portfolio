import Image from "next/image"

function Who() {
  return (
    <div id="who" className="md:w-[78rem] xs:w-3/4 flex flex-col h-screen items-center justify-center">
        <div className="border-alt shadow-alt shadow-lg hover:shadow-md transition ease-in-out duration-1000 border rounded-2xl md:p-20 xs:p-10 flex xs:flex-col md:flex-row xs:gap-[3rem] md:gap-[4rem]">
        <div className="xs:w-3/4 md:w-2/4">
          <Image src={'/profile.png'} alt="perfil" width={600} height={300}/>
        </div>
         <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold font-alt text-alt">
            Who I am 
            </h2>
            <h2 className="xs:text-xl md:text-4xl font-bold font-alt">
              Lucas Amaral
            </h2>
            <h3 className="xs:text-sm md:text-xl mb-4">Frontend Developer && Creative Guy</h3>
            <p className="xs:text-xs text-base">
              Hi there, I'm Lucas, based in São Paulo <span className="font-bold">(BR)</span>, a student guy, tech enthusiastic 
              and passionate for creating modern websites, I think it's amazing to combine a beautiful user interface 
              <span className="font-bold"> (UI)</span> with a good user experience <span className="font-bold">(UX)</span>.
            </p>
            <p className="xs:text-xs text-base">
              I'm always looking forward to improve myself to solving problems, I like 
              challenges and always trying to do the best I can to being at the right solution as fast as I can.
            </p>
            <p className="xs:text-xs text-base">Nowadays I'm searching for my first opportunity to make my carrier at the world of programming, with you have interest at some job I have done, 
              please send me a message I'm always up to talk to everyone.
            </p>
         </div>
        </div>
    </div>
  )
}

export default Who