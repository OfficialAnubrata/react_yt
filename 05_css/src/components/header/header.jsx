import React from 'react'
import styles from './header.module.css'

const header = () => {
  return (
    <div>
        <h1 className={styles.header}>Anubrata learning css</h1>
        <button className={styles.btn}>Click me</button>
    </div>
  )
}

export default header