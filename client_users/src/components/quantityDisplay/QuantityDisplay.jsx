import React from 'react'
import styles from './QuantityDisplay.module.css'

function QuantityDisplay ({onDecrease, onIncrease, quantity}) {
  return (
    <div className={styles.container}>
        <button onClick={onDecrease}>-</button>
        <span>{quantity}</span>
        <button onClick={onIncrease}>+</button> 
    </div>
  )
}

export default QuantityDisplay
