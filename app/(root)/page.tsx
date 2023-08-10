import { About } from "./components/about"
import { Intro } from "./components/intro"
import techs from "./utils/tech"

const Overview = () => {
  return (
    <main className="flex flex-col w-full items-center select-none cursor-default">
      <Intro />
      <About/>
    </main>
  )
}

export default Overview
