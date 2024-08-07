import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './weatherdetails.css';
import { useTranslation } from 'react-i18next';

const WeatherDetails = ({ city }) => {
    const { t, i18n } = useTranslation();
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        const fetchWeatherData = async () => {
            const apiKey = 'eff8577af77aeec857c28306364b46b2';
            const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}&lang=${i18n.language}`;
            const response = await axios.get(url);
            setWeatherData(response.data);
        };

        fetchWeatherData();
    }, [city,i18n.language]);

    if (!weatherData) {
        return <div>Loading...</div>;
    }
        const currentDayForecasts = weatherData.list.filter(forecast => 
        new Date(forecast.dt_txt).getDay() === new Date().getDay()
    );

    return (
        <div className="weather-details">
            <h2>{t("wdetails") + " " + city}</h2>           
            {currentDayForecasts.map(forecast => (
                <div key={forecast.dt} className="forecast-item">
                    <div>{new Date(forecast.dt_txt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                    <div>Temp: {forecast.main.temp}°C</div>
                    <div>{forecast.weather[0].description}</div>
                    <div>Wind: {forecast.wind.speed} m/s</div>
                    <div>Humidity: {forecast.main.humidity}%</div>
                </div>
            ))}
        </div>
    );
}

export default WeatherDetails;