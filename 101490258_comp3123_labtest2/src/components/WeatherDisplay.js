import React from "react";

function WeatherDisplay({ weather }) {
    const { name, main, weather: weatherDetails } = weather;
    const icon = weatherDetails[0].icon;
    const description = weatherDetails[0].description;
    const temperature = Math.round(main.temp);

    return(
        <div className="weather-card">
            <h2>{name}</h2>
            <img
                src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                alt="weather icon"
            />

            <h3>{temperature}°C</h3>
            <p>{description}</p>
        </div>
    )
}
export default WeatherDisplay;