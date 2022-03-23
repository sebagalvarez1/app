import {useState, useEffect} from 'react'
import ItemDetail from "./ItemDetail"

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


const ItemDetailContainer = () => {
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
               
    })
    .finally (()=> {
        setLoading(false)
    })
},[])
return (
    <>
    <p>{loading ? "cargando..." : "Ya tenes los productos"}</p>
    
    <ItemDetail productos={productos} />
    </>
)  }
export default ItemDetailContainer ;
