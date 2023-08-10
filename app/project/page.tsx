import Image from 'next/image'
import React from 'react'

function Project() {
  return (
    <main className='flex flex-col w-full items-center font-alt'>
      <div className='flex md:flex-row xs:flex-col gap-8 items-start justify-center w-3/4 mt-20'>
          <Image className="rounded-2xl" src={'/shop.jpg'} loading={'lazy'} quality={100} width={1000} height={500} alt='print of project'/>
          <div className='flex gap-4 items-start flex-col'>
            <h1 className='md:text-3xl xs:text-xl'>Urbanavenue</h1>
            <p>
              E-commerce application using Next, TailwindCSS and Prisma,
              It's a big project who consist's on Final Paper project of the college.  
            </p>
            <p>We use the framework Next because the facility to create websites with them,
              that's a point we are getting up on the article of this project.
            </p>
          </div>
      </div>
    </main>
  )
}

export default Project