import ProfilePicture from "../assets/profilePic.jpg"

const About = () => {
  return (
    <section id="about" className="bg-background h-full">
      <div className="w-3/4 mx-auto">
        <h1 className="p-16 text-4xl font-bold text-primary-dark">About</h1>
        <div className="flex flex-col gap-8 md:flex-row justify-center w-full m-4">
          <div className="">
            <img alt="profile-picture" src={ProfilePicture} className="rounded-full w-40 mx-auto border grayscale"/>
          </div>
          <div className="flex">
            <p>
              I am a passionate Web Developer, seeking opportunities to gather experience, learn and grow. 
              Before choosing this path, I worked in product management of a large-scale VOD platform for 3 years.
              <br></br>
              I successfully collaborated with a team of developers, designers and content editors to deliver new functionalities,
              update and fix existing solutions to guarantee the best user experience.
              <br></br>
              Working with a large-scale web app from a non-technical side sparked my interest in software development.
              I started learning web dev in the beginning of 2023.
            </p>
          </div>
        </div>
      </div> 
    </section>
  )
}

export default About