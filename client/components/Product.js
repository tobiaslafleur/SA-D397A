import styles from '../styles/Product.module.css'

export default function Products({ product }) {
    console.log(product)

    const status = checkStatus(product.status)
    return (
        <div className={styles.product}>
            <h1>{product.name}</h1>
            <p>{product.price}kr</p>
            <p className={status ? styles.available : styles.unavailable}>{product.status}</p>
            <button>Buy</button>
        </div>
    )
}

const checkStatus = (status) => {
    if (status === 'Available') return true
    return false
}