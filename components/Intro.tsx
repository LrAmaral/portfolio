import Image from "next/image";

const Intro = () => {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
        <div className="flex-col md:flex-row flex justify-center items-center gap-14">
          <Image src={'/profile.png'} alt="photo" width={300} height={300}/>
          <div className="space-y-8">
            <div>
              <p className="text-neutral-400">Hello, I'm</p>
              <p className="text-3xl font-bold">Lucas Amaral</p>
              <p className="text-2xl font-bold text-neutral-400">Frontend Developer</p>
            </div>
            <p className="font-bold md:text-3xl items-center">
                I Bring Your Ideas To Life Through  <span className="text-alt">Programming</span>.
            </p>
          </div>
      </div>
    </div>
  )
}

export default Intro