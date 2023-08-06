import React from 'react'
import '../css/TransList.css'
import { TransactionState } from '../context/GlobalContext' 
import Transaction from './Transaction'

const TransactionList = () => {

  const { state: { transaction } } = TransactionState()

  return (
    <>
      <h2 className='trans-title'>Transactions</h2>
      <hr className='line'/>
      {
        transaction.map((transaction) => <Transaction key={transaction.id} transaction={transaction} />)
        }
      </>
  )
}

export default TransactionList