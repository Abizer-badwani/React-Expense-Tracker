import '../css/Balance.css'
import { TransactionState } from '../context/GlobalContext'
import {BsCurrencyRupee} from 'react-icons/bs'


const Balance = () => {

  const {state: {transaction}} = TransactionState()

  const balance = (transaction.filter((transaction) => transaction.type === 'income')
    .reduce((result, transaction) => result + transaction.amount, 0)) -
      (transaction.filter((transaction) => transaction.type === 'expense')
      .reduce((result, transaction) => result + transaction.amount, 0))
  
  return (
      <div className='total'>
        <h2>Balance</h2>
      <div className='balance'><p>{ Intl.NumberFormat('en-IN', {style: 'currency', currency: 'INR'}).format(balance) }</p></div>
      </div>
  )
}

export default Balance