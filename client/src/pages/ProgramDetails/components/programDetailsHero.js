import React from 'react'
import '../styles/programDetailsHero.css'
import ProgramHero from '../assets/Hero Image.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

export default function ProgramDetailsHero(props) {
  return (
    <div className='program-details-hero-section' style={{ "background-color": props.bannerbackground }}>
      <div className='program-details-heroLeft laptop'>
        <p className='text1'>Placement Guarantee <span><FontAwesomeIcon icon={faCheckCircle} /></span></p>
        <h1>{props.name}<br /><span className='yellow-text'>Placement Program</span></h1>
        <p className='text2'>| Get Guaranteed Placement Opportunities</p>
        <p className='text3'>{props.courseDuration} | Full-time Online Classroom format | guaranteed* placement opportunities</p>
        <p className='text4'>*Upon successful program completion</p>
        <div className='program-details-hero-button-container'>
          <button className='apply-button'>Apply Now</button>
          <button className='download-button'>Download Syllabus</button>
        </div>
      </div>
      <div className='program-details-heroRight laptop'>
        <img src={props.programimg} alt='program-hero' />
      </div>
      <div className='program-details-heroLeft mobile'>
        <p className='text1'>Placement Guarantee <span><FontAwesomeIcon icon={faCheckCircle} /></span></p>
        <h1>{props.name}<br /><span className='yellow-text'>Placement Program</span></h1>
        <p className='text2'>| Get Guaranteed Placement Opportunities</p>
        <p className='text3'>{props.courseDuration} | Full-time Online Classroom format | guaranteed* placement opportunities</p>
        <p className='text4'>*Upon successful program completion</p>
        <div className='program-details-heroRight mobile'>
          <img src={props.programimg} alt='program-hero' />
        </div>
      </div>
      <div className='program-details-hero-button-container mobile'>
        <button className='apply-button'>Apply Now</button>
        <button className='download-button'>Download Syllabus</button>
      </div>
    </div>
  )
}
