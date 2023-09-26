import React , {useState} from 'react'
import Navbar from '../CommonComponents/components/navbar'
import Footer from '../CommonComponents/components/footer'
import HireTalentHeroImg from './assets/Hire Talent Hero BG.png'
import './styles/hireTalent.css'
import HireTalentBG from './assets/Group 833.png'
import FrameImg from './assets/Frame 3980.png'
import Popup from './components/hireTalentPopUp'
import FloatingButton from '../CommonComponents/components/floatingButton';

export default function HireTalent() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className='Hire-Talent-Page'>
      <Navbar />
      <div className='hire-talent-hero'>
        <div className='hire-talent-heroLeft'>
          <p className='hire-talent-blackText'>TRUSTED AND HANDPICKED</p>
          <h1>We Connect companies<br />with <span className='orange-text'>incredible Professionals</span></h1>
          <p className='hire-talent-grey-text'>Empowering Recruiters to Discover and Connect with Exceptional Talent for Success</p>
          <button onClick={openPopup}>Hire Talent</button>
        </div>
        <div className='hire-talent-heroRight'>
          <img src={HireTalentHeroImg} alt='hire-talent-hero' />
        </div>
      </div>
      <div className='why-1-on-1-platform-section'>
        <p>Why <span className='orange-text'>1 on 1 </span>Platform</p>
        <div className='hire-talent-bg'>
          <img src={HireTalentBG} alt='hire-talent-bg' />
        </div>
        <div className='why-1-on-1-platform-container'>
          <div className='why-platform-left-container'>
            <img src={FrameImg} alt='Frame'/>
          </div>
          <div className='why-platform-right-container'>
            <p>Discover a competitve edge in your recruitment process with our platform. At 1 on 1 Teaching Friend Technologies , we specialize in connecting employers with the finest, skillfully trained students. Our mission is to simplify and enhance your hiring experiences, ensuring that you receive top-tier-talent to meet your organization's needs. Through our platform, you'll gain access to a pool of exceptional students who have undergone vigorous training and are well-prepared to excel in your industry. Join us today and let us help you find the perfect match for your company's success.</p>
          </div>
        </div>
      </div>
      {isPopupOpen && <Popup onClose={closePopup} />}
      <FloatingButton/>
      <Footer isFooterPart1={true}/>
    </div>
  )
}
