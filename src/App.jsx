
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Education from './components/Education'
import Footer from './components/Footer'
import Navbar from './components/Navbar.jsx'

import Projects from './components/Projects'
import Skills from './components/Skills'


function App() {


  return (
    <div className='bg-slate-900 h-screen'>
      <Navbar></Navbar>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Education></Education>
      <Contact></Contact>
      <Footer></Footer>


    </div>
  )
}

export default App
