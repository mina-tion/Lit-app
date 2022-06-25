import React from 'react'
import { observer } from 'mobx-react'

//components
import { headerTitles, tableData } from 'utils/genresTableData'

// style
import styles from './styles.module.scss'


const Genres: React.FC = observer(() => {
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
          {tableData.map((genre: any) => (
            <tr className={styles.row}>
              {Object.keys(genre).map((key, index): any => (
                <td key={index} className={styles.item}>
                  {genre[key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
})

export default Genres
