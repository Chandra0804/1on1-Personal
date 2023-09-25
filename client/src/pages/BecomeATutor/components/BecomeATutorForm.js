import React, { useRef } from 'react';
import '../styles/BecomeATutorForm.css';

const programs = ["Full Stack Developer", "Front-End Developer", "Back-End Developer", "UI/UX Designer", "AI Engineer", "Data Science Engineer", "Python Developer", "Java Developer", "QA Automation Enginner", "DevOps Enginner", "App Developer(Android)", "App Developer(iOS)"]


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
    const resumeFileInput = useRef();


    const submitHandler = async (e) => {
        const resumeFile = resumeFileInput.current.files[0]; // Get the selected resume file
        const resumeTitle = resumeFile ? resumeFile.name : '';
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
        e.preventDefault(); // Prevent the default form submission behavior
        console.log("Form submitting")

        try {
            // const response = await axios.post('/api/submitForm', {
            //   name: name.current.value,
            //   phone: phone.current.value,
            // });

            const response = await fetch("https://v1.nocodeapi.com/chandra/google_sheets/tFxcQEOnfQbnrjgP?tabId=BecomeTutorForm", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify([
                    [
                        fullName.current.value, // Get the value from the ref
                        program.current.value,
                        emailAddress.current.value,
                        phoneNumber.current.value,
                        linkedinProfile.current.value,
                        state.current.value,
                        workExperience.current.value,
                        additionalInfo.current.value,
                        coverLetter.current.value,
                        resumeTitle,
                        new Date().toLocaleString()
                    ]
                ])

            });
            await response.json();

            const formData = new FormData();
            formData.append('resume', resumeFile);

            await fetch('http://localhost:5001/sendResume', {
                method: 'POST',
                body: formData
            });

            // Handle success, you can display a success message or perform other actions
            console.log('Form submitted successfully', response.data);
            fullName.current.value = '';
            program.current.value = '';
            emailAddress.current.value = '';
            phoneNumber.current.value = '';
            linkedinProfile.current.value = '';
            state.current.value = '';
            workExperience.current.value = '';
            additionalInfo.current.value = '';
            coverLetter.current.value = '';
            resumeFileInput.current.value = '';
        } catch (error) {
            // Handle errors, you can display an error message or perform other error handling
            console.error('Error submitting form', error);
        }

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
                    <select id="dropdown" ref={program} type="select">
                        <option vlaue=''></option>
                        {programs.map((program) => (
                            <option value={program}>{program}</option>
                        ))}
                    </select>
                </div>
                <div className="country-phone tutor-field">
                    <label>Phone Number<span>*</span></label>
                    <input ref={phoneNumber} />
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
                    <select id="dropdown" ref={workExperience} type="select">
                        <option vlaue=''></option>
                        <option vlaue=''>2+ years</option>
                        <option vlaue=''>3+ years</option>
                        <option vlaue=''>4+ years</option>
                        <option vlaue=''>5+ years</option>
                    </select>
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
                    <input type="file" ref={resumeFileInput} accept=".jpg, .png, .pdf" style={{ width: "50%" }} />
                    <p className="resume-requires">Supported Formats only .jpg, .png, .pdf less than 1MB</p>
                </div>
                <button onClick={submitHandler} id="submit" value="Submit">Submit</button>
            </div>
        </div>
    )
}