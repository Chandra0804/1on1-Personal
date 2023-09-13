import Data_Analyst from "../assets/Data Analyst.png";
import Data_Scientist from "../assets/Data Scientist.png";
import ML_Engineer from "../assets/ML Engineer.png";
import Research_Analyst from "../assets/Research Analyst.png";
import '../styles/careerPaths.css'

const CareerPaths = () => {
    const Details = [
        { title: "Data Analyst", image: Data_Analyst },
        { title: "Machine Learning Engineer", image: ML_Engineer },
        { title: "Data Scientist", image: Data_Scientist  },
        { title: "Research Analyst", image: Research_Analyst },
    ]
    return (
        <div className="CareerPaths">
            <h1 className="PromisingCareerPaths">Promising Career Paths</h1>
            <div className="CareerPathsDetail">
                {Details.map((detail) => {
                    return <div class="CareerPathCard">
                        <img src={detail.image} alt={detail.title} />
                        <p>{detail.title}</p>
                    </div>
                })}
            </div>
        </div>
    )
}

export default CareerPaths;