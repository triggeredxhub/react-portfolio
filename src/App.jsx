import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Footer from './components/footer'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechStack from './components/TechStack'
import Experience from './components/Experience'
import Contact from './components/Contacts'
import Project from './components/Project'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TechStack />
      <Experience />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

export default App
