import React, { useState } from 'react'
import '../css/Form.css'
import { TransactionState } from '../context/GlobalContext'
import toast from 'react-hot-toast';

const AddTransaction = () => {

  const [data, setData] = useState({ name: '', amount: '', type: 'Income' })

  const { state: { transaction }, dispatch } = TransactionState()

  const handleChange = (e) => { setData((prev) => ({ ...prev, [e.target.name]: e.target.value })) }

  const balance = transaction.filter((a) => a.type === 'Income')
    .reduce((result, transaction) => result + transaction.amount, 0) -
    transaction.filter((a) => a.type === 'Expense')
      .reduce((result, transaction) => result + transaction.amount, 0)

  console.log(balance)
  const handleSubmit = (event) => {
    event.preventDefault()

    if (!data.name) { return toast.error('Enter Title !') }
    if (!data.amount) { return toast.error("Enter Valid Amount ! ") }
    if (data.name.length > 12) { return toast.error('Use Small Name!') }
    
    if (Number(data.amount) <= 0) { return toast.error('Amount Too Small! ') }
    if (Number(data.amount) > 100000) { return toast.error('Amount Too Large!') }

    if (data.type === 'Income') {
      console.log("Hello 1")
      if((Number(data.amount) + Number(balance)) > 100000) {
        return toast.error('Balance limit Exceeds!')
      }
    }
    if(data.type === 'Expense') {
      console.log("Hello 2")
      if ((Number(balance) - Number(data.amount)) < 0) {
        return toast.error('Balance Required!')
      }
    }

    dispatch({ type: 'ADD_TRANSACTION', payload: data })
    setData({ name: '', amount: '', type: 'Income' })
  }

  return (
    <div className='transaction-form'>
      <h2 className='form-title'>
        New Transaction
      </h2>
      <form onSubmit={(event) => handleSubmit(event)}>
        <input type="text" name='name' id='text-input' placeholder='Enter Title' value={data.name} onChange={handleChange} autoComplete='off' />
        <input type="number" name='amount' id='amount-input' placeholder='Enter Amount' value={data.amount} onChange={handleChange} autoComplete='off' />
        <div id='amount-type'>
          <span className={data.type === 'Income' ? 'inc active-inc' : 'inc'} onClick={(e) => setData((prev) => ({ ...prev, type: e.target.innerText }))}>Income</span>
          <span className={data.type === 'Expense' ? 'exp active-exp' : 'exp'} onClick={(e) => setData((prev) => ({ ...prev, type: e.target.innerText }))}>Expense</span>
        </div>
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  )
}

export default AddTransaction