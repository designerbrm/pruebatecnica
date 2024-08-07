import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './SunAndMoon.css';

const SunAndMoon = ({ city }) => {
    const [sunrise, setSunrise] = useState('');
    const [sunset, setSunset] = useState('');
    const [moonPhase, setMoonPhase] = useState('');
    const [moonPhaseIcon, setMoonPhaseIcon] = useState('');

    useEffect(() => {
        const fetchSunAndMoonData = async () => {
            const apiKey = 'YOUR_API_KEY';
            const url = `https://api.openweathermap.org/data/2.5/onecall?lat={LAT}&lon={LON}&exclude=hourly,daily,minutely,alerts&appid=${apiKey}`;
            
            try {
                const response = await axios.get(url);
                const data = response.data;

                const sunriseTime = new Date(data.current.sunrise * 1000).toLocaleTimeString();
                const sunsetTime = new Date(data.current.sunset * 1000).toLocaleTimeString();
                setSunrise(sunriseTime);
                setSunset(sunsetTime);

                const moonPhaseValue = data.daily[0].moon_phase;
                setMoonPhase(getMoonPhaseName(moonPhaseValue));
                setMoonPhaseIcon(getMoonPhaseIcon(moonPhaseValue));
            } catch (error) {
                console.error('Error fetching sun and moon data:', error);
            }
        };

        fetchSunAndMoonData();
    }, [city]);

    const getMoonPhaseName = (phase) => {
        if (phase === 0 || phase === 1) return 'New Moon';
        if (phase > 0 && phase < 0.25) return 'Waxing Crescent';
        if (phase === 0.25) return 'First Quarter';
        if (phase > 0.25 && phase < 0.5) return 'Waxing Gibbous';
        if (phase === 0.5) return 'Full Moon';
        if (phase > 0.5 && phase < 0.75) return 'Waning Gibbous';
        if (phase === 0.75) return 'Last Quarter';
        if (phase > 0.75 && phase < 1) return 'Waning Crescent';
        return 'Unknown';
    };

    const getMoonPhaseIcon = (phase) => {
        if (phase === 0 || phase === 1) return '🌑';
        if (phase > 0 && phase < 0.25) return '🌒';
        if (phase === 0.25) return '🌓';
        if (phase > 0.25 && phase < 0.5) return '🌔';
        if (phase === 0.5) return '🌕';
        if (phase > 0.5 && phase < 0.75) return '🌖';
        if (phase === 0.75) return '🌗';
        if (phase > 0.75 && phase < 1) return '🌘';
        return '❓';
    };

    return (
        <div className="sun-and-moon">
            <h2>Sun and Moon Information for {city}</h2>
            <p>Sunrise: {sunrise}</p>
            <p>Sunset: {sunset}</p>
            <div className="moon-phase">
                <span>Moon Phase: {moonPhase}</span>
                <span className="moon-phase-icon">{moonPhaseIcon}</span>
            </div>
        </div>
    );
};

export default SunAndMoon;
