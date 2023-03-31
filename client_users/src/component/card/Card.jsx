import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Card.module.css'

const Card = ({title, price, image, id}) => {
  return (
    <Link to={`/detail/${id}`}>
      <div className={styles.container}>
        <div style={{width: "100%", height:"55%"}}>
          <img src={image} alt={title} />
        </div>
        <h2>${price}</h2>
        <h3>{title}</h3>
      </div>
    </Link>  
  )
}

export default Card
