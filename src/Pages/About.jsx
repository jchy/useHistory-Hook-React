import React, { Component } from "react";
import { useHistory, useLocation } from "react-router-dom";

const About = () => {
  const location = useLocation();

  console.log(location.pathname);

  const history = useHistory();
  console.log(history);
  const goBack = () => {
    history.goForward();
  };
  return (
    <>
      <h3>About Page</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem sunt
        totam obcaecati illum corporis, eaque eveniet blanditiis qui. In minima,
      </p>
      <button onClick={goBack}> go Forward </button>
    </>
  );
};

export default About;
