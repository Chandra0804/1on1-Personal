import React from 'react'
import './styles/contactus.css'
import Navbar from '../CommonComponents/components/navbar'
import Footer from '../CommonComponents/components/footer'
import ContactHeroImg from './assets/contactusHeroImage.png'
import ContactUsphone from './assets/ContactUsPagephone.png'
import ContactCard1 from './assets/ContactCard1.png'
import ContactCard2 from './assets/ContactCard2.png'
import ContactCard3 from './assets/ContactCard3.png'
import ContactUsimage from './assets/Contactusimage.png'
import userName from './assets/image-removebg-preview (4).png'
import purpose from './assets/image-removebg-preview (1).png'
import registeredUserName from './assets/image-removebg-preview (2).png'
import comments from './assets/image-removebg-preview (3).png'
import phonenumber from './assets/image-removebg-preview (5).png'
import FloatingButton from '../CommonComponents/components/floatingButton';


const contactusCardData = [
    {
        img: ContactCard1,
        title: "Getting Started",
        description: "Start of the right foot, not left or wrong foot"
    },
    {
        img: ContactCard2,
        title: "Community Support",
        description: "Problems can be solved with the help of other users"
    },
    {
        img: ContactCard3,
        title: "FAQ's Made Simpler",
        description: "All you can-eat self serve problem solving"
    },
    {
        img: ContactCard3,
        title: "FAQ's Made Simpler",
        description: "All you can-eat self serve problem solving"
    }
]


export default function ContactUs() {

    return (
        <div className='contact-us-page'>
            <Navbar />
            <div className='contact-us-hero-section'>
                <div className='contact-us-heroleft'>
                    <p>Help & Support</p>
                    <h1>How can we help?</h1>
                    <div class="contactus-input-container">
                        <input required="" placeholder="search for answers..." type="text" />
                        <button class="search-btn" type="button">
                            Search
                        </button>
                    </div>
                </div>
                <div className='contact-us-heroright'>
                    <img src={ContactHeroImg} alt='contact-hero' />
                </div>
            </div>
            <div className='contact-us-cards-section'>
                <div className='contact-us-cards-top'>
                    <div className='cards-topleft'>
                        <h3>Need help? We've got your back</h3>
                        <p>Perhaps you can find answers in our collections</p>
                    </div>
                    <div className='card-topright'>
                        <button>Request a Call Back <span><img src={ContactUsphone} alt='contact-us-phone' /></span></button>
                    </div>
                </div>
                <div className='contact-us-cards-bottom'>
                    {contactusCardData.map((card) => (
                        <div className='contact-us-card'>
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
                        <form className='contactus-form'>
                            <div className='contactus-row1'>
                                <div className='contactus-purpose'>
                                    <label>Purpose</label>
                                    <div className='contactus-input'>
                                        <img src={purpose} />
                                        <select placeholder='Choose'>
                                            <option selected="selected">Choose Purpose</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='contactus-name'>
                                    <label>Name</label>
                                    <div className='contactus-input'>
                                        <img src={userName} />
                                        <input placeholder='Enter User Name'></input>
                                    </div>
                                </div>
                            </div>
                            <div className='contactus-row2'>
                                <div className='contactus-username'>
                                    <label>Registered Username</label>
                                    <div className='contactus-input'>
                                        <img src={registeredUserName} />
                                        <input placeholder='Entered Registered user name'></input>
                                    </div>
                                </div>
                                <div className='contactus-phno'>
                                    <label>Phone number</label>
                                    <div className='contactus-input'>
                                        <img src={phonenumber} />
                                        <input placeholder='Enter phone number'></input>
                                    </div>
                                </div>
                            </div>
                            <div className='contactus-comments'>
                                <label>Comments/Details</label>
                                <div className='contactus-input'>
                                    <img src={comments} />
                                    <textarea placeholder='Write Something here'></textarea>
                                </div>
                            </div>
                            <div className='contactus-button-container'>
                                <button className='contactus-button'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <FloatingButton/>
            <Footer />
        </div>
    )
}