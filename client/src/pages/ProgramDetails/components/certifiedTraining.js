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
                    <h1 className="Certificate-title">Earn a career certificate</h1>
                    <p class="first-para">The <span className="one-on-one orange-text"> 1-on-1 Teaching Friend</span> certificate is trusted by 1000+ hiring companies. Add this credential certificate to your LinkedIn profile, Resume, or CV. You can also share it on social media and during your performance review.</p>
                </div>
            </div>
        </div>
    )
}

export default CertifiedTraining;