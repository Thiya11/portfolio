import Hero_cards from "./Hero_cards"

function Hero() {
  const handleScrollClick = () => {
    window.scrollTo({
        top: window.innerHeight,
        behavior:'smooth'
    })
  }
  return (
    <section className="hero-section">
        <div className="container">
            <div className="grid-2-columns">
                <div className="hero-header-section">
                    <h1 className="primary-header">I&rsquo;m Thiyagu, a Software Developer</h1>
                    <p className="secondary-header mb-0">
                        AI-Enhanced Software Developer with 3+ years of experience, 
                        proficient in various tech stacks from front-end to back-end.
                    </p>
                    <div className="scroll-circle" onClick={handleScrollClick}>
                        <div className="scroll-down"></div>
                    </div>
                </div>
                    <Hero_cards></Hero_cards>
            </div>
            <div className="">
            </div>
        </div>
    </section>
  )
}

export default Hero