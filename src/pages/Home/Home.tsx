import TypewriterComponent from "typewriter-effect"
import { AtSymbolIcon } from "@heroicons/react/24/solid"

const Home = () => {
  const handleEmailClick= (e:React.SyntheticEvent) => {
    e.preventDefault();
    window.location.href = "mailto:marianne.helbig@googlemail.com";
  }
  return (
    <section id="home" className='flex flex-col justify-center p-8 md:p-16 bg-background h-screen'>
      <div className='flex flex-col justify-center max-w-5xl mx-auto text-primary-dark '>
        <p className='text-lg py-2 font-light font-mono'>
          Hey there, my name is
        </p>
        <h1 className='text-7xl py-4 font-extrabold tracking-tight underline underline-offset-4'>
          Tomasz Jackowski
        </h1>
        <h2 className='text-4xl py-4 mb-4 font-light'>
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
          <button 
            className="flex items-center gap-2 bg-primary text-lg text-secondary-content rounded-md py-3 px-6"
            onClick={handleEmailClick}
          >
            <p className="font-light">Get in touch with me</p>
            <AtSymbolIcon className="h-5 w-5 text-secondary-content"/>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Home