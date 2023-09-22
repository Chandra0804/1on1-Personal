import React from 'react'
import Navbar from '../CommonComponents/components/navbar'
import Footer from '../CommonComponents/components/footer'
import AboutUsImg from './assets/About us Image.png'
import './styles/aboutus.css'
import FloatingButton from '../CommonComponents/components/floatingButton';

export default function AboutUs() {
  return (
    <div className='about-us-page'>
      <Navbar/>
      <div className='about-us-hero'>
        <div className='about-us-left'>
            <img src={AboutUsImg} alt='about-us'/>
        </div>
        <div className='about-us-right'>
            <h1><span className='orange-text'>1 on 1</span> Teaching Friend</h1>
            <p>Our main goal is to provide excellent education through high-quality teaching. We keep track of your progress and provide real-world experiences to enrich your learning. We help you achieve your goals with ease by customizing the course for you. We aim to help you learn essential skills without spending excessive time, ensuring your learning experience is efficient and effective</p>
        </div>
      </div>
      <FloatingButton/>
      <Footer/>
    </div>
  )
}
