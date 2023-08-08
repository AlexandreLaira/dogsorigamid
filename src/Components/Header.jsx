import React from 'react'
import styles from '../assets/css/Header.module.css'
import { Link } from 'react-router-dom'
import { ReactComponent as Dogs } from '../assets/img/dogs.svg'
import { UserContext } from '../UserContext'

function Header() {
  const {data}  = React.useContext(UserContext);
  return (
    <nav className={styles.header}>
      <Link to='/'><Dogs /></Link>
      {data ? <p>{data.email}</p> : <Link to='/login'>LOGIN / CRIAR</Link>}

    </nav>
  )
}

export default Header