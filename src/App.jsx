import React from 'react'

import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import History from './pages/History'

const App = () => {
  return (
    <main>
    <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/history' element={<History />} />
      </Routes>
      </main>
  )
}

export default App