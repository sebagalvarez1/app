import Item from "./Item";

const ItemDetail = ({productos}) => {
return (
    
     <ul>
          {productos.map((producto)=> {
              return <item key={producto.id} producto={producto} />
          })}
           </ul> 
           
)
}
export default ItemDetail ; 