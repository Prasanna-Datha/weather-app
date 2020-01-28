import React, { useState, useEffect } from "react";
import WeatherCard from "./WeatherCard/Card";

const WeatherEngine = ({ defaultLoc }) => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({
    city: null,
    country: null,
    condition: null,
    temp: null
  });

  const getWeatherData = async q => {
    const apiRes = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&appid=6eab47a600646bb5281d838335812ae8`
    );
    const resJSON = await apiRes.json();
    setWeather({
      city: resJSON.name,
      country: resJSON.sys.country,
      condition: resJSON.weather[0].main,
      temp: resJSON.main.temp
    });
  };

  useEffect(() => {
    getWeatherData(defaultLoc);
  }, [defaultLoc]);

  const handleSearch = e => {
    e.preventDefault();
    getWeatherData(query);
  };

  return (
    <div>
      <WeatherCard
        temp={weather.temp}
        condition={weather.condition}
        city={weather.city}
        country={weather.country}
      />
      <form>
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button onClick={e => handleSearch(e)}>Search</button>
      </form>
    </div>
  );
};

export default WeatherEngine;
