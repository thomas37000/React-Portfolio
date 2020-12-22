import React from "react";
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";
import "./css/portfolio.css";
// import Map from "./Map";
import Skills from "./Skills";
import Projects from "./Projects";
import Presentation from "./Presentation";
import Cv from "./doc/Thomas Chalanson Cv.pdf";

const Main = () => {
  return (
    <>
      <main className="container">
        <Presentation />
        <Skills />
        <Projects />
        
        <h2 id="ancreCv">Mon CV</h2>
        <iframe title="cv" src={Cv} width="60%" height="600px" className="cv"></iframe>
        {/* <a href="Thomas Chalanson Cv.pdf" download="Thomas Chalanson Cv.pdf" target="blank" class="buttonCv">Télécharger mon CV</a> */}


        <ScrollUpButton
          style={{
            backgroundColor: "none",
            width: "40px",
            height: "40px",
            outline: "none",
            transform: "translateY(-3rem) translateX(1.5rem)",
          }}
        />
        {/* <div className="heading">
            <h2>My CV</h2>
            <iframe
              title="cv"
              src="cv-thomas-chalanson.pdf"
              width="90%"
              height="600px"
            ></iframe>
          </div> */}
      </main>
    </>
  );
};

export default Main;
