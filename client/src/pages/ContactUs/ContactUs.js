import React, { useState } from 'react';
import './styles/contactus.css';
import Navbar from '../CommonComponents/components/navbar';
import Footer from '../CommonComponents/components/footer';
import ContactHeroImg from './assets/contactusHeroImage.png';
import ContactUsphone from './assets/ContactUsPagephone.png';
import ContactCard1 from './assets/ContactCard1.png';
import ContactCard2 from './assets/ContactCard2.png';
import ContactCard3 from './assets/ContactCard3.png';
import ContactCard4 from './assets/ContactCard4.png'
import ContactUsimage from './assets/Contactusimage.png';
import userName from './assets/image-removebg-preview (4).png';
import purpose from './assets/image-removebg-preview (1).png';
import registeredUserName from './assets/image-removebg-preview (2).png';
import comments from './assets/image-removebg-preview (3).png';
import phonenumber from './assets/image-removebg-preview (5).png';
import FloatingButton from '../CommonComponents/components/floatingButton';
import GetInTouchPopUp from './components/getInTouchPopUp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';


const contactusCardData = [
    {
        img: ContactCard1,
        title: "Getting Started",
        description: "Start on the right foot, not the left or wrong foot"
    },
    {
        img: ContactCard2,
        title: "Community Support",
        description: "Problems can be solved with the help of other users"
    },
    {
        img: ContactCard3,
        title: "FAQ's Made Simpler",
        description: "All you can-eat self-serve problem-solving"
    },
    {
        img: ContactCard4,
        title: "24/7 Availability",
        description: "Our Customer support has 24 hours x 7 Days Availability."
    }
];

const programs = ["Full Stack Developer", "Front-End Developer", "Back-End Developer", "UI/UX Designer", "AI Engineer", "Data Science Engineer", "Python Developer", "Java Developer", "QA Automation Enginner", "DevOps Enginner", "App Developer(Android)", "App Developer(iOS)", "Other"]

export default function ContactUs() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const updateWindowWidth = () => {
        setWindowWidth(window.innerWidth);
      };

    const [showPopup, setShowPopup] = useState(false);
    const togglePopup = () => {
        setShowPopup(!showPopup);
    };
    // Step 2: Create state variables
    const [purposeValue, setPurposeValue] = useState('');
    const [userNameValue, setUserNameValue] = useState('');
    const [registeredUserNameValue, setRegisteredUserNameValue] = useState('');
    const [phoneNumberValue, setPhoneNumberValue] = useState('');
    const [commentsValue, setCommentsValue] = useState('');

    // Step 4: Create a submit handler function
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        try {
            // const response = await axios.post('/api/submitForm', {
            //   name: name.current.value,
            //   phone: phone.current.value,
            // });

            const response = await fetch("https://v1.nocodeapi.com/chandra/google_sheets/tFxcQEOnfQbnrjgP?tabId=ContactForm", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify([
                    [
                        userNameValue, // Get the value from the ref
                        purposeValue,
                        registeredUserNameValue,
                        phoneNumberValue,
                        commentsValue,
                        new Date().toLocaleString()
                    ]
                ])

            });
            await response.json();

            // Handle success, you can display a success message or perform other actions
            console.log('Form submitted successfully', response.data);
            setCommentsValue('');
            setPhoneNumberValue('');
            setRegisteredUserNameValue('');
            setPurposeValue('');
            setUserNameValue('');
        } catch (error) {
            // Handle errors, you can display an error message or perform other error handling
            console.error('Error submitting form', error);
        }


        // Add your logic for handling the form data (e.g., sending it to a server)
    };

    // Step 3: Add onChange event handlers to update state
    const handlePurposeChange = (e) => {
        setPurposeValue(e.target.value);
    };

    const handleUserNameChange = (e) => {
        setUserNameValue(e.target.value);
    };

    const handleRegisteredUserNameChange = (e) => {
        setRegisteredUserNameValue(e.target.value);
    };

    const handlePhoneNumberChange = (e) => {
        setPhoneNumberValue(e.target.value);
    };

    const handleCommentsChange = (e) => {
        setCommentsValue(e.target.value);
    };

    return (
        <>
        <div className='contact-us-page'>
            <Navbar />
            <div className='contact-us-hero-section'>
                <div className='contact-us-heroleft'>
                    <p>Help & Support</p>
                    <h1>How can we help?</h1>
                    <h1 className='quote'><span><FontAwesomeIcon icon={faQuoteLeft}/></span> One Child, One Teacher, One Pen And One Book Can Change The World <span><FontAwesomeIcon icon={faQuoteRight}/></span></h1>
                    <p className='author'>-----Malala Yousafzai</p>
                    {/* <div class="contactus-input-container">
                        <input required="" placeholder="search for answers..." type="text" />
                        <button class="search-btn" type="button">
                            Search
                        </button>
                        
                    </div> */}
                </div>
                <div className='contact-us-heroright'>
                    <img src={ContactHeroImg} alt='contact-hero' />
                </div>
            </div>
            <div className='contact-us-cards-section'>
                <div className='contact-us-cards-top'>
                    <div className='cards-topleft'>
                        <h3>We make you use your wings!</h3>
                        <p>Need help? We've got your back</p>
                    </div>
                    <div className='card-topright'>
                        <button onClick={togglePopup} >Request a Call Back <span><img src={ContactUsphone} alt='contact-us-phone' /></span></button>
                    </div>
                </div>
                <div className='contact-us-cards-bottom'>
                    {contactusCardData.map((card, index) => (
                        <div className='contact-us-card' key={index}>
                            <img src={card.img} alt='contact-us-card-banner' />
                            <h3>{card.title}</h3>
                            <p>{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className='write-to-us-section'>
                <div className='write-to-us-left'>
                    <img src={ContactUsimage} alt='write-to-us' />
                </div>
                <div className='write-to-us-right'>
                    <h1>Write to us</h1>
                    <div className='write-to-us-form-container'>
                        <form className='contactus-form' onSubmit={handleSubmit}>
                            <div className='contactus-row1'>
                                <div className='contactus-purpose'>
                                    <label>Programs</label>
                                    <div className='contactus-input'>
                                        <img src={purpose} alt="Purpose" />
                                        <select
                                            type="select"
                                            value={purposeValue}
                                            onChange={handlePurposeChange}
                                            required
                                        >
                                            <option value=''>Choose Program</option>
                                            {programs.map((program)=>(
                                                <option value={program}>{program}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className='contactus-name'>
                                    <label>Name</label>
                                    <div className='contactus-input'>
                                        <img src={userName} alt="User Name" />
                                        <input
                                            placeholder='Enter Name'
                                            value={userNameValue}
                                            onChange={handleUserNameChange}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='contactus-row2'>
                                <div className='contactus-username'>
                                    <label>Email ID</label>
                                    <div className='contactus-input'>
                                        <img src={registeredUserName} alt="Registered Username" />
                                        <input
                                            type="email"
                                            placeholder='Enter your email'
                                            value={registeredUserNameValue}
                                            onChange={handleRegisteredUserNameChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className='contactus-phno'>
                                    <label>Phone number</label>
                                    <div className='contactus-input'>
                                        <img src={phonenumber} alt="Phone Number" />
                                        <input
                                            type="number"
                                            placeholder='Enter Phone Number'
                                            value={phoneNumberValue}
                                            onChange={handlePhoneNumberChange}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='contactus-comments'>
                                <label>Comments/Details</label>
                                <div className='contactus-input'>
                                    <img src={comments} alt="Comments" />
                                    <textarea
                                        placeholder='Write Something here'
                                        value={commentsValue}
                                        onChange={handleCommentsChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className='contactus-button-container'>
                                <button className='contactus-button' type='submit'>
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <FloatingButton />
            <Footer />
        </div>
        {showPopup && <GetInTouchPopUp onClose={togglePopup} />}
        </>
    );
}
