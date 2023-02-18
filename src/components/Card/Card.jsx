import React, { useState, useEffect } from 'react';
import styles from './Card.module.css'
import { Link } from 'react-router-dom'
import { addCard, deleteCard} from '../../redux/actions/actions'
import { store } from '../../redux/store/store.js'
import { useSelector, useDispatch } from 'react-redux';


export default function Card(props) {
   const [ isFav, setIsFav] = useState(false)
   
   const myFavorites = useState(useSelector((state) => state.myFavorites))
   
   const [ Fav, setFav ] = useState({...myFavorites})


   const dispatch = useDispatch()

   const mapStateToProps = () =>{
      return store.getState().myFavorites
   }

   useEffect(() => { 
       mapStateToProps().forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [Fav,isFav]);

   const handleFavorite = () => {
    if(isFav === true){
      setIsFav(false);
      dispatch(props.deleteFavorite(props.id))
    }
    if(isFav === false){
      setIsFav(true);
      dispatch(props.addFavorite(props.pj))
    }
   }

   return (
      <div className={styles.divCard}>
      {/* <button onClick={mapDispatchToProps(props.dispatch).addCard}>❤️</button> */}
      {
   isFav ? (
      <button className={styles.Fav} onClick={handleFavorite}>❤️</button>   
   ) : (
      <button className={styles.Fav} onClick={handleFavorite}>🤍</button> 
   )
}
         <button className={styles.close} onClick={props.onClose}>X</button>

         <Link to={'/detail/' + props.id}><h2 className={styles.name}>{props.name}</h2></Link>

         <img className={styles.image} src={props.image} alt={props.name} />
         <span className={styles.speciesAndGender}>{props.species}    |    {props.gender}</span>

      </div>

   );
}

function mapDispatchToProps(dispatch){
   return {
      addCard: () => dispatch(addCard()),
      deleteCard: () => dispatch(deleteCard())
   }
}

