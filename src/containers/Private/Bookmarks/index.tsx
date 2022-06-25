import React from 'react'
import { observer } from 'mobx-react'

//components
import { headerTitles, tableData } from 'utils/authorsTableData'
import { useStore } from 'stores'

//sources
import bookmarkM from 'sources/images/bookmarkMarked.png'
import bookmark from 'sources/images/bookmark.png'
// style
import styles from './styles.module.scss'

const Bookmarks: React.FC = observer(() => {
  const { authorizationStore } = useStore()

  return (
    <div className={styles.wrapper}>
      <h2>Закладинки</h2>
      <table className={styles.table}>
        <tbody className={styles.body}>
          {tableData.filter((genre: any, i) => {
            authorizationStore.bookmarks.genres.includes(i + 1) && (
              <tr className={styles.row}>
                {Object.keys(genre).filter(
                  (key, index): any =>
                    authorizationStore.bookmarks.genres === index && (
                      <td key={index} className={styles.item}>
                        {genre[key]}
                      </td>
                    )
                )}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
})

export default Bookmarks
