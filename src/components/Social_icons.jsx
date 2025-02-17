import { SOCIAL_ICONS } from "../common/configs"


function Social_icons() {
    const socialData = SOCIAL_ICONS;

  return (
    <div className="social-icons">
        {socialData.map((item) => (
            <a key={item.id} href={item.url} target="_blank" rel="noreferrer">
                <img src={item.icon}/>
            </a>
        ))}
    </div>
  )
}

export default Social_icons