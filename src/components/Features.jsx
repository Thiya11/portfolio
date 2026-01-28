import { FEATURES_DATA } from "../common/configs"
import useScrollFade from "./utils/useScrollFade";
import { useTranslation } from "react-i18next";

function Features() {
    const features = FEATURES_DATA;
    const [ref, isVisible] = useScrollFade();
    const {t} = useTranslation();

  return (
    <div className="grid-2-columns about-me-features">
        <div className="about-me-features-left">
            {features.slice(0,2).map((item) => 
              <div ref={ref} className = {`about-me-feature fade-in-section ${isVisible ? 'is-visible' : ''}`} id={'feature_' + item.id} key={item.id}>
                 <div className="feature-icon">
                    <img src={item.icon}/>
                 </div>
                 <div className="feature-content">
                    <h4>{t(item.title)}</h4>
                    <p>{t(item.subText)}</p>
                    <div className="feature-underline-wrapper">
                        <div className="feature-underline"></div>
                    </div>
                 </div>
              </div>
            )}
        </div>
        <div className="about-me-features-right">
        {features.slice(2).map((item) => 
              <div ref={ref} className = {`about-me-feature fade-in-section ${isVisible ? 'is-visible' : ''}`}  key={item.id} id={'feature_' + item.id}>
                 <div className="feature-icon">
                    <img src={item.icon}/>
                 </div>
                 <div className="feature-content">
                    <h4>{t(item.title)}</h4>
                    <p>{t(item.subText)}</p>
                    <div className="feature-underline-wrapper">
                        <div className="feature-underline"></div>
                    </div>
                 </div>
              </div>
            )}
        </div>
    </div>
  )
}

export default Features