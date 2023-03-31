import React from 'react'
import Card from '../card/Card'
import styles from './Cards.module.css'

const Cards = ({products}) => {
  return (
    <div className={styles.container}>
      {products?.map(product => {
        return(
        <Card
        id={product.id}
        title={product.title}
        price={product.price}
        description={product.description}
        category={product.category}
        image={product.image}/>)
      })}
    </div>
  )
}

export default Cards
