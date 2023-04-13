import React from 'react'
import s from './cardOfert.module.css'

function CardOfert({imagen, nombre}) {
  return (
    <div className={s.container} style={{backgroundImage: `url(${imagen})`}}>
      <div className={s.text}>
        <h4 className={s.nombre}>{nombre}</h4>
      </div>
    </div>
  )
}

export default CardOfert
