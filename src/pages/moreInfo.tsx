import React from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";

export default function MoreInfo(props: any) {
  const { id }: any = useParams();
  const location = useLocation();
  const data = location.state.data;
  const animals = JSON.parse(localStorage.getItem("animalsData") as string);

  let animalPage = animals.map((animal: any) => {
    if (id == animal.name) {
      return (
        <>
          <div>
            <img src={animal.imageUrl} alt="Not found" />
            <h2>{animal.name}</h2>
            <span>{animal.longDescription}</span>
            <br />
            <p>
              {animal.name} blev senast matad {animal.lastFed}
            </p>
            <button>Mata djur</button>
          </div>
        </>
      );
    }
  });

  return <>{animalPage}</>;
}
