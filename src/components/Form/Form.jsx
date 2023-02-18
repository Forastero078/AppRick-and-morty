import { useState } from "react";
import styles from './Form.module.css';
import { validate } from './validation.js'


export default function Login(props){

const [ userData, setUserData ] = useState({
    username: '',
    password: ''
});

const [ errors, setErrors] = useState({
    username: '',
    password: ''
})

const handleChange = (ev) => {
    setUserData({...userData,
       [ev.target.name]: ev.target.value
    })
    setErrors(validate({...userData,
            [ev.target.name]: ev.target.value
    }))
}

const handleSubmit = (cb) => {
return cb(userData);
}

    return(
        <div>
         <form className={styles.form} onSubmit={handleSubmit(props.Submit)}>
            <label>Usuario(E-mail):</label>
            <input type='text' name='username' value={userData.username} onChange={handleChange} className={errors.username && styles.warning}></input>
            <p className={styles.alert}>{errors.username}</p>

            <label>Contraseña:</label>
            <input type='text' name='password' value={userData.password} onChange={handleChange} className={errors.password && styles.warning}></input>
            <p className={styles.alert}>{errors.password}</p>

             
            <button name='login' type='submit'>Login!</button>

            <p> app-rick-y-morty@carofiglio.com</p>
            <p> henry1234</p>
        
         </form>

        </div>
    )
}