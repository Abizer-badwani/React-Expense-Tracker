import React from 'react'

import Header from './components/Header'
import Balance from './components/Balance'
import Amount from './components/Amount'
import TransactionList from './components/TransactionList'
import AddTransaction from './components/AddTransaction'
import './css/App.css'

const App = () => {
  return (
    <>
      <Header />
      <div className="main-container">
        <div className='container-one'>
          <Balance />
          <Amount />
        </div>
        <div className="container-two">
          <AddTransaction />
        </div>
        <div className="container-three">
          <TransactionList />
        </div>
      </div>
    </>
  )
}

export default App