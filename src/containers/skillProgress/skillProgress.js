import React from "react";
import "./skillProgress.css";
import { techStack } from "../../portfolio";
import { Fade } from "react-reveal";

export default function StackProgress() {
    if(techStack.viewSkillBars){
        return (
            <Fade bottom duration={500} distance="20px">
            <div className="skills-container">

                <div className="skills-bar">
                    <h1 className="skills-heading">Proficiency</h1>
                    {techStack.experience.map((exp,i) => {
                        const progressStyle = {
                            width: exp.progressPercentage
                        };
                        return (
                        <div key={i} className="skill">
                            <p>{exp.Stack}</p>
                            <div className="meter">
                                <span style={progressStyle}></span>
                            </div>
                        </div>
                        );
                    })}
                </div>

                <div className="skills-rate-image">
                    <img alt="Skills-rate" src={require("../../assets/images/skillrate.svg")} />
                </div>

            </div>
            </Fade>
        );
    }
    return null;
}
