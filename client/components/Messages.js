import React from 'react'
import styles from '../styles/Messages.module.css'

export default function Messages({messages}) {
    
    return (
        <div>
            {messages.map(elem => {
                return(
                    <div className={styles.container}>
                        <p>{elem.text}</p>
                        <button>Mark as read</button>
                    </div>
                )
            })}
        </div>
    )
}
