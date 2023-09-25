import React from 'react'
import '../styles/exploreProgramsHero.css'
import exploreProgramsHero from '../assets/ExploreProgramsHero.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export default function ExploreProgramsHero() {
  return (
    <div className='explore-programs-heroSection'>
      <div className='explore-programs-heroTop'>
        <div className='explore-programs-heroLeft'>
          <p className='placement-guarantee-blackText'>Placement Guarantee Courses</p>
          <h1>Unlocking your Dream Job:<br /><span className='orange-text'>Expert Placement Training</span></h1>
          <p className='placement-grey-text'>Unleash Your Potential, Build Interview Confidence, and Secure Your Dream Job with Our Proven Strategies and Interview Mastery Program</p>
          <button>Explore Programs</button>
        </div>
        <div className='explore-programs-heroRight'>
          <img src={exploreProgramsHero} alt='explore programs hero' />
        </div>
      </div>
      <div className='explore-programs-heroBottom'>
        <div className='herobottom-highlights'>
          <span className='check-icon'><FontAwesomeIcon icon={faCheck} /></span>
          <p>Guarantee Placement</p>
        </div>
        <div className='herobottom-highlights'>
          <span className='check-icon'><FontAwesomeIcon icon={faCheck} /></span>
          <p>Job ready</p>
        </div >
        <div className='herobottom-highlights'>
          <span className='check-icon'><FontAwesomeIcon icon={faCheck} /></span>
          <p>1 on 1 Interaction</p>
        </div>
        <div className='herobottom-highlights'>
          <span className='check-icon'><FontAwesomeIcon icon={faCheck} /></span>
          <p> Live Projects</p>
        </div>
      </div>
    </div>
  )
}