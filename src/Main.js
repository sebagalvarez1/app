import ItemListContainer from "./components/ItemListContainer";
import { toast } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import Carrito from "./components/Cart";
import ItemDetailContainer from "./components/ItemDetailContainer";

const Main = (props) => {
  return (
    <main className="container">
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categoria/:id" element={<ItemListContainer />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/character/:id" element={<ItemDetailContainer />} />
      </Routes>
    </main>
  );
};

export default Main;
