// import React, { useState } from 'react';
// import '../styles/navbar.css';
// import Logo from '../assets/Final logo.jpg';
// import GetInTouchPopUp from '../components/getInTouchPopUp';

// export default function Navbar() {
//   const [showPopup, setShowPopup] = useState(false);

//   const togglePopup = () => {
//     setShowPopup(!showPopup);
//   };

//   return (
//     <nav className='navbar'>
//       <img src={Logo} alt='Logo' className='navbar-logo' />
//       <div className='navbar-buttons'>
//         <button className='navbar-button'>Home</button>
//         <button className='navbar-button'>Explore</button>
//         <button className='navbar-button'>About Us</button>
//         <button className='navbar-button'>Our Highlights</button>
//         <button className='navbar-button black-button' onClick={togglePopup}>Get in Touch</button>
//       </div>
//       {showPopup && <GetInTouchPopUp onClose={togglePopup} />}
//     </nav>
//   );
// }

import React, { useState } from 'react';
import '../styles/navbar.css';
import Logo from '../assets/Final Logo1.jpeg';
import GetInTouchPopUp from '../components/getInTouchPopUp';
import {Routes, Route, useNavigate} from 'react-router-dom';

import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Navbar() {
   const navigate = useNavigate();
  
  const navigateToExplore = () => {
    // 👇️ navigate to /exploreprograms
    navigate('/exploreprograms');
  };
  const navigateToHome = () => {
    // 👇️ navigate to /exploreprograms
    navigate('/');
  };
  const [showPopup, setShowPopup] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={`navbar ${mobileMenuOpen ? 'mobile-menu-open' : ''}`}>
      <img src={Logo} alt='Logo' className='navbar-logo' />
      <div className={`navbar-buttons ${mobileMenuOpen ? 'mobile-menu' : ''}`}>
        
        <button className='navbar-button'  > <FontAwesomeIcon style={{ color: '#060606' }} icon={faPhone} className='phone-icon' /> +91 8688 283 415</button>
        {/* <button className='navbar-button' onClick={navigateToHome}>Home</button>
        <button className='navbar-button' onClick={navigateToExplore}>Explore</button> */}
       

        {/* <button className='navbar-button'>About Us</button>
        <button className='navbar-button'>Our Highlights</button> */}
        <button className='navbar-button black-button' onClick={togglePopup}>Get in Touch</button>
      </div>
      <div className='mobile-menu-icon' onClick={toggleMobileMenu}>
        <div className={`bar ${mobileMenuOpen ? 'bar-open' : ''}`}></div>
        <div className={`bar ${mobileMenuOpen ? 'bar-open' : ''}`}></div>
        <div className={`bar ${mobileMenuOpen ? 'bar-open' : ''}`}></div>
      </div>
      {showPopup && <GetInTouchPopUp onClose={togglePopup} />}
    </nav>
  );
}