import React from 'react'
import styles from './cardOfert.module.css'

function CardOfert({imagen, nombre}) {
  return (
    <div className={styles.container}>
      <img src={imagen} alt={nombre}/>
      <h2>{nombre}</h2>
    </div>
  )
}

export default CardOfert
