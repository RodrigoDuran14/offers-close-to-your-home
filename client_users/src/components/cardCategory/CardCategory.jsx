import React from 'react'
import styles from './CardCategory.module.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getProductByCategory } from '../../redux/actions';

function CardCategory({nombre_categoria_producto, imagen_categoria_producto}) {//cosmetica
    const dispatch = useDispatch();
  const handlerCategory = () => {
    dispatch(getProductByCategory(nombre_categoria_producto))
  }
 

  return (
    <Link className={styles.link} to="/home" onClick={handlerCategory} >
      <div className={styles.container} >
        <div className={styles.box1}>
          <h1>{nombre_categoria_producto}</h1>
        </div>
        <div className={styles.box}>
          <img src={imagen_categoria_producto} alt={nombre_categoria_producto} />
          <span>ver mas...</span>
        </div>
        <div className={styles.box}>
          </div>
      </div>
    </Link>
  )
}

export default CardCategory