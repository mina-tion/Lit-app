import React from 'react'
import { observer } from 'mobx-react'

import { logout } from 'utils/login'
// style
import styles from './styles.module.scss'
import Avatar from 'components/Avatar'
import ProfileInfo from 'components/ProfileInfo'
//components

const SiderContent: React.FC = observer(() => {
  const handlerClick = () => {
    logout()
  }
  return (
    <div className={styles.contentWrapper}>
      <ProfileInfo />
      <div>
        <Avatar />
        <a className={styles.button} href="/" onClick={handlerClick}>
          Вийти
        </a>
      </div>
    </div>
  )
})

export default SiderContent
