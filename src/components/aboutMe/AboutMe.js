import React, { useRef, useState, useEffect } from "react";

import "./aboutMe.scss";
import { animationField } from "../../library/library";
import { numAnimatedLines } from "../../library/constants";

export default function AboutMe() {
  const canvas = useRef(null);

  const [animationScreen, setAnimationScreen] = useState(null);

  useEffect(() => {
    const ctx = canvas.current.getContext("2d");
    const width = window.screen.width;
    const height = window.screen.height - 70;

    canvas.current.width = width;
    canvas.current.height = height;
    const screen = new animationField(ctx, width, height, numAnimatedLines);
    setAnimationScreen(screen);
    // screen.animate();
  }, []);

  return (
    <div className="aboutMeWrapper" id="aboutme">
      <canvas className="canvas" id="aboutMeCanvas" ref={canvas}></canvas>
      <div className="outerWrapper">
        <div className="innerWrapper">
          <div className="headerWrapper">
            <img className="logo" src="./assets/mylogo.png" alt="logo"></img>
            <div className="aboutMeHeader">
              <div className="header">About Me</div>
              <div className="description">
                I'm currently a junior studying computer science at the
                University of South Carolina Honors college.
              </div>
            </div>
          </div>
          <div className="cardContainer">
            <div className="card">
              <div className="header">Front End</div>
              <ul className="list">
                <li>React</li>
                <li>JavaScript</li>
                <li>CSS</li>
                <li>Sass</li>
                <li>HTML 5</li>
              </ul>
            </div>
            <div className="card">
              <div className="header">Back End</div>
              <ul className="list">
                <li>Java</li>
                <li>C++</li>
                <li>SQL</li>
              </ul>
            </div>
            <div className="card">
              <div className="header">Miscellaneous</div>
              <ul className="list">
                <li>Git</li>
                <li>Agile Development</li>
                <li>SCRUM</li>
                <li>Bash shell</li>
                <li>Linux/Windows OS</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
