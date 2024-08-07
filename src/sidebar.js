import React, { useState } from 'react';
import './sidebar.css';
import { useTranslation } from 'react-i18next';

const Sidebar = ({ selectedCity, onSelectCity, onSelectForm, classeffect }) => {
    const [activeItem, setActiveItem] = useState('city');
    const { t, i18n } = useTranslation();
    const handleSelect = (item) => {
        setActiveItem(item);
        if (item === 'contact') {
            onSelectForm();
        } else {
            onSelectCity(item);
            setActiveItem(item);
        }
    };

    return (
        <div className="sidebar">
            <h2>{t("city")}</h2>

            <ul>
                <li>
                    <button
                        className={activeItem === 'London' ? 'active' : ''}
                        onClick={() => handleSelect('London')}
                    >{t("london")}

                    </button>
                </li>
                <li>
                    <button
                        className={activeItem === 'Toronto' ? 'active' : ''}
                        onClick={() => handleSelect('Toronto')}
                    >
                        Toronto
                    </button>
                </li>
                <li>
                    <button
                        className={activeItem === 'Singapore' ? 'active' : ''}
                        onClick={() => handleSelect('Singapore')}
                    >
                        {t("singapore")}
                    </button>
                </li>
                <li>
                    <button
                        className={activeItem === 'contact' ? 'active' : ''}
                        onClick={() => handleSelect('contact')}
                    >
                        {t("contact")}
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
