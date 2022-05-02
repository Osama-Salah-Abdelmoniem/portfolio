import React from "react";
import "./Contact.css";
import Separator from "../../common/separator/Separator";
import SocialContact from "../../common/socialcontact/SocialContact";

const Contact = () => {
  return (
    <div className="contact">
      <Separator />
      <br />
      <label className="section-title">Ways To Contact</label>
      <div className="contact-container">
        <p>Get in touch!</p>
        <SocialContact />
      </div>
    </div>
  );
};

export default Contact;
