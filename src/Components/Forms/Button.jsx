import React from 'react'
import styles from '../../assets/css/Button.module.css'

function Button({children}) {
  return (
    <button className={styles.button}>{children}</button>
  )
}

export default Button