import React from "react";
import axios from "axios";
import { BrowserRouter, Link, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import moreInfo from "../pages/moreInfo";

/*export class animalsData extends React.Component {
  state = {
    animals: [],
  };
}*/

/*export default function ZooData() {
  axios
    .get(
      `https://animals.azurewebsites.net/api/animals
`
    )
    .then((response) => {
      //const animals = res.data;
      // this.setState({ animals })
      console.log(response);
    });

  return (
    <>
      <div></div>
    </>
  );
}*/

export default function ZooData() {
  let storeData = axios({
    url: "https://animals.azurewebsites.net/api/animals",
  }).then((response) => {
    localStorage.setItem("animalsData", JSON.stringify(response.data));
  });

  const animals = JSON.parse(localStorage.getItem("animalsData") as string);

  //const animals = [];

  /*for (let i = 0; i < animal.length; i++) {
    animals.push(animal);
  }*/

  return (
    <>
      {animals.map((animal: any) => (
        <>
          <div className="animal-container">
            <img src={animal.imageUrl} className="images"></img>
            <div className="names">Namn: {animal.name}</div>
            <div className="shortDesc">{animal.shortDescription}</div>
            <div className="yob">Född: {animal.yearOfBirth}</div>

            <button className="infoBtn">
              <Link to={"/animals/" + animal.name}>Mer info</Link>
            </button>
          </div>
        </>
      ))}
    </>
  );
}
