import Features from "./Features"

function About_me() {
return (
    <section className="container about-me-section" id="about-me">
        <div className="section-header">
            <h2 className="primary-text">ABOUT ME</h2>
        </div>
        <div className="section-content">
            <div className="about-me-content">
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