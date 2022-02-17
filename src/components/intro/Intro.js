import "./intro.scss";
import scrollTo from "../../library/library";
import { useEffect, useRef, useState } from "react";
import { animationField } from "../../library/library";
import { numAnimatedLines } from "../../library/constants";

import { init } from "ityped";

export default function Intro() {
  const canvas = useRef(null);
  const typingAnimation = useRef(null);

  const [animationScreen, setAnimationScreen] = useState(null);

  //  EventListener setup --> TODO
  useEffect(() => {
    //  Canvas setup
    const ctx = canvas.current.getContext("2d");
    const width = window.screen.width;
    const height = window.screen.height - 70;

    canvas.current.width = width;
    canvas.current.height = height;
    const screen = new animationField(ctx, width, height, numAnimatedLines);
    setAnimationScreen(screen);
    screen.animate();

    //  typing animation setup
    init(typingAnimation.current, {
      showCursor: false,
      strings: ["Student", "Web Developer", "Teacher Assistant"],
      typeSpeed: 200,
      backDelay: 600,
    });
  }, []);

  //

  return (
    <div className="wrapper">
      <canvas className="canvas" id="canvas" ref={canvas}></canvas>
      <div className="intro" id="intro">
        <div className="hello">
          <div className="initial">
            <div className="line1">Hi, I'm Tyler Barrett</div>
            <div className="line2">
              <span ref={typingAnimation}></span>
            </div>
          </div>

          <div className="buttons">
            <a href="#aboutme" onClick={scrollTo} className="aboutme clickable">
              About Me
            </a>
            {/* <a
              href="#portfolio"
              onClick={scrollTo}
              className="projects clickable"
            >
              Projects
            </a> */}

            {/* <a
              href="#contact"
              onClick={scrollTo}
              className="projects clickable"
            >
              Contact
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}
