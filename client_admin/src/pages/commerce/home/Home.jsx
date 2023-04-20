import React from 'react'
import Ventas from "../../../components/commerce/ventas/Ventas"
import Products from '../../../components/commerce/products/Products'
// Import Components
// Import Estilos
import style from "./Home.module.css"
import Cookies from "js-cookie";


function Home () {
  const session = Cookies.get("commerce_session");

  return (
    <>
      {session?
        <div className= {style.container}>
      <div className={style.ventas}>
<Ventas />
<Products />


     
      </div>
      </div>: <p>no hay nada pa </p>
}
   
    </>

  )
  
}

export default Home