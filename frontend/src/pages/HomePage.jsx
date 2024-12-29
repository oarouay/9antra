import React from 'react'
import Hero from '../components/Hero'
import Courses from '../components/Courses'
import Contact from '../components/Contact'
import NavBar from '../components/NavBar'
function HomePage() {
  return (
    <>
        <NavBar />
        <Hero/>
        <Courses/>
        <Contact/>
    </>
    
  )
}

export default HomePage