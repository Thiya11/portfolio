import { Container, Nav, Navbar } from "react-bootstrap"

window.addEventListener('scroll', () => {
    const navBar = document.querySelector('#main_navbar');
    if (window.scrollY > 50) {
        navBar.classList.add('sticky');
    } else {
        navBar.classList.remove('sticky')
    }
});

function Menu() {
 const openPdf = () => {
    window.open('src/assets/images/thiyagu_arunachalam-fs-18-02-2025.pdf', '_blank')
 }
  return (
    <Navbar expand="lg" className="bg-body-tertiary" id="main_navbar">
        <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#about-me">About Me</Nav.Link>
                    <Nav.Link href="#experience">Experience</Nav.Link>
                    <Nav.Link href="#projects">Projects</Nav.Link>
                    <Nav.Link href="#skills">Skills</Nav.Link>
                    <Nav.Link href="#contact">Contact Me</Nav.Link>
                </Nav>
                <Nav className="me-auto">
                    <Nav.Link onClick={openPdf}>Checkout Full Resume</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Menu