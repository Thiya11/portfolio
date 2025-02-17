import { SKILLS_DATA } from "../common/configs";
import fullStar from '../assets/images/icons/star-fill.svg';
import halfStar from '../assets/images/icons/star-half.svg';
import emptyStar from '../assets/images/icons/star.svg';

function Skills() {
 const skillsData = SKILLS_DATA;

 const renderStars = (level) => {
    const fullStars = Math.floor(level);
    const halfStars = level % 1 !== 0 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;
    const stars = [];

    for (let i=0; i<fullStars; i++) {
        stars.push(<img src={fullStar} alt="star" key={`full_${i}`} />);
    }

    if (halfStars) {
        stars.push(<img src={halfStar} alt="star" key='half' />);
    }

    if (emptyStars) {
        for(let i=0; i<emptyStars; i++) {
            stars.push(<img src={emptyStar} alt="star" key={`empty_${i}`} />);
        }
    }

    return stars;
 }

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
                        <div className="skill-card" key={skill.id}>
                            <div className="skill-icon">
                                <img src={skill.icon} alt={skill.title} />
                            </div>
                            <div className="skill-desc">
                                <h4 className="skill-title">{skill.title}</h4>
                                <div className="skill-level">
                                    {renderStars(skill.level)}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills