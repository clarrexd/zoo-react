import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { IAnimal } from "../models/IAnimal";

export default function MoreInfo() {
  const { id }: any = useParams();
  const animals = JSON.parse(localStorage.getItem("animalsData") as string);
  const [isFed, setIsFed] = useState(false);
  const [fedTime, setFedTime] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const date = new Date();
  const currentTime = "klockan " + date.getHours() + ":" + date.getMinutes();
  const fetchAnimalData = JSON.parse(
    window.localStorage.getItem(`${id}`) as string
  );

  useEffect(() => {
    if (fetchAnimalData && !isLoading) {
      setIsFed(fetchAnimalData.isFed);
      setFedTime(fetchAnimalData.lastFed);
      setIsLoading(true);
    }
  }, [fetchAnimalData, isLoading]);

  function saveData(animal: IAnimal) {
    if (!fetchAnimalData) {
      localStorage.setItem(`${id}`, JSON.stringify(animal));
    }
  }

  function handleClick(fetchAnimalData: IAnimal) {
    setIsFed(true);
    setFedTime(currentTime);
    fetchAnimalData.isFed = true;
    fetchAnimalData.lastFed = currentTime;

    localStorage.setItem(`${id}`, JSON.stringify(fetchAnimalData));
  }

  function FedOrNot() {
    if (isFed === true) {
      return "Nyligen matad";
    } else {
      return "Inte matad";
    }
  }
  const [animal] = animals.filter((animal: IAnimal) => id === animal.name);

  const animalPage = (
    <>
      {saveData(animal)};
      <div>
        <img src={animal.imageUrl} alt="Not found" className="animalPage_img" />
        <h2>{animal.name}</h2>
        <span>{animal.longDescription}</span>
        <br />
        <p>
          {animal.name} blev senast matad {fedTime}
        </p>
        <p>Status: {FedOrNot()}</p>
        <button
          disabled={isFed}
          onClick={() => {
            handleClick(animal);
          }}
        >
          Mata {animal.name}
        </button>
        <br />
      </div>
    </>
  );

  return <>{animalPage}</>;
}
