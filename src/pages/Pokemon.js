import React from "react";
import { useParams } from "react-router-dom";

function Pokemon() {
  const { name } = useParams();

  //   ùseParams`hook to access the dynmaic pieces of the URL
  return <div>{name}</div>;
}

export default Pokemon;
