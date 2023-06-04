import React from 'react'
import './testimonials.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import TestimonialCard from 'material-testimonial-card';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Testimonials = (props) => {
  return (
    <>
    <div className='maincontainer'>
        <div className='titlebox'>
          <h2>Our students speak for us.</h2>
            <p className='para'> Learn it from the ones who have been on this journey already</p>
        </div>
        <div className='carousel-container'>
          <Carousel responsive={responsive} infinite={true} arrows={false} autoPlay={true}>
            <div className="testimonial-card">
              <TestimonialCard
                name={"John Smith"}
                image={"/path/to/image.jpg"}
                content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, atque obcaecati fugiat ipsam nisi architecto quam eligendi recusandae ipsum vero reiciendis mollitia illo harum fugit tenetur necessitatibus dicta quaerat asperiores?"}
              />
            </div>
            <div className="testimonial-card">
              <TestimonialCard
                name={"John Smith"}
                image={"/path/to/image.jpg"}
                content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, atque obcaecati fugiat ipsam nisi architecto quam eligendi recusandae ipsum vero reiciendis mollitia illo harum fugit tenetur necessitatibus dicta quaerat asperiores?"}
              />
            </div>
            <div className="testimonial-card">
              <TestimonialCard
                name={"John Smith"}
                image={"/path/to/image.jpg"}
                content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, atque obcaecati fugiat ipsam nisi architecto quam eligendi recusandae ipsum vero reiciendis mollitia illo harum fugit tenetur necessitatibus dicta quaerat asperiores?"}
              />
            </div>
            <div className="testimonial-card">
              <TestimonialCard
                name={"John Smith"}
                image={"/path/to/image.jpg"}
                content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, atque obcaecati fugiat ipsam nisi architecto quam eligendi recusandae ipsum vero reiciendis mollitia illo harum fugit tenetur necessitatibus dicta quaerat asperiores?"}
              />
            </div>
            <div className="testimonial-card">
              <TestimonialCard
                name={"John Smith"}
                image={"/path/to/image.jpg"}
                content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, atque obcaecati fugiat ipsam nisi architecto quam eligendi recusandae ipsum vero reiciendis mollitia illo harum fugit tenetur necessitatibus dicta quaerat asperiores?"}
              />
            </div>
          </Carousel>
        </div>
    </div>
    </>
  )
}

export default Testimonials;