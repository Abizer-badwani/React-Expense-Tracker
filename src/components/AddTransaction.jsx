import React, { useState } from 'react'
import '../css/Form.css'
import { TransactionState } from '../context/GlobalContext' 
import toast from 'react-hot-toast';

const AddTransaction = () => {

  const [name, setText] = useState('')
  const [amount, setAmount] = useState('')
  const [type, setType] = useState('income')

  const {state, dispatch} = TransactionState()

  const handleSubmit = (event) => {
    event.preventDefault()

    if (name === '') { return toast.error('Enter Valid Name !') }
    if (amount === '') { return toast.error("Enter Valid Amount ! ") }
    
    if(Number(amount) <= 0) { return toast.error('Amount Should Be Greater Than Zero ! ')}

    dispatch({ type: 'ADD_TRANSACTION', payload: { name, amount, type } })

    setAmount('')
    setText('')

}

  return (
    <>
      <h2 className='form-title'> 
        Add New Transaction
      </h2>
      <hr className='line-2'/>
      <form className='form' onSubmit={(event) => handleSubmit(event)}>
          <input type="text" placeholder='Enter Name' id='text' value={name} onChange={(event) => setText(event.target.value)} autoComplete='off' />
        <input type="number" id='amt' placeholder='Enter Amount' value={amount} onChange={(event) => setAmount(event.target.value)} autoComplete='off' />    
        <section>
        <label htmlFor="inc" className='inc-label'><input type="radio" value='income' name='type' id='inc' onChange={(event) => setType(event.target.value)} defaultChecked />Income</label>
        <label htmlFor="exp" className='exp-label'><input type="radio" name='type' id='exp' value='expense' onChange={(event) => setType(event.target.value)}/>Expense</label>
        </section>
        <button type="submit">Add Transaction</button>
      </form> 
    </>
  )
}

export default AddTransaction