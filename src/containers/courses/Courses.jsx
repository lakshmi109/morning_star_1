import React from 'react'
import './courses.css';
import Coursecard from './Coursecard';

const Courses = () => {
  return (
    <div className='courses'>
      <div className='courseupper'>
        <h1 className='coursetitle'>Course Pricing</h1>
        <h2 className='courseheading'>Courses for All</h2>
        <p className='coursepara'> We have courses for everyone wheather you are new to programming, a CS/IT college graduate or a seasoned tech professional</p>
      </div>
      <img src="/img/vectors/waves.png" alt="" className='waves-img' />
      <div className='card-container'>
        <Coursecard coursetitle="Data Structers and Algorithms" price="10"
          feature1="Access to all basic features"
          feature2="Basic reporting and analytics"
          feature3="Upto 10 Individual Users"
          feature4="20 Gb of individual data useage"
          feature5="Basic chat and email support" />
        <Coursecard
          coursetitle="Full Stack development"
          price="15"
          feature1="200+ Integrations"
          feature2="Advanced Reporting and Analyses"
          feature3="Upto 20 Individual Users"
          feature4="40 Gb of individual data useage"
          feature5="Priority chat and email suppord" />
        <Coursecard
        coursetitle="Machine Learning"
        price="25"
        feature1="Advanced Custom Fields"
        feature2="Audit log and data history"
        feature3="Unlimited Individual Users"
        feature4="Unlimited Individual data"
        feature5="Personalized + priority services"
        />
      </div>
    </div>
  )
}

export default Courses