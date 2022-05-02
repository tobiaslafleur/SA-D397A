import { useState } from 'react'
import styles from '../../styles/Login.module.css'
export default function Login(props) {
    const setLogin = props.setLogin
    const handleLogin = () => {
        setLogin(true)
    }

    return ( 
        <div className={styles.container}>
            <h1 className={styles.title}>Log in</h1>
            <div className={styles.infocontainer}>
                <p className={styles.info}>Username</p>
                <input placeholder='Username' style={styles.input}></input>
            </div>
            <div className={styles.infocontainer}>
                <p className={styles.info}>Password</p>
                <input placeholder='Password' style={styles.input} type="password"></input>
            </div>
            <button className={styles.loginb} onClick={handleLogin}>Log in</button>
            <button className={styles.signupb}>Sign up</button>
        </div>
    )
}