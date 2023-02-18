import React from "react";
import { useState } from "react";
import styles from './SearchBar.module.css';

export default function SearchBar(props, { target }) {
   const [ search, setSearch ] = useState('Buscar por ID');
   
   const handleInputChange = ( { target } ) => {
      setSearch(target.value)
   };
   return (
      <div className={styles.searchBar}>
         <input className={styles.inpuT} 
         type='search'  
         value={search} 
         onChange={handleInputChange} />
      <button onClick={props.onSearch} className={styles.search}>Agregar</button>
      <button onClick={props.onSearchR} className={styles.searchR}>Random</button>
      </div>
   );
}
