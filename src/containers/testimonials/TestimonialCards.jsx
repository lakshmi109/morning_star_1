import React from 'react'
import "./testimonialcards.css"

const TestimonialCards = (props) => {
  return (
    <div className="card">
      <div className="card-details">
          <div className="textbox">
              <h4 className='texttitle'>{props.name}</h4>
          </div>
          <div className='textbodybox'>
              <p className="text-body-heading">{props.degree}</p>
              <p className="text-body">Post Greekster</p>
              <p className="text-body-heading">{props.job}</p>
          </div>
          
      </div>
      <button className="card-button">More info</button>
      <a href="\" className='stretchlink'> </a>
    </div>
  )
}

export default TestimonialCards;