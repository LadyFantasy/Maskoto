import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/home";
import Mascotas from "../src/pages/Mascotas/index";
import Refugios from "../src/pages/Refugios/index";
import Perros from "../src/pages/Perros"
import Gatos from "../src/pages/Gatos"

ReactDOM.render(
  <Router>
    <Route exact path="/" component={Home} />
    <Route exact path="/mascotas" component={Mascotas} />
    <Route exact path="/refugios" component={Refugios} />
    <Route exact path="/perros" component={Perros} />
    <Route exact path="/gatos" component={Gatos} />
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
