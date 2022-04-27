import React, { Component } from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const backPage = () => {
    history.goBack();
  };
  return (
    <>
      <h3>Login</h3>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam</p>
      <button onClick={backPage}>go back</button>
    </>
  );
};

export default Login;
