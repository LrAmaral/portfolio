import { GithubIcon, LinkedinIcon } from "lucide-react"
import Link from "next/link"

 const Contact = () => {
  return (
    <div id="contact" className="w-full h-screen items-center justify-center flex">
      <div className="max-w-full mx-auto">
      <div className="flex flex-col border-alt items-center gap-16">
        <div className="flex items-center flex-col gap-2">
          <p className="text-neutral-400">Get In Touch</p>
          <p className="text-3xl font-bold">Contact Me</p>
        </div>
          <div className="flex gap-4 border border-alt items-center rounded-xl p-4">
            <Link href={'mailto:amaralrdev@gmail.com'} className="hover:text-neutral-400 transition ease-in-out duration-200">amaralrdev@gmail.com</Link>
              <Link href={'https://github.com/LrAmaral'} target="_blank">
                <GithubIcon />
              </Link>
              <Link href={'https://www.linkedin.com/in/lucas-amaral-73650a1b0/'} target="_blank">
                <LinkedinIcon color="#3178D9" />
              </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact