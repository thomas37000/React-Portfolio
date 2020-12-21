import React from "react";
import PropTypes from "prop-types";
import "../App.css";

function Nav() {
  return (
    <div className="App-header">
      <li className="links">
        <a href="#ancrePresentation">Présentation</a>
      </li>
      <li className="links">
        <a href="#ancreSkills">Skills</a>
      </li>
      <li className="links">
        <a href="#ancreProjects">Projets</a>
      </li>
      <li className="links">
        <a href="#ancreContact">Contact</a>
      </li>
    </div>
  );
}

Nav.propTypes = {};

export default Nav;
