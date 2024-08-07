import React from 'react';
import './about.css';
import { useTranslation } from 'react-i18next';

const AboutUs = () => {
    const { t } = useTranslation();
    return (
        <div className="about" id="about">
            <h1>{t("aboutus")}</h1>
            <p>{t("welcometocompany")}
            Welcome to our meteorological company. We are dedicated to providing accurate and reliable
            weather data to help people and organizations plan and make informed decisions based on weather conditions.
            </p>
            <h2>{t("misssion")}</h2>
            <p>{t("dmisssion")}
            Our mission is to provide high-quality weather information to improve the safety, efficiency and comfort of our users. 
            We use advanced technology and predictive models to provide accurate and up-to-date forecasts.
            </p>
                     </div>
    );
};

export default AboutUs;
