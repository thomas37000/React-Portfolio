
import React from "react";
import desktop from "./image/desktop.svg";
import github from "./image/github.png";
import linkedin from "./image/linkedin.jpg";
import Thomas from "./image/moi.jpeg";

const Presentation = () => {
  return (
    <>
      <section className="introduction">
        <h1>Thomas Chalanson & Full Stack Développeur</h1>
        <p>Un code propre pour Eslint</p>

        <img
          alt="Thomas Chalanson"
          className="desktopImg"
          id="avatar"
          src={Thomas}
        />
        <div className="githubLinks">
          <a href="https://github.com/thomas37000">
            <img
              src={github}
              alt="github link"
              className="github"
              target="_blank"
            />
          </a>

          <a href="https://www.linkedin.com/in/thomas-chalanson/">
            <img
              src={linkedin}
              alt="linkedin link"
              className="github"
              target="_blank"
            />
          </a>
        </div>

        <div id="modal">
          <img
            src="https://ca.slack-edge.com/T6SG2QGG2-UT3DWAVJR-e53b347578a4-512"
            alt="desktop"
            id="avatar2"
          />
        </div>

        <figure className="desktop"></figure>
        <img src={desktop} alt="desktop" className="desktopImg" />
      </section>

      <section className="presentation" id="ancrePresentation">
        <div className="description pink-bg">
          <h2>
            Disponible pour un stage de 4 mois à partir du 15 février 2021
          </h2>
          <p>
            Web Développeur Junior en Javascript / React actuellement étudiant à
            la Wild Code School de Nantes, j'apprends mon futur métier à coder
            proprement avec " esLint " et ce secteur me passionne car il faut
            constamment apprendre et ne pas se reposer sur ses lauriers. A la
            recherche d'un stage dès le mois de février 2021 dans une Start Up
            comme une Grande Entreprise où je pourrais m' épanouir avec d'autres
            Dev et toute l'équipe. A côté de ça j'ai créé un label de Techno où
            je produis des Artistes / vends les Vinyles du label.
          </p>
        </div>
      </section>
    </>
  );
};

export default Presentation;
