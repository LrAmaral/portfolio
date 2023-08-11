import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Project() {
  return (
    <main className='flex flex-col w-full items-center font-alt'>
      <div className='flex md:flex-row xs:flex-col gap-8 items-start justify-center w-3/4 mt-20'>
          <Image className="rounded-2xl" src={'/shop.jpg'} loading={'lazy'} quality={100} width={1000} height={500} alt='print of project'/>
          <div className='flex gap-4 items-start flex-col'>
            <h1 className='md:text-3xl xs:text-xl font-sans font-bold'>Urbanavenue</h1>
            <p>
              E-commerce application using Next, TailwindCSS and Prisma,
              It's a big project who consist's on Final Paper project of the college.  
            </p>
            <p>We use the framework Next because the facility to create websites with them,
              that's a point we are getting up on the article of this project.
            </p>
            <p className='text-red-500'>{'Project not finished yet ⚠'}</p>
            <span>Follow the link: <Link href={"https://urbanavenue.vercel.app/"} className='text-blue-600 hover:underline dark:text-blue-500' target='_blank'>urbanavenue</Link> {'|'} <Link href={"https://github.com/LrAmaral/urbanavenue"} className='text-blue-600 hover:underline dark:text-blue-500' target='_blank'>github repo</Link></span>
            </div>
      </div>
    </main>
  )
}

export default Project