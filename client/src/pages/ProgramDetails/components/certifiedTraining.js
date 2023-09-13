import "../styles/certifiedTraining.css"
import Certificate_MockUp from "../assets/Certificate.png"
import CertificateBG from '../assets/Certificate BG.png'

const CertifiedTraining = () => {
    return (
        <div className="certificate-section">
            <div className="certificate-bg">
                <img src={CertificateBG} alt="Certificate-BG" />
            </div>
            <div className="Certified-Training">
                <div className="Certificate-image-wrapper">
                    <img className="Certificate-image" src={Certificate_MockUp} alt="Certificate" />
                </div>
                <div className="Certificate-content">
                    <h1 className="Certificate-title">Certified Training</h1>
                    <p class="first-para"><span className="one-on-one">1 on 1</span> Trainings certificate trusted by 100,000+ companies hiring in our Platform</p>
                    <p className="para">Government approved certificate from NSDC (National Skill Development</p>
                    <p className="para">Corpoartion) & Skill India</p>
                </div>
            </div>
        </div>
    )
}

export default CertifiedTraining;