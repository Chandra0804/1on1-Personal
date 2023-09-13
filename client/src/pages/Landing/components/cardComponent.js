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
  console.log("getting id");
  console.log("cid:" + onbId);
  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  return (
    <div className="card">
      <div className='image-container'>
        {/* Display course image */}
        <img src={imageSrc} alt="Course" className="card-image" />
        <div className='icons-container'>
          {/* {icons.map((icon) => (
            icon !== '0' ? <img src={icon} alt='icon' /> : null
          ))} */}
        </div>
      </div>

      <div className='card-details'>
        {/* Display period */}
        <p>{period}</p>
        <div className='card-main-details'>
          <p className='course-card-title'>{title}</p>
          <div className='count-details'>
            <div className='star-count'>
              {/* Display star icon and count */}
              <img src={starIcon} alt="Star Icon" className="star-icon" />
              <p>{star}</p>
            </div>
            <p className='gray-dash'>{'|'}</p>
            {/* Display purchases count */}
            {/* <p>{purchases} Purchases</p> */}
            <p className='purchases'>1000+ Purchases</p>
          </div>
          {/* <p className='course-card-field'>{field}</p> */}
        </div>
        <div className='card-buttons'>
          {/* Display ellipsis icon */}
          <FontAwesomeIcon icon={faEllipsis} className='ellipsis-icon' />
          <button className="knowMore-button" >Know More</button>
        </div>
      </div>
    {showPopup && <GetInTouchPopUp onClose={togglePopup} />}

    </div>
  );
};

// Export the CardComponent
export default CardComponent;
