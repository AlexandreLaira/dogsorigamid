import React, { useContext } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import LoginForm from './LoginForm'
import LoginCreate from './LoginCreate'
import LoginLost from './LoginLost'
import LoginReset from './LoginReset'
import { UserContext } from '../../UserContext'
import styles from './Login.module.css'



const Login = () => {
  const {login} = useContext(UserContext)

  if(login === true) return <Navigate to='/conta' />

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