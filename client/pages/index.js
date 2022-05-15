import Head from 'next/head'
import Main from '../components/Main'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import Login from '../components/Login'
import Product from '../components/Product'
import CreateProduct from '../components/CreateProduct'
import Order from '../components/Order'

import React from 'react'
import Signup from '../components/Signup'


export default function Home({ types }) {
  const [login, setLogin] = useState(false)
  const [user, setUser] = useState(null)
  const [createProductOpen, setCreateProductOpen] = useState(false)
  const [ordersOpen, setOrdersOpen] = useState(false)
  const [products, setProducts] = useState([])
  let filterUrl = 'http://localhost:3000/api/product/filter?'

  // Type search
  const [selectedCategory, setSelectedCategory] = useState('Select Category')
  const [selectedCondition, setSelectedCondition] = useState('Select Condition')
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(0)

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    const productsRes = await fetch('http://localhost:3000/api/product/')
    setProducts(await productsRes.json())
  }

  const handleCategory = (value) => {
    setSelectedCategory(value)
  }

  const handleCondition = (value) => {
    setSelectedCondition(value)
  }

  const handleMinPrice = (value) => {
    setMinPrice(value)
  }

  const handleMaxPrice = (value) => {
    setMaxPrice(value)
  }

  const searchProducts = async () => {
    if(selectedCategory != 'Select Category') {
      filterUrl += 'type='+selectedCategory+'&'
    }

    if(selectedCondition != 'Select Condition') {
      filterUrl += 'condition='+selectedCondition+'&'
    }

    if(maxPrice > 0) {
      filterUrl += 'maxPrice='+maxPrice+'&'
    }

    if(minPrice > 0) {
      filterUrl += 'minPrice='+minPrice+'&'
    }

    alert(filterUrl)
    
    const prodFetch = await fetch(filterUrl)
    setProducts(await prodFetch.json())

    filterUrl = 'http://localhost:3000/api/product/filter?'
    setMaxPrice(0)
    setMinPrice(0)
    setSelectedCategory('Select Category')
    setSelectedCondition('Select Condition')
  }

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
              <select id="category-input" onChange={event => handleCategory(event.target.value)}>
                <option>Select Category</option>
                {
                  types.map((type) => (<option text={type.name} key={type._id} value={type._id}>{type.name}</option>))
                }

              </select>
              <select id="condtion-input" onChange={event => handleCondition(event.target.value)}>
                <option>Select Condition</option>
                <option>Like New</option>
                <option>Used</option>
                <option>Well-Worn</option>
              </select>
            </form>

            <div>
              <p>Min price</p>
              <input onChange={event => handleMinPrice(event.target.value)} type="number" value={minPrice} ></input>
              <p>Max price</p>
              <input onChange={event => handleMaxPrice(event.target.value)} type="number" value={maxPrice}></input>
            </div>
            <button onClick={searchProducts}>Search</button>
            <div className={styles.products}>
              {
                products.map((product => {
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
  const typesRes = await fetch('http://localhost:3000/api/types/')
  const types = await typesRes.json()

  return { types }
}
