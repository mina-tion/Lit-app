import React from 'react'
import { observer } from 'mobx-react'
import star from 'sources/images/star.png'
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
          {tableData.map((genre: any, i) => (
            <tr className={styles.row}>
              {Object.keys(genre).map((key, index): any => (
                <td key={index} className={styles.item}>
                  {genre[key]}
                </td>
              ))}
              {console.log(i+1)}
              <div className={styles.iconContainer}>
                <img src={star} onClick={()=>{}} className={styles.icon}/>
              </div>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
})

export default Genres
