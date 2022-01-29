import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router} from 'react-router-dom';


// import 'bootstrap/dist/css/bootstrap.min.css';


import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import Backend from 'i18next-http-backend';
import translationEN from '../src/assets/locales/en/translationEN.json'
import translationFR from '../src/assets/locales/fr/translationFR.json'



const resources = {
  en: {
    translation: translationEN
  },
  fr: {
    translation: translationFR
  },
};


i18n
.use(initReactI18next) 
.use(LanguageDetector)
.use(HttpApi)
// .use(Backend)
.init({
  supportedLngs: ['en', 'fr'],
  detection: {
    order: ['cookie', 'htmlTag', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
    caches: ['cookie'],
  },  
  resources,
  fallbackLng: "en",
  debug: true,
  // backend: {
  //   loadPath: '/assets/locales/{{lng}}/translation.json',
  // },
  react: {useSuspense: false},
});


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
