import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './sunandmoon.css';
import { useTranslation } from 'react-i18next';

const SunAndMoon = ({ city }) => {
    const [sunData, setSunData] = useState(null);
    const { t, i18n } = useTranslation();

    useEffect(() => {
        const fetchSunData = async () => {
            const apiKey = 'eff8577af77aeec857c28306364b46b2';
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
            const response = await axios.get(url);
            setSunData(response.data);
        };
        
        fetchSunData();
    }, [city,i18n.language]);


    if (!sunData) {
        return <div>Loading...</div>;
    }

    const sunrise = new Date(sunData.sys.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const sunset = new Date(sunData.sys.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    return (
        <div className="sun-and-moon">
            <h2>{t("sandmon")} {city}</h2>
            <div className="sun-info">
                <div><b>{t("sunrise")} </b>{sunrise}</div>
                <div><b>{t("sunset")} </b> {sunset}</div>
            </div>         
             
                   </div>
    );
};

export default SunAndMoon;
