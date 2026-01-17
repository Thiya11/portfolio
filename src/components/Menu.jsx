import { Container, Nav, Navbar } from "react-bootstrap"

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
 const openPdf = () => {
    window.open('/thiyagu_resume_new.pdf', '_blank')
 }
  return (
    <Navbar expand="lg" className="bg-body-tertiary" id="main_navbar">
        <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link data-target="#home" onClick={() => scrollToElement('#home')} className="menu-item">Home</Nav.Link>
                    <Nav.Link data-target="#about-me" onClick={() => scrollToElement('#about-me')} className="menu-item">About Me</Nav.Link>
                    <Nav.Link data-target="#experience" onClick={() => scrollToElement('#experience')} className="menu-item">Experience</Nav.Link>
                    <Nav.Link data-target="#projects" onClick={() => scrollToElement('#projects')}  className="menu-item">Projects</Nav.Link>
                    <Nav.Link data-target="#skills" onClick={() => scrollToElement('#skills')} className="menu-item">Skills</Nav.Link>
                    <Nav.Link data-target="#contact" onClick={() => scrollToElement('#contact')} className="menu-item">Contact Me</Nav.Link>
                </Nav>
                <Nav className="me-auto">
                    <Nav.Link onClick={openPdf} data-ignore-spy>Checkout Full Resume</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Menu