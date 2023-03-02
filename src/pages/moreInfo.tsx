import React from "react";
import { Outlet, useParams } from "react-router-dom";
import ZooData from "../components/animals";

export default function MoreInfo() {
  const { id } = useParams();
  return (
    <>
      <h1>MERINFO SIDA</h1>
      <div className="container">Detta djur heter: {id}</div>
      <Outlet />
    </>
  );
}
