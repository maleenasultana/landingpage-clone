import React from 'react'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Dashboard from './components/Dashboard'
import Footer from './components/Footer'
import  Card  from './components/Card'
import CardGroup from "./components/CardGroup"
import Moving from './components/Moving'
import Testimonial from "./components/Tesimonial"
import Pricing from "./components/Pricing"
import FAQ from "./components/FAQ"
import Lastcall from "./components/Lastcall"


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Dashboard/>
      <Card/>
      <CardGroup/>
      <Moving/>
      <Testimonial/>
      <Pricing/>
      <FAQ/>
        <Lastcall/>
      <Footer/>
    
    </div>
  )
}

export default App