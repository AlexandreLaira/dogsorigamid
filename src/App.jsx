import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { UserStorage }  from './UserContext'
import Header           from './Components/Header'
import Footer           from './Components/Footer'
import Home             from './Components/Home'
import Login            from './Components/Login/Login'
import ProtectedRoute   from "./Components/Helper/ProtectedRoute.jsx";
import User             from "./Components/User/User.jsx";

function App() {

  return (
    <BrowserRouter>
      <UserStorage>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='login/*' element={<Login />} />
          <Route path='conta/*' element={
            <ProtectedRoute>
              <User />
          </ProtectedRoute>}/>
        </Routes>
        <Footer />
      </UserStorage>
    </BrowserRouter>
  )
}

export default App
