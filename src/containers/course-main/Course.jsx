import React, { useState, useEffect } from 'react';
import './course-main.css';
import Courses from '../courses/Courses';

const Course = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTitle, setActiveTitle] = useState('');
  const [activeContent, setActiveContent] = useState('');

  let newIndex = 0;
  useEffect(() => {
    const handleScroll = () => {
      const subtopicElements = document.getElementsByClassName('course-subtopic');
      for (let i = 0; i < subtopicElements.length; i++) {
        const { top, height } = subtopicElements[i].getBoundingClientRect();
        if (top <= window.innerHeight / 2 && top + height >= window.innerHeight / 2) {
          newIndex = i;
          break;
        }
      }
      setActiveIndex(newIndex);
      setActiveTitle(props.courses[newIndex].title);
      setActiveContent(props.courses[newIndex].description);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [props.courses]);

  return (
    <>
    <div className="course-header">
      <h1>Learn without <span>limits.</span></h1>
      <img src="/img/vectors/waves2.png" alt="" />
      <p>Start, switch, or advance your career with more than 100 courses and Professional Certificates.</p>
    </div>
    <Courses />
    <div className='course-subheader '>
      <h2>Course curriculum</h2>
      <h1>Course content for our comprehensive <span>Front-End Developer </span>course</h1>
    </div>
    <div className='course-main-container'>
      <div className='preview-screen'>
        <h1>{activeTitle}</h1>
        <h2>{activeContent}</h2>
      </div>
      <div className='course-topics'>
        {props.courses.map((course, index) => {
          return (
            <>
            <div
              className={index === activeIndex ? 'course-subtopic active-course' : 'course-subtopic'}
              key={index}
            >
              <h2>{course.title}</h2>
            </div>
            </>
          );
        })}
      </div>
    </div>
    <div className='course-banner'>
      <h1>Head over to the <a href="/contact">registering</a> section to enroll in your first live class for free!</h1>
    </div>
    </>
  );
};

export default Course;
