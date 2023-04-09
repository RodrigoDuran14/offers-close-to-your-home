import React from 'react'
import styles from './Card.module.css'
import { Link } from 'react-router-dom'


const Card = ({producto}) => {
const {nombre, valor_normal,valor_con_descuento, imagen, id_producto, Categoria_producto}=producto;
  return (
    <Link className={styles.link} to={`/detail/${id_producto}`}>
    <div className={styles.container}>
      <div className={styles.img}>
        <img src={imagen} alt={nombre} />
      </div>
      <div className={styles.precios}>
      <h2 className={styles.vNormal}>${valor_normal}</h2>
      <h2 className={styles.flecha}>→</h2>
      <h2 className={styles.vDescuento}>${valor_con_descuento}</h2>
      </div>
      <h3>{nombre}</h3>
      <h3>{Categoria_producto.nombre_categoria_producto.toUpperCase()}</h3>
    </div>
    </Link> 
  )
}

export default Card
