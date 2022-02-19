import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

import { CSSPlugin } from 'gsap/CSSPlugin'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from 'gsap';

gsap.registerPlugin(CSSPlugin)
if (typeof window !== 'undefined') {
  gsap.registerPlugin(
    ScrollTrigger
  );

  gsap.core.globals("ScrollTrigger", ScrollTrigger);
  ScrollTrigger.config({ limitCallbacks: true });
}


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
