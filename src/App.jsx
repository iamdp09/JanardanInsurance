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

       {/* ✅ Floating WhatsApp */}
      <a
        href="https://wa.me/919979283940"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 rounded-full shadow-lg shadow-green-400/30 hover:shadow-green-500/50 transition-all duration-300 z-50 flex items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-6 h-6 sm:w-7 sm:h-7"
        >
          <path d="M20.52 3.48A11.86 11.86 0 0012 .08C5.37.08.08 5.36.08 12a11.8 11.8 0 001.64 6.01L.07 24l6.22-1.63a11.9 11.9 0 005.7 1.47h.01c6.63 0 11.92-5.29 11.92-11.92a11.9 11.9 0 00-3.4-8.44zM12 21.44a9.41 9.41 0 01-4.8-1.31l-.34-.2-3.7.97.99-3.61-.22-.36A9.44 9.44 0 012.54 12c0-5.21 4.24-9.45 9.46-9.45 2.53 0 4.91.99 6.7 2.78a9.44 9.44 0 012.78 6.68c0 5.22-4.24 9.46-9.46 9.46zm5.2-7.04c-.28-.14-1.65-.81-1.9-.91-.26-.1-.45-.14-.64.14-.19.27-.74.91-.91 1.09-.17.18-.34.2-.62.07-.28-.14-1.2-.44-2.29-1.4-.85-.76-1.42-1.7-1.59-1.98-.17-.28-.02-.43.13-.57.14-.14.28-.34.42-.51.14-.17.19-.28.28-.47.09-.19.05-.35-.02-.5-.07-.14-.64-1.55-.87-2.12-.23-.56-.47-.49-.64-.49-.17 0-.35-.02-.54-.02-.19 0-.5.07-.76.35s-1 1-1 2.43 1.02 2.82 1.16 3.02c.14.19 2.01 3.06 4.86 4.29.68.29 1.22.46 1.63.59.68.22 1.3.19 1.79.12.55-.08 1.65-.68 1.88-1.34.23-.67.23-1.24.16-1.36-.06-.12-.25-.19-.53-.32z" />
        </svg>
      </a>
      
    </div>
  )
}

export default App
