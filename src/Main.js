import {useState, useEffect} from 'react'
const contador = 0 ;
let productos = [
    {
    id:1 ,
    nombre: 'Producto 1',
    precio: 100
},
{
    id:2 ,
    nombre: 'Producto 2',
    precio: 100
},
{
    id:3 ,
    nombre: 'Producto 3',
    precio: 100
}
]   
let productosIniciales = [
    {
    id:1 ,
    nombre: 'Producto 1',
    precio: 100
},
{
    id:2 ,
    nombre: 'Producto 2',
    precio: 100
},
{
    id:3 ,
    nombre: 'Producto 3',
    precio: 100
}
]   
const Main = (props) =>{

const [loading,setLoading] = useState(true)
const [productos,setProductos] = useState([])
  
useEffect(()=>{

    const promesa = new Promise((res,rej)=> {
        setTimeout(()=> {
            res(productosIniciales)
           
        },2000)
    })


    promesa.then((respuestaDeLaApi)=>{
        setProductos(productosIniciales);
        
    })
    .catch((errorDeLaApi)=>{
        console.log(errorDeLaApi)
       // setError('Hubo un error al cargar los datos.')
        
    })
    .finally (()=> {
        setLoading(false)
    })


    
    console.log(promesa)
    
    console.log(productos)
       
    })
    return (       
        <main className= 'container'>
            <p>{loading ? "cargando..." : "Ya tenes los productos"}</p>
            
            <ul>
          {productos.map((producto,indice)=> {
              return <li>{producto.nombre}</li>
          })}
           </ul>
            
            </main>
    
        )
}

export default Main;