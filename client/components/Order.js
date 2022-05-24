import { useEffect, useState } from 'react'
import styles from '../styles/Order.module.css'

export default function Order({ toggle, user }) {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        const fetchOrders = async () => {
            const res = await fetch(`http://localhost:3000/api/order/user/${user._id}`)
            setOrders(await res.json())
        }

        fetchOrders()
    }, [])

    const handleOrder = async (order, status, productid) => {
        await fetch(`http://localhost:3000/api/order/${order._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ status, productid })
        })
    }

    return (
        <div className={styles.modalBackground}>
            <div className={styles.modalContainer}>
                <h1>Your listed products</h1>
                {orders.map(order => {
                    if (order.seller === user._id && order.status === 'Pending') return (
                        <div>
                            <p>{order._id}</p>
                            <button onClick={() => { handleOrder(order, 'Accepted', order.product) }}>Accept</button>
                            <button onClick={() => { handleOrder(order, 'Rejected', order.product) }}>Reject</button>
                        </div>
                    )
                })}
                <h1>Your bought products</h1>
                {orders.map(order => {
                    if (order.buyer === user._id && order.status === 'Accepted') return <p>{order._id}</p>
                })}
                <button className={styles.closeButton} onClick={() => toggle(false)}>Close</button>
            </div>
        </div>
    )
}


