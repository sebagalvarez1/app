import { useContext } from "react";
import { contexto } from "./CartContext";
import { addDoc , collection , serverTimestamp } from "firebase/firestore"

const Carrito = () => {
  
  const {carrito,removeItem,total} = useContext(contexto)
    

  const handleClick = () => {
    const orden = { 
      buyer : {
          nombre :"Sebastian",
          telefono :"297585500",
          email : "sebagalvarez1@hotmail.com"
      },
      items : carrito,
      date: serverTiemstamp(),
      total : total
    }
    const ordenesCollection = collection(db, "ordenes")
    const pedido = addDoc(ordenesCollection,orden)
    pedido
        .then(res=>{
            console.log(res.id)
        })
  }
  return (
    <>
      <h2>Carrito</h2>
      {
      carrito.map((producto) => (
        <div key={producto.id}>
          <h3>{producto.titulo}</h3>
          <p>{producto.descripcion}</p>
          <p>{producto.precio}</p>
          <p>{producto.cantidad}</p>
          <p>
            {producto.precio} x {producto.cantidad}
          </p>
          <p>Total : $ {producto.precio * producto.cantidad}</p>
          <button onclick={()=>removeItem(producto.id)}>Borrar producto</button>
        </div>
      ))}
    </>
  );
};

export default Carrito;
