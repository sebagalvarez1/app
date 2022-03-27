import React from 'react';
import './estilos.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import Main from "./Main"
import NavBar from "./components/NavBar"
import Contador from "./components/Contador"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter} from 'react-router-dom';


function  App() {
    return (
    <BrowserRouter>
    
          <NavBar/> 
          <Header/> 
          <Footer/> 
          <Main nombre='Sebastian' apellido= 'Alvarez'/>
           
         <ToastContainer />
    </BrowserRouter>


    )
}
export default App ;