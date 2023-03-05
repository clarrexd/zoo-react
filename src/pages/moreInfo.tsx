import React from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { IsFedStatus } from "../models/IsFedStatus";

export default function MoreInfo() {
  const { id }: any = useParams();
  const animals = JSON.parse(localStorage.getItem("animalsData") as string);
  const [lastClick, setLastClickTime] = useState();
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

  /*const updateFedStatus = (animal: any) => {
    let date = new Date();
    let currentTime = (date.getHours() + ":" + date.getMinutes()) as string;
    let updateList = animals.map((updated: any) =>
      animal.id === updated.id
        ? { ...updated, lastFed: currentTime, isFed: true }
        : updated
    );
    setLastClickTime(updateList);
  };*/

  /*function dataExists() {
    if (fetchAnimalData && !isLoading) {
      setIsFed(fetchAnimalData.isFed);
      setFedTime(fetchAnimalData.lastFed);
      setIsLoading(true);
    }
  }
  dataExists();*/

  function handleClick(animal: IsFedStatus) {
    window.localStorage.setItem(`${id}`, JSON.stringify(animal));
    setIsFed(true);

    setFedTime(currentTime);

    fetchAnimalData.isFed = true;
    fetchAnimalData.lastFed = currentTime;

    window.localStorage.setItem(`${id}`, JSON.stringify(fetchAnimalData));
  }

  function FedOrNot() {
    if (isFed === true) {
      return "Nyligen matad";
    } else {
      return "Inte matad";
    }
  }

  let animalPage = animals.map((animal: any) => {
    if (id === animal.name) {
      return (
        <>
          <div>
            <img src={animal.imageUrl} alt="Not found" />
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
    }
  });

  return <>{animalPage}</>;
}
