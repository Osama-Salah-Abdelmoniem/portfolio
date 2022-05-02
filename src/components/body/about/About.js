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
      <div className="intro">
        Let Me <span className="info-name">Introduce</span> MySelf
        <div className="intro-p">
          <br />
          I fell in love with programming and I have at least learnt something,
          I think… 🤷‍♂️
          <br />
          <br />
          I am fluent in classics like C++, Javascript and Python.
          <br />
          <br />
          My field of Interest is building Web Apps with{" "}
          <span className="highlight">Node.js</span> and Modern JS Library and
          Frameworks like <span className="highlight">React.js</span> and{" "}
          <span className="highlight">Next.js</span>
        </div>
        <br />
        <a type="button" href="#contact" className="btn">
          CONTACT ME
        </a>
        <br />
        <br />
      </div>
    </div>
  );
};

export default About;
