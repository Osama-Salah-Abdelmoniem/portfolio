import React from "react";
import "./Web.css";
import { FaLaptopCode } from "react-icons/fa";
import { BsCodeSlash } from "react-icons/bs";
import { MdWorkOutline } from "react-icons/md";
import { FiUser } from "react-icons/fi";

const Web = () => {
  return (
    <div className="navbar">
      <div className="nav-container">
        <div className="nav-item">
          <a href="#projects" activeClassName="active" className="nav-links">
            <FaLaptopCode className="option-icon" />
            projects
          </a>
        </div>
        <div className="nav-item">
          <a href="#skills" activeClassName="active" className="nav-links">
            <BsCodeSlash className="option-icon" />
            skills
          </a>
        </div>
        <div className="nav-item">
          <a href="#contact" activeClassName="active" className="nav-links">
            <FiUser className="option-icon" />
            contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Web;
