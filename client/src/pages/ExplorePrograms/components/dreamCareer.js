import React from 'react'
import '../styles/dreamCareer.css'
import ReadingImg from '../assets/Reading.png'
import UnityImg from '../assets/Unity.png'
import WinnerImg from '../assets/Winner.png'

export default function DreamCareer() {
    return (
        <div className='dreamCareer-section'>
            <div className='dream-career-top'>
                <h1>Giving a Start to your <span className='orange-text'>Dream Career</span></h1>
                <p>Real success requires the right skillset. Through our online programs, you too can give wings to your dreams.</p>
            </div>
            <div className='dream-career-bottom'>
                <div className='dream-image-container'>
                    <img className="image" src={ReadingImg} alt='Reading' />
                    <h3>Practical Content</h3>
                    <p>Hands on Project and Development</p>
                </div>
                <div className='dream-image-container'>
                    <img src={UnityImg} alt='Unity' />
                    <h3>Career Asssistance</h3>
                    <p>1 on 1 Interaction and Expert Guidance</p>
                </div>
                <div className='dream-image-container'>
                    <img src={WinnerImg} alt='winner' />
                    <h3>Certified Value Courses</h3>
                    <p>Valued certificates World Wide</p>
                </div>
            </div>
        </div>
    )
}
