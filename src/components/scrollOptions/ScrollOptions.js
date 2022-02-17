import React from "react";
import "./scrollOptions.scss";
import scrollTo from "../../library/library";

export default function ScrollOptions(props) {
  function scrollAction(e) {
    props.setMenuOpen(false);
    scrollTo(e);
  }

  return (
    <React.Fragment>
      <li className="sideBarOption">
        <a href="#intro" onClick={scrollAction}>
          Home
        </a>
      </li>
      <li className="sideBarOption">
        <a href="#aboutme" onClick={scrollAction}>
          About Me
        </a>
      </li>
      {/* <li className="sideBarOption">
        <a href="#portfolio" onClick={scrollAction}>
          Portfolio
        </a>
      </li> */}

      {/* <li className="sideBarOption">
        <a href="#contact" onClick={scrollAction}>
          Contact
        </a>
      </li> */}
    </React.Fragment>
  );
}
