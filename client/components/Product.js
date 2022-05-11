import styles from '../styles/Product.module.css'

export default function Products({ product, user }) {
    return (
        < div className={styles.product} >
            <h1>{product.name}</h1>
            <p>{product.price}kr</p>
            <p className={checkStatus(product.status) ? styles.available : styles.unavailable}>{product.status}</p>
            <p>{product.condition}</p>
            <p>{product.types.toString()}</p>
            <button onClick={() => createOrder(product, user)}>Buy</button>
        </div >
    )
}

const createOrder = async (product, user) => {
    const order = {
        seller: product.seller,
        buyer: user._id,
        product: product._id
    }

    const res = await fetch('http://localhost:3000/api/order/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(order)
    })

    const data = await res.json()

    console.log(data)
}

const checkStatus = (status) => {
    if (status === 'Available') return true
    return false
}