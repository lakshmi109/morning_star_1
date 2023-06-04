import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Course } from './containers'
import { Navbar, Footer } from './components'
import courses from './assets/course-main/constants';
import './App.css'
import Landing from './containers/landing/Landing';
import Contact from './containers/contact/Contact';
import React, { useEffect } from 'react';

const App = () => {
  
  useEffect(() => {
    const saveUTMParams = () => {
      const queryParams = new URLSearchParams(window.location.search);
      const utmParams = {};

      for (let param of queryParams) {
        if (param[0].startsWith('utm_')) {
          utmParams[param[0]] = param[1];
        }
      }

      const jsonString = JSON.stringify(utmParams);

      const fileUrl = process.env.PUBLIC_URL + '/utmParams.json';

      fetch(fileUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: jsonString,
      });
    };

    saveUTMParams();
  }, []);

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