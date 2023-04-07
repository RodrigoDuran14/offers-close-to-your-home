import React from 'react'
import styles from './CardCategory.module.css'
import { Link } from 'react-router-dom'

function CardCategory({nombre_categoria_producto, imagen_categoria_producto}) {
  const handlerCategory = () => {
    console.log("click");
  }

  return (
    <Link to="/home" onClick={handlerCategory}>
      <div className={styles.container}>
        <div className={styles.box1}>
          <h1>{nombre_categoria_producto}</h1>
        </div>
        <div className={styles.box}>
          <img src={imagen_categoria_producto} alt={nombre_categoria_producto} />
        </div>
      </div>
    </Link>
  )
}

export default CardCategory