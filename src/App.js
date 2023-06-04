import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Course } from './containers'
import { Navbar, Footer } from './components'
import courses from './assets/course-main/constants';
import './App.css'
import Landing from './containers/landing/Landing';
import Contact from './containers/contact/Contact';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/course" element={<Course courses={courses}/>} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App