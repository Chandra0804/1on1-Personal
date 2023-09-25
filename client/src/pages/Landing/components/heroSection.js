import React, { useEffect, useRef } from 'react';
import '../styles/heroSection.css';
import Hero1 from '../assets/Home-Hero (1).png';
import Hero2 from '../assets/Home-Hero (2).png';
import NavigationArrow from '../assets/Navigating Arrow.png'
import { Link } from 'react-router-dom';

export default function HeroSection() {
    const animatedTextRef = useRef();

    useEffect(() => {
        const text = "1-on-1";
        const delay = 200;

        let charIndex = 0;
        let reverse = false;

        const animateText = () => {
            const animatedText = animatedTextRef.current;
            if(animatedTextRef.current != null) {animatedText.textContent =
                text.slice(0, charIndex + (reverse ? 0 : 1)) +
                "|";

            charIndex += reverse ? -1 : 1;
            }

            if (charIndex >= text.length || charIndex <= 0) reverse = !reverse;
            setTimeout(animateText, delay);
        };

        animateText();
    }, []);

    return (
        <section className='hero-section-wrapper'>
            <div className='navigation-arrow-wrapper'>
                <img src={NavigationArrow} alt='navigatior' className='navigation-arrow' />
            </div>
            <div className="home-section">
                <div className="left-content">
                    <div className='text-wrapper'>
                        <p>100% Satisfaction Guarantee</p>
                        <h1 className='large-text'>
                            Experience Top-Quality<br />Education With Personalized</h1>
                        <h1><span ref={animatedTextRef} className="animated-text"></span> Online
                            Tutoring
                        </h1>
                    </div>
                    <div className='bottom-text'>
                        <p>
                            Get quality world-class courses at the best price and learn any new
                            skill from our expert mentors.
                        </p>
                    </div>
                    <div className='buttons-wrapper'>
                        <Link to="/exploreprograms">
                            <button className='course-button'>Exclusive Programs</button>
                        </Link>
                        
                        {/* <button className='course-button'>Placement Courses</button> */}
                    </div>
                </div>
                <div className="right-content">
                    <img src={Hero1} alt="Hero1" className="hero1-image" />
                    <img src={Hero2} alt="Hero2" className="hero2-image" />
                </div>
                <div className="circle-shape top-left"></div>
                <div className="circle-shape top-right"></div>
                <div className='circle-shape middle'></div>
                <div className="circle-shape half-circle"></div>
            </div>
        </section>

    );
}
