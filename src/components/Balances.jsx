import { TransactionState } from '../context/GlobalContext'
import { useNavigate } from 'react-router-dom'
import '../css/Balances.css'

const Balances = () => {

    const { state: { transaction } } = TransactionState()
    const navigate = useNavigate()

    const balance = (transaction.filter((transaction) => transaction.type === 'Income')
        .reduce((result, transaction) => result + transaction.amount, 0)) -
        (transaction.filter((transaction) => transaction.type === 'Expense')
        .reduce((result, transaction) => result + transaction.amount, 0))

    const totalInc = transaction.filter((transaction) => transaction.type === 'Income')
        .reduce((result, transaction) => result + transaction.amount, 0)
    const totalExp = transaction.filter((trans) => trans.type === 'Expense')
        .reduce((result, transaction) => result + transaction.amount, 0)


    return (
        <div className='card' onClick={() => navigate('/history')}>
            <div className="balance">{Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(balance)}</div>
            <div className='amount'>
                <div id='income'>{Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(totalInc)}</div>
                <div id='expense'>{Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(totalExp)}</div>
            </div>
        </div>
    )
}

export default Balances