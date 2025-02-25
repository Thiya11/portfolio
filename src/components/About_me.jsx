import Features from "./Features"
import useScrollFade from "./utils/useScrollFade"

function About_me() {
const [ref, isVisible] = useScrollFade();
return (
    <section className="container about-me-section" id="about-me">
        <div ref={ref} className={`section-header fade-in-section ${isVisible ? 'is-visible' : ''}`}>
            <h2 className="primary-text">ABOUT ME</h2>
        </div>
        <div className="section-content">
            <div ref={ref} className={`about-me-content fade-in-section ${isVisible ? 'is-visible' : ''}`}>
                <p className="secondary-text text-center">
                    I am a Software Developer with 3+ years of experience in developing web applications.
                    Experienced in both front-end and back-end development.
                </p>
            </div>
            <Features></Features>
        </div>
    </section>
)
}

export default About_me