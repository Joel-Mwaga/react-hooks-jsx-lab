import React from "react";
import image from "../data/image.js";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>This is the about section.</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;
