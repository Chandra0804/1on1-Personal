import '../styles/careerPaths.css'

const CareerPaths = (props) => {
    // const Details = [
    //     { title: "Data Analyst", image: Data_Analyst },
    //     { title: "Machine Learning Engineer", image: ML_Engineer },
    //     { title: "Data Scientist", image: Data_Scientist  },
    //     { title: "Research Analyst", image: Research_Analyst },
    // ]
    return (
        <div className="CareerPaths">
            <h1 className="PromisingCareerPaths">Promising Career Paths</h1>
            <div className="CareerPathsDetail">
                {props.careeroptions.map((detail ) => {
                    return <div class="CareerPathCard">
                        <img src={detail.img} alt={detail.title} />
                        <p>{detail.title}</p>
                    </div>
                })}
            </div>
        </div>
    )
}

export default CareerPaths;