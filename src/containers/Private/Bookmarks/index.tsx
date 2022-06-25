import React from 'react'
import { observer } from 'mobx-react'

//components
import { headerTitles, tableData } from 'utils/authorsTableData'

//components
// style
import styles from './styles.module.scss'

const Bookmarks: React.FC = observer(() => {
  return (
    <div className={styles.wrapper}>
      <h2>Закладинки</h2>
    </div>
  )
})

export default Bookmarks
