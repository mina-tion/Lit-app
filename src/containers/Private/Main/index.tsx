import React, { useEffect } from 'react';
import { observer } from 'mobx-react';

//components
import { Layout } from 'antd';
import MenuBar from 'components/MenuBar';
import HeaderProfile from 'components/HeaderProfile';
import SiderContent from 'components/SiderContent';
import { useStore } from 'stores';
// style
import styles from './styles.module.scss';
import { Footer } from 'antd/lib/layout/layout';

const { Header, Sider, Content } = Layout;

const Main: React.FC = observer(() => {

	return (
		<Layout className={styles.container}>
			<Header className={styles.header}>
				<MenuBar />
				<HeaderProfile />
			</Header>
			<Layout className={styles.main}>
				<Content className={styles.content}>
					
				</Content>
				<Sider className={styles.sider}>
					<SiderContent />
				</Sider>  
			</Layout>
			<Footer>
				xg
			</Footer>
		</Layout>
	);
});

export default Main;
