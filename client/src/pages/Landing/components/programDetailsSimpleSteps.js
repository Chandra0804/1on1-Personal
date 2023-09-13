import '../styles/programDetailsSimpleSteps.css'
import IdentifyCourse from '../assets/Group 170.png'
import CustomizeCourse from '../assets/Group 810.png'
import RequestCall from '../assets/Group 850.png'
import GroupImg from '../assets/Group.png'
import React , { useState, useEffect }from 'react';
import GetInTouchPopUp from '../components/getInTouchPopUp';

export default function ProgramDetailsSimpleSteps() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const updateWindowWidth = () => {
        setWindowWidth(window.innerWidth);
      };
  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
      // Add a resize event listener when the component mounts
      useEffect(() => {
        window.addEventListener('resize', updateWindowWidth);
    
        // Remove the event listener when the component unmounts to prevent memory leaks
        return () => {
          window.removeEventListener('resize', updateWindowWidth);
        };
      }, []);
  return (
    <>
    <div className='program-details-simple-steps'>
      <h1><span className='shining-animation'>Start Your <span className='orange-text'>Journey</span></span><br/> in <span className='orange-text'>Simple Steps</span></h1>
            <div className="simple-steps-images">
                <img src={IdentifyCourse} alt="Step 1" className="simple-steps-image1" />
                <img src={RequestCall} alt="Step 2" className="simple-steps-image2" />
                <img src={CustomizeCourse} alt="Step 3" className="simple-steps-image1" />
            </div>
            <button className='request-call-button request-call-button-program-details' style={{marginTop: windowWidth <=768 ? "70%" : "10%", padding: "10px"}} onClick={togglePopup} >Request a call back</button>
            <img src={GroupImg} alt='group' className='group-img group-img-programDetails' />
    </div>
    {showPopup && <GetInTouchPopUp onClose={togglePopup} />}
    
    </>
  )
}
