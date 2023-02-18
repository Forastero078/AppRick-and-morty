import React from 'react';
import SearchBar from '../SearchBar/SearchBar.jsx';
import styles from './Nav.module.css'
import { Link } from 'react-router-dom';

export default function Nav(props){
    return(
        <div className={styles.Nav}>
            <div >
            <img style={{
    width: "140px",
    borderRadius: "25px",
    border: 'white solid',
}} src='https://i0.wp.com/aldescubierto.org/wp-content/uploads/2021/07/Portada_RickyMorty_web.jpg?resize=800%2C445&ssl=1' alt='RymLogo'/>
            <div className={styles.buttons}><Link to={{pathname: '/home'}} ><button className={styles.navButtonsHome}>Home</button></Link>
            <Link to={{pathname:'/favorites'}}><button className={styles.navButtonsFav}>myFavorites</button></Link>
            <Link to={{pathname: '/about'}} ><button className={styles.navButtonsAbout}>About</button></Link>
            <Link to={{pathname:'/'}}><button className={styles.navButtonsLog} onClick={props.log}>LOGOUT</button></Link></div>
             <div className={styles.search}><SearchBar onSearch={props.onS} onSearchR={props.onSR}/></div>
             </div>
        </div>
    )
}


