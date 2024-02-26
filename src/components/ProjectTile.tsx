import { ProjectType } from "../utils/types";
import { IoLogoGithub } from "react-icons/io";
import { LuExternalLink } from "react-icons/lu";


const ProjectTile = ({name, description, liveLink, gitHubLink, images, tags}: ProjectType) => {
  return (
    <div className="">
      <h3 className="text-2xl text-primary-dark py-8">{name}</h3>
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="bg-primary-content rounded-lg self-start">
          <div className="font-light p-4">
            <p>{description}</p>
          </div>
          <div className="flex justify-between items-center gap-2 p-4">
            <div className="flex items-center gap-2">
              {tags.map((tag) => (
                <p className="bg-primary-light text-xs text-white p-2 rounded-md">{tag}</p>
              ))}
            </div>
            {liveLink ? (
              <button>
                <LuExternalLink className="h-8 w-8 text-primary-dark"/>
              </button>
            ): null}
            <button className="">
              <a href={gitHubLink} target="_blank" rel="noopener noreferrer">
                <IoLogoGithub className="h-8 w-8 text-primary-dark"/>
              </a>
            </button>
          </div>
        </div>
        <div className="shrink-0">
          <img src={images.desktop} alt={name} className="w-[500px] rounded-lg shadow-[10px_10px_5px_2px_rgba(0,0,0,0.3)]"/>
        </div>
      </div>
    </div>
  )
}

export default ProjectTile