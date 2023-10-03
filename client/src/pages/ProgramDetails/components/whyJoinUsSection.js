import React from 'react';
import '../styles/whyJoinUsSection.css';
import JoinCard1 from '../assets/JoinCard1.png';
import JoinCard2 from '../assets/JoinCard2.png';
import JoinCard3 from '../assets/JoinCard3.png';
import JoinCard4 from '../assets/JoinCard4.png';
import JoinCard5 from '../assets/JoinCard5.png';
import JoinCard6 from '../assets/JoinCard6.png';
import WhyJoinUsCard from './whyJoinUsCard';
import { faUser, faClock, faChalkboard, faIdCard, faCrosshairs, faLightbulb } from '@fortawesome/free-solid-svg-icons'; 

export default function WhyJoinUsSection() {
    const cardData = [
        {
            title: "1 on 1 Teaching",
            description: "Teachers adapt thier instructional strategies to suit the student's preferred learning style, making the learning experience more engaging and effective.",
            imagesrc: JoinCard1,
            icon: faUser
        },
        {
            title: "Efficient use of Time",
            description: "Students value the optimized learning process that maximizes their time, ensuring efficient progress without unnecessary delays.",
            imagesrc: JoinCard2,
            icon: faClock
        },
        {
            title: "Customized Course Plan",
            description: "Customized course plans that cater to each student's specific needs, and goals, ensuring a learning journey that aligns perfectly with their aspirations.",
            imagesrc: JoinCard3,
            icon: faChalkboard
        },
        {
            title: "Professional Profile",
            description: "Our courses provide valuable insights and practical knowledge, helping students build a strong professional profile that enhances their career prospects.",
            imagesrc: JoinCard4,
            icon: faIdCard
        },
        {
            title: "Progress Tracking",
            description: "We track and monitor students progress, providing valuable feedback and insights to ensure continous improvement and achievement of learning objectives.",
            imagesrc: JoinCard5,
            icon: faCrosshairs
        },
        {
            title: "Personalized Attention",
            description: "Our dedicated instructor's provide personalized attention and support, addressing each student's unique challenges and strengths.",
            imagesrc: JoinCard6,
            icon: faLightbulb
        },
    ];
    return (
        <div className='center-container'>
            <h1 className='shining-text'>
                <span className='shining-animation'>Why <strong>Students Join</strong> Us</span>
            </h1>
            <div className='joinUs-section'>
                {cardData.map((card, index) => (
                    <WhyJoinUsCard
                        title={card.title}
                        imgsrc={card.imagesrc}
                        description={card.description}
                        key={index}
                        icon={card.icon}
                    />
                ))}
            </div>
        </div>
    );
}
