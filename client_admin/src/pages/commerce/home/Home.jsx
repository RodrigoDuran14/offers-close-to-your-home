import React from 'react'
import Ventas from "../../../components/commerce/ventas/Ventas"
import Products from '../../../components/commerce/products/Products'
// Import Components
// Import Estilos
import style from "./Home.module.css"

function Home () {

  return (
    <div className= {style.container}>
      <div className={style.ventas}>
<Ventas />
<Products />



      </div>
    </div>
  )
}

export default Home