import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStopwatch, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { faStar as solidStar, faStarHalfAlt as halfStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import BackendImg from '../assets/BackendProgramCard.png'

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
import '../styles/placementProgram.css';
import data from '../assets/json_data/program_details_info_in_json.json'

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
  const [showAllCards, setShowAllCards] = useState(false);
  const visibleCardCount = !showAllCards? 8 : programData.length;

  const toggleShowAllCards = () => {
    setShowAllCards(!showAllCards);
  };

  useEffect(() => {
    setProgramData(data);
    console.log(data)
    axios.get('http://localhost:5005/api/programs')
      .then(response => {
        
        // console.log(response.data.data)
      })
      .catch(error => {
        console.error('Error fetching program data:', error);
      });
      
  }, []);

    const ProgramCard = ({ title, imageSrc, period, rating, gradientColors , className,courseId }) => {
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
        background: `linear-gradient(130deg, ${gradientColors[0]} 15%, ${gradientColors[1]} 46%)`
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
              <button >Know More</button>
            </div>
          </div>
        </div>
      );
    };

  return (
    <div className='placement-programs-section'>
      <h1><span className='orange-text'>Placement </span>Programs</h1>
      <div className='placement-background-image-container'>
        <div className='placement-cards-container'>
          {programData.slice(0, visibleCardCount).map((card, index) => (
            <ProgramCard
              title={card.title} 
              imageSrc={card.imageSrc}
              period={card.period}
              rating={card.rating}
              courseId={card.courseId}
              gradientColors={card.gradientColors}
              key={index}
              className={index >= 8 ? 'move-from-top-right' : ''}
            />
          ))}
        </div>
        <button className='view-more-button' onClick={toggleShowAllCards}>
          {showAllCards ? 'View Less' : 'View More'}
        </button>
      </div>
    </div>
  );
}
