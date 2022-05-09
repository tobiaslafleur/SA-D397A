import Head from 'next/head'
import Main from '../components/Main'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import Login from '../components/Login'
import Product from '../components/Product'
import CreateProduct from '../components/CreateProduct'
import Order from '../components/Order'

export default function Home({ products, types }) {
  const [login, setLogin] = useState(false)
  const [user, setUser] = useState(null)
  const [createProductOpen, setCreateProductOpen] = useState(false)
  const [ordersOpen, setOrdersOpen] = useState(false)

  if (!login) {
    return (
      <div className={styles.container}>
        <Head>
          <title>Marketplace</title>
          <meta name="description" content="DA379A" />
        </Head>

        <main className={styles.main}>
          <Login setLogin={setLogin} setUser={setUser} />
        </main>
      </div>
    )
  }
  else {
    return (
      <>
        {createProductOpen && <CreateProduct toggle={setCreateProductOpen} types={types} user={user} />}
        {ordersOpen && <Order toggle={setOrdersOpen} user={user} />}
        <div className={styles.container}>
          <Head>
            <title>Marketplace</title>
            <meta name="description" content="DA379A" />
          </Head>

          <main className={styles.main}>
            <Main user={user} />
            <div className={styles.options}>
              <button onClick={() => setCreateProductOpen(true)}>Create Product</button>
              <button onClick={() => setOrdersOpen(true)}>Check Orders</button>
            </div>
            <div className={styles.products}>
              {products.map(product => {
                return <Product key={product._id} product={product} user={user} />
              })}
            </div>
          </main>
        </div>
      </>
    )
  }
}

Home.getInitialProps = async () => {
  const productsRes = await fetch('http://localhost:3000/api/product/')
  const products = await productsRes.json()

  const typesRes = await fetch('http://localhost:3000/api/types/')
  const types = await typesRes.json()

  return { products, types }
}
