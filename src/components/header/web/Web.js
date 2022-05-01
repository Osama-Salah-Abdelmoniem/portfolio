import React from "react";
import "./Web.css";
import { FaLaptopCode } from "react-icons/fa";
import { BsCodeSlash } from "react-icons/bs";
import { MdWorkOutline } from "react-icons/md";
import { FiUser } from "react-icons/fi";

const Web = () => {
  return (
    <div className="web">
      <div className="web-option">
        <a href="#projects">
          <FaLaptopCode className="option-icon" />
          projects
        </a>
      </div>
      <div className="web-option">
        <a href="#skills">
          <BsCodeSlash className="option-icon" />
          skills
        </a>
      </div>
      <div className="web-option">
        <a href="#contact">
          <FiUser className="option-icon" />
          contact
        </a>
      </div>
    </div>
  );
};

export default Web;
