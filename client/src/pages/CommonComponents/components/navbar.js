import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/navbar.css';
import Logo from '../assets/Navbar Logo.png';
import GetInTouchPopUp from '../components/getInTouchPopUp';
import { Routes, Route, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

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
      <Link to='/'>
        <img src={Logo} alt='Logo' className='navbar-logo' />
      </Link>
      <div className={`navbar-buttons ${mobileMenuOpen ? 'mobile-menu' : ''}`}>
        <Link to='/' className={location.pathname === '/' ? 'active' : ''}>
          <button className='navbar-button'>Home</button>
        </Link>
        <Link to='/exploreprograms' className={location.pathname === '/exploreprograms' ? 'active' : ''}>
          <button className='navbar-button'>Explore</button>
        </Link>
        <Link to='/hiretalent' className={location.pathname === '/hiretalent' ? 'active' : ''}>
          <button className='navbar-button'>Hire Talent</button>
        </Link>
        <Link to='/becomeATutor' className={location.pathname === '/becomeATutor' ? 'active' : ''}>
          <button className='navbar-button'>Become a Tutor</button>
        </Link>
        <Link to='/contactus' className={location.pathname === '/contactus' ? 'active' : ''}>
          <button className='navbar-button'>Contact Us</button>
        </Link>
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
