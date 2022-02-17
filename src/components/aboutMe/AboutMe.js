import "./aboutMe.scss";

export default function AboutMe() {
  return (
    <div className="aboutMeWrapper" id="aboutme">
      <div className="innerWrapper">
        <div className="headerWrapper">
          <img className="logo" src="./assets/mylogo.png" alt="logo"></img>
          <div className="aboutMeHeader">
            <div className="header">About Me</div>
            <div className="description">
              I'm currently a junior studying computer science at the University
              of South Carolina Honors college looking for opportunities that
              will help prepare me for the workforce after I graduate.
              <br /> <br /> I am particularly interested in both web development
              and Systems engineering, but love all things Software Engineering!
              In my spare time I also love to play Table Tennis, surf, or read
              &#x263A;
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
  );
}
