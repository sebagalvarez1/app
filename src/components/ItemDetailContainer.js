import { useEffect, useState,useContext } from "react";
import { Link, useParams , useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Contador from "./ItemCount";
import { contexto } from "./CartContext";
import { getDoc , collection , doc , where , query , getDocs } from "firebase/firestore"

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [seleccionado, setSeleccionado] = useState(false);
  const {agregarProducto} = useContext (contexto);
  const navigate= useNavigate()

  useEffect(() => {


    const productsCollection = collection(db, "productos")
    const miFiltro = query(productsCollection,where("id","==",Number(id)))
    const documentos = getDocs(miFiltro)

    documentos
    .then(respuesta => setItem(respuesta.docs.map(doc=>doc.data())[0]))
    .catch(error => toast.error("Error al obtener los productos"))
    .finally(() => setLoading(false))

   
  },[id])
  
   const onAdd = (unidadSeleccionada) => {
    console.log("On Add desde el itemdetailcontainer");
    if (unidadSeleccionada != undefined) {
      setSeleccionado(unidadSeleccionada);
    }
   }
   const handleClick = (e) => {
    e.preventDefault()
    console.log("Click del Link/Boton")
    agregarProducto(item,seleccionado)
    navigate("/carrito");
  }
   return (
    <div>
      <h2>{item.name}</h2>

      <Contador initial={1} stock={5} onAdd={onAdd} />

      <p>
        {seleccionado
          ? "ya se selecciono algo!"
          : "no se eligio ninguna cantidad"}
      </p>
      {seleccionado ? <Link onClick={handleClick} to="/carrito">carrito</Link> : null}
    </div>
  );
        }
      


export default ItemDetailContainer;
