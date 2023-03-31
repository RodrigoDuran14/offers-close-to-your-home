import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '../searchBar/SearchBar'
import styles from './NavBar.module.css'

const NavBar = () => {
  return (
    <div className={styles.container}>
            
            <div className={styles.box2}>
                <div>
                    <Link to="/">            
                        <button className={styles.button}>Home</button>
                    </Link>
                </div>

                <div>
                    <Link to="/account">            
                        <button className={styles.button}>Cuenta</button>
                    </Link>
                </div>

                <div>
                    <Link to="/about">
                        <button className={styles.button}>Acerca de</button>
                    </Link>
                </div>
                
                <div className={styles.box1}>
                    <div>
                      <SearchBar />
                    </div>
                </div>

                <div>
                    <Link to="/login">            
                        <button className={styles.button}>Iniciar sesión</button>
                    </Link>
                </div>
                
                <div>
                    <button className={styles.button}>Cerrar sesión</button>
                </div>
            </div>
        </div>
  )
}

export default NavBar
