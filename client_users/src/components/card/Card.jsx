import React from 'react'
import styles from './Card.module.css'

const Card = ({producto}) => {
const {nombre,valor_normal,imagen,valor_con_descuento}=producto;
  return (
    <div className={styles.container}>
      <div style={{width: "100%", height:"55%"}}>
        <img src={imagen} alt={nombre} />
      </div>
      <h2>${valor_normal}</h2>
      <h2>${valor_con_descuento}</h2>
      <h3>{nombre}</h3>
      {/* <h3>{category.toUpperCase()}</h3> */}
    </div>
  )
}

export default Card
