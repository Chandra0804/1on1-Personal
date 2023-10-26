import React, { useRef, useState } from 'react';
import '../styles/downloadSyllabusPopup.css';
import 'firebase/compat/auth';

import firebase from 'firebase/compat/app';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';


const firebaseConfig = {
    apiKey: "AIzaSyDZWDhTHWoMj59KS0fzht69gMWLrmUoSvo",
    authDomain: "on1teachingfriend.firebaseapp.com",
    projectId: "on1teachingfriend",
    storageBucket: "on1teachingfriend.appspot.com",
    messagingSenderId: "437177475747",
    appId: "1:437177475747:web:8d8515106864d344619516"
};

firebase.initializeApp(firebaseConfig);


const Popup = ({ onClose }) => {
    const Name = useRef();
    const email = useRef();
    const phone = useRef();
    const [showEmailOTP, setShowEmailOTP] = useState(false);
    const [showPhoneOTP, setShowPhoneOTP] = useState(false);
    const emailOtp = useRef();
    const phoneOtp = useRef();
    const [emailOtpVerified, setEmailOtpVerified] = useState(false);
    const [phoneOtpVerified, setPhoneOtpVerified] = useState(false);


    const handleSyllabusDownload = async (e) => {
        if (phoneOtpVerified) {
            const syllabusUrl = "/Resume.pdf";

            const downloadLink = document.createElement("a");
            downloadLink.href = syllabusUrl;
            downloadLink.download = "Syllabus.pdf";

            downloadLink.click();

            const response = await fetch("https://v1.nocodeapi.com/chandra/google_sheets/tFxcQEOnfQbnrjgP?tabId=DownloadSyllabusForm", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify([
                    [
                        Name.current.value, // Get the value from the ref
                        phone.current.value,
                        email.current.value,
                        new Date().toLocaleString()
                    ]
                ])

            });
            await response.json();

            // Handle success, you can display a success message or perform other actions
            console.log('Form submitted successfully', response.data);
        } else {
            console.log("Phone number not verified");
        }
    };


    const handlePhoneChange = (e) => {
        const phoneNumber = e.target.value;
        if (phoneNumber.length >= 10) {
            setShowPhoneOTP(true);
        } else {
            setShowPhoneOTP(false);
        }
    };


    const sendPhoneOTP = () => {
        const phoneNumber = phone.current.value;
        console.log(phoneNumber)
        setShowPhoneOTP(true);

        const appVerifier = new firebase.auth.RecaptchaVerifier('send-otp-button', {
            'size': 'invisible',
            'callback': (response) => {
            },
            defaultCountry: 'IN',
        });

        firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
            .then((confirmationResult) => {
                window.confirmationResult = confirmationResult;
            })
            .catch((error) => {
                console.error('Error sending OTP:', error);
            });
    };

    const handleVerifyPhoneOTP = async () => {
        const otpValue = phoneOtp.current.value;

        try {
            const verificationResult = await window.confirmationResult.confirm(otpValue);

            console.log('Phone number verified:', verificationResult.user);
            setPhoneOtpVerified(true);
        } catch (error) {
            console.error('Error verifying OTP', error);
        }
        setShowPhoneOTP(false);

    };



    return (
        <div className="popup">
            <div className="popup-content downloadsyllabus-form">
                <div className='popup-header'>
                    <h1>Enter your <span className='orange-text'>Details</span></h1>
                    <button className='close-button-popup' onClick={onClose}>X</button>
                </div>
                <form className='downloadbutton-form'>
                    <label className='downloadbutton-name'>
                        <div className='LabelName'>Enter your Name<span>*</span></div>
                        <input
                            type='text'
                            ref={Name}
                            className='company-name'
                            placeholder='Enter your name'
                            required
                        />
                    </label>

                    <label className='download-emailverf'>
                        <div className='LabelName'>Email<span>*</span></div>
                        <input
                            type='email'
                            ref={email}
                            className='email-input'
                            placeholder='Enter your email'
                            required
                        />
                    </label>

                    <div className="download_phoneverf">
                    <label className='download-phonelabel'>
                        <div className='LabelName'>Phone Number<span>*</span></div>
                        <input
                            type='tel'
                            ref={phone}
                            name="mobile"
                            className='phone-input'
                            placeholder='Enter your phone number'
                            required
                        />
                    </label>
                    {!phoneOtpVerified && <button type="button" id="send-otp-button" onClick={sendPhoneOTP}>Send OTP</button>}
                    {phoneOtpVerified && <FontAwesomeIcon icon={faCheckCircle} className='download-checkicon' />}
                    </div>
                    


                    {showPhoneOTP && !phoneOtpVerified &&(
                        <div className="verify-otp">
                            <label>
                                <div className='LabelName'>Enter the OTP<span>*</span></div>
                                <input
                                    type='number'
                                    ref={phoneOtp}
                                    className='otp-input'
                                    placeholder='Enter the OTP'
                                    required
                                />
                            </label>
                            <button type="button" className="verify-otp-button" onClick={handleVerifyPhoneOTP}>Verify OTP</button>
                        </div>
                    )}
                    <div id="sign-in-button"></div>


                    {phoneOtpVerified && <button type="button" className="syllabus-download-button verified" onClick={handleSyllabusDownload}>Download Syllabus</button>}
                    {!phoneOtpVerified && <button type="button" className="syllabus-download-button" onClick={handleSyllabusDownload}>Download Syllabus</button>}
                </form>
            </div>
        </div>
    );
};

export default Popup;