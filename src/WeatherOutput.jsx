import React from "react";

export default function WeatherOutput(props) {
  const { description, celsius, city, country, lat, lon, hum, wind } = props;

  return (
    <div className="outputMainContainer">
      <div className="locationContainer">
        <h4>{description}</h4>
        <h5>{celsius}° Celsius</h5>
        <h5>{city}</h5>
        <h5>{country}</h5>
      </div>
      <div className="coordsContainer">
        <div className="locationContainer">
          <h5>{lat}</h5>
          <h5>Latitude</h5>
        </div>
        <div className="locationContainer">
          <h5>{lon}</h5>
          <h5>Longitude</h5>
        </div>
      </div>
      <div className="humidityspeedContainer">
        <div className="locationContainer">
          <h5>{hum} %</h5>
          <h5>Humidity</h5>
        </div>
        <div className="locationContainer">
          <h5>{wind} m/s</h5>
          <h5>Wind Speed</h5>
        </div>
      </div>
    </div>
  );
}
