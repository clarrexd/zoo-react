import React from "react";
import "./App.css";
import animalsData from "./components/animals";
import ZooData from "./components/animals";
import { BrowserRouter, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <BrowserRouter>
        <ZooData />
      </BrowserRouter>
    </div>
  );
}

export default App;
