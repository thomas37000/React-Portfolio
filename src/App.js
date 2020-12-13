import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Main />
      <footer className="App-footer">
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
