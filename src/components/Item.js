import React from 'react';
import {Link} from "react-router-dom"
const Item = ({producto}) => {
    return ( 
        <div>
            <h2>{producto.name}</h2>
            <img src="{producto.image}" alt="" />
            <p>Especie: ${producto.species}</p>
            <p>Estado: {producto.status}</p>
            <button>
                <Link to={`/character/${producto.id}`}>ver detalle</Link>
            </button>
        </div>
    )
}
export default Item ; 