import React from "react";
import "./Home.css";
import Body from "../body/Body";
import Footer from "../footer/Footer";
import NavBar from "../NavBar/NavBar";
const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <div>
        <Body />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
export default Home;
