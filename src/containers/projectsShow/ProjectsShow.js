import React from 'react';
import './ProjectsShow.css';
import ProjectCard from '../../components/projectCard/ProjectCard';
import { projectInfo } from '../../portfolio';

export default function ProjectsShow() {
  if(projectInfo.display)
   return (
      <div className="projects-show-section" id="projects-show">
        
        <h1 className="projects-show-heading">
          Projects
        </h1>
        <div className="projects-show-card-container">
            {projectInfo.projects.map((project) => (
              <ProjectCard project={project} />
            ))}
        </div>  
      </div>
   );
   return null;
}
