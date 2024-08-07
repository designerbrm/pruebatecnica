import React, { useState, useEffect } from 'react';
import './contactform.css';
import { useTranslation } from 'react-i18next';

const ContactForm = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        dob: '',
        city: '',
        email: '',
        phone: ''
    });

    const [isFormValid, setIsFormValid] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        const isValid = Object.values(formData).every(value => value.trim() !== '');
        setIsFormValid(isValid);
    }, [formData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        console.log('Form submitted:', formData);
    };

    return (
        <div className="contact-form">
            <h2>{t("contact")}</h2>
         {submitted ? (
                <div className="submission-message">{t("thankyou")}Thank you for contacting us!</div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <label>{t("name")}
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label> {t("datebirth")}
                    <input
                            type="date"
                            name="dob"
                            value={formData.dob}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>{t("cityname")}
                     <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label> {t("phone")}
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <button type="submit" disabled={!isFormValid} required={false}>{t("submit")}
                        
                    </button>
                </form>
            )}
        </div>
    );
};

export default ContactForm;
