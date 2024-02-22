import { ProjectType } from "../utils/types";
import { IoLogoGithub } from "react-icons/io";
import { LuExternalLink } from "react-icons/lu";


const ProjectTile = ({name, description, liveLink, gitHubLink, images}: ProjectType) => {
  return (
    <div>
      <h3 className="text-2xl text-primary-dark py-8">{name}</h3>
      <div className="font-light">
        <p>{description}</p>
      </div>
      <div>
        <img src={images.desktop} />
      </div>
      <div className="flex justify-end gap-2">
        <button className="py-4">
          <a href={gitHubLink} target="_blank" rel="noopener noreferrer">
            <IoLogoGithub className="h-8 w-8 text-primary-dark"/>
          </a>
        </button>
        {liveLink ? (
          <button>
            <LuExternalLink className="h-8 w-8 text-primary-dark"/>
          </button>
        ): null}
      </div>
    </div>
  )
}

export default ProjectTile