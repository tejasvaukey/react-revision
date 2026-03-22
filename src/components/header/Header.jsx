import React from 'react'
import styles from './Header.module.css'
// import styles from './Button.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
        <h3>kuchh</h3>
        <button className={styles.btn}>login</button>
    </div>
  )
}

export default Header