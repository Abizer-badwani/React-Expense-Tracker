import React from 'react'
import '../css/Transaction.css'
import {BsCurrencyRupee} from 'react-icons/bs'

const Transaction = ({ transaction }) => {
  return (
      <div className={ transaction.type == 'income' ? "transaction inc" : "transaction exp" }>
          <p>{transaction.name}</p>
      <p className='currency'>{ Intl.NumberFormat('en-IN', {style: 'currency', currency: 'INR'}).format(transaction.amount) }</p>
    </div>
  )
}

export default Transaction