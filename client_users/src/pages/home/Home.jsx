
import React from 'react'
import Cards from '../../components/cards/Cards'
import Filter from '../../components/filter/Filter'
import styles from './Home.module.css'
import { useSelector } from 'react-redux'

function Home () {

  const productos = useSelector((state) => state.products)
  return (
    <div className= {styles.container}>
      <div className={styles.filtros}>
         <Filter/>
      </div>
      <section>
      <Cards/>
    </section>
    </div>
  )
}

export default Home