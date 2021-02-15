import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../src/pages/home"
import Mascotas from "../src/pages/Mascotas/index"
import Refugios from "../src/pages/Refugios/index"

ReactDOM.render(
  <Router>
    <Route exact path="/" component={Home} />
    <Route exact path="/mascotas" component={Mascotas} />
    <Route exact path="/refugios" component={Refugios} />

  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
