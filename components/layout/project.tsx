import Image from 'next/image'
import Link from 'next/link'

function Project() {
  return (
    <main id='project' className='flex flex-col w-full h-screen justify-center items-center font-alt'>
      <h2 className="text-4xl underline decoration-alt">Project's</h2>
      <div className='h-screen flex md:flex-col xs:flex-col gap-8 items-center justify-center w-3/4'>
         <div className='flex xs:flex-col md:flex-row gap-8'>
          <Image className="rounded-2xl" src={'/assets/shop.jpg'} loading={'lazy'} quality={100} width={700} height={500} alt='print of project'/>
          <div className='flex gap-4 items-start flex-col'>
              <h1 className='md:text-3xl xs:text-xl font-sans font-bold'>Urbanavenue</h1>
              <p>
                E-commerce full stack application using framework Next.js, TailwindCSS and Prisma ORM,
                It's a big project what will be used to a Final Paper project of the college.  
              </p>
              <p> 
                We work with the framework Next because the facility to create websites with them,
                and all the versability we give to us to developing, it has been a such a great and amazing 
                experience to do that project.
              </p>
              <p className='text-red-500 text-sm'>{'Project not finished yet.'}</p>
              <span>Follow the link: <Link href={"https://urbanavenue.vercel.app/"} className='text-alt hover:underline' target='_blank'>urbanavenue</Link> {'|'} <Link href={"https://github.com/LrAmaral/urbanavenue"} className='text-alt hover:underline' target='_blank'>github repo.</Link></span>
            </div>
         </div>
      </div>
    </main>
  )
}

export default Project