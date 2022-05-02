import React from "react";
import "./Contact.css";
import Separator from "../../common/separator/Separator";
import SocialContact from "../../common/socialcontact/SocialContact";

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
      </div>
    </div>
  );
};

export default Contact;
