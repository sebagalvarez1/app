import ItemDetailContainer from "./ItemDetailContainer"
const Main = (props) =>{
      
       
 
    return (       
        <main className= 'container'>
            <h2>Bienvenido {props.nombre} {props.apellido}!</h2>
        <ItemDetailContainer />
        </main>
    
        );
}

export default Main;