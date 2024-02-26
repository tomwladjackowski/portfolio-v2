import ProjectTile from "../components/ProjectTile.tsx"
import { projectsData } from "../data/projects.ts"

const Projects = () => {
  return (
    <section id="projects" className="bg-background pb-24">
      <div className="lg:w-3/4 mx-auto">
        <h1 className="p-12 text-5xl font-bold text-primary-dark">Projects:</h1>
        <div className="px-4">
          {projectsData.map((project) => (
            <ProjectTile 
              key={project.name} 
              {...project}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects