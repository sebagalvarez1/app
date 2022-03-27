import {Link} from 'react-router-dom';
import NavBar from './NavBar'

function Header (){
    return (
    <header className='header' id='main-header'>
            
                <Link to='/'>
                    <h1>Rick y Morty</h1>
                </Link>
                <NavBar/>
           
    </header> 
    );
}

export default Header;