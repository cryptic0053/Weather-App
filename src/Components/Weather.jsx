import React, { useEffect, useRef, useState } from "react";
import search_icon from "../assets/search.png";
import "./Weather.css";
import weather_icon from "../assets/cloud.png";
import humidity_icon from "../assets/humidity.png";
import wind_icon from "../assets/wind.png";

function Weather() {
  const [weatherData, setWeatherData] = useState(false);
  const inputRef = useRef(null);

  const getWeatherData = async (city) => {
    console.log(city);

    if (city === "") {
      setWeatherData(false);
      alert("Please enter a city name");
      return;
    }

    const url = `https://api.weatherapi.com/v1/current.json?key=${
      import.meta.env.VITE_APP_ID
    }&q=${city}`;

    try {
      const response = await fetch(url);

      const data = await response.json();
      console.log(data);

      setWeatherData({
        humidity: data.current.humidity,
        wind: data.current.wind_kph,
        location: data.location.name,
        country: data.location.country,
        condition: data.current.condition.text,
        condition_icon: data.current.condition.icon,
        temperature: data.current.temp_c,
        feels_like: data.current.feelslike_c,
        icon: "https:" + data.current.condition.icon,
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getWeatherData("Dhaka");
  }, []);

  return (
    <div className="weather">
      <div className="search-bar">
        <input ref={inputRef} type="text" placeholder="Search for a city" />
        <img
          src={search_icon}
          alt="Search"
          onClick={() => getWeatherData(inputRef.current.value)}
        />
      </div>

      {weatherData ? (
        <>
          <img
            src={weatherData.condition_icon}
            alt="condition"
            className="weather-icon"
          />
          <p className="temperature">{weatherData.temperature}°</p>
          <p className="location">
            {weatherData.location}, {weatherData.country}
          </p>
          <p className="condition">{weatherData.condition}</p>
          <p className="feels-like">Feels like {weatherData.feels_like}°</p>

          <div className="weather-data">
            <div className="col">
              <img src={humidity_icon} alt="Humidity" />
              <div>
                <p>
                  {weatherData.humidity}% <span>Humidity</span>
                </p>
              </div>
            </div>
            <div className="col">
              <img src={wind_icon} alt="Wind" />
              <div>
                <p>
                  {weatherData.wind} km/h <span>Wind Speed</span>
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>Loading........</p>
      )}
    </div>
  );
}

export default Weather;
