import ReactDomClient from 'react-dom/client'
import App from './App'
import './css/index.css'
import { TransactionProvider } from './context/GlobalContext'
import { Toaster } from 'react-hot-toast';

const root = ReactDomClient.createRoot(document.getElementById('root'))

root.render(
    <TransactionProvider>
        <App />
        <Toaster position='top-right' />
    </TransactionProvider>

)
