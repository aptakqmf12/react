import React from "react";
import { Redirect } from "react-router";

import Home from "./../pages/home.jsx";
import About from "./../pages/about.jsx";
import Contact from "./../pages/contact.jsx";
import Props from "./../pages/props.jsx";
import State from "./../pages/state.jsx";

const routes = [
  //리다이렉트
  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/home" />,
  },
  {
    path: "/home",
    component: () => <Home />,
  },
  {
    path: "/about",
    component: () => <About />,
  },
  {
    path: "/contact",
    component: () => <Contact />,
  },
  {
    path: "/props",
    component: () => <Props />,
  },
  {
    path: "/state",
    component: () => <State />,
  },
];

export default routes;
