import { Container, Nav, Navbar } from "react-bootstrap"
import Language from "./utils/language";
import { useTranslation } from "react-i18next";
import DownloadIcon from "../assets/images/icons/download";

window.addEventListener('scroll', () => {
    const navBar = document.querySelector('#main_navbar');
    if (window.scrollY > 50) {
        navBar.classList.add('sticky');
    } else {
        navBar.classList.remove('sticky')
    }
});

const scrollToElement = (id) => {
    const el = document.querySelector(id);
    if(!el) return;

    el.scrollIntoView({
        behavior:'smooth',
        block:'start'
    })

}

function Menu() {
 const {t} = useTranslation();
 const {i18n} = useTranslation();

 const openPdf = () => {
   i18n.language == 'ja' ? window.open('/thiyagu_resume_jp.pdf', '_blank') : window.open('/thiyagu_resume_new.pdf', '_blank')
 }


  return (
    <Navbar expand="lg" className="bg-body-tertiary" id="main_navbar">
        <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link data-target="#home" onClick={() => scrollToElement('#home')} className="menu-item">{t("menu.home")}</Nav.Link>
                    <Nav.Link data-target="#about-me" onClick={() => scrollToElement('#about-me')} className="menu-item">{t("menu.about")}</Nav.Link>
                    <Nav.Link data-target="#experience" onClick={() => scrollToElement('#experience')} className="menu-item">{t("menu.experience")}</Nav.Link>
                    <Nav.Link data-target="#projects" onClick={() => scrollToElement('#projects')}  className="menu-item">{t("menu.projects")}</Nav.Link>
                    <Nav.Link data-target="#skills" onClick={() => scrollToElement('#skills')} className="menu-item">{t("menu.skills")}</Nav.Link>
                    <Nav.Link data-target="#contact" onClick={() => scrollToElement('#contact')} className="menu-item">{t("menu.contact")}</Nav.Link>
                </Nav>
                <Nav className="custom-navbar">
                    <Language></Language>
                </Nav>
                 <Nav className="custom-navbar resume">
                    <Nav.Link onClick={openPdf} data-ignore-spy className="resume-button">
                         {t("menu.resume")}<DownloadIcon className="custom-icon"/>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Menu