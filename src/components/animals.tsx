import React from "react";
import axios from "axios";

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
      <div>
        {animals.map((animalList: any) => (
          <>
            <img src={animalList.imageUrl}></img>
            <div>Namn: {animalList.name}</div>
            <span>{animalList.latinName}</span>
            <div>{animalList.shortDescription}</div>
            <div>Född: {animalList.yearOfBirth}</div>
          </>
        ))}
      </div>
    </>
  );
}