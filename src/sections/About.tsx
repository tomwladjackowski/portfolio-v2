import ProfilePicture from "../assets/profilePic.jpg";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript, SiCss3, SiTailwindcss, SiExpress, SiMongodb, SiJest, } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";
import { FaReact, FaNode, FaGitAlt } from "react-icons/fa";
import { TbBrandCypress } from "react-icons/tb";


const About = () => {
  const iconStyling = "h-12 w-12 shrink-0 text-primary-dark"
  return (
    <section id="about" className="bg-background md:h-full">
      <div className="lg:w-3/4 mx-auto">
        <h1 className="p-12 text-5xl font-bold text-primary-dark">About:</h1>
        <div className="flex flex-col gap-16 justify-center w-full md:m-4 p-4 md:flex-row">
          <div className="flex justify-center ">
            <img alt="profile-picture" src={ProfilePicture} className="rounded-md object-scale-down max-w-[300px] max-h-[300px] grayscale shadow-[10px_10px_5px_2px_rgba(0,0,0,0.3)]"/>
          </div>
          <div className="w-full flex-col flex-wrap gap-16 font-light">
            <p className="pb-2">
              I am Tomasz and I enjoy learning and building things for the web.
              <br></br>
              I have started learning Web Development in the beginning of 2023. 
              <br></br>
              I enrolled on the 12-week Web Development Bootcamp at <a href="https://bootcamp.dev" className="underline font-normal text-primary-dark">bootcamp.dev</a>, but that was just the start of my journey.
              <br></br>
              I have spent the rest of the year on further developing my knowledge, completing online courses and tinkering around with my own projects.
              <br></br>
              I'm now looking for a first position as a full time web developer.
            </p>
            <p className="py-2">
              Formerly, I worked in Product Managment at <a href="https://vod.tvp.pl/" className="underline font-normal text-primary-dark">TVP VOD</a>, a large VOD platform in Poland. 
              I used to cooperate with a team of software developers and now I decided to become one.
            </p>
            <p className="py-2"> 
              When I'm not dealing with code I am probably throwing weights at the gym or strolling around with my film camera.
            </p>
          </div>
        </div>
        <div className="py-8">
          <h2 className="text-2xl text-primary-dark font-bold px-8">Here are the technologies I have used:</h2>
          <div className="flex flex-row flex-wrap gap-4 p-8 md:gap-8">
            <TiHtml5 className={iconStyling}/>
            <SiCss3 className={iconStyling}/>
            <SiTailwindcss className={iconStyling}/>
            <IoLogoJavascript className={iconStyling}/>
            <SiTypescript className={iconStyling}/>
            <FaReact className={iconStyling}/>
            <FaNode className={iconStyling}/>
            <SiExpress className={iconStyling}/>
            <SiMongodb className={iconStyling}/>
            <SiJest className={iconStyling}/>
            <TbBrandCypress className={iconStyling}/>
            <FaGitAlt className={iconStyling}/>
          </div>
        </div>
      </div> 
    </section>
  )
}

export default About