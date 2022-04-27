import React from "react";
import { Route } from "react-router-dom";
import About from "../Pages/About";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import Login from "../Pages/Login";
import Services from "../Pages/Services";

const AllRoutes = () => {
  return (
    <>
      <div>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/about-us">
          <About />
        </Route>
        <Route exact path="/services">
          <Services />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
      </div>
    </>
  );
};

export default AllRoutes;
