import Image from "next/image";

const Intro = () => {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
        <div className="flex-col md:flex-row flex justify-center items-center gap-14">
          <Image src={'/assets/profile.png'} alt="photo" width={250} height={250}/>
          <div className="space-y-8">
            <div>
              <p className="opacity-60">Hello, I'm</p>
              <p className="text-2xl md:text-3xl font-bold">Lucas Amaral</p>
              <p className="text-xl md:text-2xl font-bold opacity-60">Frontend Developer</p>
            </div>
            <p className="font-bold text-2xl md:text-3xl items-center ">
                I Bring Your Ideas To Life Through  <span className="text-alt">Programming</span>.
            </p>
          </div>
      </div>
    </div>
  )
}

export default Intro