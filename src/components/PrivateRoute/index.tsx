import React from 'react'

import { Route, Redirect } from 'react-router-dom'
import { Layout } from 'antd';
import MenuBar from 'components/MenuBar';
import HeaderProfile from 'components/HeaderProfile';
import SiderContent from 'components/SiderContent';
import { Footer } from 'antd/lib/layout/layout';
import styles from './styles.module.scss';
// utils
import { isLogin } from 'utils/login'

const { Header, Sider } = Layout;
const PrivateRoute = ({ component: Component, ...rest }: any): any => {
  return (
    <Route
      {...rest}
      render={props =>
        isLogin() ? (
         <Layout className={styles.container}>
           <Header className={styles.header}>
				<MenuBar />
				<HeaderProfile />
			</Header>
            <Layout className={styles.layout}>
              <Layout.Content className={styles.content}>
                <Component {...props} />{' '}
              </Layout.Content>
			  <Sider className={styles.sider}>
					<SiderContent />
			</Sider> 
			 
            </Layout>
		</Layout>
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  )
}

export default PrivateRoute
