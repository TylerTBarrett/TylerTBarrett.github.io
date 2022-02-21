import "./topbar.scss";
import scrollTo from "../../library/library";

import MailIcon from "@mui/icons-material/Mail";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArticleIcon from "@mui/icons-material/Article";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Topbar(props) {
  function toggleMenuOpen() {
    props.setMenuOpen(!props.menuOpen);
  }

  return (
    <div className={`${"topbar"} ${props.menuOpen && "active"}`} id="topbar">
      <div className={"wrapper"}>
        <div className={"left"}>
          <a href="#intro" className="logo text" onClick={scrollTo}>
            TylerTBarrett
          </a>
          <a
            href="assets/Tyler-Barrett-CS-Resume-Updated.pdf"
            target="_blank"
            className="itemsContainer"
          >
            <ArticleIcon className="icon"></ArticleIcon>
            <span className="text">Resume</span>
          </a>

          <a
            href="https://github.com/TylerTBarrett"
            className="itemsContainer"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon className="icon"></GitHubIcon>
            <span className="text">GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/tyler-barrett-b03b33201/"
            className="itemsContainer"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon className="icon"></LinkedInIcon>
            <span className="text">LinkedIn</span>
          </a>

          <a
            href="mailto:tylerbarrett01@gmail.com"
            className={"itemsContainer"}
          >
            <MailIcon className={"icon"} />
            <span className="text">tylerbarrett01@gmail.com</span>
          </a>
        </div>
        <div className={"right"}>
          <div className={"hamburger"} onClick={toggleMenuOpen}>
            <span className={"line1"}></span>
            <span className={"line2"}></span>
            <span className={"line3"}></span>
          </div>
        </div>
      </div>
    </div>
  );
}
