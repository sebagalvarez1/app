import React, { useContext } from "react";
import "./estilos.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./Main";
import NavBar from "./components/NavBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
import MiProvider from "./components/CartContext"




function App() { 
  return (
  <MiProvider>
    <BrowserRouter>
      <NavBar />
      <Header />
      <Footer />
      <Main nombre="Sebastian" apellido="Alvarez" />
      <ToastContainer />
    </BrowserRouter>
  </MiProvider> 
  );
}
export default App;
