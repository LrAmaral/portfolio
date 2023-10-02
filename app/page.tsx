import Experience  from "../components/layout/Experience"
import Intro  from "../components/layout/Intro"
import Project  from "../components/layout/Project"
import  Who   from "../components/layout/Who"
import Contact  from "../components/layout/Contact"

const Overview = () => {
  return (
    <main id="start" className="w-full flex flex-col items-center justify-center">
      <div className="max-w-[76.875rem] mx-auto xs:px-6 px-0">
        <Intro />
        <Who />
        <Experience />
        <Project />
        <Contact />
      </div>
    </main>
  )
}

export default Overview
