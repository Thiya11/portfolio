import { EXPERIENCE_DATA } from "../common/configs"
import ExpCard from "./utils/ExpCard";
import useScrollFade from "./utils/useScrollFade";

function Experience() {
  const experienceData = EXPERIENCE_DATA;
  const [ref, isVisible] = useScrollFade();
  return (
    <section className="expereince-section d-flex flex-column" id="experience">
        <div ref={ref} className={`section-header fade-in-section ${isVisible ? 'is-visible' : ''}`}>
            <h2 className="primary-text">My Journey</h2>
            <h6 className="secondary-text text-center">Work Expereince and Education</h6>
        </div>
       <div className="experience-content mx-auto px-4">
        {
              experienceData.map((item) => (
                  <ExpCard data={item} key={item.id}></ExpCard>
              ))
          }
       </div>
    </section>
  )
}

export default Experience