import React from "react";
import "./Skills.css";
import Separator from "../../common/separator/Separator";
import { SkillsData } from "../../data/skills";
import SkillCard from "./SkillCard";
const Skills = () => {
  const data = SkillsData;
  return (
    <div className="skills">
      <Separator />
      <br />
      <label className="section-title">Professional Skillset</label>
      <div className="skills-container">
        {data.map((item) => {
          return (
            <div className="skills-section">
              <label className="skills-section-title">{item.type}</label>
              <div className="skills-list">
                {item.list.map((skill) => {
                  return <SkillCard skill={skill} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Skills;
