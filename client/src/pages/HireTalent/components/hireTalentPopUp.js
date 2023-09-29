import React, { useRef } from 'react';
import '../styles/hireTalentPopUp.css';

const Popup = ({ onClose }) => {
    // const [companyName, setCompanyName] = useState('');
    // const [position, setPosition] = useState('');
    // const [positionType, setPositionType] = useState('');
    // const [review, setReview] = useState('');

    const companyName = useRef();
    const requiredPosition = useRef();
    const requiredType = useRef();
    const review = useRef();
    const email = useRef();
    const phone = useRef();

    const submitHandler = async (e) => {
        // if(requiredPosition.current.value!=='SELECT' && requiredType.current.value!=='SELECT' && companyName.current.value && companyName.current.value.trim().length>0 && requiredPosition.current.value && requiredPosition.current.value.trim().length>0 && requiredType.current.value && requiredType.current.value.trim().length>0 && review.current.value && review.current.value.trim().length>0){
        //     // await axios.post(`${RouteUrl.Host}/api/addHireDetails`,{
        //     //     "companyName":companyName.current.value,
        //     //     "requiredPosition":requiredPosition.current.value,
        //     //     "requiredType":requiredType.current.value,
        //     //     "review":review.current.value
        //     // }).then(rs=>{
        //     //     alert('Thanks for filling !!')
        //     //     onClose();
        //     // })
        // }else{
        //     alert('please fill the required details')
        // }
        e.preventDefault(); // Prevent the default form submission behavior
        console.log("Form submitting")

        try {
            // const response = await axios.post('/api/submitForm', {
            //   name: name.current.value,
            //   phone: phone.current.value,
            // });

            const response = await fetch("https://v1.nocodeapi.com/chandra/google_sheets/tFxcQEOnfQbnrjgP?tabId=HireTalentForm", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify([
                    [
                        companyName.current.value, // Get the value from the ref
                        requiredPosition.current.value,
                        requiredType.current.value,
                        phone.current.value,
                        email.current.value,
                        new Date().toLocaleString()
                    ]
                ])

            });
            await response.json();

            // Handle success, you can display a success message or perform other actions
            console.log('Form submitted successfully', response.data);
            onClose();
        } catch (error) {
            // Handle errors, you can display an error message or perform other error handling
            console.error('Error submitting form', error);
        }

    }
    const programs = ["Full Stack Developer", "Front-End Developer", "Back-End Developer", "UI/UX Designer", "AI Engineer", "Data Science Engineer", "Python Developer", "Java Developer", "QA Automation Enginner", "DevOps Enginner", "App Developer(Android)", "App Developer(iOS)", "Other"]




    return (
        <div className="popup">
            <div className="popup-content">
                <div className='popup-header'>
                    <h1>Hire <span className='orange-text'>Talent</span></h1>
                    <button className='close-button-popup' onClick={onClose}>X</button>
                </div>
                <div className='popup-form'>
                    <label>
                        <div className='LabelName'>Company Name<span>*</span></div>
                        <input
                            type='text'
                            ref={companyName}
                            className='company-name'
                            placeholder='Enter your company name'
                        // onChange={(e) => setCompanyName(e.target.value)}
                        />
                    </label>
                    <label>
                        <div className='LabelName'>Required Position<span>*</span></div>
                        <select className='required-position-input' type="select" ref={requiredPosition}
                        // value={positionType}
                        // onChange={(e) => setPositionType(e.target.value)}
                        >
                            <option value=''>Choose program</option>
                            {programs.map((program) => (
                                <option value={program}>{program}</option>
                            ))}

                        </select>
                        {/* <input
                            type='text'
                            value={position}
                            onChange={(e) => setPosition(e.target.value)}
                            className='required-position-input'
                        /> */}
                    </label>
                    <label>
                        <div className='LabelName'>Required Type<span>*</span></div>
                        <select className='required-class'
                            type="select"
                            ref={requiredType}
                        // onChange={(e) => setPositionType(e.target.value)}
                        >
                            <option value=''>Select</option>
                            <option value='full-time'>Full Time</option>
                            <option value='part-time'>Part Time</option>
                            <option value='contract'>Contract</option>
                        </select>
                    </label>
                    {/*<label>
                         <div className='LabelName'>Review</div>
                        <textarea
                        className='review-input'
                            ref={review}
                            // onChange={(e) => setReview(e.target.value)}
                        /> 
                    </label>*/}
                    <label>
                        <div className='LabelName'>Email<span>*</span></div>
                        <input
                            type='email'
                            ref={email}
                            className='email-input'
                            placeholder='Enter your email'
                        />
                    </label>
                    <label>
                        <div className='LabelName'>Phone Number<span>*</span></div>
                        <input
                            type='number'
                            ref={phone}
                            className='phone-input'
                            placeholder='Enter your phone number'
                        />
                    </label>
                    <button type='submit' onClick={submitHandler}>Submit</button>
                </div>
            </div>
        </div>
    );
};

export default Popup;
