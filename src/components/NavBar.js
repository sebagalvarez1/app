import { Link } from "react-router-dom";

const  NavBar = () => {
    return (
        <nav id="nav">
            <Link to='/link/1'>Home</Link>
            <Link to='/link/2'>Menu</Link>
            <Link to='/link/3'>About Us</Link>
            <Link to='/carrito'>Carrito</Link>
        </nav>
    );
};

export default NavBar;