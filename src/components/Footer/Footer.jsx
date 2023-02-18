import styles from '../Footer/Footer.module.css';


export default function Footer(){
   return (
    <div className={styles.footer}>
         <p className={styles.text}>Proyecto front-end realizado por Leonardo Carofiglio para el Modulo 2 de Henry</p><img src='https://media.slid.es/avatars/1267871/logoamarillo.jpg' alt='Henry' className={styles.logoH} />
        
    </div>
   )

}