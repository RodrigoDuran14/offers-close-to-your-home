import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../card/Card'
import styles from './Cards.module.css'

const Cards = ({products}) => {
  // const { products } = useSelector(state => state)
  // console.log(products);
  return (
    <div className={styles.container}>
      {products?.map((product, index) => {
        return(
        <Card
        key={index}
        id={product.id_producto}
        title={product.nombre}
        price={product.valor}
        image={product.imagen}/>)
      })}
    </div>
  )
}

export default Cards
