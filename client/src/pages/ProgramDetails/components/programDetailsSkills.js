import React from "react";
// import Visual from "../assets/Visual studio code.png";
// import GitHub from "../assets/Git.png";
// import Flycode from "../assets/Flycode.png";
// import Grunt from "../assets/Grunt.png";
// import Codepen from "../assets/Code pen.png";
// import HTML5 from "../assets/Html5.png";
// import CSS3 from "../assets/CSS3.png";
// import Bootstrap5 from "../assets/Bootstrap 4.png";
// import React1 from "../assets/react.png";
import '../styles/programDetailsSkills.css'

function ProgramDetailsSkills(props) {
  // console.log(props,' -> props')
  // const images=[
  //   Visual,GitHub,Flycode,Grunt,Codepen,HTML5,CSS3,Bootstrap5,React1
  // ]

  console.log(props)
  const items1 = props.skillsArr.slice(0,5);
  console.log(items1)
  // [
  //   {
  //     image: Visual,
  //     name: "Visual studio code",
  //   },
  //   {
  //     image: GitHub,
  //     name: "Git+Hub",
  //   },
  //   {
  //     image: Flycode,
  //     name: "Flycode",
  //   },
  //   {
  //     image: Grunt,
  //     name: "Grunt",
  //   },
  //   {
  //     image: Codepen,
  //     name: "Codepen",
  //   },
  // ];
  const items2 = props.skillsArr.slice(5,10)
  // [
  //   {
  //     image: HTML5,
  //     name: "HTML 5",
  //   },
  //   {
  //     image: CSS3,
  //     name: "CSS 3",
  //   },
  //   {
  //     image: Bootstrap5,
  //     name: "Bootstrap 4",
  //   },
  //   {
  //     image: React1,
  //     name: "React",
  //   },
  // ];
  return (
    <div className="program-details-skills ">
      <h1>Skills You'll Learn</h1>
      <div class="top-skills-row skills-laptop">
        {items1.map((item) => {
          return (
            <div class="program-details-skill">
              <div>
                <div class="center">
                  <img className="program-details-skills-img" src={item}/>
                </div>
                {/* <div class="center name">{item.name}</div> */}
              </div>
            </div>
          );
        })}
      </div>
      <div class="top-skills-row bottom-skills-row skills-laptop">
        {items2.map((item) => {
          return (
            <div class="program-details-skill">
              <div>
                <div class="center">
                  <img className="program-details-skills-img" src={item}/>
                </div>
                {/* <div class="center name">{item.name}</div> */}
              </div>
            </div>
          );
        })}
      </div>
      <div class="skills-column skills-mobile">
        {props.skillsArr.map((item) => {
          return (
            <div class="program-details-skill">
              <div>
                <div class="center">
                  <img className="program-details-skills-img" src={item}/>
                </div>
                {/* <div class="center name">{item.name}</div> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProgramDetailsSkills;