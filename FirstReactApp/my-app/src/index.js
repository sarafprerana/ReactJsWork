import React from 'react';
import ReactDOM from 'react-dom/client';
// import Addform from './Components/Addform';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
// import Anew from './Components/Anew';
 import Form1 from './Components/Form1';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Anew/> */}
    {/* <Form /> */}
    {/* <Addform /> */}
    <Form1 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
