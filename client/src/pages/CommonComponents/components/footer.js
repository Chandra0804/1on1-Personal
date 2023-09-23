import React , {useState} from 'react'
import '../styles/footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import data from '../assets/json_data/program_details_info_in_json.json'
import { Link } from 'react-router-dom';
import Footerlogo from '../assets/FooterLogo.png'

const FooterPartOne = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const response = await fetch("https://v1.nocodeapi.com/chandra/google_sheets/tFxcQEOnfQbnrjgP?tabId=SubscribeForm",{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify([
          [
            email,
            new Date().toLocaleString()
          ]
        ])
      })
      await response.json();
      console.log("Form Submitted succesfully",response.data);
      setEmail('');
    }
    catch(error){
      console.error("Error submitting form",error);
    }
  };

  return (
    <div className='footer-part1'>
      <p>Subscribe our Newsletter For Latest Updates!</p>
      <form className='subscribe-form' onSubmit={handleSubmit}>
        <input
          type='email'
          placeholder='Enter your Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className='subscribe-button'>Subscribe</button>
      </form>
    </div>
  );
};


export default function Footer({ isFooterPart1 }) {
  {data.map((dataelement)=>(
    console.log(dataelement.title)
  ))}

  return (
    <div className='footer-section'>
      {!isFooterPart1 ? <FooterPartOne /> : ''}
      <div className='footer-part2'>
        <div className='footer-part2-main'>
          <div className='footer-part2-left'>
            <img src={Footerlogo} alt='footer-logo' />
            <h1>1 on 1 Teaching Friend Technologies</h1>
            <p>Our main goal is to provide excellent education through high-quality teaching. We keep track of your progress and provide real-world experiences to enrich your learning. We aim to help you learn essential skills without spending excessive time, ensuring your learning experience is efficient and effective</p>
          </div>
          <div className='footer-part2-right'>
            <h2>Placement Programs</h2>
            <div className='footer-program-links'>
              {data.map((dataelement, index) => (
                <Link
                  to='/programdetails'
                  state={{ title: dataelement.title, courseDuration: dataelement.period }}
                >
                  <p>{dataelement.title}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className='social-icons'>
                <FontAwesomeIcon icon={faLinkedin}/>
                <FontAwesomeIcon icon={faFacebook}/>
                <FontAwesomeIcon icon={faInstagram}/>
                <FontAwesomeIcon icon={faTwitter}/>
                <FontAwesomeIcon icon={faYoutube}/>
              </div>
      </div>
      <div className='footer-part3'>
        <p>Copyright 2023 1 on 1 Teaching Friend Technologies Theme | All Rights Reserved</p>
      </div>
    </div>
  )
}
