import { About } from "./components/about"
import { Intro } from "./components/intro"

const Overview = () => {
  return (
    <main className="flex flex-col w-full items-center select-none cursor-default">
      <Intro />
      <About/>
    </main>
  )
}

export default Overview
