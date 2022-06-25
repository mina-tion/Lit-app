import React, { useEffect } from 'react'
import { observer } from 'mobx-react'
import { useStore } from 'stores'
//components

import { Pagination } from 'antd'
import { headerTitles, tableData } from 'utils/tableData'

//components
import { Layout } from 'antd'
// style
import styles from './styles.module.scss'
/* 
const { Header, Sider, Content } = Layout */

const historyObject = {}

const Genres: React.FC = observer(() => {
  const { tableStore } = useStore()

  useEffect(() => {
    tableStore.fetchTableData()
  }, [])

  const handlerChange = (page: number) => {
    tableStore.setCurrentPage(page)
  }
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
      <div className={styles.pagesWrapper}>
       {/*  <Pagination
          current={tableStore.currentPage}
          onChange={handlerChange}
          total={500}
          pageSizeOptions={[]}
        /> */}
      </div>
    </div>
  )
})

export default Genres
