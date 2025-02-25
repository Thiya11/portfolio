import { PROJECTS_DATA } from "../common/configs"
import HobbyCard from "./utils/HobbyCard";
import useScrollFade from "./utils/useScrollFade";

function Projects() {
  const projectsData = PROJECTS_DATA;
  const [ref, isVisible] = useScrollFade(); 
  return (
    <div className="projects-section" id="projects">
        <div ref={ref} className={`section-header fade-in-section ${isVisible ? 'is-visible' : ''}`}>
            <h2 className="primary-text">Curated Projects</h2>
            <h6 className="secondary-text text-center">
               Apart from my work experience these are my individual projects
            </h6>
        </div>
        <div className="projects-container">
            {
                projectsData.map((project)=> (
                    <HobbyCard key={project.id} book={project} type='project'></HobbyCard>
                ))
            }
        </div>
    </div>
  )
}

export default Projects