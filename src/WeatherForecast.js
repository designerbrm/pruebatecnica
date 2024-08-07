import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './weatherforecast.css';
import { useTranslation } from 'react-i18next';

const WeatherForecast = ({ city }) => {
    const { t, i18n } = useTranslation();
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const apiKey = 'eff8577af77aeec857c28306364b46b2'; 
                const response = await axios.get(
                    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}&lang=${i18n.language}`
                );
                setWeatherData(response.data);
            } catch (error) {
                setError(error.message);
            }
        };
        
        fetchWeatherData();
    }, [city,i18n.language]);

    if (error) return <div>Error: {error}</div>;
    if (!weatherData) return <div>Loading...</div>;

    const today = new Date().getDate();
    const todayForecast = weatherData.list.filter(forecast => 
        new Date(forecast.dt * 1000).getDate() === today
    );

    return (
        <div className="weather-forecast" id="wforecast">
            <h2>{t("weather") + " " + city}</h2>
            <div className="hourly-forecast">
                {todayForecast.map((forecast, index) => (
                    <div key={index} className="forecast-item">
                        <h3>{new Date(forecast.dt * 1000).toLocaleTimeString()}</h3>
                        <img 
                            src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`} 
                            alt={forecast.weather[0].description} 
                            className="weather-icon" 
                        />
                        <p className="weather-description">{forecast.weather[0].description}</p>
                        <p className="weather-temp">Temp: {forecast.main.temp}°C</p>
                        <p className="weather-temp">Min: {forecast.main.temp_min}°C</p>
                        <p className="weather-temp">Max: {forecast.main.temp_max}°C</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WeatherForecast;
