
import React from 'react'
import Cards from '../../components/cards/Cards'
// import Filter from '../../components/filter/Filter'
import styles from './Home.module.css'
<<<<<<< HEAD

import Sidebar from "../../components/sideBar/Sidebar.jsx"

=======
import Footer from '../../components/footer/Footer'
import Slider from '../../components/slider/Slider'
>>>>>>> be220d67735be95887180db1403c66de96bfa5b6

function Home () {


  // const productos = useSelector((state) => state.products)
  return (
<<<<<<< HEAD
    <section className={styles.section}>
      <div className={styles.sidebar}>
       <Sidebar/>
=======
    <section>

    <div className= {styles.container}>
      <div className={styles.filtros}>
        <Slider />
>>>>>>> be220d67735be95887180db1403c66de96bfa5b6
      </div>
    
   
      <div className={styles.cards}>
        <Cards/>
      </div>
    
    </section>

  )
}

export default Home