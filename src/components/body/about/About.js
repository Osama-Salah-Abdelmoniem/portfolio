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
          Hi There 👋,
          <br /> I'M <span className="info-name">Osama Salah</span>.
          <br /> <span ref={textRef}></span>
        </div>
        <div className="about-img">
          <img src={require("./dev.png")} className="picture" />
        </div>
      </div>
    </div>
  );
};

export default About;
