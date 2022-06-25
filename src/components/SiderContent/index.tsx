import React from 'react';
import { observer } from 'mobx-react';
import { useStore } from 'stores';

// style
import styles from './styles.module.scss';
import HeaderProfile from 'components/HeaderProfile';

//components


const SiderContent: React.FC = observer(() => {
	return (
		<div className={styles.contentWrapper}>
			<HeaderProfile />
		</div>
	);
});

export default SiderContent;
