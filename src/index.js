import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { initializeApp } from "firebase/app";
import App from './App';
import reportWebVitals from './reportWebVitals';

const firebaseConfig = {
  apiKey: "AIzaSyDLtGsylRYYtPw99WPpMOmSHsOgkVDB4Fk",
  authDomain: "coder-react-pepi.firebaseapp.com",
  projectId: "coder-react-pepi",
  storageBucket: "coder-react-pepi.appspot.com",
  messagingSenderId: "601009034634",
  appId: "1:601009034634:web:307918641053b755e4a473",
  measurementId: "G-N9PL4NQVM3"
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
