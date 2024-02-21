import TypewriterComponent from "typewriter-effect"
import { AtSymbolIcon } from "@heroicons/react/24/solid"

const Home = () => {
  return (
    <section id="home" className='flex flex-col justify-center p-[5rem] bg-background h-screen'>
      <div className='flex flex-col justify-center max-w-5xl mx-auto text-primary-dark '>
        <p className='text-lg py-2'>
          Hey there, my name is
        </p>
        <h1 className='text-5xl py-2 font-extrabold underline underline-offset-4'>
          Tomasz Jackowski
        </h1>
        <h2 className='text-2xl py-2 mb-4'>
          I am a Web Developer
          <TypewriterComponent
            options={{
              strings: [
                "looking for a challenge.",
                "based in Berlin."
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
        <div className="md:mx-auto">
          <button className="flex items-center gap-2 bg-primary text-lg text-secondary-content rounded-md py-3 px-6">
            <p className="font-light">Get in touch with me</p>
            <AtSymbolIcon className="h-5 w-5 text-secondary-content"/>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Home