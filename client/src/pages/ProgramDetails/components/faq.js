import { React, useState , useEffect } from 'react'
import '../styles/faq.css'
import BrainImg from '../assets/brain.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowUp, faCircleArrowDown, faQuestion } from '@fortawesome/free-solid-svg-icons';
import GirlImg from '../assets/Group 81.png'
import faqImg from '../assets/Group 72.png'

export default function Faq(props) {

    let qna = [
        {
            question: 'What is 1-on-1 Teaching Friend platform?',
            answer: 'The 1-on-1 Teaching Friend platform is a platform where a teacher and a student can have personalized and customized learning experience with a one-to-one interaction.'
        },
        {
            question: 'How do I schedule a one-on-one class with a teacher?',
            answer: 'You can schedule a one-on-one class by choosing a time that works for you and the teacher.'
        },
        {
            question: 'How long is each one-on-one class?',
            answer: 'Each one-on-one class is typically 45-60 minutes long, but the duration can be customized based on the student\'s needs.'
        },
        {
            question: 'What technology or equipment do I need to have to take Teaching Friend classes on this platform?',
            answer: 'You will need a computer/laptop with an internet connection and a webcam. You may also need a headset or microphone for better audio quality.'
        },
        {
            question: 'Can I cancel or reschedule a one-on-one class?',
            answer: 'Yes, you can cancel or reschedule a one-on-one class, but please make sure to do so at least 24 hours before the scheduled start time.'
        }
    ];

    if(props.faq){
        qna = props.faq
    }

    const [activeIndex, setActiveIndex] = useState(null);
    const [sectionEntered, setSectionEntered] = useState(false);

    useEffect(() => {
        const options = {
            root: null, // Use the viewport as the root
            rootMargin: '0px',
            threshold: 0.5, // Trigger when 50% of the section is visible
        };

        const observer = new IntersectionObserver((entries) => {
            const [entry] = entries;
            if (entry.isIntersecting) {
                setSectionEntered(true);
                observer.unobserve(entry.target);
            }
        }, options);

        const faqSection = document.querySelector('.faq-section');
        if (faqSection) {
            observer.observe(faqSection);
        }

        return () => {
            if (faqSection) {
                observer.unobserve(faqSection);
            }
        };
    }, []);

    const toggleAnswer = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    return (
        <div className={`faq-section ${sectionEntered ? 'section-entered' : ''}`}>
            <div className='faq-heading'>
                <img src={BrainImg} className='faq-brain-img' alt='brain-img' />
                <p><span className='faq-text'>F</span>requently <span className='faq-text'>A</span>sked <span className='faq-text'>Q</span>uestions</p>
            </div>
            <div className='faq-main-container'>
                <div className='faq-left-container'>
                    {qna.map((item, index) => (
                        <div
                            key={index}
                            className={`faq-box ${activeIndex === index ? 'active' : ''}`}
                            onClick={() => toggleAnswer(index)}
                        >
                            <div className='faq-question'>
                                <FontAwesomeIcon icon={faQuestion} className='question-icon' />
                                <div className='question-container'>
                                    <p>{item.question}</p>
                                    {activeIndex === index && (
                                        <div className='faq-answer'>{item.answer}</div>
                                    )}
                                </div>
                                <div className='dropdown-arrow'>
                                    <FontAwesomeIcon
                                        icon={activeIndex === index ? faCircleArrowUp : faCircleArrowDown}
                                        className='faq-arrow-icon'
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='faq-right-container'>
                    <div className='faq-image1-container'>
                        <img src={GirlImg} alt='girl'/>
                    </div>
                    <div className='faq-image2-container'>
                        <img src={faqImg} alt='faq'/>
                    </div>
                    
                    <div className='faq-orange-circle'></div>
                    <div className='faq-black-circle'></div>
                </div>
            </div>
        </div>
    )
}
