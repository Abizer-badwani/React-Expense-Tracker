import React from 'react'
import {BsCurrencyRupee} from 'react-icons/bs'
import '../css/Amount.css'
import { TransactionState } from '../context/GlobalContext'

const Amount = () => {

  const {state: {transaction}} = TransactionState()

  const totalInc = transaction.filter((transaction) => transaction.type == 'income').reduce((result, transaction) => result + transaction.amount, 0)
  const totalExp = transaction.filter((trans) => trans.type == 'expense').reduce((result , transaction) => result + transaction.amount, 0)

  return (
      <div className='amount'> 
      <div className='income'>
          <h2>Income</h2>
        <div className='rupee'><p>{ Intl.NumberFormat('en-IN', {style: 'currency', currency: 'INR'}).format(totalInc) }</p></div>

      </div>
      <div className='expense'>
          <h2>Expense</h2>
        <div className='rupee'><p>{ Intl.NumberFormat('en-IN', {style: 'currency', currency: 'INR'}).format(totalExp) }</p></div>
        </div>
      </div>
  )
}

export default Amount