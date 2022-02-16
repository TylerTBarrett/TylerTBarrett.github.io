import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import AboutMe from "./components/aboutMe/AboutMe";

import classes from "./app.module.css";
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className={classes.sections}>
        <Intro />
        <AboutMe />
        {/* <Portfolio /> */}
        <Contact />
      </div>
    </div>
  );
}

export default App;
