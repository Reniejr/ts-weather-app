import React, { useState, useEffect } from "react";

//REDUX IMPORTS
import { useSelector, useDispatch } from "react-redux";
import { MainState } from "../../../../../_STORE";

//BOOTSTRAP IMPORTS
import { Row, Col } from "react-bootstrap";

//STYLE IMPORTS
import "./Week.scss";

export default function Week() {
  const state = useSelector((state: MainState) => state);

  return (
    <Row className="week">
      {state.forecastInfo.forecast.map((day) => {
        return (
          <Col key={day.id}>
            <img
              src={`http://openweathermap.org/img/wn/${day.icon}@4x.png`}
              alt=""
            />
            <p>{day.main}</p>
            <div className="temp">
              <img src="./assets/temp.png" alt="" />
              <div className="min-max">
                <p>
                  min: <span>{day.min_temp}</span> max:{" "}
                  <span>{day.max_temp}</span>
                </p>
              </div>
            </div>
            <div className="details">
              <img src="./assets/humidity.png" alt="" />
              <span>{day.humidity}</span> ah
            </div>
            <div className="details">
              <img src="./assets/wind.png" alt="" />
              <span>{day.wind_speed}</span> km/h
            </div>
            <div className="details">
              <img src="./assets/clouds.png" alt="" />
              <span>{day.clouds}</span>
            </div>
            <div className="details">
              <img src="./assets/rain.png" alt="" />
              <span>{day.rain}</span> mm
            </div>
            <div className="details">
              <img src="./assets/snow.png" alt="" />
              <span>{day.snow}</span> m
            </div>
          </Col>
        );
      })}
    </Row>
  );
}
