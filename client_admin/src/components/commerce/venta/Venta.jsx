import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Venta.module.css'


const Venta = () => {
  return (
    /*
    <Link to={`/detail/${id_producto}`} style={{ textDecoration: 'none' }}>
    <div className={styles.container}>
      <div style={{width: "100%", height:"55%"}}>
        <img src={imagen} alt={nombre} />
      </div>
      <h2>${valor_normal}</h2>
      <h3>{nombre}</h3>
      {<h3>{category.toUpperCase()}</h3> }
    </div>
    </Link> */
    <div className={styles.container}>
      <div className={styles.titulo}>
        <h3> Remera Lisa - Hombre </h3>
      </div>
      <hr style={{width: '70%', margin: '10px'}}/>
      <div>
        <img
          className={styles.img}
          src='https://d3ugyf2ht6aenh.cloudfront.net/stores/709/396/products/blanca-47bef727a421a95b0d16044339586089-640-0.jpg' />
      </div>
      <div className={styles.contenedorEstado}>
      </div>
    </div>
  )
}

export default Venta
