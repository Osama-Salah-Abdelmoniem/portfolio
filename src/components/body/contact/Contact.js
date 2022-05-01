import React from "react";
import "./Contact.css";
import Separator from "../../common/separator/Separator";
import SocialContact from "../../common/socialcontact/SocialContact";
import { FiDownload } from "react-icons/fi";
const Contact = () => {
  return (
    <div className="contact">
      <Separator />
      <label className="section-title">Contact</label>
      <div className="contact-container">
        <div className="contact-left">
          <p>Get in touch! Contact me on my any of the platforms</p>
          <SocialContact />
        </div>
        <div className="download">
          <a download href={require("../../data/Osama_Salah_Resume.pdf")}>
            <FiDownload className="download-icon" />
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
