
import './App.css'

import Footer from './components/footer'
import Navbar from './components/NavBar'

import Experience from './components/Experience'
import Contact from './components/Contacts'
import Project from './SampleData/Projects'
import HeroCard from './components/HeroCard'


function App() {
  return (
    <>
      <Navbar />
      <HeroCard />
      <Project />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}

export default App
