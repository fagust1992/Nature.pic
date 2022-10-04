import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Favoritos from "./Paginas/Favoritos";
import Home from "./Paginas/Home";
import NotFonund from "./Paginas/NotFound";
import Context from "./Context";
import NavBar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [fotos, setFotos] = useState([]);
  const globalfotos = { fotos, setFotos };
  const url = "/fotos.json";
  const consultarInformacion = async (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const datafotos = data.photos;

        setFotos(datafotos);
      })

      .catch((error) => console.log(error));
  };
  useEffect(() => {
    consultarInformacion(url);
  }, []);

  return (
    <div className="App">
      <Context.Provider value={globalfotos}>
        <BrowserRouter>
          <NavBar />
          <div className="container">
            <Routes>
              <Route path="/favoritos" element={<Favoritos />} />
              <Route path="/" element={<Home />} />
              <Route path="/*" element={<NotFonund />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

export default App;
