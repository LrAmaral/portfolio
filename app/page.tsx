import Experience  from "../components/Experience"
import Intro  from "../components/Intro"
import Project  from "../components/Project"
import  Who   from "../components/Who"
import Contact  from "../components/Contact"
import Read from "@/components/Read"


const Overview = () => {
  return (
    <main id="start" className="w-full flex flex-col items-center justify-center">
      <div className="max-w-[76.875rem] mx-auto xs:px-8 px-0">
          <Intro />
          <Who />
          <Experience />
          <Project />
          <Read />
          <Contact />
      </div>
    </main>
  )
}

export default Overview
