import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id="about">
      <p>I love software developing</p>
      <img src={image} alt="i made this" />
      <h2>About Me</h2>
    </div>
  );
}

export default About;
