import React from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import {ReactComponent as Dogs} from '../Assets/dogs.svg'
import { UserContext } from '../UserContext'

function Header() {
  const {data} = React.useContext(UserContext);


  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to='/' aria-label="Dogs - Home"><Dogs /></Link>
          {data ? (<Link className={styles.login} to='/conta'>
                      <p>Bem vindo, {data.nome}</p>
                    </Link>) : 
        (<Link className={styles.login} to='/login'>
        LOGIN / CRIAR
        </Link>)}
      </nav>
    </header>
  )
}

export default Header