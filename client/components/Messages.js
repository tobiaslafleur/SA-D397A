import React, { useEffect } from 'react'
import styles from '../styles/Messages.module.css'

export default function Messages({ toggle, messages, setMessages }) {

    useEffect(() => {
        async function update() {
            await fetch('http://localhost:3000/api/message/', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ messages: messages })
            })
        }

        update()

    }, [])

    return (
        <div className={styles.modalBackground}>
            <div className={styles.modalContainer}>
                {messages.map((message) => {
                    return <p>{message.text}</p>
                })}
                <button onClick={() => toggle(false)}>Close</button>
            </div>
        </div>
    )
}
