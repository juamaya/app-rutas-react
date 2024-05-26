import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"


import NavBar from "./componentes/navegacion/NavBar"
import Inicio from "./componentes/paginas/Inicio";
import A from "./componentes/paginas/A";
import B from "./componentes/paginas/B";
import C from "./componentes/paginas/C";
import D from "./componentes/paginas/D";
import Footer from "./componentes/paginas/Footer";


import "./App.css";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
     

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/A" element={<A />} />
          <Route path="/B" element={<B />} />
          <Route path="/C" element={<C />} />
          <Route path="/D" element={<D />} />
        </Routes>

      </BrowserRouter>

      <Footer />
    </>
  );
}

