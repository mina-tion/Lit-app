import React from 'react';
//import { Avatar, Menu } from 'antd';

// style
import styles from './styles.module.scss';

// images
import avatar from 'sources/images/avatar.jpg';

const Avatar: React.FC = () => {
	return (
		<div className={styles.avatarContainer}>
			<img src={avatar} alt='avatar' />
			<div className={styles.statusHolder}>
				<div className={styles.status}></div>
			</div>
		</div>
	);
};

export default Avatar;
