import React from "react";
import "./ProjectCard.css";
const ProjectCard = (project) => {
  return (
    <div className="project-card">
      <div className="project-info"></div>
      <img src={project.image} className="project-photo"></img>
    </div>
  );
};

export default ProjectCard;
