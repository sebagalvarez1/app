import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Contador from "./ItemCount";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [seleccionado, setSeleccionado] = useState(false);

  useEffect(() => {
    const pedido = fetch(`https://rickandmortyapi.com/api/character/${id}`);

    pedido
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((character) => {
        setItem(character);
      })
      .catch(() => {
        toast.error("Hubo un error");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);
  const onAdd = (unidadSeleccionada) => {
    console.log("On Add desde el itemdetailcontainer");
    if (unidadSeleccionada != undefined) {
      setSeleccionado(unidadSeleccionada);
    }
  };
  return (
    <div>
      <h2>{item.name}</h2>

      <Contador initial={1} stock={5} onAdd={onAdd} />

      <p>
        {seleccionado
          ? "ya se selecciono algo!"
          : "no se eligio ninguna cantidad"}
      </p>
      {seleccionado ? <Link to="/carrito">Carrito</Link> : null}
    </div>
  );
};

export default ItemDetailContainer;
