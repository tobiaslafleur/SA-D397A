import React, { useState } from 'react'
import styles from '../styles/Signup.module.css'

export default function Signup(props) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')
    const [firstName, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [dob, setDob] = useState('')
    const setHidden = props.setHidden

    const handleSignup = async () => {
        let url = 'http://localhost:3000/api/user/'
        const body = {
            firstName: firstName,
            lastName: lastname,
            dateOfBirth: dob,
            email: email,
            address: address,
            username: username,
            password: password
        }
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })

        const finalres = await response.json()
        
        if(finalres.payload._id) {
            alert('User ' + finalres.payload.username + ' created')
        } else {
            alert('Account creation failed')
        }
    }

  return (
    <div className={styles.container}>
        <div className={styles.row}>
            <p>Username</p>
            <input placeholder='Username' onChange={event => setUsername(event.target.value)}></input>
        </div>
        <div className={styles.row}>
            <p>Password</p>
            <input placeholder='Password' type='password' onChange={event => setPassword(event.target.value)}></input>
        </div>
        <div className={styles.row}>
            <p>Firstname</p>
            <input placeholder='Firstname' onChange={event => setFirstname(event.target.value)}></input>
        </div>
        <div className={styles.row}>
            <p>Lastname</p>
            <input placeholder='Lastname' onChange={event => setLastname(event.target.value)}></input>
        </div>
        <div className={styles.row}>
            <p>Address</p>
            <input placeholder='Address' onChange={event => setAddress(event.target.value)}></input>
        </div>
        <div className={styles.row}>
            <p>Date of birth</p>
            <input type='date' placeholder='YYYY-MM-DD' onChange={event => setDob(event.target.value)}></input>
        </div>
        <div className={styles.row}>
            <p>Email</p>
            <input placeholder='Email' onChange={event => setEmail(event.target.value)}></input>
        </div>
        <button onClick={handleSignup}>Signup</button>
        <button onClick={setHidden(true)}>Close</button>

    </div>
  )
}
