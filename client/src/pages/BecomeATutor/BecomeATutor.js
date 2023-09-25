import Footer from "../CommonComponents/components/footer";
import Navbar from "../CommonComponents/components/navbar";
import './styles/BecomeATutor.css'
import WantTutor from './assets/image 190.png'
import BackgroudnDoodle from './assets/Group 817.png'
import WorkIcon from './assets/mdi_work-outline.png'
import MdiTeach from './assets/mdi_teach.png'
import GlobeIcon from './assets/healthicons_global-pandemic-outline.png'
import BulbIcon from './assets/teenyicons_bulb-on-outline.png'
import AirplaneIcon from './assets/material-symbols_travel.png'
import CircleTick from './assets/charm_circle-tick.png'
import TutorLeftImg from './assets/image 246.png'
import LeafImg from './assets/Group 869.png'
import React, {useRef} from 'react';
import BecomeATutorForm from "./components/BecomeATutorForm"
import FloatingButton from '../CommonComponents/components/floatingButton';

const dreamCareerList = [
    'Application Shortlisting', 'Video Interviews', 'Interview Assessments', 'Background Verification', 'Onboarding'
];

export default function BecomeATutor() {
    const formRef = useRef(null);

    const scrollToForm = () => {
        if (formRef.current) {
            formRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div className="BecomeATuttor-main">
            <Navbar />
            <div className="become-tutor-container">
                <div className="BecomeATutor-heroSection">
                    <div className="background-doodle">
                        <img src={BackgroudnDoodle} alt="background-doodle" />
                    </div>
                    <div className="become-tutor-heroImg">
                        <img src={WantTutor} alt="want-tutor" />
                    </div>
                    <div className="become-tutor-right-container">
                        <div className="become-tutor-para-hero">
                            <h1>Want to Become a <span className="become-tutor-orange-text">Teaching Friend?</span></h1>
                            <p>Join our Community of Educators and Make a Difference</p>
                        </div>
                        <div className="become-tutor-hero-button">
                            <button onClick={scrollToForm}>Apply Now</button>
                        </div>
                    </div>
                </div>
                <div className="become-tutor-list">
                    <div className="list-container">
                        <img src={WorkIcon} alt="work-icon" />
                        <h2>Work Life Balance</h2>
                    </div>
                    <div className="list-container">
                        <img src={MdiTeach} alt="work-icon" />
                        <h2>Innovative Teaching</h2>
                    </div>
                    <div className="list-container">
                        <img src={GlobeIcon} alt="work-icon" />
                        <h2>Global Perspective</h2>
                    </div>
                    <div className="list-container">
                        <img src={BulbIcon} alt="work-icon" />
                        <h2>Empowerment</h2>
                    </div>
                    <div className="list-container">
                        <img src={AirplaneIcon} alt="work-icon" />
                        <h2>Reduced Travel</h2>
                    </div>
                </div>
            </div>
            <div className="tutor-container">
                <div className="tutor-left-container">
                    <div className="tutor-left-top-container">
                        <p>Submit your application and open doors to your dream Career</p>
                        <p className="tutor-exp">Must have experience of <span> 2+ years </span></p>
                        <div className="tutor-left-list">
                            {dreamCareerList.map((listText) => (
                                <div className="tutor-list-item">
                                    <img src={CircleTick} alt="circle-tick" />
                                    <p>{listText}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="tutor-left-bottom-container">
                        <img src={TutorLeftImg} alt="tutor-left-containerImage" />
                        <div className="leaf-background">
                            <img src={LeafImg} alt="leaf-img" />
                        </div>
                    </div>
                </div>
                <div id="becomeatutor-form-pointer" ref={formRef}>
                    <BecomeATutorForm />
                </div>
            </div >
            <FloatingButton/>
            <Footer />
        </div >
    )
}
