import React from 'react'
import Form from './Components/Form'
import Update from './Components/Update'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Edit from './Components/Edit'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = { <Form/>} />
        <Route path='/update' element = { <Update/> } />
        <Route path='/edit/:id' element = {<Edit/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
