import React, { useState } from 'react';
import Banner from './banner';
import Sidebar from './sidebar';
import About from './About';
import WeatherForecast from './WeatherForecast';
import ContactForm from './ContactForm';
import './App.css';
import WeatherDetails from './WeatherDetails';
import SunAndMoon from './SunAndMoon';
import ContactMe from './ContactMe ';

const App = () => {
    const [selectedCity, setSelectedCity] = useState('London');
    const [showContactForm, setShowContactForm] = useState(false);
    const handleSelectCity = (city) => {
        setSelectedCity(city);
        setShowContactForm(false);
    };

    const handleSelectForm = () => {
        setShowContactForm(true);
    };
    
    return (
        <div className="app">
            <Sidebar selectedCity={selectedCity} onSelectCity={handleSelectCity} onSelectForm={handleSelectForm}
            />
            <div className="content">
                <Banner city={selectedCity} />
                {showContactForm ? (
                    <ContactForm />
                ) : (
                    <>
                        <WeatherForecast city={selectedCity} />
                        <WeatherDetails city={selectedCity} />
                        <SunAndMoon city={selectedCity} />                     
                        <About />
                        <ContactMe />
                        
                    </>
                )}
            </div>
        </div>

    );
};


export default App;



