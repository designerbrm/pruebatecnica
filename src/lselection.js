import lselection from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            welcome: "Welcome to Real Time",
            welcometocompany: "Welcome to our meteorological company. We are dedicated to providing accurate and reliable weather data to help people and organizations plan and make informed decisions based on weather conditions.",
            description: "Just one click",
            learnMore: "Learn More",
            home: "Home",
            wforecast: "Weather",
            about: "About",
            aboutus:"About us",
            misssion:"Our Mission",
            dmisssion:"Our mission is to provide high-quality weather information to improve the safety, efficiency and comfort of our users. We use advanced technology and predictive models to provide accurate and up-to-date forecasts.",
            contact: "Contact",
            weather: "Weather Forecast for", 
            wdetails:"Weather Details",
            sandmon: "Sunrise and Moon Phase for" ,
            sunrise:"Sunrise:",
            sunset: "Sunset:",
            moonphase: "Moon Phase:",
            city: "City",  
            name:"Name:" ,  
            datebirth: "Date of Birth:"  ,  
            cityname: "City name:",
            london:"London",
            phone:"Phone:",
            submit:"Submit",
            singapore: "Singapore",
            contactme: "Contact me",
            thankyou:"Thank you"
        }
    },
    es: {
        translation: {
            welcome: "Bienvenido a Tiempo Real",
            welcometocompany:"Bienvenidos a nuestra empresa meteorológica. Nos dedicamos a proporcionar datos meteorológicos precisos y confiables para ayudar a las personas y organizaciones a planificar y tomar decisiones informadas en función de las condiciones climáticas.",
            description: "A un solo click",
            learnMore: "Aprende Más",
            home: "Inicio",
            wforecast: "Clima",
            about: "Acerca de",  
            aboutus:"Sobre nosotros" , 
            misssion:"Nuestra misión" ,  
            dmisssion:"Nuestra misión es proporcionar información meteorológica de alta calidad para mejorar la seguridad, eficiencia y comodidad de nuestros usuarios.  Utilizamos tecnología avanzada y modelos predictivos para proporcionar pronósticos precisos y actualizados.",     
            weather: "Pronóstico del tiempo para",
            wdetails:"Detalles del clima",
            sandmon:"Salida del sol y fase lunar para",
            sunrise:"Amanecer:",
            sunset:"Atardecer:",
            moonphase: "Fase lunar:",
            city: "Ciudad",
            name:"Nombre:",
            datebirth: "Fecha de nacimiento:",
            cityname: "Nombre de la ciudad:",
            london: "Londres",
            phone:"Teléfono:",
            submit: "Enviar",
            singapore: "Singapur",
            contact: "Contacto",
            thankyou:"Gracias por contactar con nosotros!",
            contactme: "Contactame"
        }
    }
};

lselection
    .use(initReactI18next)
    .init({
        resources:resources,
        lng: 'en', 
        fallbackLng: 'en',
        interpolation: {
          escapeValue: false
        }
      });
export default lselection;