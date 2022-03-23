import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"
import NavBar from "./NavBar"
import Contador from "./Contador"
import { ToastContainer } from "react-toastify"

function  App() {
    return (
<>
        <Header/>
        <Footer/>
        <Main nombre='Sebastian' apellido= 'Alvarez'/>
        <NavBar/>
        <ToastContainer />
       
</>

    )
}
export default App ;