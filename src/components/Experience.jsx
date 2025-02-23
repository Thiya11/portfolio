import { EXPERIENCE_DATA } from "../common/configs"
import ExpCard from "./utils/ExpCard";

function Experience() {
  const experienceData = EXPERIENCE_DATA;
  return (
    <section className="expereince-section d-flex flex-column" id="experienceSection">
        <div className="section-header">
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