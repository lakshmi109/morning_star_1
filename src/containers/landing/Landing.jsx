import React from 'react'
import {Testimonials, Courses} from '../../containers';
import {Brand, Achievements} from '../../components';
import images, {features} from '../../assets/landing/constants'

const Landing = () => {
  return (
    <>
      <Brand />
      <Achievements images={images} features={features}/>
      <Testimonials />
      <Courses />
    </>
  )
}

export default Landing