import React from "react";
import res2 from "../img/black.jpg";
import logo16 from "../img/logo16.jpg";
import logo17 from "../img/logo17.jpg";
import logo18 from "../img/logo18.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${res2})` }}
      ></div>
      <div className="aboutBottom">
        <h1 id="about"> ABOUT US</h1>
        <img src={logo16} alt={logo16}  id="logo16"/>
        <img src={logo17} alt={logo17}  id="logo17"/>
        <img src={logo18} alt={logo18}  id="logo18"/>
        <p>
        Restaurant is a place for simplicity. Good food, good beer, and good service. </p>
       <p> Simple is the name of the game,</p>
      <p>  and we’re good at finding it in all the right places, </p>
       <p> even in your dining experience.</p>
        <p> We’re a small group from Denver, Colorado who make simple food possible.</p>
       <p>  Come join us and see what simplicity tastes like. </p>
      </div>
    </div>
  );
}

export default About;