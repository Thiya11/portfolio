import { CONTACT_DATA } from "../common/configs";
import useScrollFade from "./utils/useScrollFade";

function Contact() {
    const contactData = CONTACT_DATA;
    const [ref, isVisible] = useScrollFade();
  return (
    <div className="contact-section" id="contact">
        <div ref={ref} className={`section-header fade-in-section ${isVisible ? 'is-visible' : ''}`}>
            <h2 className="primary-text">{"Let's Connect"}</h2>
            <h6 className="secondary-text text-center">
               Choose your preferred method to connect with me
            </h6>
        </div>
        <div className="contact-content">
            {
              contactData.map((contact) => (
                <div key={contact.id} ref={ref} className={`contact fade-in-section ${isVisible ? 'is-visible' : ''}`}>
                    <div className="contact-img">
                        <img src={contact.logo}></img>
                    </div>
                    <div className="contact-desc">
                        <p>
                            {contact.title}
                        </p>
                        <h6>
                            {contact.title != 'Address' ? <a href={contact.url}>{contact.text}</a> : <a>{contact.text}</a>}
                        </h6>
                    </div>
                </div>
              ))   
            }
        </div>
    </div>
  )
}

export default Contact