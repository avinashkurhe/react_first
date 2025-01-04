import React from 'react';
import './index.css'
import ReactDOM from 'react-dom/client';
import './index.css';
// import App2 from './App2';
import reportWebVitals from './reportWebVitals';
// { BrowserRouter } from 'react-router-dom';
//import FormSpread from './formspred'
// import UncontrolEvent from './UncontrolEvent';
// import UncontrolEventfunction from './uncontroledeventfunction';
import Counter1 from './counter1';
 const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        {/* <BrowserRouter>
            <App1 />
        </BrowserRouter> */}

        <Counter1 />

        
    </>
);

reportWebVitals();
