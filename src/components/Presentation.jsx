import React, {Component} from "react";
import desktop from "./image/desktop.svg";

const avatar = document.getElementById("avatar");
const modal = document.getElementById("modal");

class Presentation extends Component {
  constructor(props) {
    super(props);
    this.showImg = this.showImg.bind(this);
    this.changeImg = this.changeImg.bind(this);
  }

  showImg() {
    modal.style.display = "block";
    avatar.style.display = "none";
    //document.getElementById("avatar").addEventListener("click", showImg);
  }

  changeImg() {
    modal.style.display = "none";
    avatar.style.display = "block";
    // document.getElementById("avatar2").addEventListener("click", changeImg);
  }
  render() {
    return (
      <>
        <section className="introduction">
          <h1>Thomas Chalanson & Full Stack Développeur</h1>
          <p>Un code propre pour Eslint ;)</p>
          <img
            onClick={this.showImg}
            alt="Thomas Chalanson"
            className="desktopImg"
            id="avatar"
            src="https://media-exp1.licdn.com/dms/image/C5603AQE4kIQAravJWw/profile-displayphoto-shrink_200_200/0?e=1608768000&v=beta&t=9bsCtzxzS3v5AnDpE7vv-J3m-cGUAoBirrry8vjPpYA"
          />

          <div id="modal">
            <img
              onClick={this.changeImg}
              src="https://ca.slack-edge.com/T6SG2QGG2-UT3DWAVJR-e53b347578a4-512"
              alt="desktop"
              id="avatar2"
            />
          </div>

          <figure className="desktop"></figure>
          <img src={desktop} alt="desktop" className="desktopImg" />
        </section>

        <section className="presentation">
          <div className="description pink-bg">
            <h2>
              Bonjour, Je suis <span>Thomas</span>.
            </h2>
            <p>
              Web Développeur Junior en Javascript / React actuellement étudiant
              à la Wild Code School de Nantes, j'apprends mon futur métier à
              coder proprement avec " esLint " et ce secteur me passionne car il
              faut constamment apprendre et ne pas se reposer sur ses lauriers.
              A la recherche d'un stage dès le mois de février 2021 dans une
              Start Up comme une Grande Entreprise où je pourrais m' épanouir
              avec d'autres Dev et toute l'équipe. A côté de ça j'ai créé un
              label de Techno où je produis des Artistes / vends les Vinyles du
              label et j'ai un chien Border Collie qui me permet de me
              ressourcer tous les jours dans la Nature chose hyper importante
              quand on travaille toute la journée en face d'un écran à taper du
              code :) A bientôt j'espère.
            </p>
          </div>
        </section>
      </>
    );
  }
}

export default Presentation;
