import { useEffect, useState } from 'react'
import {Link, useParams} from "react-router-dom"
import { toast } from 'react-toastify';
import Contador from "./Contador"


const ItemDetailContainer = () => {

    const [item,setItem]= useState ({});
    const [loading,setLoading] = useState(true);
    const {id} = useParams()



    useEffect(()=> {
        const pedido = fetch(`https://rickandmortyapi.com/api/character/${id}`)

    pedido
        .then((respuesta)=>{
        return respuesta.json()

})
.then((character)=>{
setItem(character)

})
.catch(()=>{
toast.error('Hubo un error');

}) 
.finally (()=>{
setLoading(false)

})

    },[id])


    return (
        <h2>{item.name}</h2>
    )
}
export default ItemDetailContainer;