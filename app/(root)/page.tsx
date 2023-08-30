import Project from "@/components/layout/project"
import { About } from "../../components/layout/about"
import { Intro } from "../../components/layout/intro"
import  Who  from "@/components/layout/who"
import { Experience } from "@/components/layout/experience"
import Design from "@/components/layout/design"

const Overview = () => {
  return (
    <main id="start" className="flex flex-col w-full items-center select-none cursor-default">
      <Intro />
      <Who />
      {/* <Experience /> */}
      <Project />
      <Design/>
    </main>
  )
}

export default Overview
