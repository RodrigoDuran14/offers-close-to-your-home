
import React from 'react'
import Cards from '../../components/cards/Cards'
import styles from './Home.module.css'

function Home () {
  return (
    <div className= {styles.container}>
      <section>
      <Cards/>
    </section>
    </div>
  )
}

export default Home