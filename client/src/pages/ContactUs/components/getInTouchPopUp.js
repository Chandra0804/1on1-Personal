import React, { useRef , useState } from 'react';
import axios from 'axios'; // Import Axios
import '../styles/GetInTouchPopUp.css';

export default function GetInTouchPopUp({ onClose }) {
  const name = useRef();
  const phone = useRef();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    console.log("Form submitting")

    try {
      // const response = await axios.post('/api/submitForm', {
      //   name: name.current.value,
      //   phone: phone.current.value,
      // });

      const response = await fetch("https://v1.nocodeapi.com/chandra/google_sheets/tFxcQEOnfQbnrjgP?tabId=RequestCallForm",{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify([
          [
            name.current.value, // Get the value from the ref
            phone.current.value, // Get the value from the ref
            new Date().toLocaleString()
          ]
        ])
        
      });
      await response.json();

      // Handle success, you can display a success message or perform other actions
      console.log('Form submitted successfully', response.data);
      setFormSubmitted(true);
      onClose();
    } catch (error) {
      // Handle errors, you can display an error message or perform other error handling
      console.error('Error submitting form', error);
    }
  };

  return (
    <div className="getInTouchPopup-container">
      <div className="getInTouchPopup-content">
        <div className="getInTouch-main">
          <h2 className="popup-heading">Call Request Information</h2>
          <hr />
          <p className="popup-para">
            Please provide some basic information about the call request.
          </p>
        </div>
        <form onSubmit={submitHandler}>
          <div className="getInTouch-main">
            <label htmlFor="name" className="popup-label">
              Name:
            </label>
            <input type="text" id="name" ref={name} className="popup-input" required />

            <label htmlFor="mobile" className="popup-label">
              Mobile Number:
            </label>
            <input
              type="tel"
              id="mobile"
              ref={phone}
              className="popup-input"
              pattern="[1-9]{1}[0-9]{9}"
              required
            />
          </div>

          <div className="popup-buttons">
            <button type="button" className="popup-cancel-button" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="popup-connect-button">
              Connect
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
