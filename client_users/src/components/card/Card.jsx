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
      <h4 className={styles.vNormal}>${valor_normal}</h4>
      <h4 className={styles.flecha}>→</h4>
      <h4 className={styles.vDescuento}>${valor_con_descuento}</h4>
      </div>
      <div className={styles.text}>
      <span>{nombre}</span>
      <span>{Categoria_producto.nombre_categoria_producto}</span>
      </div>
      
    </div>
    </Link> 
  )
}

export default Card
