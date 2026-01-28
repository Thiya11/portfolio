import { useTranslation } from "react-i18next";
import { CONTACT_DATA } from "../common/configs";
import useScrollFade from "./utils/useScrollFade";

function Contact() {
    const contactData = CONTACT_DATA;
    const [ref, isVisible] = useScrollFade();
    const {t} = useTranslation();
  return (
    <section className="contact-section" id="contact">
        <div ref={ref} className={`section-header fade-in-section ${isVisible ? 'is-visible' : ''}`}>
            <h2 className="primary-text">{t("contact.title")}</h2>
            <h6 className="secondary-text text-center">
                {t("contact.subText")}
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
                            {t(contact.title)}
                        </p>
                        <h6>
                            {contact.id != 2 ? <a href={contact.url}>{contact.text}</a> : <a>{t(contact.text)}</a>}
                        </h6>
                    </div>
                </div>
              ))   
            }
        </div>
    </section>
  )
}

export default Contact