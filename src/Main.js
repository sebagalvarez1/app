import {useState} from 'react'
const contador = 0 ;
const Main = (props) =>{

    
    const [contador,setContador]= useState(0);

    const handleClick = () => {
        setContador (contador + 1);


    }
    const restar= ()=> {
        setContador (contador - 1);
    }
    const resetear= () => {
        setContador(0);
    }
    
    return (       
        <main className= 'container'>
                 <p>Mi contador actual :{contador}</p>
            <button onClick={handleClick}>Aumentar</button>
            <button onClick={restar}>Restar</button>
            <button onClick={resetear}>Resetear</button>
            
            </main>
    
        )
}

export default Main;