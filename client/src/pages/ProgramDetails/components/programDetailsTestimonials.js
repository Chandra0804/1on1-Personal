import { React, useState } from 'react';
import '../styles/programDetailsTestimonial.css';

import userImage from '../assets/Testimonoal Image.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faQuoteLeft , faQuoteRight , faStar, faCarSide } from '@fortawesome/free-solid-svg-icons';


// [
//     {
//         userName: 'Marry Welsom',
//         text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed at semper purus, a commodo lectus. Nullam vel nunc vel justosagittis gravida id vel metus',
//         userImg: userImage
//     },
//     {
//         userName: 'Marry Welsom2',
//         text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed at semper purus, a commodo lectus. Nullam vel nunc vel justosagittis gravida id vel metus',
//         userImg: userImage
//     }
// ]


const PorgramDetailsTestimonials = (props) => {

    const TestimonialCardData = props.testimonials;

    const [currentCard, setCurrentCard] = useState(0);

    const handleLeftClick = () => {
        setCurrentCard((prevCard) => (prevCard === 0 ? TestimonialCardData.length - 1 : prevCard - 1));
    };

    const handleRightClick = () => {
        setCurrentCard((prevCard) => (prevCard === TestimonialCardData.length - 1 ? 0 : prevCard + 1));
    };

    return (
        <div className="testimonial-section">
            <h1>Testimonials</h1>
            <div className='testimonial-container'>
                <div className="program-details-testimonials-arrow program-details-left-arrow" onClick={handleLeftClick}>
                    <FontAwesomeIcon icon={faChevronLeft}/>
                </div>
                <div className='program-details-testimonial-cards' style={{ '--currentCard': currentCard }}>
                    {TestimonialCardData.map((card, index) => (
                        <div className='program-details-testimonial-card'>
                            <div className='user-info'>
                                <img src={card.img} alt="User" className="user-image" />
                                <p className="user-name">{card.name}</p>
                            </div>
                            <div className='testimonial-text'>
                                <FontAwesomeIcon icon={faQuoteLeft} className='qoute-icon-left'/>
                                <p>{card.testimonial}</p>
                                <div className='program-details-testimonials-icons'>
                                    <FontAwesomeIcon icon={faStar} style={{color:"#ff7a01"}}/>
                                    <FontAwesomeIcon icon={faStar} style={{color:"#ff7a01"}}/>
                                    <FontAwesomeIcon icon={faStar} style={{color:"#ff7a01"}}/>
                                    <FontAwesomeIcon icon={faStar} style={{color:"#ff7a01"}}/>
                                </div>
                                <FontAwesomeIcon icon={faQuoteRight} className='qoute-icon-right'/>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="program-details-testimonials-arrow program-details-right-arrow"onClick={handleRightClick}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </div>
            </div>
        </div>
    );
};

export default PorgramDetailsTestimonials;