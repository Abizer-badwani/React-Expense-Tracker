import ReactDomClient from 'react-dom/client'
import { HashRouter as Router } from 'react-router-dom'
import { TransactionProvider } from './context/GlobalContext'
import { Toaster } from 'react-hot-toast';
import App from './App'
import './index.css'

const root = ReactDomClient.createRoot(document.getElementById('root'))

root.render(
    <TransactionProvider>
        <Router>
            <App />
        </Router>
        <Toaster position='top-right' />
    </TransactionProvider>

)
