import React from "react";
import front from "./image/front.png";
import back from "./image/sql.jpg";
import scrum from "./image/scrum.png";

const Skills = () => {
  return (
    <div className="skills" id="ancreSkills">
      <div className="column">
        <figure className="skill">
          <img src={back} alt="frontend" className="back" />
          <h2>Back-end Développeur</h2>
          <p>J'aime créer des requêtes SQL et relier les tables entre elles.</p>
          <h2 className="pink-text">les technos que j'utlise:</h2>
          <p>MySQl</p>
          <h2 className="pink-text">Dev Tools:</h2>
          <ul>
            <li>MySQL</li>
            <li>Node Js</li>
            <li>Postman</li>
            <li>Workbench</li>
          </ul>
        </figure>
      </div>

      <div className="column">
        <figure className="skill">
          <img src={front} alt="frontend" />
          <h2>Front-end Développeur</h2>
          <p>J'aime coder, apprendre et partager mon travail.</p>
          <h2 className="pink-text">les technos que j'utilise:</h2>
          <p>CSS, HTML, JAVASCRIPT, REACT</p>
          <h2 className="pink-text">Dev Tools:</h2>
          <ul id="front-dev-tools">
            <li className="skills-li">Git Hub</li>
            <li className="skills-li">Vs Code</li>
            <li className="skills-li">terminal</li>
            <li className="skills-li">Bootstrap</li>
            <li className="skills-li">ReactStrap</li>
            <li className="skills-li">Npm</li>
            <li className="skills-li">Wordpress</li>
            <li className="skills-li">Codesandbox</li>
            <li className="skills-li">Codepen</li>
            <li className="skills-li">Repl.it</li>
          </ul>
        </figure>
      </div>
      <div className="column">
        <figure className="skill">
          <img src={scrum} alt="frontend" className="scrum" />
          <h2>SCRUM</h2>
          <p>
            Je travaille avec la méthode Agile Scrum idéale pour le travail en
            équipe.
          </p>

          <h2 className="pink-text">Dev Tools:</h2>
          <ul>
            <li>Agile</li>
            <li>Scrum</li>
            <li>Sprint</li>
            <li>User Stories</li>
          </ul>
        </figure>
      </div>
    </div>
  );
}

export default Skills;
