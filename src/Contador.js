import { useState } from "react";

const Contador = () => {
    
   let [dark,setDark] = useState(false)

    const toggleDarkMode = () => {
       setDark (!dark)
    }
    return (
<div>
    <h1>Contador</h1>
    <p>El tema del sitio es : {dark.toString()} </p>
    <p>Mi contador actual es : 0</p>
    <p>LA cantidad de prodcutos es : 0 </p>
    <button onClick={toggleDarkMode}>Clickeame</button>
<p>puto</p>
</div>

    )
} 
export default Contador ;