import React from "react";
import logo from "./logo.svg";
import "./App.css";
import animalsData from "./components/animals";
import ZooData from "./components/animals";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <ZooData />
    </div>
  );
}

export default App;
