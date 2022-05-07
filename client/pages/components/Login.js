import { useState } from 'react'
import styles from '../../styles/Login.module.css'
export default function Login(props) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [hidden, setHidden] = useState(true)
    const setLogin = props.setLogin
    const setUser = props.setUser
    const handleLogin = async () => {
        const data = {
            username: username,
            password: password
        }

        const response = await fetch('http://localhost:3000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        
        const result = await response.json()
        if(result.auth) {
            setUser(result.user)
            setLogin(true)

        } else setHidden(false)
    }

    return ( 
        <div className={styles.container}>
            <h1 className={styles.title}>Log in</h1>
            <div className={styles.infocontainer}>
                <p className={styles.info}>Username</p>
                <input placeholder='Username' className={styles.input} onChange={(event) => setUsername(event.target.value)}></input>
            </div>
            <div className={styles.infocontainer}>
                <p className={styles.info}>Password</p>
                <input placeholder='Password' className={styles.input} type="password" onChange={(event) => setPassword(event.target.value)}></input>
            </div>
            <p className={styles.error} hidden={hidden}>Incorrect credentials</p>
            <button className={styles.loginb} onClick={handleLogin}>Log in</button>
            <button className={styles.signupb}>Sign up</button>
        </div>
    )
}