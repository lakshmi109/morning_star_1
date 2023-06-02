import React from 'react'
import './achievements.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 10
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 10
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 10
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2
  }
};

const Achievements = (props) => {
  return (
    <div className='achievement-container'>
      <p>Our Students are Placed at</p>
      <div>
        <Carousel responsive={responsive} infinite={true} arrows={false} autoPlay={true} autoPlaySpeed={1000}>
          {props.images.map((image, index) => {
            return (
              <div key={index} className='company-image-container'>
                <img className='company-img' src={image} alt='company-img' />
              </div>
            )
          })}
        </Carousel>
      </div>
      <div>
        <Carousel responsive={responsive} infinite={true} arrows={false} autoPlay={true} autoPlaySpeed={1000} rtl ={true}>
          {props.images.map((image, index) => {
            return (
              <div key={index} className='company-image-container'>
                <img className='company-img' src={image} alt='company-img' />
              </div>
            )
          })}
        </Carousel>
      </div>
      <div>
        <Carousel responsive={responsive} infinite={true} arrows={false} autoPlay={true} autoPlaySpeed={1000}>
          {props.images.map((image, index) => {
            return (
              <div key={index} className='company-image-container'>
                <img className='company-img' src={image} alt='company-img' />
              </div>
            )
          })}
        </Carousel>
      </div>
      <div>
        <p>A One Stop Platform to Learn, Practice and Grow.</p>
      </div>
      <div className='feature-container'>
        {props.features.map((feature, index) => {
          return (
            <div className='feature-box' key={index}>
              <img src={feature.image} alt="feature" className='feature-img' />
              <h2>{feature.heading}</h2>
              <p>{feature.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Achievements;