import ItemListContainer from "./ItemListContainer"
const Main = (props) =>{
      
       
 
    return (       
        <main className= 'container'>
            <h2>Bienvenido {props.nombre} {props.apellido}!</h2>
        <ItemListContainer />
        </main>
    
        );
}

export default Main;