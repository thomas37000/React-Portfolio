import React from "react";
import wan from "./image/wan.jpg";

const Projects = () => {
  return (
    <section className="projects" id="ancreProjects">
      <div className="heading">
        <h2>Mes travaux récents</h2>
        <p>
          Voici différents projets que j' ai réalisé dernièrement seul ou en
          équipe à la Wild Code School de Nantes.
        </p>
      </div>
      <div className="contents">
        <div className="box">
          <h2>Women@Nantes</h2>
          <img src={wan} alt="women@nantes" />
          <h3>Projet 3 (en cours)</h3>
          <p>
            Création une application pour l' association Women@Nantes, en équipe.
          </p>
          <p>
            <a
              className="disabled"
              href="https://github.com/WildCodeSchool/nts-js-202009-p3-wan"
            >
              GitHub Page
            </a>
          </p>
        </div>
        <div className="box">
          <h2>Nantes Event's</h2>
          <img
            src="https://nantes-events.netlify.app/static/media/logo-nantes-event.b4db1e07.png"
            alt="logo-entreprise"
          />
          <h3>Projet 2</h3>

          <p>
            Création un site sur React en équipe du type application qui permet de
            voir quels événements ont lieu selon la date. Nous avons importer{" "}
            <a
              className="disabled"
              href="https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_agenda-evenements-nantes-nantes-metropole&q=&facet=emetteur&facet=rubrique&facet=lieu&facet=ville&facet=lieu_quartier"
            >
              l' Api des événements de Nantes
            </a>
            l' Api des événements de Nantes pour récupérer les données et les
            afficher.{" "}
          </p>

          <p>
            <a
              className="disabled"
              href="https://nantes-events.netlify.app/contact"
            >
              Link
            </a>
          </p>
          <p>
            <a
              className="disabled"
              href="https://github.com/thomas37000/Nantes-Events"
            >
              GitHub
            </a>
          </p>
        </div>

        <div className="box">
          <h2>île de Nantes</h2>
          <img
            src="https://www.hotel-nantes.fr/usermedia/photo-634831159348225405-1.JPG?w=412&h=365&Crop=true"
            alt="logo-entreprise"
          />
          <h3>Projet 1</h3>
          <p>Création un site en Html / Css / Js en équipe.</p>
          <p>
            <a
              className="disabled"
              href="https://thomas37000.github.io/ileDeNantes/"
            >
              GitHub Page
            </a>
          </p>
          <p>
            <a
              className="disabled"
              href="https://github.com/thomas37000/ileDeNantes"
            >
              GitHub
            </a>
          </p>
        </div>
        <div className="box">
          <h2>Latin for 6</h2>
          <img
            src="https://latinfor6.com/wp-content/uploads/2019/05/couverture-LF6-Spotify-1.jpg"
            alt="latin for 6"
          />
          <p>
            Création site internet pour un groupe de Hard Rock Rennais en 2018
            sous Wordpress.
          </p>
          <p>
            Crétion de la pochette du Cd sous Photoshop / illustrator / InDesign
            et de tous les élèments visuels sur le site. Modifiction du thème,
            hébergement chez OVH
          </p>
          <a className="disabled" href="https://latinfor6.com/news/">
            Link
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
