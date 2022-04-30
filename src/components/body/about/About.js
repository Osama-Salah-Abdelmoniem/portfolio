import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello There 👋, I am
          <br /> <span className="info-name">Osama Salah</span>.
          <br /> I love experimenting with th web.
        </div>
        <div className="about-img">
          <img src={require("./coding.png")} className="picture" />
        </div>
      </div>
      <div className="about-bottom"></div>
    </div>
  );
};

export default About;
