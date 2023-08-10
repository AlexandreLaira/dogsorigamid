import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import LoginForm from './LoginForm'
import LoginCreate from './LoginCreate'
import LoginLost from './LoginLost'
import LoginReset from './LoginReset'
import styles from '../../assets/css/Login.module.css'
import { UserContext } from '../../UserContext'

function Login() {
  const {login} = React.useContext(UserContext);

  if(login === true){
    <Navigate to="/conta" />
  }
  
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
      <Routes>
        <Route path='/' element={<LoginForm />} />
        <Route path='create' element={<LoginCreate />} />
        <Route path='lost' element={<LoginLost />} />
        <Route path='reset' element={<LoginReset />} />
      </Routes>
      </div>
    </section>
  )
}

export default Login