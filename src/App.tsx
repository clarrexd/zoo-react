import React from "react";
import "./App.css";
import animalsData from "./components/animals";
import ZooData from "./components/animals";
import { BrowserRouter, Link } from "react-router-dom";
import { Routes, Route, Outlet } from "react-router-dom";
import MoreInfo from "./pages/moreInfo";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header"></header>
        <Outlet />
      </div>
    </>
  );
}

export default App;
