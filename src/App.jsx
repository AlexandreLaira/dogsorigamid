import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header           from './Components/Header'
import Footer           from './Components/Footer'
import Home             from './Components/Home'
import Login            from './Components/Login/Login'
import Conta            from './Components/Conta'
import { UserStorage }  from './UserContext'

function App() {

  return (
    <BrowserRouter>
      <UserStorage>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/login/*' element={<Login />} />
          <Route path='/conta' element={<Conta />} />
        </Routes>
        <Footer />
      </UserStorage>
    </BrowserRouter>
  )
}

export default App
