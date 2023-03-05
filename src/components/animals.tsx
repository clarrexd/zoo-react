import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function ZooData() {
  const animals = JSON.parse(localStorage.getItem("animalsData") as string);

  if (!animals) {
    axios
      .get("https://animals.azurewebsites.net/api/animals")
      .then((response) => {
        localStorage.setItem("animalsData", JSON.stringify(response.data));
      });
  }

  const renderAnimals = animals.map((animal: any, index: number) => (
    <>
      <div className="animal-container" key={index}>
        <img src={animal.imageUrl} className="images" alt="Not Found"></img>
        <div className="names">Namn: {animal.name}</div>
        <div className="shortDesc">{animal.shortDescription}</div>
        <div className="yob">Född: {animal.yearOfBirth}</div>

        <Link to={`/animals/${animal.name}`}>
          <button className="infoBtn">Mer info</button>
        </Link>
      </div>
    </>
  ));

  return <>{renderAnimals}</>;
}
