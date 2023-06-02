import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Testimonials, Courses, Course } from './containers'
import { Navbar, Footer, Brand, Achievements } from './components'
import images, {features} from './assets/landing/companies'
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <div>
        <Navbar />
        <Brand />
        <Achievements images={images} features={features}/>
        <Testimonials />
        <Courses />
        <Footer />
        <Course />
      </div>
    </div>
  )
}

export default App