import React from 'react';
import { Menu } from 'antd';

// style
import styles from './styles.module.scss';

// utils
import { menuItems } from 'utils/menuList';

const MenuBar: React.FC = () => {
	return (
		<Menu
			className={styles.menuList}
			defaultSelectedKeys={['1']}
			defaultOpenKeys={['sub1']}
			mode='inline'
		>
			{menuItems.map((item) => (
				<Menu.Item key={item.id} className={styles.menuItem}>
					{item.name}
				</Menu.Item>
			))}
		</Menu>
	);
};

export default MenuBar;
