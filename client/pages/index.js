import Head from 'next/head'
import Main from '../components/Main'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import Login from '../components/Login'
import Product from '../components/Product'

export default function Home({ products }) {
  const [login, setLogin] = useState(false)
  const [user, setUser] = useState(null)

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

        <footer className={styles.footer}>
          <a>Powered by Kings</a>
        </footer>
      </div>
    )
  }
  else {
    return (
      <div className={styles.container}>
        <Head>
          <title>Marketplace</title>
          <meta name="description" content="DA379A" />
        </Head>

        <main className={styles.main}>
          <Main user={user} />
          <div className={styles.products}>
            {products.map(product => {
              return <Product product={product} />
            })}
          </div>
        </main>

        <footer className={styles.footer}>
          <a>Powered by Kings</a>
        </footer>
      </div>
    )
  }
}

Home.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/product/')
  const products = await res.json()

  return { products }
}
