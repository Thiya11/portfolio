import Hero_cards from "./Hero_cards"
import useScrollFade from "./utils/useScrollFade";
import { useTranslation } from "react-i18next";

function Hero() {
  const {t} = useTranslation();
  const handleScrollClick = () => {
    window.scrollTo({
        top: window.innerHeight,
        behavior:'smooth'
    })
  };

  const [ref, isVisible] = useScrollFade()
  return (
    <section className="hero-section" id="home" >
        <div className="container">
            <div className="grid-2-columns">
                <div ref={ref} className={`hero-header-section fade-in-section ${isVisible ? 'is-visible' : ''}`}>
                    <h1 className="primary-header">{t("hero.intro")}</h1>
                    <p className="secondary-header mb-0">
                       {t("hero.description")}
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