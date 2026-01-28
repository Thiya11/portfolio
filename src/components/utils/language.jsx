import { useTranslation } from "react-i18next"
import { Dropdown } from "react-bootstrap"
import LanguageIcon from "../../assets/images/icons/languageIcon";

function Language() {
    const langs = {
        en: {nativeName: 'English'},
        ja: {nativeName: '日本語'}
    }

    const {i18n} = useTranslation();

    return (
    <Dropdown>
      <Dropdown.Toggle variant="dark" background="dark" id="dropdown-basic">
        <LanguageIcon/>{langs[i18n.language].nativeName}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {Object.keys(langs).map(lang => (
            <Dropdown.Item href="#/action-1" key={lang} onClick={() => i18n.changeLanguage(lang)} disabled={i18n.language === lang}>
                {langs[lang].nativeName}
            </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
    )
}

export default Language