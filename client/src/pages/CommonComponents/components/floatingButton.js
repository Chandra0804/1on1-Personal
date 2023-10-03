import React, { useState } from 'react';
import '../styles/floatingButton.css';
import CallCenterOperator from '../assets/Call center operator.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faTelegram } from '@fortawesome/free-brands-svg-icons';
import WhatsappIcon from '../assets/WhatsappIcon.png'

export default function FloatingButton() {
  // const [hovered, setHovered] = useState(false);

  // const toggleHover = () => {
  //   setHovered(!hovered);
  // };

  let message = "Hello 1on1 Teaching Friend, I'm excited to join. Could you share more details?"
  let phNo = "918688283415";
  // let url = `https://web.whatsapp.com/send?phone=${phNo}&text=${message}`
  // let url = `https://wa.me/${phNo}/${message}`


  const url = `https://wa.me/${phNo}?text=${encodeURIComponent(message)}`;

  // let url = `https://whatsapp://send?text=${message}&phone=${phNo}`

  return (
    <div className="floating-button-container">
      <div
      // className={`floating-button${hovered ? ' hovered' : ''}`}
      // onMouseEnter={toggleHover}
      // onMouseLeave={toggleHover}
      >
        {
          <div className="hovered-icons">
            < a href={url}
              target="_blank">
              {/* <i class="fab fa-whatsapp fa-7x"></i>  */}

              {/* <FontAwesomeIcon icon={faWhatsapp} className='whatsapp-icon' style={{color:'green'}}/> */}
              <img src={WhatsappIcon} alt='whatsapp' />
            </a>
          </div>
        }
      </div>
    </div>
  );
}