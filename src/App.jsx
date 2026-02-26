import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/navbar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Reviews from './components/Reviews/Reviews'
import Contact from './components/Contact/Contact'
import Title from './components/Title/Title'
import Footer from './components/Footer/Footer'
import About from './components/About/About'
import Explore from './components/Explore/Explore'
import ServiceDetail from './components/ServiceDetail/ServiceDetail'

const MainPage = () => {
  return (
    <>
      <div id='hero'>
        <Hero/>
      </div>
      <Services/>
      
      {/* <Reviews/> */}
      <Title subTitle='About Us' title='Family Owned & Operated'/>
      <About/>
      <div className='container'/>
        <Title subTitle='Contact Us' title='' />
        <Contact/>
        <Footer/>
    </>
  )
}

const App = () => {
  return (
    
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/service/:serviceId" element={<ServiceDetail />} />
      </Routes>
    </Router>
  )
}

export default App