import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStopwatch, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { faStar as solidStar, faStarHalfAlt as halfStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import '../styles/placementProgram.css';
import data from '../assets/json_data/program_details_info_in_json.json'

import card_img_0 from '../assets/program_card_images/fullstackp.png';
import card_img_1 from '../assets/program_card_images/frontendp.png';
import card_img_2 from '../assets/program_card_images/backendp.png';
import card_img_3 from '../assets/program_card_images/uiuxp.png';
import card_img_4 from '../assets/program_card_images/aip.png';
import card_img_5 from '../assets/program_card_images/dsp.png';
import card_img_6 from '../assets/program_card_images/pythonp.png';
import card_img_7 from '../assets/program_card_images/javap.png';
import card_img_8 from '../assets/program_card_images/qap.png';
import card_img_9 from '../assets/program_card_images/devopsp.png';
import card_img_10 from '../assets/program_card_images/mobile.png';
import card_img_11 from '../assets/program_card_images/mobiosp.png';

let imgdata = {
  "0": card_img_0,
  "1": card_img_1,
  "2": card_img_2,
  "3": card_img_3,
  "4": card_img_4,
  "5": card_img_5,
  "6": card_img_6,
  "7": card_img_7,
  "8": card_img_8,
  "9": card_img_9,
  "10": card_img_10,
  "11": card_img_11
}




export default function PlacementPrograms() {
  const [programData, setProgramData] = useState([]);

  // Create separate refs for each slider
  const programCardContainerRef1 = useRef(null);
  const programCardContainerRef2 = useRef(null);
  const programCardContainerRef3 = useRef(null);

  // Create separate currentPage state variables for each slider
  const [currentPage1, setCurrentPage1] = useState(-1);
  const [currentPage2, setCurrentPage2] = useState(-1);
  const [currentPage3, setCurrentPage3] = useState(-1);

  useEffect(() => {
    setProgramData(data);
  }, []);

  // Create separate scroll handlers for each slider
  const handleScroll1 = () => {
    if (programCardContainerRef1.current) {
      const container = programCardContainerRef1.current;
      const cardWidth = container.offsetWidth;
      const scrollLeft = container.scrollLeft;
      let newPage = Math.floor((scrollLeft + cardWidth / 2) / cardWidth);

      if (newPage < 0) {
        newPage = 0;
      } else if (newPage >= programData.length) {
        newPage = programData.length - 1;
      }

      setCurrentPage1(newPage);
    }
  };

  const handleScroll2 = () => {
    if (programCardContainerRef2.current) {
      const container = programCardContainerRef2.current;
      const cardWidth = container.offsetWidth;
      const scrollLeft = container.scrollLeft;
      let newPage = Math.floor((scrollLeft + cardWidth / 2) / cardWidth);

      if (newPage < 0) {
        newPage = 0;
      } else if (newPage >= programData.length) {
        newPage = programData.length - 1;
      }

      setCurrentPage2(newPage);
    }
  };

  const handleScroll3 = () => {
    if (programCardContainerRef3.current) {
      const container = programCardContainerRef3.current;
      const cardWidth = container.offsetWidth;
      const scrollLeft = container.scrollLeft;
      let newPage = Math.floor((scrollLeft + cardWidth / 2) / cardWidth);

      if (newPage < 0) {
        newPage = 0;
      } else if (newPage >= programData.length) {
        newPage = programData.length - 1;
      }

      setCurrentPage3(newPage);
    }
  };

  useEffect(() => {
    // Add scroll event listeners to each slider
    if (programCardContainerRef1.current) {
      programCardContainerRef1.current.addEventListener('scroll', handleScroll1);
    }
    if (programCardContainerRef2.current) {
      programCardContainerRef2.current.addEventListener('scroll', handleScroll2);
    }
    if (programCardContainerRef3.current) {
      programCardContainerRef3.current.addEventListener('scroll', handleScroll3);
    }

    return () => {
      // Remove scroll event listeners when the component unmounts
      if (programCardContainerRef1.current) {
        programCardContainerRef1.current.removeEventListener('scroll', handleScroll1);
      }
      if (programCardContainerRef2.current) {
        programCardContainerRef2.current.removeEventListener('scroll', handleScroll2);
      }
      if (programCardContainerRef3.current) {
        programCardContainerRef3.current.removeEventListener('scroll', handleScroll3);
      }
    };
  }, [programData]);


  const ProgramCard = ({ title, imageSrc, period, rating, gradientColors, className, courseId }) => {

    console.log(courseId);
    const maxRating = 5;
    const solidStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    const stars = [];
    for (let i = 1; i <= maxRating; i++) {
      if (i <= solidStars) {
        stars.push(
          <FontAwesomeIcon
            key={i}
            icon={solidStar}
            className='solid-star'
          />
        );
      } else if (hasHalfStar && i === solidStars + 1) {
        stars.push(
          <FontAwesomeIcon
            key={i}
            icon={halfStar}
            className='half-star'
          />
        );
      } else {
        stars.push(
          <FontAwesomeIcon
            key={i}
            icon={regularStar}
            className='regular-star'
          />
        );
      }
    }

    const gradientStyle = {
      background: `linear-gradient(130deg, #ffffff 15%, ${gradientColors} 46%)`
    };

    return (
      <div className={`program-card ${className}`}>
        <div className='program-image-container' style={gradientStyle}>
          <img src={imgdata[courseId]} alt="Course" className="program-card-image" />
        </div>
        <div className='program-card-details'>
          <p className='program-card-title'>{title}</p>
          <p className='guarantee-text'>Course with Guaranteed internship</p>
          <p className='program-card-period'><span><FontAwesomeIcon icon={faStopwatch} /></span>{period} course</p>
          <div className="rating-stars">
            <p>Rating : <span>{stars}</span> {rating}</p>
          </div>
          <div className='program-card-buttons'>
            <button className='ellipsis-button-programCard'><span><FontAwesomeIcon icon={faEllipsis} /></span></button>
            <Link to='/program-details' state={{ title, courseDuration: period }}>
              <button>Know More</button>
            </Link>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className='placement-programs-section'>
      <h1><span className='orange-text'>Placement </span>Programs</h1>
      <div className='placement-background-image-container'>
        <div className='placement-cards-desktop'>
          <div className='placement-cards-container'>
            {programData.map((card, index) => (
              <ProgramCard
                title={card.title}
                imageSrc={card.imageSrc}
                period={card.period}
                rating={card.rating}
                courseId={card.courseId}
                gradientColors={card.gradientColors}
                key={index}
              />
            ))}
          </div>
        </div>
        <div className='placement-cards-mobile'>
          <div className='placement-cards-container'>
            {/* Slider 1 */}
            <div className='program-cards-scroll' ref={programCardContainerRef1}>
              {programData.slice(0, 4).map((card, index) => (
                <ProgramCard
                  title={card.title}
                  imageSrc={card.imageSrc}
                  period={card.period}
                  rating={card.rating}
                  courseId={card.courseId}
                  gradientColors={card.gradientColors}
                  key={index}
                  className={
                    index === currentPage1 ? '' : 'program-card-hidden'
                  }
                />
              ))}
            </div>
            <div className='pagination-dots'>
              {programData.slice(0, 4).map((_, index) => (
                <span
                  key={index}
                  className={index === currentPage1 ? 'active-dot' : 'dot'}
                  onClick={() => {
                    setCurrentPage1(index);
                    const container = programCardContainerRef1.current;
                    const cardWidth = container.offsetWidth;
                    container.scrollLeft = index * cardWidth;
                  }}
                ></span>
              ))}
            </div>

            {/* Slider 2 */}
            <div className='program-cards-scroll' ref={programCardContainerRef2}>
              {programData.slice(4, 8).map((card, index) => (
                <ProgramCard
                  title={card.title}
                  imageSrc={card.imageSrc}
                  period={card.period}
                  rating={card.rating}
                  courseId={card.courseId}
                  gradientColors={card.gradientColors}
                  key={index}
                  className={
                    index === currentPage2 ? '' : 'program-card-hidden'
                  }
                />
              ))}
            </div>
            <div className='pagination-dots'>
              {programData.slice(4, 8).map((_, index) => (
                <span
                  key={index}
                  className={index === currentPage2 ? 'active-dot' : 'dot'}
                  onClick={() => {
                    setCurrentPage2(index);
                    const container = programCardContainerRef2.current;
                    const cardWidth = container.offsetWidth;
                    container.scrollLeft = index * cardWidth;
                  }}
                ></span>
              ))}
            </div>

            {/* Slider 3 */}
            <div className='program-cards-scroll' ref={programCardContainerRef3}>
              {programData.slice(8, 12).map((card, index) => (
                <ProgramCard
                  title={card.title}
                  imageSrc={card.imageSrc}
                  period={card.period}
                  rating={card.rating}
                  courseId={card.courseId}
                  gradientColors={card.gradientColors}
                  key={index}
                  className={
                    index === currentPage3 ? '' : 'program-card-hidden'
                  }
                />
              ))}
            </div>
            <div className='pagination-dots'>
              {programData.slice(8, 12).map((_, index) => (
                <span
                  key={index}
                  className={index === currentPage3 ? 'active-dot' : 'dot'}
                  onClick={() => {
                    setCurrentPage3(index);
                    const container = programCardContainerRef3.current;
                    const cardWidth = container.offsetWidth;
                    container.scrollLeft = index * cardWidth;
                  }}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}