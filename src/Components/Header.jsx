import React from 'react'
import styles from '../assets/css/Header.module.css'
import { Link } from 'react-router-dom'
import { ReactComponent as Dogs } from '../assets/img/dogs.svg'
import { UserContext } from '../UserContext'
import Button from './Forms/Button'

function Header() {
  const {data}  = React.useContext(UserContext);
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to='/'><Dogs /></Link>
        {data ? <Link className={styles.login} to='/login'>{data.nome}</Link> : <Link className={styles.login} to='/login'>Login / Criar</Link>}
      </nav>
    </header>
  )
  }

export default Header