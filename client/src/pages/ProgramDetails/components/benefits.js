// Import necessary dependencies and assets
import React from 'react';
import '../styles/benefits.css';
import benf from '../assets/Group 928.png';
import benf2 from '../assets/Shooting star.png';
import whiteimg from '../assets/Group 161.png';
import { faThumbtack } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Define the Benefits component
export default function Benefits() {

    // Array of benefit points
    const points = [
        'Flexibility and Adaptability',
        'Individualized support and guidance',
        'Instant correction and reinforcement',
        'Better understanding and retention',
        'Focuses on specific needs and goals',
        'Active participation and interaction'
    ];

    // Render the Benefits section
    return (
        <div className='benefits-section'>
            <div className='benefits-wrapper'>
                {/* Left container for benefit points */}
                <div className='left-benefits-container'>
                    <h1>Top Benefits of choosing <span className='orange-text'>1-on-1</span></h1>
                    <img src={whiteimg} alt='white dashes' className='white-dashes'/>
                    {/* Mapping through benefit points */}
                    {points.map((text, index) => (
                        <div className='list-item'>
                            <FontAwesomeIcon icon={faThumbtack} className="icon slant-thumbtack" />
                            <p class="benefit" key={index}>{text}</p>
                        </div>
                    ))}
                </div>
                {/* Right container for additional content */}
                <div className='right-benefit-container'>
                    <div className="highlight"><span className="orange-text pop" style={{"fontSize":"20px"}}>1000 +</span>Experts Connected to us to drive your success</div>
                    <div className='mobile-img-container'>
                        <img src={benf} alt="image2" />
                    </div>
                    <div className='shootingstar-container'>
                        <img src={benf2} alt="shooting-star" />
                    </div>
                </div>
            </div>
        </div>
    )
}
