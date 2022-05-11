import Head from 'next/head'
import Main from '../components/Main'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import Login from '../components/Login'
import Product from '../components/Product'
import CreateProduct from '../components/CreateProduct'
import Order from '../components/Order'

import React from 'react'


export default function Home({ products, types }) {
  const [login, setLogin] = useState(false)
  const [user, setUser] = useState(null)
  const [createProductOpen, setCreateProductOpen] = useState(false)
  const [ordersOpen, setOrdersOpen] = useState(false)

  // Type search
  const [selectedCategory, setSelectedCategory] = useState('Select Category')
  const [selectedCondition, setSelectedCondition] = useState('Select Condition')


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

            <form>
              <h3>Selected Category</h3>
              <select id="category-input" onChange={event => setSelectedCategory(event.target.value)}>
                <option>Select Category</option>
                {
                  types.map((type) => (<option text={type.name} key={type._id} value={type._id}>{type.name}</option>))
                }

              </select>
              <select id="condtion-input" onChange={event => setSelectedCondition(event.target.value)}>
                <option>Select Condition</option>
                <option>Like New</option>
                <option>Used</option>
                <option>Well-Worn</option>
              </select>
            </form>

            <div>
              <input></input>
              <p>-</p>
              <input></input>
            </div>

            <div className={styles.products}>
              {
                products.filter(product => {
                  if (selectedCategory === 'Select Category') {
                    if (selectedCondition === 'Select Condition') {
                      return product
                    }
                  }

                  if (product.condition === selectedCondition) {
                    return product
                  }

                  for (let i = 0; i < product.types.length; i++) {
                    if (selectedCategory === product.types[i]) {
                      console.log(product._id)
                      return product
                    }
                  }
                }).map((product => {
                  return <Product key={product._id} product={product} user={user} />
                }))
              }
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
