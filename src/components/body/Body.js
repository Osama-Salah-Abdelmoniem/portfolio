import React from "react";
import "./Body.css";
import About from "./about/About";
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";
import Experience from "./experience/Experience";
import Contact from "./contact/Contact";
const Body = () => {
  return (
    <div className="body">
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Body;
