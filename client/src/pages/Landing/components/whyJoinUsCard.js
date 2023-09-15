  import React from 'react'
  import '../styles/whyJoinUsCard.css'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


  export default function WhyJoinUsCard({ imgsrc, description, title,icon }) {

    const lastSpaceIndex = title.lastIndexOf(' ');
    const lastWord = title.substring(lastSpaceIndex + 1);

    return (
      <div className="card-container">
        <div className='card-image-container'>
          <img src={imgsrc} alt="Card" className="joinUsCard-image" />
        </div>
        <div className="info-box">
          <div className="icon-circle">
          <FontAwesomeIcon icon={icon} className="icon" />
          </div>
          <div className="info-content">
            <p className="title">
              {title.substring(0, lastSpaceIndex)}
              <span className="orange-word">{" "}{lastWord}</span>
            </p>
            <p className="description">{description}</p>
          </div>
        </div>
      </div>
    )
  }
