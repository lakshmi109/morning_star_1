import React from 'react'
import './brand.css'
import Form from '../../containers/contact/Form'

const Brand = () => {
  return (
    <>
      <img src="/img/vectors/brand-bg.png" className='brand-img' alt='brand'/>
      <div className='vector-image-container'>
        <img src="/img/vectors/profile.png" className ='prof-img vector-img' alt="vec-img" />
        <img src="/img/vectors/suitcase.png" className ='suitcase-img vector-img' alt="vec-img" />
        <img src="/img/vectors/book.png" className ='book-img vector-img' alt="vec-img" />
        <img src="/img/vectors/building.png" className ='building-img vector-img' alt="vec-img" />
      </div>
      <div className='brand-container'>
        <div className='brand-heading'>
          <p>Driven by Outcomes,</p>
          <p>Fuelled by Ambitions.</p>
        </div>
        <div className='brand-subheading'>
          <p>Get trained for top tech jobs by industry experts.</p>
        </div>
        <div className='brand-button-container'>
          <a href="/register"><button className='brand-button'>Get Started</button></a>
          <a href="/contact"><button className='brand-button demo-btn'>Book Demo</button></a>
        </div>
      </div>
      <Form />
    </>
  )
}

export default Brand;