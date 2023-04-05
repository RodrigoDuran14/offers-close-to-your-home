import React from 'react'
import styles from './Card.module.css'
import { Link } from 'react-router-dom'


const Card = ({producto}) => {
  console.log(producto);
const {nombre,valor_normal,imagen,id_producto}=producto;
  return (
    <Link to={`/detail/${id_producto}`} style={{ textDecoration: 'none' }}>
    <div className={styles.container}>
      <div style={{width: "100%", height:"55%"}}>
        <img src={imagen} alt={nombre} />
      </div>
      <h2>${valor_normal}</h2>
      <h3>{nombre}</h3>
      {/* <h3>{category.toUpperCase()}</h3> */}
    </div>
    </Link> 
  )
}

export default Card
