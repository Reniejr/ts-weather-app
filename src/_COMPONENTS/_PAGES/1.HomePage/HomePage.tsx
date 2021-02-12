import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";

//REDUX IMPORTS
import { useSelector, useDispatch } from "react-redux";
//TYPES IMPORTS
import { MainState } from "../../../_STORE/";

//UTILITIES IMPORTS

//PERSONAL COMPONENTS IMPORTS
import Banner from "./Sub_Components/1.Banner/Banner";
import Week from "./Sub_Components/2.Week/Week";

//BOOTSTRAP IMPORTS
import { Container } from "react-bootstrap";

//STYLE
import "./HomePage.scss";

//PROPS

export default function HomePage(props: RouteComponentProps) {
  const state = useSelector((state: MainState) => state);

  return (
    <div id="home-page">
      <Container>
        <Banner />
      </Container>
      <Week />
    </div>
  );
}
