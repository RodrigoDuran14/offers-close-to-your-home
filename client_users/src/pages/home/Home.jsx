
import React from 'react'
import Cards from '../../components/cards/Cards'
// import Filter from '../../components/filter/Filter'
import styles from './Home.module.css'

import Sidebar from "../../components/sideBar/Sidebar.jsx"


function Home () {


  // const productos = useSelector((state) => state.products)
  return (
    <section className={styles.section}>
      <div className={styles.sidebar}>
       <Sidebar/>
      </div>
    
   
      <div className={styles.cards}>
        <Cards/>
      </div>
    
    </section>

  )
}

export default Home