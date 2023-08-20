import Image from 'next/image'
import Link from 'next/link'

function Project() {
  return (
    <main className='flex flex-col w-full items-center font-alt'>
      <div className='flex md:flex-row xs:flex-col gap-8 items-start justify-center w-3/4 mt-20'>
         <div className='flex md:flex-col lg:flex-row xl:flex-row xs:flex-col gap-8'>
          <Image className="rounded-2xl" src={'/shop.jpg'} loading={'lazy'} quality={100} width={1000} height={500} alt='print of project'/>
          <div className='flex gap-4 items-start flex-col'>
              <h1 className='md:text-3xl xs:text-xl font-sans font-bold'>Urbanavenue</h1>
              <p>
                E-commerce full stack application using framework Next.js, TailwindCSS and Prisma ORM,
                It's a big project what will be used to a Final Paper project of the college.  
              </p>
              <p>We use the framework Next because the facility to create websites with them,
                and all the versability we give to us to develop a website, it's such a amazing 
                experience to do that project.
              </p>
              <p className='text-red-500'>{'Project not finished yet ⚠'}</p>
              <span>Follow the link: <Link href={"https://urbanavenue.vercel.app/"} className='text-blue-600 hover:underline dark:text-blue-500' target='_blank'>urbanavenue</Link> {'|'} <Link href={"https://github.com/LrAmaral/urbanavenue"} className='text-blue-600 hover:underline dark:text-blue-500' target='_blank'>github repo</Link></span>
            </div>
         </div>
      </div>
    </main>
  )
}

export default Project