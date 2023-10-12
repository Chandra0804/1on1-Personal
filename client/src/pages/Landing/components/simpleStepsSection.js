import React , { useState, useEffect }from 'react';
import '../styles/simpleStepsSection.css';
// import SimpleStepsCard1 from '../assets/Simple Steps card 1.png';
// import RequestCallCard from '../assets/Request a Call Card.png';
// import CustomizeCourseCard from '../assets/Customize Course Card.png';
// import GroupImg from '../assets/Group.png'
import curveshape from '../assets/Rectangle Overlay.png'
import '../styles/programDetailsSimpleSteps.css'
// import IdentifyCourse from '../assets/Group 170.png'
// import CustomizeCourse from '../assets/Group 810.png'
// import RequestCall from '../assets/Group 850.png'
import ProgramDetailsSimpleSteps from './programDetailsSimpleSteps';

export default function SimpleStepsSection() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const updateWindowWidth = () => {
        setWindowWidth(window.innerWidth);
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
        <div className='simpleSteps-section'>
            {/* <h2><span className='shining-animation'>Begin Acquiring Your Skill</span><br/> in <span className='orange-text'>Simple Steps</span></h2> */}
            <div className="svg-container">
                <img src={curveshape} alt='curve-shape'/>
            </div>
            
            <ProgramDetailsSimpleSteps/>




            {/* <div className="svg-container reversed-image">
                <img src={curveshape} alt='curve-shape'/>
            </div> */}
        </div>
    );
}
