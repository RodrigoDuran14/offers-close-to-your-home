import React from 'react'
import styles from './Card.module.css'

const Card = ({title, price, category, image}) => {
  return (
    <div className={styles.container}>
      <div style={{width: "100%", height:"55%"}}>
        <img src={image} alt={title} />
      </div>
      <h2>${price}</h2>
      <h3>{title}</h3>
      <h3>{category.toUpperCase()}</h3>
    </div>
  )
}

export default Card
