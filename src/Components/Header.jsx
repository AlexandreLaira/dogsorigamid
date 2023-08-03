import React from 'react'
import styles from '../assets/css/Header.module.css'
import { Link } from 'react-router-dom'
import { ReactComponent as Dogs } from '../assets/img/dogs.svg'

function Header() {
  return (
    <nav className={styles.header}>
      <Link to='/'><Dogs /></Link>
      <Link to='/login'>LOGIN / CRIAR</Link>

    </nav>
  )
}

export default Header