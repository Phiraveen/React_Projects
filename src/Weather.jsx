import React, { useEffect, useRef, useState } from "react";
import "./Weather.css";
import { IoSearchSharp } from "react-icons/io5";
import WeatherOutput from "./WeatherOutput";
import Copyright from "./Copyright";
import { ThreeDots } from "react-loader-spinner";

export default function Weather() {
  const inputField = useRef(null);
  const [cityWrong, setcityWrong] = useState(false);
  const [loading, setloading] = useState(false);
  const [inputname, setinputname] = useState("Chennai");
  const [description, setdescription] = useState("");
  const [celsius, setcelsius] = useState(0);
  const [city, setcity] = useState("");
  const [country, setcountry] = useState("");
  const [lat, setlat] = useState(0);
  const [lon, setlon] = useState(0);
  const [hum, sethum] = useState(0);
  const [wind, setwind] = useState(0);

  const handleinput = (e) => {
    setinputname(e.target.value);
  };

  const weatherApi = async () => {
    setloading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${inputname}&appid=8804cb15ac0507115f1f2d46dc2791ba&units=metric`
      );
      const data = await response.json();

      if (data.cod === "404") {
        setcityWrong(true);
        setloading(false);
        throw "City Not Found";
        return;
      }

      setdescription(data.weather[0].description);
      setcelsius(data.main.temp);
      setcity(data.name);
      setcountry(data.sys.country);
      setlat(data.coord.lat);
      setlon(data.coord.lon);
      sethum(data.main.humidity);
      setwind(data.wind.speed);

      setloading(false);
      setinputname("");
      setcityWrong(false);
    } catch (error) {
      console.error("An Error Occured -->  ", error);
    } finally {
    }
  };

  const handleshow = () => {
    weatherApi();
    setinputname("");
  };

  const handleinput2 = (e) => {
    if (e.key === "Enter") {
      weatherApi();
      setinputname("");
    }
  };

  useEffect(() => {
    weatherApi();
    inputField.current.focus();
  }, []);

  return (
    <div className="mainContainer">
      <div className="weatherContainer">
        <div className="inputContainer">
          <input
            ref={inputField}
            type="text"
            placeholder="Enter City Name ..."
            onChange={handleinput}
            value={inputname}
            onKeyDown={handleinput2}
          />
          <span onClick={handleshow}>
            <IoSearchSharp />
          </span>
        </div>

        {loading && (
          <div className="loaderComp">
            <ThreeDots
              visible={true}
              height="150"
              width="150"
              color="#4fa94d"
              radius="10"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        )}

        {cityWrong ? (
          <div className="cityNotFound">
            <h1>City Not Found</h1>
          </div>
        ) : (
          <WeatherOutput
            description={description}
            celsius={celsius}
            city={city}
            country={country}
            lat={lat}
            lon={lon}
            hum={hum}
            wind={wind}
          />
        )}

        <Copyright />
      </div>
    </div>
  );
}
