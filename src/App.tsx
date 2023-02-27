import React from "react";
import logo from "./logo.svg";
import "./App.css";
import animalsData from "./components/animals";
import ZooData from "./components/animals";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <ZooData />
    </div>
  );
}

export default App;
