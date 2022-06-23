import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { useStore } from 'stores';
//components
// style
import styles from './styles.module.scss';
import { Pagination } from 'antd';
import { headerTitles } from 'utils/tableTitles';

const Table: React.FC = observer(() => {
	const { tableStore } = useStore();

	useEffect(() => {
		tableStore.fetchTableData();
	}, []);

	const handlerChange = (page: number) => {
		tableStore.setCurrentPage(page);
	};

	return (
		<>
			<table className={styles.table}>
				<thead className={styles.header}>
					{headerTitles.map((title, index) => (
						<th key={index} className={styles.title}>
							{title}
						</th>
					))}
				</thead>
				<tbody className={styles.body}>
					{tableStore.commentsData.map((comment: any) => (
						<tr className={styles.row}>
							{Object.keys(comment).map((key, index): any => (
								<td key={index} className={styles.item}>
									{comment[key]}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
			<div className={styles.pagesWrapper}>
				<Pagination
					current={tableStore.currentPage}
					onChange={handlerChange}
					total={500}
					pageSizeOptions={[]}
				/>
			</div>
		</>
	);
});

export default Table;
