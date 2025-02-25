import './App.css'
import Hero from './components/Hero'
import About_me from './components/About_me'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Hobbies from './components/Hobbies'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Menu from './components/Menu'

function App() {

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
