import React from 'react'
// style
import styles from './styles.module.scss'
import { useStore } from 'stores'
// components

const ProfileInfo: React.FC = () => {
  const { authorizationStore } = useStore()
  return (
    <div className={styles.profileInfoContainer}>
      <h2 className={styles.usernameText}>{authorizationStore.accountName}</h2>
	  {/* <div className={styles.link}><a href='/bookmarks'>Передивитись закладинки</a></div> */}
    </div>
  )
}

export default ProfileInfo
