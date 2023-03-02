import React, { useState } from "react";
import axios from "axios";
import { BrowserRouter, Link, Routes } from "react-router-dom";
import { Route, useNavigate, Navigate } from "react-router-dom";
import moreInfo from "../pages/moreInfo";
import { Outlet } from "react-router-dom";

export default function ZooData() {
  axios({
    url: "https://animals.azurewebsites.net/api/animals",
  }).then((response) => {
    localStorage.setItem("animalsData", JSON.stringify(response.data));
  });

  const animals = JSON.parse(localStorage.getItem("animalsData") as string);

  const navigate = useNavigate();
  const HandleClick = (event: any) => {
    console.log("a");
  };

  const [data, setData] = useState([renderAnimals]);
  var renderAnimals = animals.map((animal: any) => (
    <>
      <div className="animal-container">
        <img src={animal.imageUrl} className="images"></img>
        <div className="names">Namn: {animal.name}</div>
        <div className="shortDesc">{animal.shortDescription}</div>
        <div className="yob">Född: {animal.yearOfBirth}</div>

        <Link to={"/animals/" + animal.name} state={{ data: data }}>
          <button className="infoBtn" onClick={HandleClick}>
            Mer info
          </button>
        </Link>
      </div>
      <Outlet />
    </>
  ));

  return <>{renderAnimals}</>;
}
