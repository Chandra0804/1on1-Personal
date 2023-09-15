import React,{useState} from 'react'
import { useLocation } from 'react-router-dom'; 
// import { useParams } from 'react-router-dom';

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
import Testimonials from './components/testimonials'
import CertifiedTraining from './components/certifiedTraining'
import ProgramDetailsSkills from './components/programDetailsSkills'
import ProgramDetailsSimpleSteps from './components/programDetailsSimpleSteps'
import ProgramDetailsRoadmap from './components/programDetailsRoadmap';
// import axios from 'axios';
// import RouteUrl from '../Routes/Routes';
import data from './assets/json_data/program_details_info_in_json.json'
import { program } from '@babel/types'


export default function ProgramDetails() {
  // const { title } = useParams();
  const location = useLocation(); // Use useLocation hook to access location object
  const { title, courseDuration } = location.state || {}; // Destructure title and courseDuration from location.state

  // Ensure title and courseDuration have default values if not provided
  const props = {
    title: title || 'Default Title',
    courseDuration: courseDuration || 'Default Course Duration',
  };

  const [programDetails, setProgramDetails] = useState(data[props.title][0]);

  // const [validate,setValidate] = useState(0);
  // console.log("Data[0]" );
  // console.log(data['0'])

  // console.log(programDetails);

  return (
    <>
    {
      // validate>0
      // ?
      <div className='program-details-page'>
       <Navbar/> 
      <ProgramDetailsHero title={props.title} name={props.title} courseDuration={props.courseDuration} programimg={programDetails.program_banner_images}/>
      <ProgramDetailsCourseHighlights/> 
      <ProgramDetailsSkills skillsArr={programDetails.skills_images}/>
      <CareerPaths isCourseDetails={false} careeroptions = {programDetails.career_options}/>
      <CertifiedTraining/>
      <ProgramDetailsRoadmap roadmap={programDetails.modules}/>
      <ProgramDetailsPricing/>
       <ProgramDetailsSimpleSteps/>
      <WhyJoinUsSection/>
      {/* <PorgramDetailsTestimonials testimonials={programDetails.testimonials}/> */}
      <Testimonials/>
      <Benefits/>
      <Faq faq={programDetails.faq}/>
      <Footer/>
    </div>
    // :""
    }
    </>
  )
}
