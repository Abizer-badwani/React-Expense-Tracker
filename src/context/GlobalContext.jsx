import React, { createContext, useContext, useReducer} from 'react'
import { reducer } from './GlobalReducer'

const transaction = []

const Transactions = createContext()

export const TransactionProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, {transaction})

    return <Transactions.Provider value={{ state, dispatch }}>
        {children}
    </Transactions.Provider>
}

export const TransactionState = () => useContext(Transactions)
