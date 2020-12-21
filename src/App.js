import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Main from "./components/Main";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
      <footer className="App-footer" id="ancreContact">
        Des questions, envoyez moi un email à :
        <p>
          <a href="thomas.chalanson@sfr.fr">thomas.chalanson@sfr.fr</a> /
          0663802804
        </p>
      </footer>
    </div>
  );
}

export default App;
