import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Logo from './components/scripts/Logo';
import Page1 from "./components/scripts/Page1";
import Page2 from "./components/scripts/page2";
import Page3 from "./components/scripts/Page3";
import Page4 from "./components/scripts/page4";
import Page5 from "./components/scripts/page5";
import Page6 from "./components/scripts/page6";
import Page7 from "./components/scripts/page7";
import Page8 from "./components/scripts/page8";
import PagesRenderer from "./components/scripts/PagesRenderer";


ReactDOM.render(
  <React.StrictMode>
    {<PagesRenderer />}



  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
