import React from 'react'
import { useState } from 'react';
import styles from './SearchBar.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons"

const SearchBar = () => {
    const [input, setIinput] = useState("")
    const handleInput = (event) => {
      const value = event.target.value
      setIinput(value)
   }
  return (
    <div className={styles.container}>
         <input 
         className={styles.input}
         type="text" 
         name="search" 
         placeholder="Buscar oferta" 
         onChange={(e)=>handleInput(e)} 
         value={input}/>
         <button  type="submit" className={styles.button}>
          <FontAwesomeIcon icon={faSearch} />
         </button>
      </div>
  )
}

export default SearchBar
