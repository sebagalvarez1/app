const Item = ({producto}) => {
    return ( 
        <div>
            <p>{producto.nombre}</p>
            <p>Precio : {producto}</p>
        </div>
    )
}
export default Item ; 