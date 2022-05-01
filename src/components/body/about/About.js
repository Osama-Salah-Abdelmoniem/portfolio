import React, { useEffect, useRef } from "react";
import SocialContact from "../../common/socialcontact/SocialContact";
import "./About.css";
import { init } from "ityped";

const About = () => {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Back-end Developer", "MERN Stack Developer"],
    });
  }, []);
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello There 👋, I am
          <br /> <span className="info-name">Osama Salah</span>.
          <br /> <span ref={textRef}></span>
        </div>
        <div className="about-img">
          <img src={require("./coding.png")} className="picture" />
        </div>
      </div>
      <SocialContact />
    </div>
  );
};

export default About;
