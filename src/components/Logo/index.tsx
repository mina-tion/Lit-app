import React from 'react'

import logo from 'sources/images/logo.png'
// style
import styles from './styles.module.scss'

const Logo: React.FC = () => {
  return (
    <div className={styles.iconContainer}>
      {/* <img key={0} src={logo} className={styles.img} alt="logo" /> */}
    </div>
  )
}

export default Logo
