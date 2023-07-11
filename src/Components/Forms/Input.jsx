import React from 'react'
import styles from './Input.module.css'

function Input({label, type, name}) {
  return (
    <>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        id={name}
        className={styles.input}
      />
      <p className={styles.error}>Error</p>
    </>

  )
}

export default Input 