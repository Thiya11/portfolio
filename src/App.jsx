import './App.css'
import Hero from './components/Hero'
import About_me from './components/About_me'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Hobbies from './components/Hobbies'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Menu from './components/Menu'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    const sections  = Array.from( document.querySelectorAll('section')).filter(section => !section.hasAttribute('data-ignore-spy'));
    const menuItems = Array.from(document.querySelectorAll('.menu-item')).filter(menu => !menu.hasAttribute('data-ignore-spy'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            menuItems.forEach((item)=> {
              item.classList.remove('active')
            })

            const activeItem = document.querySelector(
                `a[data-target="#${entry.target.id}"]`
            );

            activeItem?.classList.add('active')
            console.log(activeItem)
          }
        })
      }, {threshold:0.2}
    )

    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, [])

  return (
    <div>
     <Menu/>
     <Hero/>
     <About_me/>
     <Experience/>
     <Projects/>
     <Skills/>
     <Hobbies/>
     <Contact/>
    </div>
  )
}

export default App
