import React from 'react';
// style
import styles from './styles.module.scss';

// components
import Avatar from 'components/HeaderAvatar';
import ProfileInfo from 'components/HeaderProfileInfo';

const HeaderProfile: React.FC = () => {

	
	return (
		<div className={styles.headerProfileContainer}>
			<ProfileInfo />
			<Avatar />
		</div>
	);
};

export default HeaderProfile;
