import React from 'react'
import '../styles/programDetailsCourseHighlights.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay, faBook, faComments, faGear, faCertificate, faPeopleGroup, faLifeRing, faUser, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

export default function ProgramDetailsCourseHighlights() {

    const highlightsData = [
        {
            title: 'Live Classes',
            subtitle: 'Best Learning Experience',
            icon: faCirclePlay
        },
        {
            title: 'Assignments',
            subtitle: 'Practical Preparation',
            icon: faBook
        },
        {
            title: 'Live Doubt Session',
            subtitle: 'Gain a crystal clear understanding',
            icon: faComments
        },
        {
            title: 'Projects',
            subtitle: 'Hands on Development',
            icon: faGear
        },
        {
            title: 'Certificate',
            subtitle: 'Industry Recognized Certificate',
            icon: faCertificate
        },
        {
            title: 'Community Learning',
            subtitle: 'Peer to Peer Interaction',
            icon: faPeopleGroup
        },
        {
            title: 'Hands on Experience',
            subtitle: 'Conceptual Learning Through Projects',
            icon: faLifeRing
        },
        {
            title: 'Get Job-Ready Portfolio',
            subtitle: 'Resume, Github, Linkedin',
            icon: faUser
        },
        {
            title: 'Interview Preparation',
            subtitle: 'Ace your interviews with us',
            icon: faGraduationCap
        }
    ]
    return (
        <div className='program-highlights'>
            <h1>Course Highlights</h1>
            <div className='highlights-grid'>
                {highlightsData.map((card, index) => (
                    <div className='highlight-card' key={index}>
                        <div className='highlight-icon-container'>
                            <FontAwesomeIcon icon={card.icon} className='highlight-icon'/>
                        </div>
                        <div className='highlight-details-container'>
                            <h3>{card.title}</h3>
                            <p>{card.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
