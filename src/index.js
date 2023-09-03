import ReactDomClient from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { TransactionProvider } from './context/GlobalContext'
import { Toaster } from 'react-hot-toast';
import App from './App'
import './index.css'

const root = ReactDomClient.createRoot(document.getElementById('root'))

root.render(
    <TransactionProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
        <Toaster position='top-right' />
    </TransactionProvider>

)
