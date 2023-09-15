import React, { useState, useEffect } from 'react';
import '../styles/testimonials.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import ProfileImg1 from '../assets/Ellipse 16.png';
import ProfileImg2 from '../assets/Ellipse 18.png';

import Avatarb from '../assets/Avatarb.png'
import Avatarb2 from '../assets/Avatarb2.png'
import Avatarg1 from '../assets/Avatarg1.png'
import Avatarg2 from '../assets/Avatarg2.png'

const TestimonialCardData = [
  {
    photo: Avatarb,
    title: 'Koushik P',
    subtitle: 'Student',
    description: '1-on-1 Teaching Friend platform is perfect for people like me who were scared of coding. It made coding enjoyable and helped me learn faster Now, I feel more confident and started working on my own projects.',
  },
  {
    photo: Avatarg1,
    title: 'Shreya Shrivastava',
    subtitle: 'Student',
    description: 'I ve taken many courses in the past, but this one stands out as the best The personalized 1-on-1 teaching, guidance, and mentoring I receive here, along with the supportive community for collaborative project work, make it truly exceptional.',
  },
  {
    photo: Avatarb2,
    title: 'Mokshith Reddy',
    subtitle: 'Student',
    description: ' I ve reached the halfway mark in the Front-End Development program and am eager to complete it. Throughout this journey, my Teaching Friend "Shruthi D" has been exceptional at explaining complex concepts in a clear and understandable manner.'
  },
  {
    photo: Avatarg2,
    title: 'Aryan Sharma',
    subtitle: 'Student',
    description: 'I ve completed most of the Data Science program and already got an internship offer. Now, I\'m super excited to work on real projects even before finishing the program. Huge thanks to my Teaching Friend, Rahul V!"'
  },
];

const TestimonialCard = ({ photo, title, subtitle, description, isActive }) => {
  return (
    <div className={`testimonial-card ${isActive ? 'active' : ''}`}>
      <img src={photo} alt={title} className='testimonial-photo' />
      <h3 className='testimonial-title'>{title}</h3>
      <h4 className='testimonial-subtitle'>{subtitle}</h4>
      <FontAwesomeIcon icon={faQuoteLeft} className='testimonial-quoteIcon' />
      <p className='testimonial-description'>{description}</p>
    </div>
  );
};

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLeftArrowClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? TestimonialCardData.length - 1 : prevIndex - 1));
  };

  const handleRightArrowClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === TestimonialCardData.length - 1 ? 0 : prevIndex + 1));
  };

  const circularIndex = (currentIndex + TestimonialCardData.length) % TestimonialCardData.length;
  const visibleIndices = [circularIndex - 1, circularIndex, circularIndex + 1].map((index) =>
    (index + TestimonialCardData.length) % TestimonialCardData.length
  );

  const visibleCards = visibleIndices.map((index) => TestimonialCardData[index]);

  const middleIndex = Math.floor(visibleIndices.length / 2);

  const [centerIndex, setCenterIndex] = useState(0);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWindowWidth);

    return () => {
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, []);

  return (
    <div className='testimonials-section'>
      <div className='testimonials-nav'>
        <FontAwesomeIcon icon={faChevronLeft} className='testimonial-arrow-left' onClick={handleLeftArrowClick} />
        <p>
          What Our <span className='testimonial-orange-text'>Students</span> Say About Us
        </p>
        <FontAwesomeIcon icon={faChevronRight} className='testimonial-arrow-right' onClick={handleRightArrowClick} />
      </div>
      <div className='testimonials-dots'>
        {TestimonialCardData.map((_, index) => (
          <div key={index} className={`dot ${centerIndex === index ? 'active-dot' : ''}`}></div>
        ))}
      </div>
      <div className='testimonials-card-container'>
        <div className='testimonials-cards'>
          {visibleCards.map((card, index) => (
            <TestimonialCard
              key={index}
              photo={card.photo}
              title={card.title}
              subtitle={card.subtitle}
              description={card.description}
              isActive={index === middleIndex}
            />
          ))}
        </div>
        <div className='testimonials-cards-mobile'>
          {TestimonialCardData.map((card, index) => (
            <TestimonialCard
              key={index}
              photo={card.photo}
              title={card.title}
              subtitle={card.subtitle}
              description={card.description}
              isActive={index === middleIndex}
            />
          ))}
        </div>        
      </div>
    </div>
  );
}
