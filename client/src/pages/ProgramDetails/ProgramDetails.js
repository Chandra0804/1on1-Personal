import React,{useState , useEffect} from 'react'
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
import FloatingButton from '../CommonComponents/components/floatingButton';
// import axios from 'axios';
// import RouteUrl from '../Routes/Routes';
import data from './assets/json_data/program_details_info_in_json.json'


export default function ProgramDetails() {
  const location = useLocation();
  const { title, courseDuration } = location.state;
  const [programDetails, setProgramDetails] = useState(data[title][0]);

  // Function to fetch program details based on title
  const fetchProgramDetails = (programTitle) => {
    setProgramDetails(data[programTitle][0]);
  };

  // useEffect to scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle link click to update program details
  useEffect(() => {
    // Call the function to fetch program details when title changes
    fetchProgramDetails(title);
    window.scrollTo(0, 0);
  }, [title]);

  return (
    <>
    {
      // validate>0
      // ?
      <div className='program-details-page'>
       <Navbar/> 
      <ProgramDetailsHero title={title} name={title} courseDuration={courseDuration} programimg={programDetails.program_banner_images} bannerbackground = {programDetails.background_color}/>
      <ProgramDetailsCourseHighlights/> 
      <ProgramDetailsSkills skillsArr={programDetails.skills_images}/>
      <CareerPaths isCourseDetails={false} careeroptions = {programDetails.career_options}/>
      <CertifiedTraining/>
      <ProgramDetailsRoadmap roadmap={programDetails.modules}/>
      {/* <ProgramDetailsPricing/> */}
       <ProgramDetailsSimpleSteps/>
      <WhyJoinUsSection/>
      {/* <PorgramDetailsTestimonials testimonials={programDetails.testimonials}/> */}
      <Testimonials/>
      <Benefits/>
      <Faq faq={programDetails.faq}/>
      <FloatingButton/>
      <Footer/>
    </div>
    // :""
    }
    </>
  )
}