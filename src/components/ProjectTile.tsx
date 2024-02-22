import React from 'react'

type Props = {
  name: string,
  description: string,
  liveLink: string,
  gitHubLink: string,
  images: string[]
}

const ProjectTile = ({name, description, liveLink, gitHubLink, images}: Props) => {
  return (
    <div>
      <h3>{name}</h3>
      <div>

      </div>
    </div>
  )
}

export default ProjectTile