import React,{useState} from 'react'
import { useParams } from 'react-router-dom';

import Navbar from '../CommonComponents/components/navbar'
import Footer from '../CommonComponents/components/footer'
import ProgramDetailsHero from './components/programDetailsHero'
import ProgramDetailsCourseHighlights from './components/programDetailsCourseHighlights'
import ProgramDetailsPricing from './components/programDetailsPricing'
import WhyJoinUsSection from './components/whyJoinUsSection'

import Benefits from './components/benefits'
import Faq from './components/faq'
import CareerPaths from './components/careerPaths'
import PorgramDetailsTestimonials from './components/programDetailsTestimonials'
import CertifiedTraining from './components/certifiedTraining'
import ProgramDetailsSkills from './components/programDetailsSkills'
import ProgramDetailsSimpleSteps from './components/programDetailsSimpleSteps'
import ProgramDetailsRoadmap from './components/programDetailsRoadmap';
// import axios from 'axios';
// import RouteUrl from '../Routes/Routes';
import data from './assets/json_data/program_details_page.json'


export default function ProgramDetails() {
  const { title } = useParams();
  // console.log(window.location.search.substring(1),' -> title')

  const [programDetails,setProgramDetails] = useState(data['0']);
  // const [validate,setValidate] = useState(0);
  // console.log("Data[0]" );
  // console.log(data['0'])

  return (
    <>
    {
      // validate>0
      // ?
      <div className='program-details-page'>
       <Navbar/> 
      <ProgramDetailsHero title={title} name={programDetails.title} courseDuration={programDetails.courseDuration} placementbgcolor={programDetails.bgcolor} />
      <ProgramDetailsCourseHighlights/> 
      <ProgramDetailsSkills skillsArr={programDetails.skills}/>
      <CareerPaths isCourseDetails={false}/>
      <CertifiedTraining/>
      <ProgramDetailsRoadmap roadmap={programDetails.roadmap}/>
      <ProgramDetailsPricing/>
      <ProgramDetailsSimpleSteps/>
      <WhyJoinUsSection/>
      <PorgramDetailsTestimonials testimonials={programDetails.testimonials}/>
      <Benefits/>
      <Faq faq={programDetails.faq}/>
      <Footer/> 
    </div>
    // :""
    }
    </>
  )
}
