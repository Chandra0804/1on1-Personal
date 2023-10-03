// Import necessary dependencies and assets
import React, { useState, useEffect } from 'react';
import '../styles/cardComponent.css';
import axios from 'axios';
import userIcon from '../assets/User.png';
import starIcon from '../assets/Star.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import GetInTouchPopUp from '../components/getInTouchPopUp';


const CardComponent = ({key,courseId,objectId, title, imageSrc, purchases, star, period }) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const onbId = queryParams.get('objectId');
  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  return (
    <div className="card">
      <div className='image-container-p'>
        <img src={imageSrc} alt="Course" className="card-image" />
        <div className='icons-container'>
        </div>
      </div>

      <div className='card-details'>
        <p>{period}</p>
        <div className='card-main-details'>
          <p className='course-card-title'>{title}</p>
          <div className='count-details'>
            <div className='star-count'>
              <img src={starIcon} alt="Star Icon" className="star-icon" />
              <p>{star}</p>
            </div>
            <p className='gray-dash'>{'|'}</p>
            <p className='purchases'>1000+ Purchases</p>
          </div>
        </div>
        <div className='card-buttons'>
          <FontAwesomeIcon icon={faEllipsis} className='ellipsis-icon' />
          <Link to='/programdetails' state={{ title, courseDuration: period }}>
            <button className="knowMore-button" >Know More</button>
          </Link>
        </div>
      </div>
    {showPopup && <GetInTouchPopUp onClose={togglePopup} />}

    </div>
  );
};

export default CardComponent;
