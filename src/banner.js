import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage, faBars } from '@fortawesome/free-solid-svg-icons';
import './banner.css';

const Banner = ({ city }) => {
    const { t, i18n } = useTranslation();
    const [isLangMenuOpen, setLangMenuOpen] = useState(false);
    const [isPageMenuOpen, setPageMenuOpen] = useState(false);
    const currentLanguage = i18n.language;

    const toggleLangMenu = () => {
        setLangMenuOpen(!isLangMenuOpen);
        if (isPageMenuOpen) setPageMenuOpen(false);
    };

    const togglePageMenu = () => {
        setPageMenuOpen(!isPageMenuOpen);
        if (isLangMenuOpen) setLangMenuOpen(false);
    };

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setLangMenuOpen(false);
    };

    return (
        <div className="banner">
            <div className="banner-content">
                <h1>{t('welcome')}</h1>
                <p>{t('description')} - {city}</p>
                
            </div>
            <div className="menus">
                <div className="menu">
                    <button onClick={toggleLangMenu}>
                        <FontAwesomeIcon icon={faLanguage} />
                    </button>
                    {isLangMenuOpen && (
                        <ul className="dropdown-menu">
                            <li>
                                <button 
                                    onClick={() => changeLanguage('es')} 
                                    className={currentLanguage === 'es' ? 'selected' : ''}
                                >
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/320px-Flag_of_Spain.svg.png" alt="Español" className="flag-icon" />
                                    Español
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={() => changeLanguage('en')} 
                                    className={currentLanguage === 'en' ? 'selected' : ''}
                                >
                                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/320px-Flag_of_the_United_States.svg.png" alt="English" className="flag-icon" />
                                    English
                                </button>
                            </li>
                        </ul>
                    )}
                </div>
                <div className="menu">
                    <button onClick={togglePageMenu}>
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                    {isPageMenuOpen && (
                        <ul className="dropdown-menu">
                            <li><a href="#home">{t('home')}</a></li>
                            <li><a href="#about">{t('about')}</a></li>
                            <li><a href="#wforecast ">{t('wforecast')}</a></li>                            
                            <li><a href="#contactme">{t('contactme')}</a></li>
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Banner;
