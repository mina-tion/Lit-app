import React from 'react';
import { observer } from 'mobx-react';
import { useStore } from 'stores';

// style
import styles from './styles.module.scss';

//components


const SiderContent: React.FC = observer(() => {

	return (
		<div className={styles.contentWrapper}>
			<h2 className={styles.title}>Popular pairs</h2>
			
		</div>
	);
});

export default SiderContent;
