import React from 'react'
import { observer } from 'mobx-react'

//components
import { headerTitles, tableData } from 'utils/authorsTableData'

//components
// style
import styles from './styles.module.scss'

const Authors: React.FC = observer(() => {
  return (
    <div className={styles.wrapper}>
      <h2>Автори японської літератури</h2>

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
              {Object.keys(genre).map((key, index): any => {
                return (
                  <td key={index} className={styles.item}>
                    {key !== 'writings'
                      ? genre[key]
                      : genre[key].map((wr: any) => <a href={wr.url}> "{wr.title}" </a>)}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
})

export default Authors
