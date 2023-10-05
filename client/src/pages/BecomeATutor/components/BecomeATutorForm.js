import React, { useState } from 'react';
import '../styles/BecomeATutorForm.css';

const programs = ["Full Stack Developer", "Front-End Developer", "Back-End Developer", "UI/UX Designer", "AI Engineer", "Data Science Engineer", "Python Developer", "Java Developer", "QA Automation Enginner", "DevOps Enginner", "App Developer(Android)", "App Developer(iOS)", "Other"]


export default function BecomeATutorForm() {

    const states = [
        "Andhra Pradesh",
        "Arunachal Pradesh",
        "Assam",
        "Bihar",
        "Chhattisgarh",
        "Goa",
        "Gujarat",
        "Haryana",
        "Himachal Pradesh",
        "Jharkhand",
        "Karnataka",
        "Kerala",
        "Madhya Pradesh",
        "Maharashtra",
        "Manipur",
        "Meghalaya",
        "Mizoram",
        "Nagaland",
        "Odisha",
        "Punjab",
        "Rajasthan",
        "Sikkim",
        "Tamil Nadu",
        "Telangana",
        "Tripura",
        "Uttar Pradesh",
        "Uttarakhand",
        "West Bengal",
        "Other"
    ];

    const [fullName, setFullName] = useState('');
    const [program, setProgram] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [linkedinProfile, setLinkedinProfile] = useState('');
    const [state, setState] = useState('');
    const [workExperience, setWorkExperience] = useState('');
    const [additionalInfo, setAdditionalInfo] = useState('');
    const [coverLetter, setCoverLetter] = useState('');
    const [githubInput, setGithubInput] = useState('');

    const submitHandler = async (e) => {
        // const resumeFile = resumeFileInput.current.files[0]; // Get the selected resume file
        // const resumeTitle = resumeFile ? resumeFile.name : '';
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
                        fullName, // Get the value from the ref
                        program,
                        emailAddress,
                        phoneNumber,
                        linkedinProfile,
                        state,
                        workExperience,
                        additionalInfo,
                        coverLetter,
                        githubInput,
                        // resumeTitle,
                        new Date().toLocaleString()
                    ]
                ])

            });
            await response.json();

            // const formData = new FormData();
            // formData.append('resume', resumeFile);

            // await fetch('http://localhost:5001/sendResume', {
            //     method: 'POST',
            //     body: formData
            // });

            // Handle success, you can display a success message or perform other actions
            console.log('Form submitted successfully', response.data);
            setFullName('');
            setProgram('');
            setEmailAddress('');
            setPhoneNumber('');
            setLinkedinProfile('');
            setState('');
            setWorkExperience('');
            setAdditionalInfo('');
            setCoverLetter('');
            setGithubInput('');
        } catch (error) {
            // Handle errors, you can display an error message or perform other error handling
            console.error('Error submitting form', error);
        }

    }
    return (
        <div className="tutor-right-container">
            <h1>Fill Your <span className="orange-text">Application</span></h1>
            <form className="tutor-form" onSubmit={submitHandler}>
                <div className="tutor-name tutor-field">
                    <label >Name<span>*</span></label>
                    <input type="text" placeholder="Person A" required value={fullName} onChange={(e) => setFullName(e.target.value)} />
                </div>
                <div className="program-input tutor-field">
                    <label>Program<span>*</span></label>
                    <select id="dropdown" value={program} onChange={(e) => setProgram(e.target.value)} required>
                        <option value=''>Select Program</option>
                        {programs.map((program) => (
                            <option value={program} key={program}>{program}</option>
                        ))}
                    </select>
                </div>
                <div className="country-phone tutor-field">
                    <label>Phone Number<span>*</span></label>
                    <input value={phoneNumber} type="number"required onChange={(e) => setPhoneNumber(e.target.value)} />
                </div>
                <div className="tutor-field mail-input">
                    <label>Mail<span>*</span></label>
                    <input type="email" value={emailAddress} required onChange={(e) => setEmailAddress(e.target.value)} />
                </div>
                <div className="tutor-field tutor-residence">
                    <label>Residence State<span>*</span></label>
                    <select value={state} onChange={(e) => setState(e.target.value)} required>
                        <option>Select State</option>
                        {states.map((state) => (
                            <option value={state} key={state}>{state}</option>
                        ))}
                    </select>
                </div>
                <div className="tutor-field tutor-linkedin">
                    <label>LinkedIn<span>*</span></label>
                    <input value={linkedinProfile} required onChange={(e) => setLinkedinProfile(e.target.value)} />
                </div>
                <div className="tutor-field tutor-experience">
                    <label>Work Experience<span>*</span></label>
                    <select id="dropdown" value={workExperience} onChange={(e) => setWorkExperience(e.target.value)} required>
                        <option value=''>Select Work Experience</option>
                        <option value='2 years'>2 years</option>
                        <option value='3 years'>3 years</option>
                        <option value='4 years'>4 years</option>
                        <option value='5+ years'>5+ years</option>
                    </select>
                </div>
                <div className="tutor-field tutor-salary">
                    <label>Additional Info</label>
                    <input value={additionalInfo} onChange={(e) => setAdditionalInfo(e.target.value)}/>
                </div>
                <div className="tutor-field tutor-letter">
                    <label>Cover Letter<span>*</span></label>
                    <textarea placeholder="Write in less than 100 words." value={coverLetter} onChange={(e) => setCoverLetter(e.target.value)} required/>
                </div>
                <div className="tutor-field tutor-github">
                    <label>GitHub Link<span>*</span></label>
                    <input value={githubInput} onChange={(e) => setGithubInput(e.target.value)} required/>
                </div>
                {/* <div className="tutor-field tutor-resume" style={{ zIndex: 1 }}>
                    <label>Resume<span>*</span></label>
                    <div className='resume-input-div'>
                        <input  className='resume-input' type="file" ref={resumeFileInput} accept=".jpg, .png, .pdf" style={{ width: "50%" }} />
                        <p className="resume-requires">Supported Formats only .jpg, .png, .pdf</p>
                    </div>

                </div> */}
                <button type="submit" id="submit" value="Submit">Submit</button>
            </form>
        </div>
    )
}

