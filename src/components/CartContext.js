import { createContext, useState } from "react";
export const contexto = createContext();
const { Provider } = contexto;

const MiProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);
  const [cantidadActual,setCantiudadActual] = useState(0)


  const agregarProducto = (producto,cantidad) => {
    setCarrito([...carrito,{...item,cantidad}])
    setTotal(total + item.precio * cantidad)
    setCantidadActual(cantidadActual + cantidad)
       
  }
const borrarProducto = (id) => {
  console.log('borrando desde el provider',id)
  console.log(id)


}



const clear = () => {
    setCarrito([])
}

const isInCart = (id) => {

}
  const valorDelContexto = {
    carrito,
    borrarProducto,
    agregarProducto,
    total
  };
  return (
<Provider value={valorDelContexto}>{children}</Provider>
  )
  
  
};
export default MiProvider;

   



























/* carrito : [{
    id: 1,
    titulo : "Libro 1 ",
    precio : 100 ,
    cantidad: 2,
    descripcion: "Descripcion del libro 1"
    
},{
    id: 2,
    titulo : "Libro 2 ",
    precio : 200 ,
    cantidad: 1,
    descripcion : "Descripcion del libro 2"


}],


total : 0 */
