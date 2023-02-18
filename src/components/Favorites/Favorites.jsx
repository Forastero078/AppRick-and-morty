import { useEffect, useState } from 'react'
import Card from '../Card/Card'
import { useDispatch } from 'react-redux'
import { orderCards, filterCards } from '../../redux/actions/actions';
import { useSelector } from 'react-redux';
import styles from './Favorites.module.css'






export function Favorites(props) {
    //const [ Fav, setFav ] = useState(useSelector((state) => state.myFavorites))

    const dispatch = useDispatch();

    const myFavorites = useSelector((state) => state.myFavorites)

    const mapStateToProps = () => {
        return props.store.getState().myFavorites
    }


    return (
        <div>
            <div className={styles.margin}>
                <select className={styles.select} onChange={(e) => dispatch(orderCards(e.target.value))}>                             //probar funcion flecha tambien
                    {['Ascendente', 'Descendente'].map((e, i) => (<option value={e} key={i}>{e}</option>))}
                </select>
                <select className={styles.select} onChange={(e) => dispatch(filterCards(e.target.value))}>
                    {['Male', 'Female', 'Genderless', 'unknown'].map((e, i) => (<option value={e} key={i}>{e}</option>))}
                </select>
            </div>
            {myFavorites.map(e => <Card
                pj={e}
                addFavorite={props.add}
                deleteFavorite={props.delete}
                id={e.id}
                key={e.id}
                name={e.name}
                species={e.species}
                gender={e.gender}
                image={e.image}
            />)}

        </div>

    )

}




