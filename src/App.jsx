import React from 'react'
import NavBar from './components/NavBar'
import Insurances from './components/Insurances'
import HeroSection from './components/HeroSection'
import Services from './components/Services'
import AboutUs from './components/AboutUs'
import VisitUs from './components/VisitUs'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className=" min-h-screen w-full bg-gray-100 ">
      <NavBar/>
      <HeroSection/>
      <Insurances/>
      <Services/>
      <AboutUs/>
      <VisitUs/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default App
