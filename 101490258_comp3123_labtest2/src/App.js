import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React , { useState } from 'react';
import WeatherSearch from './components/WeatherSearch';
import WeatherDisplay from './components/WeatherDisplay';

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const API_KEY = "4a80462b57d8deb6eefcd54c49843aea"

  const fetchWeather = async () => {
    if (!city) return;

    try{
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeather(response.data);
    }catch (error) {
      console.error(error);
      setWeather(null);
    }
  };

  return (
    <div className="App">
      <h1>Weather App</h1>

      <WeatherSearch
        city={city}
        setCity={setCity}
        fetchWeather={fetchWeather}
      />

      {weather ? (
        <WeatherDisplay weather={weather} />
      ) : (
        <p>No weather data available. Please search for a city.</p>
      )}
    </div>
    
  );
}

export default App;
