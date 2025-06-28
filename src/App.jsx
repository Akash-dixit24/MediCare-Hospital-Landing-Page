import React from 'react'
import Headers from './compnents/Header'
import Hero from './compnents/Hero'
import Services from './compnents/Services'
import Doctors from './compnents/Doctor'
import Innovation from './compnents/Innovation'
import Reviews from './compnents/Reviews'
import Newsletter from './compnents/Newsletter'
import Footer from './compnents/Footer'
import '../src/responsive.css';



const App = () => {
  return (
    <>
    <div  className="bg-[#f2f9ff] ">
      <Headers/>
      <Hero/>
      <Services/>
      <Innovation/>
      <Doctors/>
      <Reviews/>
      <Newsletter/>
      <Footer/>
    </div>
    </>
  )
}

export default App