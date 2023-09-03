import React from 'react'
import { TransactionState } from '../context/GlobalContext'
import '../css/TransList.css'
import { useNavigate } from 'react-router-dom'
import {IoChevronBackOutline} from 'react-icons/io5'

const TransactionList = () => {

  const { state: { transaction } } = TransactionState()
  const navigate = useNavigate()

  const totalInc = transaction.filter((transaction) => transaction.type === 'Income')
    .reduce((result, transaction) => result + transaction.amount, 0)
  const totalExp = transaction.filter((trans) => trans.type === 'Expense')
    .reduce((result, transaction) => result + transaction.amount, 0)

  return (
    <div className='transaction-history-container'>
      <h2 className='transaction-title' ><span id='back-icon' onClick={() => navigate(-1)}><IoChevronBackOutline /></span><span>Transactions</span></h2>
      <div className="transaction-amount">
        <div className="income-transaction">{Intl.NumberFormat('en-IN', {style: 'currency', currency: 'INR'}).format(totalInc)}</div>
        <div className="expense-transaction">{Intl.NumberFormat('en-IN', {style: 'currency', currency: "INR"}).format(totalExp)}</div>
      </div>
      <div className='transaction-inner-container'>
      {
        transaction.length ? transaction?.map((transaction) => {
          return (
            <div className={transaction.type === 'Income' ? "transaction-income-item transaction-item" : "transaction-expense-item transaction-item"}>
              <p>{transaction.name}</p>
              <div>
                {Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(transaction.amount)}
              </div>
            </div>
          )
        }
        ) :<div className='no-transaction'>No transaction Found!</div>
      }
      </div>
    </div>
  )
}

export default TransactionList