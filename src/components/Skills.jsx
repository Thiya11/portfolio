import { SKILLS_DATA } from "../common/configs";
import Card from "./utils/card";

function Skills() {
 const skillsData = SKILLS_DATA;
 const cardType = "skill";

  return (
    <section className="container skills-section" id="skills">
        <div className="section-header">
            <h2 className="primary-text">SKILLS</h2>
        </div>
        <div className="section-content">
            <div className="skills-content">
                <p className="secondary-text text-center">My Extensive List of Skills</p>
                <div className="skills-container">
                    {skillsData.map((skill) => (
                        <Card data={skill} key={skill.id} cardType={cardType}></Card>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills