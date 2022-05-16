import { useState } from 'react'
import styles from '../styles/CreateProduct.module.css'

export default function Type({ toggle, user, types }) {
    const [type, setType] = useState(types[0]._id)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const res = await fetch(`http://localhost:3000/api/types/${type}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userId: user._id })
        })

        const message = await res.json()

        if (!message.errors) {
            toggle(false)
        }
    }

    return (
        <div className={styles.modalBackground}>
            <div className={styles.modalContainer}>
                <form onSubmit={handleSubmit}>
                    <select className={styles.input} value={type} onChange={e => setType(e.target.value)}>
                        {types.map(type => {
                            return <option key={type._id} value={type._id}>{type.name}</option>
                        })}
                    </select>
                    <input className={styles.submitButton} type='submit' value='Subscribe to type' />
                </form>
                <button className={styles.closeButton} onClick={() => toggle(false)}>Close</button>
            </div>
        </div>
    )
}
