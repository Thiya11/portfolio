import { FEATURES_DATA } from "../common/configs"

function Features() {
    const features = FEATURES_DATA;
  return (
    <div className="grid-2-columns about-me-features">
        <div className="about-me-features-left">
            {features.slice(0,2).map((item) => 
              <div className="about-me-feature" id={'feature_' + item.id} key={item.id}>
                 <div className="feature-icon">
                    <img src={item.icon}/>
                 </div>
                 <div className="feature-content">
                    <h4>{item.title}</h4>
                    <p>{item.subText}</p>
                    <div className="feature-underline-wrapper">
                        <div className="feature-underline"></div>
                    </div>
                 </div>
              </div>
            )}
        </div>
        <div className="about-me-features-right">
        {features.slice(2).map((item) => 
              <div className="about-me-feature" key={item.id} id={'feature_' + item.id}>
                 <div className="feature-icon">
                    <img src={item.icon}/>
                 </div>
                 <div className="feature-content">
                    <h4>{item.title}</h4>
                    <p>{item.subText}</p>
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