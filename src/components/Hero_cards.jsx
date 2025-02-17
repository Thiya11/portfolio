import { HERO_CARDS_DATA } from "../common/configs";
import Social_icons from "./Social_icons";

function Hero_cards() {
    const heroHeaderData = HERO_CARDS_DATA;
       return (
        <div className="hero-cards">
        {heroHeaderData.map((item) => (
            <div className="hero-card" key={item.id}>
                <div className="hero-card-title">
                    <h4>{item.title}</h4>
                </div>
                <p className="hero-card-content secondary-text">
                    {item.subText}
                </p>
                <a className="hero-card-action" href={item.href}>
                    <div className="link-text">{item.buttonText}</div>
                    <div className="arrow-icon">
                    </div>
                    <div className="link-underline-wrapper small">
                        <div className="link-underline small">
                        </div>
                    </div>
                </a>
            </div>
        ))}
        <div className="hero-card">
            <div className="hero-card-title">
                <h4>FOLLOW ME</h4>
            </div>
            <Social_icons></Social_icons>
        </div>
       </div>
       )
}

export default Hero_cards