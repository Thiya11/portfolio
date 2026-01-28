import Features from "./Features"
import useScrollFade from "./utils/useScrollFade"
import { useTranslation } from "react-i18next";

function About_me() {
const [ref, isVisible] = useScrollFade();
const {t} = useTranslation();
return (
    <section className="container about-me-section" id="about-me">
        <div ref={ref} className={`section-header fade-in-section ${isVisible ? 'is-visible' : ''}`}>
            <h2 className="primary-text">{t("about.title")}</h2>
        </div>
        <div className="section-content">
            <div ref={ref} className={`about-me-content fade-in-section ${isVisible ? 'is-visible' : ''}`}>
                <p className="secondary-text text-center">
                    {t("about.subText")}
                </p>
            </div>
            <Features></Features>
        </div>
    </section>
)
}

export default About_me