import React from "react";
import "./Moblie.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaLaptopCode } from "react-icons/fa";
import { BsCodeSlash } from "react-icons/bs";
import { MdWorkOutline } from "react-icons/md";
import { FiUser } from "react-icons/fi";

const Mobile = ({ isOpen, setIsOpen }) => {
  return (
    <div className="mobile">
      <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
        <AiOutlineCloseCircle />
      </div>
      <div className="mobile-options">
        <div className="mobile-option">
          <a href="#projects">
            <FaLaptopCode className="option-icon" />
            projects
          </a>
        </div>
        <div className="mobile-option">
          <a href="#skills">
            <BsCodeSlash className="option-icon" />
            skills
          </a>
        </div>
        <div className="mobile-option">
          <a href="#experience">
            <MdWorkOutline className="option-icon" />
            experience
          </a>
        </div>
        <div className="mobile-option">
          <a href="#contact">
            <FiUser className="option-icon" />
            contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
