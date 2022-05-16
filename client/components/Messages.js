import React from 'react'
import styles from '../styles/Messages.module.css'

export default function Messages({messages}) {
    
    const handleRead = async (message) => {
        let url = `http://localhost:3000/api/message/${elem._id}`
    }

    return (
        <div>
            {messages.map(elem => {
                return(
                    <div className={styles.container}>
                        <p>{elem.text}</p>
                        <button onClick={() => handleRead(elem)}>Mark as read</button>
                    </div>
                )
            })}
        </div>
    )
}
