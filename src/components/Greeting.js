import React from "react";
import { useParams } from "react-router-dom";

const Greeting = () => {
  let params = useParams();

  console.log("This is our url params", params);

  return <p style={{ textAlign: "center" }}>Hello {params.name}</p>;
};

export default Greeting;
