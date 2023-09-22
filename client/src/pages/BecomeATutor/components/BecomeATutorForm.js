import React, { useRef } from 'react';
import '../styles/BecomeATutorForm.css'

export default function BecomeATutorForm() {
    const fullName = useRef();
    const course = useRef();
    const program = useRef();
    const country = useRef();
    const emailAddress = useRef();
    const phoneNumber = useRef();
    const linkedinProfile = useRef();
    const state = useRef();
    const workExperience = useRef();
    const additionalInfo = useRef();
    const coverLetter = useRef();
    const resume = useRef();


    const submitHandler = async () => {
        // if(!(fullName.current.value && course.current.value && program.current.value && country.current.value && emailAddress.current.value && phoneNumber.current.value && linkedinProfile.current.value && state.current.value && workExperience.current.value && additionalInfo.current.value && coverLetter.current.value && resume.current.value && fullName.current.value.trim().length>0 && course.current.value.trim().length>0 && program.current.value.trim().length>0 && country.current.value.trim().length>0 && emailAddress.current.value.trim().length>0 && phoneNumber.current.value.trim().length>0 && linkedinProfile.current.value.trim().length>0 && state.current.value.trim().length>0 && workExperience.current.value.trim().length>0 && additionalInfo.current.value.trim().length>0 && coverLetter.current.value.trim().length>0 && resume.current.value.trim().length>0)) {
        //     alert('Please fill all the fields');
        //                 return;
        // }else{
        //     await axios.post(`${RouteUrl.Host}/api/addTutorDetails`,{
        //         "fullName":fullName.current.value,
        //         "course":course.current.value,
        //         "program":program.current.value,rs

        //         "country":country.current.value,
        //         "emailAddress":emailAddress.current.value,
        //         "phoneNumber":phoneNumber.current.value,
        //         "linkedinProfile":linkedinProfile.current.value,
        //         "state":state.current.value,
        //         "workExperience":workExperience.current.value,
        //         "additionalInfo":additionalInfo.current.value,
        //         "coverLetter":coverLetter.current.value,
        //         "resume":resume.current.value
        //     }).then(rs=>{
        //         console.log('submit handler')
        //         alert('Thanks for submitting response');
        //         window.location.reload();
        //     })
        // }

    }
    return (
        <div className="tutor-right-container">
            <h1>Fill Your <span className="orange-text">Application</span></h1>
            <div className="tutor-form">
                <div className="tutor-name tutor-field">
                    <label >Name<span>*</span></label>
                    <input type="text" placeholder="Person A" ref={fullName} />
                </div>
                <div className="program-input tutor-field">
                    <label>Program<span>*</span></label>
                    <select id="dropdown" ref={program}>
                        <option></option>
                        <option>Placement Program</option>
                        <option>Education Program</option>
                        <option>Other</option>
                    </select>
                </div>
                <div className="tutor-course tutor-field">
                    <label>Course<span>*</span></label>
                    <select ref={course}>
                        <label>Interested Position<span>*</span></label>
                        <option></option>
                        <option>Frontend Web Development</option>
                        <option>Backend Web Development</option>
                        <option>Full Stack Web Development</option>
                        <option>ML / AI</option>
                    </select>
                </div>


                <div className="country-phone tutor-field">
                    <div className="country-input">
                        <label>Country</label>
                        <input type="text" ref={country} />
                    </div>
                    <div className="phno-input">
                        <label>Phone Number<span>*</span></label>
                        <input ref={phoneNumber} />
                    </div>

                </div>
                <div className="tutor-field mail-input">
                    <label>Mail<span>*</span></label>
                    <input type="email" ref={emailAddress} />
                </div>

                <div className="tutor-field tutor-residence">
                    <label>Residence State<span>*</span></label>
                    <select ref={state}><option></option>
                        <option>Andhra Pradesh</option>
                        <option>Hyderabad</option>
                    </select>
                </div>
                <div className="tutor-field tutor-linkedin">
                    <label>Linked In<span>*</span></label>
                    <input ref={linkedinProfile} />
                </div>
                <div className="tutor-field tutor-experience">
                    <label>Work Experience<span>*</span></label>
                    <input ref={workExperience} />
                </div>
                <div className="tutor-field tutor-salary">
                    <label>Additional Info</label>
                    <input ref={additionalInfo} />
                </div>
                <div className="tutor-field tutor-letter">
                    <label>Cover Letter<span>*</span></label>
                    <textarea placeholder="Write in less than 100 words." ref={coverLetter} />
                </div>
                <div className="tutor-field tutor-resume" style={{ zIndex: 1 }}>
                    <label>Resume<span>*</span></label>
                    <input placeholder="Paste link of resume" ref={resume} style={{ width: "10vw" }} /><p className="resume-requires">Supported Formats only .jpg, .png pdf less than 1MB</p>
                </div>
                <button onClick={submitHandler} id="submit" value="Submit">Submit</button>
            </div>
        </div>
    )
}