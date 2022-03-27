import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ItemList from "./ItemList"
import {toast} from 'react-toastify';



const ItemListContainer = () => {
    const [productos,setProductos] = useState([])
    const [loading,setLoading] = useState(true)
     const {id} = useParams()


useEffect(()=>{

  
    const pedido = fetch ("https://rickandmortyapi.com/api/character")

      pedido
        .then((respuestaDeLaApi) => {
        //setProductos(respuestaDeLaApi);
     
     return respuestaDeLaApi.json()
      })
      
      .then((datos) => { 
        const resultado = datos.results.map((dato)=> {
            return fetch(dato.url)
        })  

     return Promise.all(resultado)

    })  

    .then((datos)=> {
        const resultado = datos.map((response) => { 
            return response.json()
        })
       
        return Promise.all(resultado)
    })
    .then((characters)=>{
        if(id){
                    
        }else{
            setProductos(characters)
        }
    })
    .catch((errorDeLaApi) => {
        toast.error('Error al cargar los productos.')
               
    })


    .finally (() => {
        setLoading(false)
    })  

},[id])


return (
    <>
    <p>{loading ? "cargando..." : "Ya tenes los productos"}</p>
    
    <ItemList productos={productos} />
    </>
)  }
export default ItemListContainer ;
