import React from "react";
import Separator from "../../common/separator/Separator";
import { ProjectData } from "../../data/projects";
import ProjectCard from "./ProjectCard";
import "./Projects.css";
const Projects = () => {
  const data = ProjectData;
  return (
    <div className="projects">
      <Separator />
      <br />
      <label className="section-title">Projects</label>
      <div>
        {data.map((project) => {
          return <ProjectCard project={project} />;
        })}
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Projects;
