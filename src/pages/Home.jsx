import React from 'react'
import Header from '../components/Header'
import Balances from '../components/Balances'
import AddTransaction from '../components/AddTransaction'

const Home = () => {
  return (
    <>
      <Header />
      <Balances />
      <AddTransaction />
    </>
  )
}

export default Home