import React from "react";
import Visual from "../assets/VS Code Logo.png";
import GitHub from "../assets/Git Logo.png";
import Flycode from "../assets/Flycode Logo.png";
import Grunt from "../assets/Grunt Logo.png";
import Codepen from "../assets/Code Pen Logo.png";
import HTML5 from "../assets/HTML Logo.png";
import CSS3 from "../assets/CSS Logo.png";
import Bootstrap5 from "../assets/Bootstrap Logo.png";
import React1 from "../assets/React Logo.png";
import '../styles/programDetailsSkills.css'

function ProgramDetailsSkills(props) {
  console.log("props");
  console.log(props);
  // console.log(props,' -> props')
  const items1 = props.skillsArr.slice(0,5);
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
      <div class="top-skills-row laptop">
        {items1.map((item) => {
          return (
            <div class="program-details-skill">
              <div>
                <div class="center">
                  <img className="program-details-skills-img" src={item.img}/>
                </div>
                <div class="center name">{item.name}</div>
              </div>
            </div>
          );
        })}
      </div>
      <div class="top-skills-row bottom-skills-row laptop">
        {items2.map((item) => {
          return (
            <div class="program-details-skill">
              <div>
                <div class="center">
                  <img className="program-details-skills-img" src={item.img}/>
                </div>
                <div class="center name">{item.name}</div>
              </div>
            </div>
          );
        })}
      </div>
      <div class="skills-column mobile">
        {props.skillsArr.map((item) => {
          return (
            <div class="program-details-skill">
              <div>
                <div class="center">
                  <img className="program-details-skills-img" src={item.img}/>
                </div>
                <div class="center name">{item.name}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProgramDetailsSkills;