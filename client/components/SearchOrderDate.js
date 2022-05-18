import { useState } from 'react'
import styles from '../styles/CreateProduct.module.css'

export default function Products({ toggle, user}) {
    const [mindate, setMinDate] = useState('')
    const [maxdate, setMaxdate] = useState('')
    const [orders, setOrders] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await fetch(`http://localhost:3000/api/order/date/${user._id}/${mindate}/${maxdate}`)
        
        setOrders(await res.json())
    }

    return (
        <div className={styles.modalBackground}>
            <div className={styles.modalContainer}>
                <form onSubmit={handleSubmit}>
                    <label className={styles.label}>Begin date</label>
                    <input className={styles.input} type='date' required value={mindate} onChange={(e) => setMinDate(e.target.value)} />
                    <label className={styles.label}>End date</label>
                    <input className={styles.input} type='date' required value={maxdate} onChange={(e) => setMaxdate(e.target.value)} />

                    <input className={styles.submitButton} type='submit' value='Search orders' />
                </form>
                <h1>Your orders</h1>
                {orders.map(order =>  <p>{order._id}</p>)}
                <button className={styles.closeButton} onClick={() => toggle(false)}>Close</button>
            </div>
        </div>
    )
}
