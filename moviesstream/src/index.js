import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/content.css';
import './styles/leftsidebar.css';
import './styles/rightsidebar.css';
import './styles/moviecard.css';
import './styles/navbar.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

