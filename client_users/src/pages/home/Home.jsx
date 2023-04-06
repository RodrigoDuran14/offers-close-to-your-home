
import React from 'react'
import Cards from '../../components/cards/Cards'
import Filter from '../../components/filter/Filter'

import styles from './Home.module.css'
import Footer from '../../components/footer/Footer'

function Home () {


  // const productos = useSelector((state) => state.products)
  return (
    <section>

    <div className= {styles.container}>
      <div className={styles.filtros}>
         <Filter/>
      </div>
      <div>
        <Cards/>
      </div>
      <div>
      <Footer/>
      </div>
    </div>
    </section>

  )
}

export default Home