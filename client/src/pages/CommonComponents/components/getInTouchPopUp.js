import React, { useRef } from 'react';
import '../styles/GetInTouchPopUp.css';
// import axios from 'axios';
// import RouteUrl from '../Routes/Routes';

export default function GetInTouchPopUp({ onClose }) {

  const name = useRef();
  const phone = useRef();

  const submitHandler = async () => {
    // try {
    //   await axios.post(`${RouteUrl.Host}/api/getInTouchDetails`, {
    //     "name": name.current.value,
    //     "phone": phone.current.value
    //   }).then(rs => {
    //     console.log('rs')
    //   })
    // } catch (err) {
    //   // console.log(err)
    //   alert('something went wrong')
    // }

  }

  return (
    <div className='getInTouchPopup-container'>
      <div className='getInTouchPopup-content'>
        <div className='getInTouch-main'>
          <h2 className='popup-heading'>Call Request Information</h2>
          <hr />
          <p className='popup-para'>Please provide some basic information about the call request.</p>
        </div>
        <form onSubmit={submitHandler}>
          <div className='getInTouch-main'>
            <label htmlFor='name' className='popup-label'>Name:</label>
            <input type='text' id='name' ref={name} className='popup-input' required />

            <label htmlFor='mobile' className='popup-label'>Mobile Number:</label>
            <input type='tel' id='mobile' ref={phone} className='popup-input' pattern='[1-9]{1}[0-9]{9}' required />
          </div>

          <div className='popup-buttons'>
            <button type='button' className='popup-cancel-button' onClick={onClose}>Cancel</button>
            <button type='submit' className='popup-connect-button'>Connect</button>
          </div>
        </form>
      </div>
    </div>
  );
}


