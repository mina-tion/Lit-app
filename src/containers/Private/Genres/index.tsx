import React, { useEffect } from 'react'
import { observer } from 'mobx-react'
import bookmarkM from 'sources/images/bookmarkMarked.png'
import bookmark from 'sources/images/bookmark.png'
//components
import { headerTitles, tableData } from 'utils/genresTableData'
import { useStore } from 'stores'
// style
import styles from './styles.module.scss'

const Genres: React.FC = observer(() => {
  const { authorizationStore } = useStore()
 
  useEffect(() => {
    authorizationStore.getBookmarks()
  }, [])  
 
  return (
    <div className={styles.wrapper}>
      <h2>Жанри японської літератури</h2>

      <table className={styles.table}>
        <thead className={styles.header}>
          {headerTitles.map((title, index) => (
            <th key={index} className={styles.title}>
              {title}
            </th>
          ))}
        </thead>
        <tbody className={styles.body}>
          {tableData.map((genre: any, i) => (
            <tr className={styles.row}>
              {Object.keys(genre).map((key, index): any => (
                <td key={index} className={styles.item}>
                  {genre[key]}
                </td>
              ))}
              <div className={styles.iconContainer}>
                <img
                  src={authorizationStore.bookmarks&&authorizationStore.bookmarks.genres.includes(i + 1) ? bookmarkM : bookmark}
                  onClick={() => authorizationStore.setBookmarks(i + 1, 'genres')}
                  className={styles.icon}
                />
              </div>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
})

export default Genres
