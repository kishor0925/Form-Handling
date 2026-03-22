import React from 'react'
import Form from './Components/Form'
import Update from './Components/Update'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = { <Form/>} />
        <Route path='/update' element = { <Update/> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
