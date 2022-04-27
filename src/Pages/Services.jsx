import React, { Component } from "react";
import { useHistory } from "react-router-dom";

const Services = () => {
  const history = useHistory();
  const gotoHome = () => {
    history.push("/");
  };
  const backPage = () => {
    history.goBack();
  };
  console.log(history);
  return (
    <>
      <h3>Services Page</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quae
        recusandae porro eveniet autem magnam illo itaque optio minima mollitia
      </p>
      <button onClick={gotoHome}>Go To Home Page</button>
      <button onClick={backPage}>Back Page</button>
    </>
  );
};

export default Services;
