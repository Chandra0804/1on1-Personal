import React from 'react'
import '../styles/footer.css'
import LogoBlack from '../assets/Logo (1).png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone  , faLocationDot, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faInstagram , faLinkedin , faFacebook , faTwitter , faYoutube} from '@fortawesome/free-brands-svg-icons'

const FooterPartOne = () => {
  return(
      <div className='footer-part1'>
        <p>Subscribe our Newsletter For Latest Updates!</p>
        <input type='email' placeholder='Enter your Email' />
        <button className='subscribe-button'>Subscribe</button>
      </div>
  )
}


export default function Footer({ isFooterPart1 }) {
  const linkedinLink = 'https://www.linkedin.com/company/1-on-1-teaching-friend/about/'; // Replace with your LinkedIn profile URL

  return (
    <div className='footer-section'>
      {/* {!isFooterPart1? <FooterPartOne/> : ''} */}
      <div className='footer-part2'>
        <div className='background-map-container'>
          <div className='column contact'>
            <div className='logo'>
              <img src={LogoBlack} alt='logo' />
            </div>
            {/* <p className='column1-para'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec diam eu dolor tristique faucibus.
            </p> */}
            <p className='small-text'>We're available 24/7</p>
            <div className='contact-box'>
              
              <div className='phone-box'>
               
                <p>Contact  Us</p>
                <a href={linkedinLink}  target="_blank">
                <FontAwesomeIcon icon={faLinkedin} className='phone-icon1'   />
                </a>
              </div>
              <div className='phone-box'>
                <FontAwesomeIcon icon={faPhone} className='phone-icon' />
                <p>+91-8688283415</p>
              </div>
 {/* <FontAwesomeIcon icon={faFacebook}/> */}
                {/* <FontAwesomeIcon icon={faInstagram}/> */}
                {/* <FontAwesomeIcon icon={faEnvelope}/> */}
                {/* <FontAwesomeIcon icon={faTwitter}/> */}
                {/* <FontAwesomeIcon icon={faYoutube}/> */}

              {/* <p>Get Connected with Social Media Platforms</p> */}
            </div>
            <div className='location'>
              {/* <p><span className='location-icon'><FontAwesomeIcon icon={faLocationDot}/></span>Akshay Tech Park, 4th Floor, Plat No 72&73, EPIP Zone, Whitefield, Bangalore , Karnataka 560066</p> */}
              {/* <p><span className='location-icon'><FontAwesomeIcon icon={faEnvelope}/></span>Mail US</p> */}
              <p className='location-icon'> support@1on1teachingfriend.com</p>
              {/* 
              <p className='location-icon'> info@1on1teachingfriend.com</p>
              <p className='location-icon'> career@1on1teachingfriend.com</p> */}

            </div>
          </div>
          {/* <div className='column' >
            <p className='column2-title'>Quick Links</p>
            <div id='quick-links'>
            <ul>
              <li>Home</li>
              <li>Courses</li>
              <li>About Us</li>
              <li>Explore All</li>
              <li>Get in touch</li>
            </ul>
            </div> */}
            {/* <p className='location-title'>1on1 Resides Here</p> */}
            {/* <div className='location'>
              <p><span className='location-icon'><FontAwesomeIcon icon={faLocationDot}/></span>Akshay Tech Park, 4th Floor, Plat No 72&73, EPIP Zone, Whitefield, Bangalore , Karnataka 560066</p>
            </div> */}
          {/* </div> */}
          {/* Inside your Footer component */}
          <div class="custom-column">
{/* <h1 className='column3-title'>Popular Courses</h1> */}
<h1 className='column3-title' style={{ fontWeight: '2500' }}>Popular Courses</h1>

<div class="custom-content">
<div class="custom-column-content">
<ul>
<li>Full-Stack Development</li>
<li>Front-End Development</li>
<li>Back-End Development</li>
<li>UI/UX Designer</li>
</ul>
</div>
<div class="custom-column-content">
<ul>


<li>Mobile App Development(iOS)</li>
<li>Mobile App Development(Android)</li>

<li>AI Engineer</li>
<li>Data Science</li>
</ul>
</div>
<div class="custom-column-content">
<ul>
<li>QA Automation</li>
<li>Python Developer</li>
<li>Java Developer</li>
<li>DevOps Engineer</li>
</ul>
</div>
</div>
          </div>
        {/* <div className='column big-column support'>
            <p className='column3-title'>1on1 Support</p>
            <p className='small-text'>Write to Us</p>
            <div className='name-contact-container'>
            <div className='input-container'>
              <label>Name</label>
              <input className='input-name' type='text' />
            </div>
            <div className='input-container'>
              <label>Contact</label>
              <input className='input-contact' type='text' />
            </div>
            </div>
            <div className='input-container'>
              <label>Mail</label>
              <input className='input-email' type='email' />
            </div>
            <div className='input-container'>
              <label>Message</label>
              <textarea className='input-message' ></textarea>
            </div>
            <div className='contact-submit-button'>
              <button>Submit</button>
            </div>
          </div> */}
        </div>
      </div>
      <div className='footer-part3'>
        <p>Copyright 2023 1 on 1 Teaching Friend Technologies Theme | All Rights Reserved</p>
      </div>
    </div>
  )
}
