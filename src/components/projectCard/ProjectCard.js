import React, { createRef, useContext } from "react";
import { Fade, Slide, Zoom } from "react-reveal";
import "./ProjectCard.css";
import StyleContext from "../../contexts/StyleContext";
import Button from "../../components/button/Button";

export default function ProjectCard({ project }) {
  const imgRef = createRef();

  const GetDescBullets = ({ descBullets }) => {
    return descBullets
      ? descBullets.map((item,i) => <li key={i} className="subTitle">{item}</li>)
      : null;
  };
  const { isDark } = useContext(StyleContext);
  return (
    <div>
    <div className = "project-card">
      <Fade left duration={1000}>
      <div className="project-info">
                <h2 className="project-title">{project.title}</h2>
                <div>
                  <p className="project-desc">
                    {project.desc}
                  </p>
                </div>
                <div className="project-bullets">
                <ul>
                  <GetDescBullets descBullets={project.descBullets} />
                </ul>
              </div>
                <div className="button-div">                 
                <Button text="See Live"
                  newTab={true}
                  href={project.live}>                  
                </Button>
                <Button text="Source Code"
                  newTab={true}
                  href={project.code}>
                  
                </Button>
                </div>
       </div>
      </Fade>
      <Fade right duration={1000}>
      <div className="project-image">
                <a href={project.live != ""?project.live:project.code} target="_blank">
                  <div data-tilt className="project-thumbnail">
                    <img className="project-thumbnail" src={project.img} />
                  </div>
                </a>
              </div>
        </Fade>
        
    </div>
    <Slide left duration={2000}>
    <div className="project-card-border"></div>
  </Slide>
  </div>
  );
}
