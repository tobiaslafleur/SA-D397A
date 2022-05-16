import { useState } from 'react'
import styles from '../styles/CreateProduct.module.css'

export default function Products({ toggle, user, types }) {
    const [product, setProduct] = useState('')
    const [type, setType] = useState(types[0]._id)
    const [price, setPrice] = useState('')
    const [manufactured, setManufactured] = useState('')
    const [color, setColor] = useState('')
    const [condition, setCondition] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const prod = {
            name: product,
            type: type,
            price: price,
            manufactured: manufactured,
            color: color,
            condition: condition,
            seller: user._id
        }

        const res = await fetch('http://localhost:3000/api/product/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(prod)
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
                    <label className={styles.label}>Product Name</label>
                    <input className={styles.input} type='text' required value={product} onChange={(e) => setProduct(e.target.value)} />
                    <label className={styles.label}>Type</label>
                    <select className={styles.input} value={type} onChange={e => setType(e.target.value)}>
                        {types.map(type => {
                            return <option key={type._id} value={type._id}>{type.name}</option>
                        })}
                    </select>
                    <label className={styles.label}>Price</label>
                    <input className={styles.input} type='text' required value={price} onChange={(e) => setPrice(e.target.value)} />
                    <label className={styles.label}>Manufacture date</label>
                    <input className={styles.input} type='date' required value={manufactured} onChange={(e) => setManufactured(e.target.value)} />
                    <label className={styles.label}>Color</label>
                    <input className={styles.input} type='text' required value={color} onChange={(e) => setColor(e.target.value)} />
                    <label className={styles.label}>Condition</label>
                    <select className={styles.input} value={condition} onChange={(e) => setCondition(e.target.value)}>
                        <option>Like New</option>
                        <option>Used</option>
                        <option>Well-Worn</option>
                    </select>
                    <input className={styles.submitButton} type='submit' value='Create product' />
                </form>
                <button className={styles.closeButton} onClick={() => toggle(false)}>Close</button>
            </div>
        </div>
    )
}
