import React from "react";

//REDUX IMPORTS
import { useSelector, useDispatch } from "react-redux";
import { MainState } from "../../../../../_STORE";

//BOOTSTRAP IMPORTS
import { Row, Col } from "react-bootstrap";

//STYLE IMPORTS
import "./Banner.scss";

export default function Banner() {
  const state = useSelector((state: MainState) => state);

  return (
    <Row className="banner">
      <Col xs={12} lg={6} className="city">
        <h2>
          {state.city.city_name} <span>[{state.city.country_name}]</span>
        </h2>
        <p>
          [{state.city.lat}] [{state.city.long}]
        </p>
        <img
          src={`http://openweathermap.org/img/wn/${state.forecastInfo.current.icon}@4x.png`}
          alt=""
        />
      </Col>
      <Col xs={12} lg={6} className="info">
        <Row className="header">
          <Col xs={12} lg={6} className="status">
            <h2>{state.forecastInfo.current.main}</h2>
            <p>{state.forecastInfo.current.description}</p>
          </Col>
          <Col xs={12} lg={6} className="temp">
            <span>{state.forecastInfo.current.temp} °C</span>
            <img src="./assets/temp.png" alt="" />
          </Col>
        </Row>
        <div className="sub-info">
          <div className="weather-card">
            <img src="./assets/humidity.png" alt="" />
            <p>Humidity</p>
            {state.forecastInfo.current.humidity} AH
          </div>
          <div className="weather-card">
            <img src="./assets/wind.png" alt="" />
            <p>Wind Speed</p>
            {state.forecastInfo.current.wind_speed} km/h
          </div>
          <div className="weather-card">
            <img src="./assets/clouds.png" alt="" />
            <p>Clouds</p>
            {state.forecastInfo.current.clouds}
          </div>
        </div>
        <div className="sub-info">
          <div className="weather-card">
            <img src="./assets/rain.png" alt="" />
            <p>Rain</p>
            {state.forecastInfo.current.rain} mm
          </div>
          <div className="weather-card">
            <img src="./assets/snow.png" alt="" />
            <p>Snow</p>
            {state.forecastInfo.current.snow} m
          </div>
        </div>
      </Col>
    </Row>
  );
}
