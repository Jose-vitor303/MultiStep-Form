import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { GlobalStyle } from './components/GlobalStyle';
import App from './App';
import Confirmed from './pages/Confirmed/Confirmed';
import PickAdd from './pages/PickAdd/PickAdd';
import Plan from './pages/Plans/Plan';
import Summary from './pages/Summary/Summary';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/choice-plan" element={<Plan/>}/>
      <Route path="/pick-add-on" element={<PickAdd/>}/>
      <Route path="/summary" element={<Summary />} />
      <Route path="/confirm" element={<Confirmed />} />
    </Routes>
    <GlobalStyle />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
