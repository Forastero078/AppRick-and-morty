import Card from '../Card/Card.jsx';
import styles from './Cards.module.css'


export default function Cards(props) {
   const { characters } = props;


   return (<div className={styles.Cards}>
      {characters.map(e => <span><Card
         pj={e}
         addFavorite={props.add}
         deleteFavorite={props.delete}
         id={e.id}
         key={e.id}
         name={e.name}
         species={e.species}
         gender={e.gender}
         image={e.image}
         onClose={() => props.onClose(e.id)} /></span>)}
   </div>)
}
