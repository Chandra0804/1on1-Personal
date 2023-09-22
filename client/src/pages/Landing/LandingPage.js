import React,{useState} from 'react'
import HeroSection from './components/heroSection';
import MissionSection from './components/missionSection';
import Navbar from '../CommonComponents/components/navbar'
import Footer from '../CommonComponents/components/footer'
// import PopularCourses from './components/popularCourses';
import WhyJoinUsSection from './components/whyJoinUsSection';
import Services from './components/services';
// import ApplicationSection from './components/applicationSection';
import Benefits from './components/benefits';
import Faq from './components/faq';
import Testimonials from './components/testimonials';
import SimpleStepsSection from './components/simpleStepsSection';
import FloatingButton from '../CommonComponents/components/floatingButton';
import PopularPrograms from './components/popularPrograms'

export default function LandingPage() {

  return (
    <div className='Landing-Page'>
      <Navbar/>

      <HeroSection/>
      <MissionSection/>
      <WhyJoinUsSection/>
      {/* <PopularCourses/> */}
      <PopularPrograms/>
      <SimpleStepsSection/>
      <Benefits/>
      <Services/>
      <Testimonials/>
      {/* <ApplicationSection/> */}
      <Faq/>
      <Footer/>
      <FloatingButton/>
    </div>
  )
}
