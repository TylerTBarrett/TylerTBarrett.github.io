import React from "react";
import "./menu.scss";
import ScrollOptions from "../scrollOptions/ScrollOptions";

export default function Menu(props) {
  return (
    <div className={`${"menu"} ${props.menuOpen && "active"}`}>
      <ul>
        {/* <li>
          <a href="#intro">Home</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#works">Works</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li> */}
        <ScrollOptions setMenuOpen={props.setMenuOpen}></ScrollOptions>
      </ul>
    </div>
  );
}
