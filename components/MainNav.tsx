import Link from "next/link"

import HamburguerMenu from "./HamburguerMenu";
import WebLinks from "./WebLinks";

const MainNav = () => {

  return (
    <>
      <nav className="fixed bg-nav w-full z-10">
        <div className="max-w-[76.875rem] h-20 mx-auto flex justify-between items-center px-8">
            <Link href={''} className="md:block font-bold text-2xl select-none ease-in-out hidden transition-colors text-alt">
                {'{ Amaral }'}
            </Link>
            <WebLinks />
            <div className="flex w-full justify-between md:hidden z-10">
              <Link href={'/'} className="text-2xl font-bold text-alt">
                  {'{ Amaral }'}
              </Link>         
              <HamburguerMenu />   
            </div>
        </div>
      </nav>
    </>
  )
}

export default MainNav