import { AtSymbolIcon } from "@heroicons/react/24/solid"

const Contact = () => {
  function handleEmailClick(e:React.SyntheticEvent) {
    e.preventDefault();
    window.location.href = "mailto:tomwladjackowskki@gmail.com";
  }
  return (
    <section id="contact" className="bg-background">
      <div className="lg:w-3/4 mx-auto">
        <h1 className="p-12 text-5xl font-bold text-primary-dark">Contact me:</h1>
        <div className="w-full flex justify-center gap-16 text-2xl font-light">
          <p className="py-16">
            Nice to still have you here!.<br></br>
            I am right now looking for my first Web Developer position. <br></br>
            If you would be interested please feel free to reach out to me.
          </p>
        </div>
        <div className="flex justify-center pb-24">
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

export default Contact