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
          <p className='hire-talent-blackText'>Trusted and Handpicked</p>
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
            <p>"At <span className='orange-text ot-hire'>1 on 1 Teaching Friend Technologies</span>, we're here to give your recruitment process a competitive edge. We specialize in bridging the gap between employers and highly skilled, well-trained students. Our mission is to streamline and elevate your hiring process, ensuring that you connect with top-tier talent to fulfill your organization's needs. With our platform, you'll tap into a diverse pool of <b>exceptional students</b> who have undergone rigorous training, equipping them to thrive in your industry. Join us today, and together, we can find the perfect match for your <b>company's success</b>."</p>
          </div>
        </div>
      </div>
      {isPopupOpen && <Popup onClose={closePopup} />}
      <FloatingButton/>
      <Footer isFooterPart1={true}/>
    </div>
  )
}
