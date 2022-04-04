import { useState, useContext } from "react";


const Contador = ({ stock, initial, onAdd }) => {

  const [contador, setContador] = useState(initial);

      
  const handleAumentar = (e) => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const handleDisminuir = (e) => {
    if (contador > initial) {
      setContador(contador - 1);
    }
  };
   
  const handleConfirmar = (e) => {
    console.log(e);
    onAdd(Contador);
  };

  return (
    <div>
      <h1>Contador</h1>
      <p>Mi contador actual es :{contador}</p>
      <button onClick={handleAumentar}>Aumentar</button>
      <button onClick={handleDisminuir}>Disminuir</button>
      <button onClick={handleConfirmar}>Confirmar</button>
    </div>
  );
};

export default Contador;
