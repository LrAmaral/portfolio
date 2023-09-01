import Project from "@/components/layout/project"
import { Intro } from "../../components/layout/intro"
import  Who  from "@/components/layout/who"
import Design from "@/components/layout/design"
import { Experience } from "@/components/layout/experience"
import Knowledge from "@/components/layout/knowledge"

const Overview = () => {
  return (
    <main id="start" className="flex flex-col w-full items-center select-none cursor-default">
      <Intro />
      <Who />
      {/* <Experience /> */}
      <Project />
      <Design />
      <Knowledge />
    </main>
  )
}

export default Overview
