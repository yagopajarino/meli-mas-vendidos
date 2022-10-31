import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Home from "./rutas/Home";
import Game from "./rutas/Game";
import Puntajes from "./rutas/Puntajes";
import Highscore from "./rutas/Highscore";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename="/meli-mas-vendidos">
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/jugar" element={<Game />} />
        <Route path="/highscore" element={<Highscore />} />
        <Route path="/puntajes" element={<Puntajes />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
