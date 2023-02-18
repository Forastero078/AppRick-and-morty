import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from './Detail.module.css';
import { Link } from 'react-router-dom';


export default function Detail() {
  const { detailId } = useParams();
  const [character, setCharacter] = useState([]);
  

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((character) => {
        if (character.name) {
          setCharacter(character);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);
  

  
return (
  <div className={styles.details}>
    <ul>
      <span><img style={{ border: 'solid white 5px', width: '300px',marginBottom: '70px' }} src={character.image} alt={character.name} /></span>
      <div className={styles.lista}>
        {(character.name && character.name.length < 11) && (
        <li className={styles.name}><b>{character.name}</b></li>)}
                {(character.name && character.name.length >= 11) && (
        <li className={styles.name2}>
          <b>{character.name}</b></li>
          )}
        <br />
        <li className={styles.texto} ><b>Status:          {character.status}</b></li>
        <br />
        <li className={styles.texto}><b>Specie: {character.species}</b></li>
        <br />
        <li className={styles.texto}><b>Gender: {character.gender}</b></li>
        <br />
        {(character.origin && character.origin.name.length < 20) && (
        <li className={styles.origin}>
          <b>Origin: {character.origin.name}</b></li>
          )}
          {(character.origin && character.origin.name.length >= 20) && (
        <li className={styles.origin2}>
          <b>Origin: {character.origin.name}</b></li>
          )}
        
      </div>
    </ul>
    <Link to={{pathname: '/home'}} className={styles.btnVolver}>Volver</Link>
  </div>
)

};