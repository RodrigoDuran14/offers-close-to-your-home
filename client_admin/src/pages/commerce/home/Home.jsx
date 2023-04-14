import React from 'react'
import Cards from "../../components/cards/Cards.jsx"
// Import Components
// Import Estilos
import style from "./Home.module.css"

function Home () {

  return (
    <div className= {style.container}>
      <div className={style.ventas}>
        <Cards />
      </div>
    </div>
  )
}

export default Home