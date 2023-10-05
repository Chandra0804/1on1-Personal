import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import ExploreCourses from './pages/ExploreCourses';
import LandingPage from './pages/Landing/LandingPage';
import ExplorePrograms from './pages/ExplorePrograms/ExplorePrograms';
import ProgramDetails from './pages/ProgramDetails/ProgramDetails';
import HireTalent from './pages/HireTalent/HireTalent';
// import CourseDetails from './pages/CourseDetails'
import BecomeATutor from './pages/BecomeATutor/BecomeATutor';
import ContactUs from './pages/ContactUs/ContactUs'
import AboutUs from './pages/AboutUs/AboutUs';
import Demo from './pages/demo'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* <Route path="/explorecourses" element={<ExploreCourses />} /> */}
          <Route path="/exploreprograms" element={<ExplorePrograms />} />
          <Route path='/programdetails' element={<ProgramDetails/>} />
          <Route path='/hiretalent' element={<HireTalent/>}/>
          {/* <Route path='/coursedetails/:search' element={<CourseDetails/>}/> */}
          <Route path='/becomeATutor' element={<BecomeATutor />} />
          <Route path='/contactus' element={<ContactUs/>} />
          <Route path='/aboutus' element={<AboutUs/>} />
          <Route path='/demo' element={<Demo/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
