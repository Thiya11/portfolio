import { SKILLS_DATA } from "../common/configs";
import Card from "./utils/Card";
import useScrollFade from "./utils/useScrollFade";

function Skills() {
 const skillsData = SKILLS_DATA;
 const cardType = "skill";
 const frontEndSkills = skillsData.filter((item) => item.category === 'front-end');
 const backEndSkills = skillsData.filter((item) => item.category === 'back-end');
 const dataBaseSkills = skillsData.filter((item) => item.category === 'database');
 const programmingSkills = skillsData.filter((item) => item.category === 'programming');
 const testingSkills = skillsData.filter((item) => item.category === 'testing');
 const otherSkills = skillsData.filter((item) => item.category === 'tools');
 const [ref, isVisible] = useScrollFade();

  return (
    <section className="container skills-section" id="skills">
        <div ref={ref} className={`section-header fade-in-section ${isVisible ? 'is-visible' : ''}`}>
            <h2 className="primary-text">SKILLS</h2>
        </div>
        <div  ref={ref} className={`section-content fade-in-section ${isVisible ? 'is-visible' : ''}`}>
            <div className="skills-content">
                <p className="secondary-text text-center">My Extensive List of Skills</p>
                <div className="skills-container">
                    <div className="skill-container-section">
                        <div className="container-header">
                            Front-End Skills
                        </div>
                        <div className="container-section">
                            {frontEndSkills.map((skill) => (
                                <Card data={skill} key={skill.id} cardType={cardType}></Card>
                            ))}
                        </div>
                    </div>
                    <div className="skill-container-section">
                        <div className="container-header">
                            DataBase Skills
                        </div>
                        <div className="container-section">
                            {dataBaseSkills.map((skill) => (
                                <Card data={skill} key={skill.id} cardType={cardType}></Card>
                            ))}
                        </div>
                    </div>
                    <div className="skill-container-section">
                        <div className="container-header">
                            Programming Languages
                        </div>
                        <div className="container-section">
                            {programmingSkills.map((skill) => (
                                <Card data={skill} key={skill.id} cardType={cardType}></Card>
                            ))}
                        </div>
                    </div>
                    <div className="skill-container-section">
                        <div className="container-header">
                            Back-End Skills
                        </div>
                       <div className="container-section">
                        {backEndSkills.map((skill) => (
                                <Card data={skill} key={skill.id} cardType={cardType}></Card>
                            ))}
                       </div>
                    </div>
                    <div className="skill-container-section">
                        <div className="container-header">
                            Testing Frameworks
                        </div>
                        <div className="container-section">
                            {testingSkills.map((skill) => (
                                <Card data={skill} key={skill.id} cardType={cardType}></Card>
                            ))}
                        </div>
                    </div>
                    <div className="skill-container-section">
                        <div className="container-header">
                            Other Tools
                        </div>
                        <div className="container-section">
                            {otherSkills.map((skill) => (
                                <Card data={skill} key={skill.id} cardType={cardType}></Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills