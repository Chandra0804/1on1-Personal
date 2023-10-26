import React from 'react'
import Navbar from '../CommonComponents/components/navbar'
import Footer from '../CommonComponents/components/footer'
import Testimonials from './components/testimonials'
import PlacementPrograms from './components/placementPrograms'
import ExploreProgramsHero from './components/exploreProgramsHero'
import DreamCareer from './components/dreamCareer'
import Services from './components/services'
import Benefits from './components/benefits'
import FloatingButton from '../CommonComponents/components/floatingButton';

export default function ExplorePrograms() {
  return (
    <div className='explore-programs-page'>
      <Navbar/>
      <ExploreProgramsHero/>
      <PlacementPrograms/>
      <DreamCareer/>
      <Services/>
      <Testimonials/>
      <Benefits/>
      <FloatingButton/>
      <Footer/>
    </div>
  )
}
