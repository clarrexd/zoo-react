import React from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import ZooData from "../components/animals";

export default function MoreInfo(props: any) {
  const { id }: any = useParams();
  const { isFed }: any = useParams();
  const location = useLocation();
  const data = location.state.data;
  return (
    <>
      <h1>MERINFO SIDA</h1>
      <div className="container">Detta djur heter: {id}</div>
      <p>{data.shortDescription}</p>
      <span>{data.id}</span>
    </>
  );
}
