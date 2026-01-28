import { PROJECTS_DATA } from "../common/configs"
import HobbyCard from "./utils/HobbyCard";
import useScrollFade from "./utils/useScrollFade";
import { useTranslation } from "react-i18next";

function Projects() {
  const projectsData = PROJECTS_DATA;
  const [ref, isVisible] = useScrollFade(); 
  const {t} = useTranslation();

  return (
    <section className="projects-section" id="projects">
        <div ref={ref} className={`section-header fade-in-section ${isVisible ? 'is-visible' : ''}`}>
            <h2 className="primary-text">{t('projects.title')}</h2>
            <h6 className="secondary-text text-center">
               {t('projects.subText')}
            </h6>
        </div>
        <div className="projects-container">
            {
                projectsData.map((project)=> (
                    <HobbyCard key={project.id} book={project} type='project'></HobbyCard>
                ))
            }
        </div>
    </section>
  )
}

export default Projects